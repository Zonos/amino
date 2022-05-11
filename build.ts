import fs from 'fs';
import glob from 'glob';
import { createRequire } from 'module';
import { InputOptions, OutputChunk, OutputOptions, rollup } from 'rollup';
// @ts-ignore
import progress from 'rollup-plugin-progress';
// @ts-ignore
import sizes from 'rollup-plugin-sizes';
import { terser } from 'rollup-plugin-terser';
import tsPlugin from 'rollup-plugin-typescript2';
import ttypescript from 'ttypescript';

const require = createRequire(import.meta.url);
const { dependencies, peerDependencies } = require('./package.json');

type RollupOptions = InputOptions & { output?: OutputOptions };
type ConfigOptions = Omit<RollupOptions, 'input' | 'output'> &
  Required<Pick<RollupOptions, 'input' | 'output'>>;

/**
 * Prepare the list of entries
 * @param entries array of entries that need to be prepared or ignore single entry
 * @returns string{} | string
 */
const prepareEntries = (entries: string[] | string) => {
  return Array.isArray(entries)
    ? entries.reduce(
        (prev, current) => ({
          ...prev,
          [current.replace(/\.tsx?$/, '').replace('src/', '')]: current,
        }),
        {}
      )
    : entries;
};

/**
 * Bundle package
 * @param options option to configure parcel to bundle package, `input` is required. Use default option if it's not specified
 * @example
 * {
 *   input: 'src/icons/*.tsx'
 * }
 */
const bundlePackage = async (
  options: ConfigOptions & { output: OutputOptions }
): Promise<OutputChunk[]> => {
  const defaultOptions: RollupOptions = {
    plugins: [
      tsPlugin({ typescript: ttypescript }),
      terser({ numWorkers: 8 }),
      progress({ clearLine: true }),
      sizes({ details: true }),
    ],
    external: Object.keys(peerDependencies).concat(Object.keys(dependencies)),
    maxParallelFileReads: 50,
  };
  const configOptions: ConfigOptions = {
    ...defaultOptions,
    ...options,
  };

  try {
    const bundle = await rollup(configOptions);

    const { output } = await bundle.write(configOptions.output);
    return output.filter(item => item.type === 'chunk') as OutputChunk[];
  } catch (err) {
    console.error(err); // eslint-disable-line no-console
    return [];
  }
};

const generateAllModulesContent = async (bundles: OutputChunk[]) => {
  return bundles
    .map(bundle => {
      const [, subFolderPath, fileName] =
        bundle.fileName.split(/(.*\/)*(.*)\.js/g) || [];
      if (!bundle.isEntry) {
        return null;
      }
      switch (true) {
        case fileName === 'index' && !subFolderPath: {
          // Export main root file (enable VSCode to suggest auto-import to all components in main "index" file in package.json)=
          return `export * from "./index"`;
        }

        default: {
          // Import all sub modules (enable VSCode to suggest auto-import to sub module path)
          return `import "./${subFolderPath || ''}${fileName}";`;
        }
      }
    })
    .filter(item => item)
    .concat(['\n']);
};

const componentsConfig: ConfigOptions = {
  input: prepareEntries(glob.sync('src/index.ts')),
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: false,
  },
};
const flagConfig: ConfigOptions = {
  input: prepareEntries(glob.sync('src/icons/flags/*.tsx')),
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: false,
  },
  maxParallelFileReads: 40,
};
const flagIconConfig: ConfigOptions = {
  input: prepareEntries(glob.sync('src/icons/FlagIcon/index.ts')),
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: false,
  },
  maxParallelFileReads: 40,
};
const dynamicIconConfig: ConfigOptions = {
  input: prepareEntries(glob.sync('src/icons/DynamicIcon/index.ts')),
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: false,
  },
  maxParallelFileReads: 40,
};
const iconConfig: ConfigOptions = {
  input: prepareEntries(glob.sync('src/icons/*.tsx')),
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: false,
  },
  maxParallelFileReads: 40,
};
const fileUploadConfig: ConfigOptions = {
  input: prepareEntries(glob.sync('src/components/FileUpload/index.ts')),
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: false,
  },
};
const radixConfig: ConfigOptions = {
  input: prepareEntries(glob.sync('src/components/radix/index.ts')),
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: false,
  },
};
const selectConfig: ConfigOptions = {
  input: prepareEntries(glob.sync('src/components/Select/index.ts')),
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: false,
  },
};
const configs: ConfigOptions[] = [
  componentsConfig,
  dynamicIconConfig,
  fileUploadConfig,
  flagConfig,
  flagIconConfig,
  iconConfig,
  radixConfig,
  selectConfig,
];

/* Set max listener based on the size of bundleConfig (1 config will add 4 event listeners) */
process.stdout.setMaxListeners(configs.length * 4 + 1);
process.stderr.setMaxListeners(configs.length * 4 + 1);

const build = async () => {
  const bundledPackages = await Promise.all(configs.map(bundlePackage));

  const moduleContents = await Promise.all(
    // generate module contents
    bundledPackages.map(generateAllModulesContent)
  );

  fs.writeFileSync(
    // generate all modules ts file
    `./src/all.ts`,
    [
      '/* eslint-disable */',
      moduleContents.flatMap(item => item).join('\n'),
    ].join('\n')
  );
};

build();

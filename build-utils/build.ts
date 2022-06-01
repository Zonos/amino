import buble from '@rollup/plugin-buble';
import fs from 'fs';
import { glob } from 'glob';
import { InputOptions, OutputChunk, OutputOptions, rollup } from 'rollup';
import progress from 'rollup-plugin-progress';
import { terser } from 'rollup-plugin-terser';
import tsPlugin from 'rollup-plugin-typescript2';
import ttypescript from 'ttypescript';

import { dependencies, peerDependencies } from '../package.json';
import sizes from './plugins/customized-rollup-plugin-sizes';

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
      tsPlugin({
        typescript: ttypescript,
        tsconfigOverride: {
          compilerOptions: {
            module: 'esnext',
          },
        },
      }),
      buble({
        exclude: 'node_modules/**',
        include: '**/*.{js,mjs,jsx,ts,tsx,vue}',
        transforms: {
          modules: false,
          dangerousForOf: true,
          dangerousTaggedTemplateString: true,
        },
      }),
      terser({ numWorkers: 10 }),
      progress({ clearLine: true }),
      sizes({ details: true }),
    ],
    cache: false,
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
      // exclude all bundles that are not entry or just private components
      if (!bundle.isEntry || /^_+/.test(fileName)) {
        return null;
      }
      return `import "./${subFolderPath || ''}${fileName}";`;
    })
    .filter(item => item)
    .concat(['\n']);
};

const animationsModules = glob.sync('src/animations/**/*.ts*') as string[];
const iconsModules = glob.sync('src/icons/**/*.ts*') as string[];
const utilsModules = glob.sync('src/utils/**/*.ts*') as string[];
const componentsModules = glob.sync('src/components/**/*.ts*') as string[];

const allModules = animationsModules.concat(
  iconsModules,
  utilsModules,
  componentsModules
);

const configs: ConfigOptions[] = [
  {
    input: prepareEntries(allModules),
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: false,
      exports: 'auto',
    },
    maxParallelFileReads: 200,
  },
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

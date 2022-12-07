import buble from '@rollup/plugin-buble';
import terser from '@rollup/plugin-terser';
import fs from 'fs';
import { glob } from 'glob';
import { InputOptions, OutputChunk, OutputOptions, rollup } from 'rollup';
import image from 'rollup-plugin-img';
import progress from 'rollup-plugin-progress';
import tsPlugin from 'rollup-plugin-typescript2';

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
const prepareEntries = (entries: string[] | string) =>
  Array.isArray(entries)
    ? entries.reduce(
        (prev, current) => ({
          ...prev,
          [current.replace(/\.tsx?$/, '').replace('src/', '')]: current,
        }),
        {}
      )
    : entries;

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
      image({
        limit: 10000,
      }),
      tsPlugin({
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
      terser(),
      progress({ clearLine: true }),
      sizes({ details: true }),
    ],
    cache: false,
    external: Object.keys(peerDependencies).concat(Object.keys(dependencies)),
    maxParallelFileOps: 50,
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
    console.error('Error bundling:', err); // eslint-disable-line no-console
    return [];
  }
};

const generateAllModulesContent = async (bundles: OutputChunk[]) =>
  bundles
    .map(bundle => {
      const [, subFolderPath, fileName] =
        bundle.fileName.split(/(.*\/)*(.*)\.js/g) || [];
      // exclude all bundles that are not entry or just private components
      if (
        !bundle.isEntry ||
        /^_+/.test(fileName) ||
        /__tests__/.test(subFolderPath)
      ) {
        return null;
      }
      return `import './${subFolderPath || ''}${fileName}';`;
    })
    .filter(item => item);

const animationsModules = glob.sync('src/animations/**/*.ts*');
const iconsModules = glob.sync('src/icons/**/*.ts*');
const utilsModules = glob.sync('src/utils/**/*.ts*');
const componentsModules = glob.sync('src/components/**/*.ts*');
const styleModules = glob.sync('src/styles/**/*.ts');

const allModules = animationsModules
  .concat(iconsModules, utilsModules, componentsModules, styleModules)
  /** Exclude all paths __tests__ folder */
  .filter(
    item =>
      !item.includes('__tests__') &&
      !item.includes('.stories.') &&
      !item.includes('__stories__')
  );

const configs: ConfigOptions[] = [
  {
    input: prepareEntries(allModules),
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: false,
      exports: 'auto',
      interop: 'auto',
    },
    maxParallelFileOps: 200,
    // Peer deps
    external: ['react', 'react/jsx-runtime', 'react-dom', 'styled-components'],
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
    `${moduleContents.flatMap(item => item).join('\n')}\n`
  );
};

build();

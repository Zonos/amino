import { Parcel } from '@parcel/core';
import { type InitialParcelOptions } from '@parcel/types';
import { fileURLToPath } from 'url';
/**
 * Bundle package
 * @param options option to configure parcel to bundle package, `entries` is required. Use default option if it's not specified
 * @example
 * {
 *   entries: 'src/icons/*.tsx'
 * }
 */
const bundlePackage = async (options: InitialParcelOptions) => {
  const defaultOptions: InitialParcelOptions = {
    defaultTargetOptions: {
      isLibrary: true,
      sourceMaps: false,
    },
    additionalReporters: [
      {
        packageName: '@parcel/reporter-cli',
        resolveFrom: fileURLToPath(import.meta.url),
      },
    ],
    defaultConfig: '@parcel/config-default',
    mode: 'production',
  };
  const configOptions = {
    ...defaultOptions,
    ...options,
  };
  if (!options.entries) {
    throw new Error(`Option "entries" is required to bundle!`);
  }
  const bundler = new Parcel(configOptions);

  try {
    const { bundleGraph } = await bundler.run();

    bundleGraph.getBundles();
  } catch (err) {
    // @ts-ignore
    console.error(err.diagnostics);
  }
};

const bundleConfigs: InitialParcelOptions[] = [
  {
    entries: 'src/icons/*.tsx',
    targets: {
      default: {
        distDir: 'dist/icons',
        includeNodeModules: false,
      },
    },
  },
  {
    entries: 'src/i18n.ts',
  },
  {
    entries: 'src/index.ts',
  },
  {
    entries: 'src/components/*/*.tsx',
    targets: {
      default: {
        distDir: 'dist/components',
        includeNodeModules: false,
      },
    },
  },
];

/* Set max listener based on the size of bundleConfig (1 config will add 4 event listeners) */
process.stdout.setMaxListeners(bundleConfigs.length * 4 + 1);
process.stderr.setMaxListeners(bundleConfigs.length * 4 + 1);

const builds = bundleConfigs.map(options => bundlePackage(options));
Promise.all(builds);

// const i18nBundler = new Parcel({
//   entries: [
//     'src/icons/*.tsx',
//     'src/i18n.ts',
//     'src/index.ts',
//     'src/components/*/index.ts',
//   ],
//   defaultTargetOptions: {
//     isLibrary: true,
//     sourceMaps: false,
//   },
//   additionalReporters: [
//     {
//       packageName: '@parcel/reporter-cli',
//       resolveFrom: fileURLToPath(import.meta.url)
//     }
//   ],
//   defaultConfig: '@parcel/config-default',
//   mode: 'production',
// });
// try {
//   const { bundleGraph: i18nGraph, buildTime: i18nBuildTime } =
//     await i18nBundler.run();
//   const i18nBundles = i18nGraph.getBundles();
//   console.log(
//     `✨ Built i18nBundles: ${i18nBundles.length} bundles in ${i18nBuildTime}ms!`
//   );
// } catch (err) {
//   console.log(err.diagnostics);
// }

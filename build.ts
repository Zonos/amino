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
  const defaultOptions = {
    defaultTargetOptions: {
      isLibrary: true,
      sourceMaps: false,
    },
    additionalReporters: [
      {
        packageName: '@parcel/reporter-cli',
        resolveFrom: fileURLToPath(import.meta.url)
      }
    ],
    defaultConfig: '@parcel/config-default',
    mode: 'production',
  };
  const configOptions = {
    ...defaultOptions,
    ...options
  };
  if (!options['entries']) {
    throw new Error(`Option "entries" is required to bundle!`);
  }

  const bundler = new Parcel(configOptions);
  
  try {
    const { bundleGraph: i18nGraph, buildTime: i18nBuildTime } =
      await bundler.run();
    const i18nBundles = i18nGraph.getBundles();
    console.log(
      `✨ Built i18nBundles: ${i18nBundles.length} bundles in ${i18nBuildTime}ms!`
    );
  } catch (err) {
    // @ts-ignore
    console.log(err.diagnostics);
  }
}

const bundleConfgis: InitialParcelOptions[] = [
  {
    entries: 'src/icons/*.tsx',
  },
  {
    entries: 'src/i18n.ts',
  },
  {
    entries: 'src/index.ts',
  },
  {
    entries: 'src/components/*/*.tsx',
  },
];

Promise.all(bundleConfgis.map(config => new Promise(async (resolve) => {
  await bundlePackage(config);
  resolve(1);
}))).catch((err) => {
  console.log(err)
})

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

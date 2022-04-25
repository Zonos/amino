import { Parcel } from '@parcel/core';

// const bundler = new Parcel({
//   entries: 'src/index.ts',
//   defaultConfig: '@parcel/config-default',
//   mode: 'production',
// });
const i18nBundler = new Parcel({
  // entries: [
  //   'src/icons/index.ts',
  //   'src/i18n/index.ts',
  //   'src/components/Select/index.ts',
  //   'src/setupPackage.ts',
  // ],
  defaultConfig: '@parcel/config-default',
  defaultTargetOptions: {
    isLibrary: true,
  },
  targets: {
    icons: {
      distDir: 'dist/icons',
      source: 'src/icons/index.ts',
    },
    i18n: {
      distDir: 'dist/i18n',
      source: 'src/i18n/index.ts',
      includeNodeModules: ['uuid'],
    },
    select: {
      distDir: 'dist/components/Select',
      source: 'src/components/Select/index.ts',
      includeNodeModules: ['react-select'],
    },
    setupPackage: {
      distDir: './dist',
      source: 'src/setupPackage.ts',
    },
  },
  mode: 'production',
});

try {
  // const { bundleGraph, buildTime } = await bundler.run();
  // const bundles = bundleGraph.getBundles();
  const { bundleGraph: i18nGraph } = await i18nBundler.run();
  const i18nBundles = i18nGraph.getBundles();
  console.log(`✨ Built ${bundles.length} bundles in ${buildTime}ms!`);
} catch (err) {
  console.log(err.diagnostics);
}

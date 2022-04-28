import { Parcel } from '@parcel/core';
import { type InitialParcelOptions } from '@parcel/types';
import { fileURLToPath } from 'url';

type ConfigOptions = Omit<InitialParcelOptions, 'entries'> &
  Required<Pick<InitialParcelOptions, 'entries'>>;
/**
 * Bundle package
 * @param options option to configure parcel to bundle package, `entries` is required. Use default option if it's not specified
 * @example
 * {
 *   entries: 'src/icons/*.tsx'
 * }
 */
const bundlePackage = async (options: ConfigOptions) => {
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
  const configOptions: ConfigOptions = {
    ...defaultOptions,
    ...options,
  };
  const bundler = new Parcel(configOptions);

  try {
    const { bundleGraph } = await bundler.run();

    bundleGraph.getBundles();
  } catch (err) {
    // @ts-ignore
    console.error(err.diagnostics); // eslint-disable-line no-console
  }
};

const componentsConfig: ConfigOptions = {
  detailedReport: { assetsPerBundle: 20 },
  entries: 'src/index.ts',
  targets: {
    default: {
      distDir: 'dist',
      includeNodeModules: false,
    },
  },
};
const flagConfig: ConfigOptions = {
  entries: 'src/icons/flags/*.tsx',
  targets: {
    default: {
      distDir: 'dist/icons/flags',
      includeNodeModules: ['uuid'],
    },
  },
};
const flagIconConfig: ConfigOptions = {
  detailedReport: { assetsPerBundle: 10 },
  entries: 'src/icons/FlagIcon/index.ts',
  targets: {
    default: {
      distDir: 'dist/icons/FlagIcon',
      includeNodeModules: ['uuid'],
    },
  },
};
const dynamicIconConfig: ConfigOptions = {
  detailedReport: { assetsPerBundle: 10 },
  entries: 'src/icons/DynamicIcon/index.ts',
  targets: {
    default: {
      distDir: 'dist/icons/DynamicIcon',
      includeNodeModules: false,
    },
  },
};
const iconConfig: ConfigOptions = {
  entries: 'src/icons/*.tsx',
  targets: {
    default: {
      distDir: 'dist/icons',
      includeNodeModules: false,
    },
  },
};
const fileUploadConfig: ConfigOptions = {
  detailedReport: { assetsPerBundle: 20 },
  entries: 'src/components/FileUpload/index.ts',
  targets: {
    default: {
      distDir: 'dist/components/FileUpload',
      includeNodeModules: ['react-dropzone'],
    },
  },
};
const radixConfig: ConfigOptions = {
  detailedReport: { assetsPerBundle: 20 },
  entries: 'src/components/radix/index.ts',
  targets: {
    default: {
      distDir: 'dist/components/radix',
      includeNodeModules: [
        '@radix-ui/react-slider',
        '@radix-ui/react-radio-group',
        '@radix-ui/react-checkbox',
        '@swc/helpers',
      ],
    },
  },
};
const selectConfig: ConfigOptions = {
  detailedReport: { assetsPerBundle: 40 },
  entries: 'src/components/Select/index.ts',
  targets: {
    default: {
      distDir: 'dist/components/Select',
      includeNodeModules: ['react-select'],
    },
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

configs.map(bundlePackage);

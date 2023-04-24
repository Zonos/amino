import type { StorybookConfig, StoriesEntry } from '@storybook/core-common';
import { glob } from 'glob';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { buildStories } from './buildStories';

const findStories = (): StoriesEntry[] => {
  const stories = glob.sync('../src/**/__stories__/*.stories.tsx', {
    cwd: __dirname,
  });

  return buildStories(stories);
};

const config: StorybookConfig = {
  stories: findStories(),
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-storyshots',
    '@storybook/addon-storyshots-puppeteer',
    'storybook-addon-designs',
  ],
  webpackFinal: async config => {
    config.resolve?.plugins?.push(new TsconfigPathsPlugin({}));
    config.module?.rules.push({
      test: /\.js$/,
      exclude: /node_modules[/\\](?!react-data-grid[/\\]lib)/,
      loader: 'babel-loader',
      options: {
        presets: [
          [
            require.resolve('babel-preset-react-app'),
            {
              runtime: 'automatic',
            },
          ],
          ['@babel/preset-typescript', { allowNamespaces: true }],
        ],
      },
    });
    return config;
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  features: {
    postcss: false,
  },
  staticDirs: ['../public'],
};

module.exports = config;

import type { StorybookConfig } from '@storybook/core-common';
import { glob } from 'glob';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

function findStories(): string[] {
  const stories = glob.sync('../src/{components,stories}/**/*.stories.tsx', {
    cwd: __dirname,
  });

  return stories;
}

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

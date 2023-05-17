import type { StorybookConfig } from '@storybook/react-webpack5';
import { glob } from 'glob';
import path from 'path';
import { buildStories } from './buildStories';

const findStories = () => {
  const stories = glob.sync('../src/**/__stories__/*.stories.tsx', {
    cwd: __dirname,
  });
  return buildStories(stories);
};
const config: StorybookConfig = {
  stories: findStories(),
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-storyshots',
    '@storybook/addon-storyshots-puppeteer',
    'storybook-addon-designs',
  ],
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  webpackFinal: async config => {
    return {
      ...config,

      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          src: path.resolve(__dirname, '../src'),
        },
      },
    };
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: true,
  },
};
module.exports = config;

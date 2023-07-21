import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { getStories } from './buildStories';

const config: StorybookConfig = {
  stories: getStories(),
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
  },
  webpackFinal: async config => {
    return {
      ...config,

      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          src: path.resolve(__dirname, '../src'),
          svgReact: path.resolve(__dirname, '../svgReact'),
          'story-utils': path.resolve(__dirname, './utils'),
          // to test the bundled version in stories
          dist: path.resolve(__dirname, '../dist'),
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

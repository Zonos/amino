import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

import { getStories } from './buildStories';

const storybookConfig: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-storyshots',
    '@storybook/addon-storyshots-puppeteer',
    '@storybook/addon-designs',
    '@storybook/addon-styling-webpack',
  ],
  docs: {
    autodocs: true,
  },
  framework: {
    // NextJS uses webpack internally, so we want to match that environment as close as possible
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: ['./public', '../public'],
  stories: getStories(),
  typescript: {
    check: false,
  },
  webpackFinal: config => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '.storybook': path.resolve(__dirname, '.'),
        // to test the bundled version in stories
        dist: path.resolve(__dirname, '../dist'),
        src: path.resolve(__dirname, '../src'),
        'story-utils': path.resolve(__dirname, './utils'),
        svgReact: path.resolve(__dirname, '../svgReact'),
      },
    },
  }),
};
export default storybookConfig;

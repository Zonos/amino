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
    'storybook-addon-designs',
  ],
  docs: {
    autodocs: true,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  managerHead: head => `
  <link rel="icon" type="image/png" href="https://zonos-docs.s3.us-east-1.amazonaws.com/amino-logo.png" sizes="192x192">
  ${head}
`,
  staticDirs: ['../public'],
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

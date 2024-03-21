import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

import { getStories } from './buildStories';

const storybookConfig: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  docs: {
    autodocs: true,
  },
  framework: '@storybook/react-vite',
  staticDirs: ['./public', '../public'],
  stories: getStories(),
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  typescript: {
    check: false,
  },
  viteFinal: config => ({
    ...config,
    css: {
      ...config.css,
      // includes paths for scss imports so we just need to import the file name. Ex: @use 'theme';
      preprocessorOptions: {
        includePaths: [`${process.cwd()}/src/styles`],
        loadPaths: [`${process.cwd()}/src/styles`],
        scss: {
          additionalData: `@use 'theme' as *;`,
          includePaths: [path.resolve(__dirname, '../src/styles')],
        },
      },
    },
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

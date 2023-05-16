import type { StorybookConfig } from '@storybook/react-vite';
import { glob } from 'glob';
import { buildStories } from './buildStories';
import path from 'path';
const findStories = () => {
  const stories = glob.sync('../src/**/__stories__/*.stories.tsx', {
    cwd: __dirname,
  });
  return buildStories(stories);
};
const config: StorybookConfig = {
  // stories: findStories(),
  stories: ['../src/**/__stories__/*.stories.tsx'],
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
  features: {},
  viteFinal: async config => {
    return {
      ...config,
      resolve: {
        alias: {
          src: path.resolve(__dirname, '../src'),
        },
      },
      define: {
        'process.env': {},
      },
    };
  },
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    // TEMP:
    autodocs: false,
  },
};
module.exports = config;

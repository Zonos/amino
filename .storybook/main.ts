import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

import { getStories } from './buildStories';

const storybookConfig: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
    '@storybook/addon-styling-webpack',
    // addons to configure to use scss modules in storybook
    {
      name: '@storybook/addon-styling-webpack',

      options: {
        rules: [
          {
            sideEffects: true,
            test: /\.css|scss$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: 'Amino_[name]__[local]--[hash:base64:5]',
                  },
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sassOptions: {
                    // includes paths for scss imports so we just need to import the file name. Ex: @use 'theme';
                    includePaths: [`${process.cwd()}/src/styles`],
                  },
                },
              },
            ],
          },
        ],
      },
    },
  ],
  docs: {
    autodocs: true,
  },
  framework: {
    // NextJS uses webpack internally, so we want to match that environment as close as possible
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
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

import type { StorybookConfig } from '@storybook/react-webpack5';
import tailwindCssPostcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';
import path from 'path';

import { getStories } from './buildStories';

const storybookConfig: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
    'storybook-addon-tag-badges',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling-webpack',

      options: {
        rules: [
          // CSS files processed through PostCSS (includes Tailwind)
          {
            sideEffects: true,
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [tailwindCssPostcss, autoprefixer],
                  },
                },
              },
            ],
          },
        ],
      },
    },
    '@storybook/addon-webpack5-compiler-swc',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
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
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
      shouldExtractLiteralValuesFromEnum: true,
    },
  },
  webpackFinal: config => ({
    ...config,
    infrastructureLogging: {
      level: 'warn',
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

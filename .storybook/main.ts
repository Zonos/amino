import type { StorybookConfig } from '@storybook/core-common';
import { fstat, readFileSync } from 'fs';
import { glob } from 'glob';
import { basename, resolve } from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

function findStories(): string[] {
  const stories = glob.sync('../src/**/__stories__/*.stories.tsx', {
    cwd: __dirname,
  });

  // Will order stories alphabetically by file name. If a title is specified it will take priority over the file name.
  const alphabetical = stories.sort((a: string, b: string) => {
    const storyNameA = getTitle(resolve(__dirname, a)) || a;
    const storyNameB = getTitle(resolve(__dirname, b)) || b;

    return basename(storyNameA).localeCompare(basename(storyNameB));
  });

  return alphabetical;
}

// Read the specified title from a story meta.
function getTitle(path: string): string | null {
  const contents = readFileSync(path, { encoding: 'utf-8' });
  const match = contents.match(/const \w+: Meta = {.+\stitle: '(.+?)',/s);
  const title = match?.[1];
  return title || null;
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

import type { StorybookConfig } from '@storybook/react-vite';

import { getStories } from './buildStories';

const storybookConfig: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
    'storybook-addon-tag-badges',
  ],
  core: {},
  docs: {},
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['./public', '../public'],
  stories: getStories(),
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
  },
  viteFinal: config => ({
    ...config,
    server: {
      ...config.server,
      hmr: {
        ...(typeof config.server?.hmr === 'object' ? config.server?.hmr : {}),
        // Caddy reverse proxy supports websockets
        clientPort: 443,
      },
    },
  }),
};
export default storybookConfig;

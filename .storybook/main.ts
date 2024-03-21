import type { StorybookConfig } from '@storybook/react-vite';

import { getStories } from './buildStories';

const storybookConfig: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
  ],
  core: {},
  docs: {
    autodocs: true,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['./public', '../public'],
  stories: getStories(),
  typescript: {
    check: false,
  },
  viteFinal: config => ({
    ...config,
    server: {
      ...config.server,
      hmr: {
        clientPort: 6007,
        port: 6007,
        // protocol: 'ws',
      },
    },
  }),
};
export default storybookConfig;

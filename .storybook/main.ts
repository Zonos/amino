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
      // For some reason, our local-ssl-proxy confuses vite, and it tries to go to port 6006 (passed from storybook), so correct it here
      hmr: {
        port: 6007,
      },
    },
  }),
};
export default storybookConfig;

import type { StorybookConfig } from '@storybook/react-vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// @ts-expect-error - buildStories.ts is a TypeScript file and storybook wants the file extension to be .ts
import { getStories } from './buildStories.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storybookConfig: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
    '@storybook/addon-onboarding',
    '@storybook/addon-vitest',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: getStories(),
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
      shouldExtractLiteralValuesFromEnum: true,
    },
  },
  viteFinal: async (config, { configType }) => {
    // Mutate server config directly to ensure allowedHosts is set
    // See: https://github.com/storybookjs/storybook/issues/30338
    // Note: Also using __VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS env var in package.json
    config.server ??= {};
    config.server.host = true;
    config.server.allowedHosts = [
      'dev.amino.zonos.com',
      '.zonos.com',
      'localhost',
    ];

    // Configure HMR to go through Caddy proxy (HTTPS on default port 443)
    if (configType === 'DEVELOPMENT') {
      config.server.hmr = {
        clientPort: 443, // Use HTTPS port (Caddy proxy)
        host: 'dev.amino.zonos.com',
        protocol: 'wss',
      };
    }

    // Allow serving files from project directories
    config.server.fs ??= {};
    config.server.fs.strict = false; // Disable strict mode to allow all project files
    config.server.fs.allow = [
      path.resolve(__dirname, '..'), // Project root
    ];

    // Set origin for proper URL resolution behind Caddy proxy
    if (configType === 'DEVELOPMENT') {
      config.server.origin = 'https://dev.amino.zonos.com';
    }

    // Configure Sass to include paths for theme imports
    // Using 'modern' API with loadPaths (replaces includePaths in modern Sass)
    const scssLoadPaths = [path.resolve(__dirname, '../src/styles')];
    config.css ??= {};
    config.css.preprocessorOptions ??= {};
    config.css.preprocessorOptions.scss = {
      api: 'modern',
      includePaths: scssLoadPaths,
      loadPaths: scssLoadPaths,
    } as typeof config.css.preprocessorOptions.scss;

    // Configure Vite aliases
    config.resolve ??= {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '.storybook': path.resolve(__dirname, '.'),
      dist: path.resolve(__dirname, '../dist'),
      src: path.resolve(__dirname, '../src'),
      'story-utils': path.resolve(__dirname, './utils'),
      svgReact: path.resolve(__dirname, '../svgReact'),
    };

    // Add React plugin with automatic JSX runtime (no need to import React)
    // Type cast needed due to Vite version mismatch between @vitejs/plugin-react and Storybook
    config.plugins ??= [];
    config.plugins.push(
      ...(react({
        jsxRuntime: 'automatic',
      }) as unknown as typeof config.plugins),
    );

    return config;
  },  
};
export default storybookConfig;

import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

process.env.TZ = 'America/Denver';

export default defineConfig({
  css: {
    preprocessorOptions: {
      includePaths: [path.resolve(__dirname, './src/styles')],
      loadPaths: [path.resolve(__dirname, './src/styles')],
      scss: {
        additionalData: `@use 'theme' as *;`,
        includePaths: [path.resolve(__dirname, './src/styles')],
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '.storybook': path.resolve(__dirname, './.storybook'),
      'build-utils': path.resolve(__dirname, './build-utils'),
      // to test the bundled version in stories
      dist: path.resolve(__dirname, './dist'),
      src: path.resolve(__dirname, './src'),
      'story-utils': path.resolve(__dirname, './.storybook/utils'),
      svgReact: path.resolve(__dirname, './svgReact'),
      'test-utils': path.resolve(__dirname, './test-utils'),
    },
  },
  test: {
    environment: 'jsdom',
    exclude: ['**/node_modules/**', '**/dist'],
    globals: true,
    include: ['**/*.test.ts'],
    setupFiles: ['dotenv/config', 'test-utils/setup.ts'],
    snapshotFormat: {
      escapeString: false,
    },
  },
});

import path from 'path';
import { defineConfig } from 'vitest/config';

process.env.TZ = 'America/Denver';

export default defineConfig({
  resolve: {
    alias: {
      '.storybook': path.resolve(__dirname, './.storybook'),
      // Add app directory alias for Next.js App Router compatibility
      app: path.resolve(__dirname, './app'),
      'build-utils': path.resolve(__dirname, './build-utils'),
      // to test the bundled version in stories
      dist: path.resolve(__dirname, './dist'),
      pages: path.resolve(__dirname, './pages'),
      src: path.resolve(__dirname, './src'),
      'story-utils': path.resolve(__dirname, './.storybook/utils'),
      svgReact: path.resolve(__dirname, './svgReact'),
      'test-utils': path.resolve(__dirname, './test-utils'),
    },
  },
  test: {
    environment: 'jsdom',
    exclude: [
      '**/node_modules/**',
      '**/__stories__/storyshots',
      '**/storyshots.test.ts',
      '**/dist',
    ],
    globals: true,
    include: ['**/*.test.ts'],
    setupFiles: ['dotenv/config', 'test-utils/setup.ts'],
    snapshotFormat: {
      escapeString: false,
    },
  },
});

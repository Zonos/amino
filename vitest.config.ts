import path from 'path';
import { defineConfig } from 'vitest/config';

process.env.TZ = 'America/Denver';

export default defineConfig({
  // tsconfig sets `jsx: 'preserve'` for the rollup build, which leaves esbuild
  // emitting classic `React.createElement` calls with no React in scope. Without
  // this, any test that renders a component dies on `React is not defined`.
  esbuild: { jsx: 'automatic' },
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

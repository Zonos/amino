import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

process.env.TZ = 'America/Denver';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '.storybook': path.resolve(__dirname, './.storybook'),
      'build-utils': path.resolve(__dirname, './build-utils'),
      src: path.resolve(__dirname, './src'),
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

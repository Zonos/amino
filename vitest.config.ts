import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

process.env.TZ = 'America/Denver';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      'test-utils': path.resolve(__dirname, './test-utils'),
    },
  },
  test: {
    exclude: [
      '**/node_modules/**',
      '**/__stories__/storyshots',
      '**/storyshots.test.ts',
      '**/dist',
    ],
    include: ['**/*.test.ts'],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['dotenv/config', 'test-utils/setup.ts'],
    snapshotFormat: {
      escapeString: false,
    },
  },
});

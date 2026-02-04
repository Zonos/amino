import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import path from 'path';
import { defineConfig } from 'vitest/config';

process.env.TZ = 'America/Denver';

// @ts-expect-error - Vitest config is async (the only way it will work with storybookTest)
export default defineConfig(async () => ({
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
    // Test projects for Vitest 4.0+
    projects: [
      {
        // Default project for regular unit tests
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
          name: 'unit',
          setupFiles: ['dotenv/config', 'test-utils/setup.ts'],
          snapshotFormat: {
            escapeString: false,
          },
        },
      },
      {
        // Storybook project for component tests
        plugins: [
          await storybookTest({
            configDir: path.join(__dirname, '.storybook'),
          }),
        ],
        test: {
          browser: {
            enabled: true,
            headless: true,
            instances: [{ browser: 'chromium' }],
            provider: playwright({ launchOptions: { headless: true } }),
          },
          name: 'storybook',
          setupFiles: ['./.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
}));

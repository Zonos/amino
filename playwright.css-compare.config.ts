import { defineConfig } from '@playwright/test';
import baseConfig from './playwright.config';

/**
 * Separate Playwright config for CSS comparison tests.
 *
 * Uses a dedicated outputDir so that CSS comparison artifacts
 * don't interfere with visual regression screenshots (and vice versa).
 */
export default defineConfig({
  ...baseConfig,
  outputDir: 'playwright-test-results/css-compare-artifacts',
  testMatch: 'css-comparison.spec.ts',
});

import { defineConfig } from '@playwright/test';

import base from './playwright.config';

/**
 * Behaviour specs for stories, run by hand with `pnpm test:e2e:local`.
 *
 * Starts no server: Storybook must already be running at the base config's
 * baseURL. CI doesn't run these.
 */
export default defineConfig({
  ...base,
  projects: (base.projects ?? []).filter(p => p.name === 'chromium'),
  testDir: './__local_e2e__',
  testMatch: '**/*.spec.ts',
  webServer: undefined,
});

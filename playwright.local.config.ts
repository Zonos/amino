import { defineConfig } from '@playwright/test';

import base from './playwright.config';

export default defineConfig({
  ...base,
  projects: (base.projects ?? []).filter(p => p.name === 'chromium'),
  testDir: './__local_e2e__',
  webServer: undefined,
});

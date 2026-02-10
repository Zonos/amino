/**
 * Visual regression gate test.
 *
 * Compares golden screenshots (captured from production) against the
 * local Storybook, using Playwright's built-in `toHaveScreenshot()`.
 *
 * Usage:
 *   1. Capture baselines:  pnpm test:visual:baseline
 *   2. Compare locally:    pnpm test:visual
 *
 * Failed diffs are written to playwright-test-results/.
 */
import { expect, test } from '@playwright/test';
import { fetchStoryIds } from 'test-utils/storybook-helpers';

const baseURL = process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:6006';

// Kick off the story-id fetch immediately (runs once, cached by promise).
const storyIdsPromise = fetchStoryIds(baseURL);

test('visual regression — all stories match production baselines', async ({
  page,
}) => {
  // This test iterates all stories sequentially — needs extra time.
  test.setTimeout(600_000);

  const storyIds = await storyIdsPromise;
  const failures: string[] = [];

  for (const storyId of storyIds) {
    const url = `${baseURL}/iframe.html?id=${storyId}&viewMode=story`;

    await page.goto(url, { waitUntil: 'load' });
    await page.waitForSelector('#storybook-root', { timeout: 5_000 });
    // Brief settle time for CSS transitions / lazy-loaded assets.
    await page.waitForTimeout(300);

    try {
      await expect(page).toHaveScreenshot(`${storyId}.png`, {
        fullPage: true,
      });
    } catch {
      failures.push(storyId);
    }
  }

  if (failures.length > 0) {
    throw new Error(
      `${failures.length} / ${storyIds.length} stories differ:\n` +
        failures.map(id => `  - ${id}`).join('\n'),
    );
  }
});

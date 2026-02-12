/**
 * Visual regression gate test.
 *
 * Compares golden screenshots (captured from production) against the
 * local Storybook, using Playwright's built-in `toHaveScreenshot()`.
 *
 * Usage:
 *   1. Capture baselines:  pnpm test:visual:baseline
 *   2. Compare locally:    pnpm test:visual
 *   3. Single story:       STORY_ID=amino-button--default-outline pnpm test:visual
 *      (also accepts glob: STORY_ID=amino-button--* pnpm test:visual)
 *
 * Failed diffs are written to playwright-test-results/.
 */
import { expect, test } from '@playwright/test';
import { fetchStoryIds } from 'test-utils/storybook-helpers';

const baseURL = process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:6006';

/** Optional story filter — exact id or glob with trailing `*`. */
const STORY_FILTER = process.env.STORY_ID;

function matchesFilter(storyId: string): boolean {
  if (!STORY_FILTER) return true;
  if (STORY_FILTER.endsWith('*')) {
    return storyId.startsWith(STORY_FILTER.slice(0, -1));
  }
  return storyId === STORY_FILTER;
}

// Kick off the story-id fetch immediately (runs once, cached by promise).
const storyIdsPromise = fetchStoryIds(baseURL);

test('visual regression — all stories match production baselines', async ({
  page,
}) => {
  // This test iterates all stories sequentially — needs extra time.
  test.setTimeout(600_000);

  let storyIds = await storyIdsPromise;
  if (STORY_FILTER) {
    storyIds = storyIds.filter(matchesFilter);
    // eslint-disable-next-line no-console
    console.log(
      `STORY_ID filter: comparing ${storyIds.length} matching stories`,
    );
  }
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

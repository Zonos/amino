/**
 * CSS property diff diagnostic.
 *
 * Opens **two** browser contexts (production + local), navigates each to
 * every story, captures the DOM-tree with computed styles, then diffs them.
 *
 * Output is written to css-compare-results/:
 *   - {storyId}.diff.txt        — human-readable diff
 *   - {storyId}.prod.json       — prod snapshot
 *   - {storyId}.local.json      — local snapshot
 *   - {storyId}.categories.json — diffs grouped by category
 *   - summary.json              — aggregate statistics
 *
 * This test is diagnostic — it always passes. Use the output files to
 * decide which components need attention.
 *
 * Usage:
 *   pnpm test:css-compare
 *   STORY_ID=amino-button--default-outline pnpm test:css-compare
 *   STORY_ID=amino-button--* pnpm test:css-compare
 */
import { chromium, test } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import type {
  NodeSnapshot,
  StoryComparison,
} from 'test-utils/storybook-helpers';
import {
  captureTreeBrowser,
  categorizeProperty,
  CSS_DEFAULT_VALUES,
  CSS_PROPERTIES,
  diffSnapshots,
  extractComponentName,
  fetchStoryIds,
  filterNoiseDiffs,
  formatDiffReport,
  PROD_URL,
  SKIP_STORIES,
} from 'test-utils/storybook-helpers';

const LOCAL_URL =
  process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:6006';
const OUTPUT_DIR = 'css-compare-results';

/** Optional story filter — exact id or glob with trailing `*`. */
const STORY_FILTER = process.env.STORY_ID;

function matchesFilter(storyId: string): boolean {
  if (!STORY_FILTER) return true;
  if (STORY_FILTER.endsWith('*')) {
    return storyId.startsWith(STORY_FILTER.slice(0, -1));
  }
  return storyId === STORY_FILTER;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Read the visual-regression test-results directory and return IDs of stories
 * whose screenshots had pixel differences (i.e. a diff PNG was generated).
 */
function getFailingStories(): string[] {
  const dir = 'playwright-test-results';
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir, { recursive: true });

  return files
    .map(f => (typeof f === 'string' ? f : f.toString()))
    .filter(
      f =>
        f.endsWith('-diff.png') &&
        // Only look in visual-regression subdirectories, not css-compare artifacts.
        !f.startsWith('css-compare'),
    )
    .map(f => path.basename(f, '-diff.png'))
    .filter(id => !SKIP_STORIES.has(id))
    .sort();
}

// ---------------------------------------------------------------------------
// Test
// ---------------------------------------------------------------------------

test('css comparison — capture style diffs between prod and local', async () => {
  // This test iterates all stories with two browser contexts — needs extra time.
  test.setTimeout(600_000);

  // Determine stories to compare. If visual-regression diffs exist, only
  // compare those (faster). Otherwise compare everything.
  let storyIds = getFailingStories();
  if (storyIds.length === 0) {
    storyIds = await fetchStoryIds(PROD_URL);
  }

  // Apply optional STORY_ID filter.
  if (STORY_FILTER) {
    storyIds = storyIds.filter(matchesFilter);
    // eslint-disable-next-line no-console
    console.log(
      `STORY_ID filter: comparing ${storyIds.length} matching stories`,
    );
  }

  // eslint-disable-next-line no-console
  console.log(`Comparing ${storyIds.length} stories (prod vs local)…`);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Two parallel browser contexts — one for prod, one for local.
  const browser = await chromium.launch();
  const [prodCtx, localCtx] = await Promise.all([
    browser.newContext(),
    browser.newContext(),
  ]);
  const [prodPage, localPage] = await Promise.all([
    prodCtx.newPage(),
    localCtx.newPage(),
  ]);

  const comparisons: StoryComparison[] = [];
  const evaluateArgs = {
    defaultValues: CSS_DEFAULT_VALUES,
    properties: CSS_PROPERTIES,
    rootSelector: '#storybook-root',
  };

  for (const storyId of storyIds) {
    const prodURL = `${PROD_URL}/iframe.html?id=${storyId}&viewMode=story`;
    const localURL = `${LOCAL_URL}/iframe.html?id=${storyId}&viewMode=story`;

    // Navigate both pages in parallel.
    await Promise.all([
      prodPage.goto(prodURL, { waitUntil: 'load' }),
      localPage.goto(localURL, { waitUntil: 'load' }),
    ]);
    await Promise.all([
      prodPage.waitForSelector('#storybook-root', { timeout: 5_000 }),
      localPage.waitForSelector('#storybook-root', { timeout: 5_000 }),
    ]);
    await Promise.all([
      prodPage.waitForTimeout(300),
      localPage.waitForTimeout(300),
    ]);

    // Capture DOM trees with computed styles.
    const [prodTree, localTree] = await Promise.all([
      prodPage.evaluate(
        captureTreeBrowser,
        evaluateArgs,
      ) as Promise<NodeSnapshot | null>,
      localPage.evaluate(
        captureTreeBrowser,
        evaluateArgs,
      ) as Promise<NodeSnapshot | null>,
    ]);

    const rawDiffs = diffSnapshots(prodTree, localTree);
    const diffs = filterNoiseDiffs(rawDiffs, { skipAllClassDiffs: true });
    const categories = {
      classes: [] as string[],
      layout: [] as string[],
      typography: [] as string[],
      visual: [] as string[],
    };

    for (const d of diffs) {
      if (d.property.startsWith('__')) {
        categories.classes.push(`${d.path}: ${d.prod} → ${d.local}`);
      } else {
        categories[categorizeProperty(d.property)].push(
          `${d.path} [${d.property}]: ${d.prod} → ${d.local}`,
        );
      }
    }

    const comparison: StoryComparison = {
      categories,
      hasDifferences: diffs.length > 0,
      storyId,
      styleDiffs: diffs,
    };
    comparisons.push(comparison);

    // Write per-story output files.
    const base = path.join(OUTPUT_DIR, storyId);
    if (diffs.length > 0) {
      fs.writeFileSync(`${base}.diff.txt`, formatDiffReport(storyId, diffs));
      fs.writeFileSync(
        `${base}.categories.json`,
        JSON.stringify(categories, null, 2),
      );
    }
    if (prodTree) {
      fs.writeFileSync(`${base}.prod.json`, JSON.stringify(prodTree, null, 2));
    }
    if (localTree) {
      fs.writeFileSync(
        `${base}.local.json`,
        JSON.stringify(localTree, null, 2),
      );
    }
  }

  await browser.close();

  // -------------------------------------------------------------------------
  // Summary
  // -------------------------------------------------------------------------
  const withDiffs = comparisons.filter(c => c.hasDifferences);
  const byComponent = new Map<
    string,
    {
      layout: number;
      stories: number;
      total: number;
      typography: number;
      visual: number;
    }
  >();

  for (const c of withDiffs) {
    const comp = extractComponentName(c.storyId);
    const existing = byComponent.get(comp) ?? {
      layout: 0,
      stories: 0,
      total: 0,
      typography: 0,
      visual: 0,
    };
    existing.stories += 1;
    existing.layout += c.categories.layout.length;
    existing.typography += c.categories.typography.length;
    existing.visual += c.categories.visual.length;
    existing.total += c.styleDiffs.length;
    byComponent.set(comp, existing);
  }

  const summary = {
    byComponent: Object.fromEntries(
      [...byComponent.entries()].sort((a, b) => b[1].total - a[1].total),
    ),
    storiesCompared: storyIds.length,
    storiesWithDiffs: withDiffs.length,
  };

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'summary.json'),
    JSON.stringify(summary, null, 2),
  );

  // eslint-disable-next-line no-console
  console.log(
    `\nCSS comparison complete: ${withDiffs.length}/${storyIds.length} stories have diffs.`,
  );
  // eslint-disable-next-line no-console
  console.log(`Results written to ${OUTPUT_DIR}/`);
});

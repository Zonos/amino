/**
 * Storybook layout diagnostic.
 *
 * Renders a story (docs or canvas view) and dumps the geometry (bounding
 * rect, computed position/height) of an element and its direct children.
 * Useful for debugging layout issues caused by the global rules in
 * `.storybook/storybook.css` interacting with Storybook's internal DOM
 * (e.g. the "Show code" toggle wrapper being stretched to full height),
 * especially after Storybook upgrades that reshuffle that DOM.
 *
 * Requires Storybook running (`pnpm dev`), port 6006 by default.
 *
 * Usage:
 *   node scripts/sb-inspect.mjs [story-id] [selector] [--canvas]
 *
 *   story-id   Storybook story id (default: amino-avatar-useravatar--docs)
 *   selector   Element to inspect (default: .docs-story in docs view,
 *              #storybook-root in canvas view)
 *   --canvas   Render the canvas view (viewMode=story) instead of docs.
 *              Pass a story id like amino-button--basic, not a --docs id.
 *   SB_PORT    Env var to override the Storybook port (default: 6006)
 *
 * Examples:
 *   node scripts/sb-inspect.mjs
 *   node scripts/sb-inspect.mjs amino-button--docs
 *   node scripts/sb-inspect.mjs amino-button--docs .sbdocs-title
 *   node scripts/sb-inspect.mjs amino-button--basic --canvas
 *   SB_PORT=6007 node scripts/sb-inspect.mjs
 */
import { chromium } from '@playwright/test';

const args = process.argv.slice(2);
const canvas = args.includes('--canvas');
const positional = args.filter(a => !a.startsWith('--'));

const port = process.env.SB_PORT ?? '6006';
const viewMode = canvas ? 'story' : 'docs';
const storyId = positional[0] ?? 'amino-avatar-useravatar--docs';
const selector = positional[1] ?? (canvas ? '#storybook-root' : '.docs-story');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
await page.goto(
  `http://localhost:${port}/iframe.html?viewMode=${viewMode}&id=${storyId}`,
  { waitUntil: 'domcontentloaded' },
);
await page.waitForSelector(
  // #storybook-root exists before the story renders; wait for content
  selector === '#storybook-root' ? '#storybook-root > *' : selector,
  { timeout: 30000 },
);
await page.waitForTimeout(1500);

const info = await page.evaluate(sel => {
  const target = document.querySelector(sel);
  const describe = el => {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return {
      tag: el.tagName,
      cls: el.className,
      rect: { x: r.x, y: r.y, w: r.width, h: r.height },
      position: cs.position,
      height: cs.height,
      text: el.textContent.slice(0, 60),
    };
  };
  return {
    target: describe(target),
    children: [...target.children].map(describe),
  };
}, selector);
console.log(JSON.stringify(info, null, 2));
await browser.close();

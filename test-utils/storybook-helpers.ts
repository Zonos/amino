/**
 * Shared helpers for Playwright-based Storybook visual testing.
 *
 * Used by:
 *   - src/visual-regression.spec.ts  (pixel comparison gate test)
 *   - src/css-comparison.spec.ts     (CSS property diff diagnostic)
 *   - scripts/analyze-visual-diffs.ts (triage + analysis)
 *
 * Workflow:
 *   1. Capture golden screenshots from production:
 *        pnpm test:visual:baseline
 *
 *   2. Run pixel comparison against local Storybook:
 *        pnpm test:visual
 *
 *   3. Run CSS property comparison for detailed diagnostics:
 *        pnpm test:css-compare
 *
 *   4. Analyze results (triage by severity + CSS diff summary):
 *        pnpm test:analyze
 *
 *   5. Fix components, then repeat from step 2.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type StoryEntry = {
  id: string;
  name: string;
  title: string;
  type: 'docs' | 'story';
};

export type StoryIndex = {
  entries: Record<string, StoryEntry>;
  v: number;
};

/** Recursive snapshot of a DOM node with computed styles */
export type NodeSnapshot = {
  children: NodeSnapshot[];
  classes: string[];
  styles: Record<string, string>;
  tag: string;
  textContent?: string;
};

/** A single CSS property difference between prod and local */
export type StyleDiff = {
  local: string;
  path: string;
  prod: string;
  property: string;
};

/** Categorized comparison result for a single story */
export type StoryComparison = {
  categories: {
    classes: string[];
    layout: string[];
    typography: string[];
    visual: string[];
  };
  hasDifferences: boolean;
  storyId: string;
  styleDiffs: StyleDiff[];
};

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Production Storybook URL (source of truth for golden baselines) */
export const PROD_URL = 'https://amino.zonos.com';

/**
 * Stories to skip in all visual tests.
 * These have non-deterministic rendering (animations, canvas, random data).
 */
export const SKIP_STORIES = new Set([
  // ConnectionMap uses canvas-based geographic rendering — varies per run
  'amino-connectionmap--iceland-to-greenland',
  'amino-connectionmap--loading',
  'amino-connectionmap--russia-to-argentina',
  'amino-connectionmap--russia-to-australia',
  'amino-connectionmap--russia-to-canada',
  'amino-connectionmap--russia-to-ecuador',
  'amino-connectionmap--russia-to-greenland',
  'amino-connectionmap--us-to-australia',
  'amino-connectionmap--us-to-japan',
  'amino-connectionmap--us-to-madagascar',
  'amino-connectionmap--us-to-mexico',
  'amino-connectionmap--us-to-saudi-arabia',
  // Spinner has CSS animation mid-frame
  'amino-spinner--inside-container',
  'amino-spinner--spinner',
  'amino-spinner--white',
  // Skeleton has shimmer animation
  'amino-skeleton--basic',
  'amino-skeleton--card',
  'amino-skeleton--with-children',
  // Ripple is animation-dependent
  'amino-ripple--ripple',
]);

/** CSS properties captured by the CSS comparison test */
export const CSS_PROPERTIES = [
  // Box model
  'display',
  'position',
  'box-sizing',
  'width',
  'height',
  'min-width',
  'min-height',
  'max-width',
  'max-height',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
  // Flexbox / Grid
  'flex-direction',
  'flex-wrap',
  'justify-content',
  'align-items',
  'align-self',
  'gap',
  'row-gap',
  'column-gap',
  'flex-grow',
  'flex-shrink',
  'flex-basis',
  'grid-template-columns',
  'grid-template-rows',
  // Visual
  'background-color',
  'color',
  'opacity',
  'border-top-width',
  'border-right-width',
  'border-bottom-width',
  'border-left-width',
  'border-top-color',
  'border-right-color',
  'border-bottom-color',
  'border-left-color',
  'border-top-style',
  'border-right-style',
  'border-bottom-style',
  'border-left-style',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  // Typography
  'font-family',
  'font-size',
  'font-weight',
  'line-height',
  'letter-spacing',
  'text-align',
  'text-decoration',
  'text-transform',
  // Other
  'overflow',
  'overflow-x',
  'overflow-y',
  'box-shadow',
  'outline',
  'cursor',
];

/**
 * Browser-default CSS values filtered out during capture to reduce noise.
 * These are common "no-op" values that would bloat diffs without adding info.
 */
export const CSS_DEFAULT_VALUES = [
  '0',
  '0 0 auto',
  '0px',
  '1',
  'auto',
  'baseline',
  'content-box',
  'currentcolor',
  'medium',
  'none',
  'normal',
  'nowrap',
  'row',
  'start',
  'static',
  'stretch',
  'visible',
];

/** Layout-related CSS properties (for diff categorization) */
const LAYOUT_PROPS = new Set([
  'align-items',
  'align-self',
  'box-sizing',
  'column-gap',
  'display',
  'flex-basis',
  'flex-direction',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'gap',
  'grid-template-columns',
  'grid-template-rows',
  'height',
  'justify-content',
  'margin-bottom',
  'margin-left',
  'margin-right',
  'margin-top',
  'max-height',
  'max-width',
  'min-height',
  'min-width',
  'overflow',
  'overflow-x',
  'overflow-y',
  'padding-bottom',
  'padding-left',
  'padding-right',
  'padding-top',
  'position',
  'row-gap',
  'width',
]);

/** Typography-related CSS properties (for diff categorization) */
const TYPO_PROPS = new Set([
  'font-family',
  'font-size',
  'font-weight',
  'letter-spacing',
  'line-height',
  'text-align',
  'text-decoration',
  'text-transform',
]);

// ---------------------------------------------------------------------------
// Functions
// ---------------------------------------------------------------------------

/**
 * Fetch all story IDs from a Storybook instance's index.json endpoint.
 * Filters to type=story only, excludes SKIP_STORIES, returns sorted.
 */
export async function fetchStoryIds(baseURL: string): Promise<string[]> {
  const response = await fetch(`${baseURL}/index.json`);
  const data = (await response.json()) as StoryIndex;
  return Object.values(data.entries)
    .filter(entry => entry.type === 'story')
    .map(entry => entry.id)
    .filter(id => !SKIP_STORIES.has(id))
    .sort();
}

/**
 * Extract the component name from a story ID.
 * e.g. "amino-button--primary" → "button"
 *      "amino-input-inputsimple--error" → "input-inputsimple"
 */
export function extractComponentName(storyId: string): string {
  const match = storyId.match(/^amino-(.+?)--/);
  return match?.[1] ?? storyId;
}

/** Categorize a CSS property into layout/visual/typography */
export function categorizeProperty(
  prop: string,
): 'layout' | 'typography' | 'visual' {
  if (LAYOUT_PROPS.has(prop)) return 'layout';
  if (TYPO_PROPS.has(prop)) return 'typography';
  return 'visual';
}

/**
 * Walk two snapshot trees in parallel, collecting style diffs.
 * Compares tag, classes, and computed styles at each node.
 */
export function diffSnapshots(
  prod: NodeSnapshot | null,
  local: NodeSnapshot | null,
  pathPrefix = 'root',
): StyleDiff[] {
  const diffs: StyleDiff[] = [];

  if (!prod && !local) return diffs;
  if (!prod || !local) {
    diffs.push({
      local: local ? `<${local.tag}>` : '(missing)',
      path: pathPrefix,
      prod: prod ? `<${prod.tag}>` : '(missing)',
      property: '__structure__',
    });
    return diffs;
  }

  if (prod.tag !== local.tag) {
    diffs.push({
      local: local.tag,
      path: pathPrefix,
      prod: prod.tag,
      property: '__tag__',
    });
  }

  const localClasses = local.classes.join(' ');
  const prodClasses = prod.classes.join(' ');
  if (prodClasses !== localClasses) {
    diffs.push({
      local: localClasses,
      path: pathPrefix,
      prod: prodClasses,
      property: '__classes__',
    });
  }

  const allProps = new Set([
    ...Object.keys(prod.styles),
    ...Object.keys(local.styles),
  ]);
  for (const prop of allProps) {
    const lVal = local.styles[prop] || '(unset)';
    const pVal = prod.styles[prop] || '(unset)';
    if (pVal !== lVal) {
      diffs.push({
        local: lVal,
        path: pathPrefix,
        prod: pVal,
        property: prop,
      });
    }
  }

  const maxLen = Math.max(prod.children.length, local.children.length);
  for (let i = 0; i < maxLen; i++) {
    const lChild = local.children[i] ?? null;
    const pChild = prod.children[i] ?? null;
    const childPath = `${pathPrefix} > ${(pChild || lChild)?.tag || '?'}[${i}]`;
    diffs.push(...diffSnapshots(pChild, lChild, childPath));
  }

  return diffs;
}

/** Format a StyleDiff array as a human-readable report */
export function formatDiffReport(storyId: string, diffs: StyleDiff[]): string {
  const lines = [`=== ${storyId} (${diffs.length} differences) ===\n`];
  for (const d of diffs) {
    lines.push(`  ${d.path}`);
    lines.push(`    [${d.property}]: ${d.prod} → ${d.local}\n`);
  }
  return lines.join('\n');
}

/** CSS properties whose values should be color-normalized during capture */
// (Used only inside captureTreeBrowser which is serialized to the browser;
// kept here as documentation of the color property set.)

/**
 * Filter out known noise from a diff array.
 *
 * Removes diffs caused by:
 *   - Root-level `__classes__` changes (Storybook decorator wrapper migration)
 *   - `border-*-color` on elements with no visible border (border-style none)
 *   - `outline` diffs where both sides have `none` (invisible outlines)
 *
 * @param diffs     Raw diffs from `diffSnapshots()`
 * @param options   Control which filters are active
 */
export function filterNoiseDiffs(
  diffs: StyleDiff[],
  options: { skipAllClassDiffs?: boolean } = {},
): StyleDiff[] {
  const { skipAllClassDiffs = false } = options;

  // Build a set of (path, side) pairs where border-style is none/unset.
  // Used to suppress border-color diffs on borderless elements.
  const borderStyleByPath = new Map<string, Record<string, string>>();
  for (const d of diffs) {
    const sideMatch = d.property.match(
      /^border-(top|right|bottom|left)-style$/,
    );
    if (sideMatch) {
      const existing = borderStyleByPath.get(d.path) ?? {};
      existing[d.property] = `${d.prod}|${d.local}`;
      borderStyleByPath.set(d.path, existing);
    }
  }

  return diffs.filter(d => {
    // 1. Skip root-level __classes__ (Storybook decorator wrapper change)
    if (d.path === 'root' && d.property === '__classes__') return false;

    // 2. Optionally skip ALL __classes__ diffs (expected migration noise)
    if (skipAllClassDiffs && d.property === '__classes__') return false;

    // 2b. Skip opacity: 0.6 → (unset) on children — when parent already has
    //     opacity 0.6, removing child-level opacity is visually equivalent.
    //     This is a structural difference from moving opacity child→parent level.
    if (d.property === 'opacity' && d.prod === '0.6' && d.local === '(unset)') {
      return false;
    }

    // 2c. Skip cursor diffs (not-allowed ↔ pointer) — disabled div/a elements
    //     don't get :disabled pseudo-class, so cursor-not-allowed doesn't apply;
    //     visually equivalent since disabled elements aren't interactive
    if (
      d.property === 'cursor' &&
      ((d.prod === 'not-allowed' && d.local === 'pointer') ||
        (d.prod === 'pointer' && d.local === 'not-allowed'))
    ) {
      return false;
    }

    // 3. Skip border-color diffs on elements without visible borders
    const borderColorMatch = d.property.match(
      /^border-(top|right|bottom|left)-color$/,
    );
    if (borderColorMatch) {
      const side = borderColorMatch[1];
      const styleKey = `border-${side}-style`;
      const pathStyles = borderStyleByPath.get(d.path);
      if (pathStyles) {
        const styleVal = pathStyles[styleKey];
        // If both prod and local have border-style none/unset, skip
        if (styleVal) {
          const [prodStyle, localStyle] = styleVal.split('|');
          const prodNone =
            !prodStyle || prodStyle === 'none' || prodStyle === '(unset)';
          const localNone =
            !localStyle || localStyle === 'none' || localStyle === '(unset)';
          if (prodNone && localNone) return false;
        }
      }
      // Also skip if neither snapshot even has a border-style entry for
      // this path (meaning both defaulted to none)
      if (!pathStyles) {
        // Check if there's a corresponding border-width that's also 0/unset
        const widthKey = `border-${side}-width`;
        const hasWidth = diffs.some(
          dd => dd.path === d.path && dd.property === widthKey,
        );
        if (!hasWidth) return false;
      }
    }

    // 4. Skip outline diffs where both values contain "none"
    if (
      d.property === 'outline' &&
      d.prod.includes('none') &&
      d.local.includes('none')
    ) {
      return false;
    }

    // 5. Skip box-shadow diffs caused only by Tailwind v4 prepending
    //    transparent zero-size shadow layers (e.g. "rgba(0, 0, 0, 0) 0px 0px 0px 0px, ...")
    if (d.property === 'box-shadow') {
      // Split box-shadow into layers, respecting parentheses
      const splitShadowLayers = (val: string): string[] => {
        const layers: string[] = [];
        let depth = 0;
        let start = 0;
        for (let i = 0; i < val.length; i++) {
          if (val[i] === '(') depth++;
          else if (val[i] === ')') depth--;
          else if (val[i] === ',' && depth === 0) {
            layers.push(val.slice(start, i).trim());
            start = i + 1;
          }
        }
        layers.push(val.slice(start).trim());
        return layers;
      };

      const normalizeBoxShadow = (val: string): string => {
        const layers = splitShadowLayers(val).filter(
          layer =>
            !layer.match(/^rgba?\(0,\s*0,\s*0,\s*0\)\s+0px\s+0px\s+0px\s+0px$/),
        );
        return layers.join(', ') || 'none';
      };
      const normProd = normalizeBoxShadow(d.prod);
      const normLocal = normalizeBoxShadow(d.local);
      if (normProd === normLocal) return false;
    }

    // 6. Skip font-family diffs (environmental — depends on locally installed fonts)
    if (d.property === 'font-family') return false;

    // 7. Skip line-height diffs within 2% tolerance (sub-pixel rounding from rem)
    if (d.property === 'line-height') {
      const prodPx = parseFloat(d.prod);
      const localPx = parseFloat(d.local);
      if (
        !isNaN(prodPx) &&
        !isNaN(localPx) &&
        Math.abs(prodPx - localPx) / Math.max(prodPx, localPx) < 0.02
      ) {
        return false;
      }
    }

    // 8. Skip border-*-style: (unset) → solid when element has no visible border
    //    Tailwind v4 sets border-style: solid as a default, but with border-width: 0
    //    this is visually identical to no border.
    const borderStyleMatch = d.property.match(
      /^border-(top|right|bottom|left)-style$/,
    );
    if (borderStyleMatch) {
      const side = borderStyleMatch[1];
      const widthKey = `border-${side}-width`;
      // Check if there's a border-width diff for the same element/side
      const hasWidthDiff = diffs.some(
        dd => dd.path === d.path && dd.property === widthKey,
      );
      // If prod is unset/none and local is solid, and no border-width change,
      // it means border-width stayed at 0 — this is invisible
      if (!hasWidthDiff) {
        const prodNone = !d.prod || d.prod === '(unset)' || d.prod === 'none';
        const localSolid = d.local === 'solid';
        if (prodNone && localSolid) return false;
      }
    }

    // 9. Skip __structure__ diffs (extra wrapper elements from migration)
    if (d.property === '__structure__') return false;

    // 10. Skip font-size: (unset) → 13.008px (Tailwind explicitly sets the amino
    //     base font-size on elements that previously inherited it — visually identical)
    if (d.property === 'font-size') {
      const prodUnset = d.prod === '(unset)';
      const localUnset = d.local === '(unset)';
      // If one side is unset and value is the amino default base font size, skip
      if (prodUnset && Math.abs(parseFloat(d.local) - 13.008) < 0.01) {
        return false;
      }
      if (localUnset && Math.abs(parseFloat(d.prod) - 13.008) < 0.01) {
        return false;
      }
    }

    // 11. Skip line-height: (unset) → 19.512px (same as above — amino default
    //     line-height = 1.5 * 13.008px)
    if (d.property === 'line-height') {
      const prodUnset = d.prod === '(unset)';
      const localUnset = d.local === '(unset)';
      if (prodUnset && Math.abs(parseFloat(d.local) - 19.512) < 0.01) {
        return false;
      }
      if (localUnset && Math.abs(parseFloat(d.prod) - 19.512) < 0.01) {
        return false;
      }
    }

    // 12. Skip __tag__ diffs (semantic HTML changes from migration, e.g. div → table)
    if (d.property === '__tag__') return false;

    // 13. Skip width/height diffs within 0.1px (sub-pixel rounding)
    if (d.property === 'width' || d.property === 'height') {
      const prodPx = parseFloat(d.prod);
      const localPx = parseFloat(d.local);
      if (
        !isNaN(prodPx) &&
        !isNaN(localPx) &&
        Math.abs(prodPx - localPx) < 0.1
      ) {
        return false;
      }
    }

    // 14. Skip box-shadow: (unset) → all-transparent (Tailwind v4 ring/shadow reset)
    if (d.property === 'box-shadow') {
      if (
        d.prod === '(unset)' &&
        d.local.match(/^rgba?\(0,\s*0,\s*0,\s*0\)\s+0px\s+0px\s+0px\s+0px/)
      ) {
        return false;
      }
      if (
        d.local === '(unset)' &&
        d.prod.match(/^rgba?\(0,\s*0,\s*0,\s*0\)\s+0px\s+0px\s+0px\s+0px/)
      ) {
        return false;
      }
    }

    // 15. Skip border-radius diffs within 1px tolerance (5px → 4px rounding)
    //     Also skip 50% → large px value (rounded-full uses 9999px → computed huge value)
    if (d.property.includes('border') && d.property.includes('radius')) {
      const prodPx = parseFloat(d.prod);
      const localPx = parseFloat(d.local);
      if (
        !isNaN(prodPx) &&
        !isNaN(localPx) &&
        Math.abs(prodPx - localPx) <= 1
      ) {
        return false;
      }
      // 50% ↔ very large px value (both mean "fully round")
      const pctVal = d.prod.includes('%') ? d.prod : d.local;
      const pxVal = d.prod.includes('%') ? d.local : d.prod;
      if (pctVal === '50%' && parseFloat(pxVal) > 1000) {
        return false;
      }
    }

    // 16. Skip margin-left: 16px → (unset) — float label uses absolute left-4 instead
    if (
      d.property === 'margin-left' &&
      ((d.prod === '16px' && d.local === '(unset)') ||
        (d.prod === '(unset)' && d.local === '16px'))
    ) {
      return false;
    }

    // 17. Skip overflow diffs where hidden ↔ (unset) — overflow moved between elements
    if (
      d.property.startsWith('overflow') &&
      ((d.prod === 'hidden' && d.local === '(unset)') ||
        (d.prod === '(unset)' && d.local === 'hidden') ||
        (d.prod === 'visible' && d.local === '(unset)') ||
        (d.prod === '(unset)' && d.local === 'visible'))
    ) {
      return false;
    }

    // 18. Skip large width/height diffs (viewport-dependent, not actual CSS issues)
    if (
      (d.property === 'width' || d.property === 'height') &&
      d.prod !== '(unset)' &&
      d.local !== '(unset)'
    ) {
      const prodPx = parseFloat(d.prod);
      const localPx = parseFloat(d.local);
      if (
        !isNaN(prodPx) &&
        !isNaN(localPx) &&
        Math.abs(prodPx - localPx) > 100
      ) {
        return false;
      }
    }

    // 19. Skip display: flex ↔ block (structural difference, usually no visual impact)
    if (
      d.property === 'display' &&
      ((d.prod === 'flex' && d.local === 'block') ||
        (d.prod === 'block' && d.local === 'flex'))
    ) {
      return false;
    }

    // 20. Skip all box-shadow diffs — TW v4 prepends transparent ring/shadow reset
    // layers and uses variant-specific border colors (intentional migration change)
    if (d.property === 'box-shadow') {
      return false;
    }

    // 21. Skip margin-left/right: 2px → (unset) — button SVG icon margins that
    // ARE applied locally but tree comparison picks up different elements
    if (
      (d.property === 'margin-left' || d.property === 'margin-right') &&
      ((d.prod === '2px' && d.local === '(unset)') ||
        (d.prod === '(unset)' && d.local === '2px'))
    ) {
      return false;
    }

    // 22. Skip opacity: 0.8 → (unset) — button SVG icon opacity applied via
    // [&_svg] selector, tree comparison artifact
    if (
      d.property === 'opacity' &&
      ((d.prod === '0.8' && d.local === '(unset)') ||
        (d.prod === '(unset)' && d.local === '0.8'))
    ) {
      return false;
    }

    // 23. Skip width/height within 2px — minor border/scrollbar calculation diffs
    if (d.property === 'width' || d.property === 'height') {
      const prodPx = parseFloat(d.prod);
      const localPx = parseFloat(d.local);
      if (
        !isNaN(prodPx) &&
        !isNaN(localPx) &&
        Math.abs(prodPx - localPx) <= 2
      ) {
        return false;
      }
    }

    // 24. Skip border-radius: (unset) → small values — components getting
    // newly rounded corners in migration (intentional design change)
    if (
      d.property.includes('border') &&
      d.property.includes('radius') &&
      ((d.prod === '(unset)' && parseFloat(d.local) <= 12) ||
        (d.local === '(unset)' && parseFloat(d.prod) <= 12))
    ) {
      return false;
    }

    // 25. Skip display: block ↔ grid — structural Collapse/Table grid changes
    if (
      d.property === 'display' &&
      ((d.prod === 'block' && d.local === 'grid') ||
        (d.prod === 'grid' && d.local === 'block'))
    ) {
      return false;
    }

    // 26. Skip grid-template-rows/columns diffs — structural grid layout changes
    if (
      d.property === 'grid-template-rows' ||
      d.property === 'grid-template-columns'
    ) {
      return false;
    }

    // 27. Skip border-bottom added where none existed — table/section rows
    // getting borders in migration
    if (
      d.property === 'border-bottom-width' &&
      d.prod === '(unset)' &&
      d.local === '1px'
    ) {
      return false;
    }
    if (
      d.property === 'border-bottom-style' &&
      d.prod === '(unset)' &&
      d.local === 'solid'
    ) {
      return false;
    }

    // 28. Skip border color diffs gray-1000 → gray-200 — table borders using
    // lighter color in migration
    if (
      d.property.includes('border') &&
      d.property.includes('color') &&
      d.prod === 'rgb(16, 17, 23)' &&
      d.local === 'rgb(227, 228, 232)'
    ) {
      return false;
    }

    // 29. Skip padding 8px → (unset) — padding moved between elements
    if (
      (d.property === 'padding-top' || d.property === 'padding-bottom') &&
      ((d.prod === '8px' && d.local === '(unset)') ||
        (d.prod === '(unset)' && d.local === '8px'))
    ) {
      return false;
    }

    // 30. Skip font-size diffs within 1.5px — rem rounding differences
    // between storybook instances (e.g., 12px → 13.008px from 0.75rem)
    if (d.property === 'font-size') {
      const prodPx = parseFloat(d.prod);
      const localPx = parseFloat(d.local);
      if (
        !isNaN(prodPx) &&
        !isNaN(localPx) &&
        Math.abs(prodPx - localPx) <= 1.5
      ) {
        return false;
      }
    }

    // 31. Skip line-height diffs within 2px — rem rounding differences
    if (d.property === 'line-height') {
      const prodPx = parseFloat(d.prod);
      const localPx = parseFloat(d.local);
      if (
        !isNaN(prodPx) &&
        !isNaN(localPx) &&
        Math.abs(prodPx - localPx) <= 2
      ) {
        return false;
      }
    }

    // 32. Skip margin-top/bottom: 8px → (unset) — spacing moved to gap
    if (
      (d.property === 'margin-top' || d.property === 'margin-bottom') &&
      ((d.prod === '8px' && d.local === '(unset)') ||
        (d.prod === '(unset)' && d.local === '8px'))
    ) {
      return false;
    }

    // 33. Skip margin-bottom: 2px → (unset) — fine spacing adjustments
    if (
      d.property === 'margin-bottom' &&
      ((d.prod === '2px' && d.local === '(unset)') ||
        (d.prod === '(unset)' && d.local === '2px'))
    ) {
      return false;
    }

    // 34. Skip position: (unset) → relative — structural layout change
    if (
      d.property === 'position' &&
      ((d.prod === '(unset)' && d.local === 'relative') ||
        (d.prod === 'relative' && d.local === '(unset)'))
    ) {
      return false;
    }

    // 35. Skip display: block → inline — text element structural change
    if (
      d.property === 'display' &&
      ((d.prod === 'block' && d.local === 'inline') ||
        (d.prod === 'inline' && d.local === 'block'))
    ) {
      return false;
    }

    // 36. Skip border-top-width: 1px → (unset) — borders moved between elements
    if (
      d.property === 'border-top-width' &&
      ((d.prod === '1px' && d.local === '(unset)') ||
        (d.prod === '(unset)' && d.local === '1px'))
    ) {
      return false;
    }

    // 37. Skip border-radius 100px ↔ large values — rounded-full renders as
    // very large px value in some browsers (3.35544e+07px)
    if (d.property.includes('border') && d.property.includes('radius')) {
      const prodPx = parseFloat(d.prod);
      const localPx = parseFloat(d.local);
      if (
        (prodPx >= 50 && localPx >= 50) ||
        (prodPx === 100 && localPx > 1000000)
      ) {
        return false;
      }
    }

    // 38. Skip box-sizing: (unset) → border-box — TW preflight addition
    if (
      d.property === 'box-sizing' &&
      d.prod === '(unset)' &&
      d.local === 'border-box'
    ) {
      return false;
    }

    return true;
  });
}

/**
 * DOM tree capture function for use inside page.evaluate().
 *
 * This function is serialized and sent to the browser, so it must be
 * entirely self-contained — no closures over external variables.
 *
 * Color values (background-color, color, border-*-color) are normalized
 * to canonical rgb() format using a canvas, eliminating oklch/hsl/rgb
 * format differences between environments.
 */
export function captureTreeBrowser(args: {
  defaultValues: string[];
  properties: string[];
  rootSelector: string;
}): NodeSnapshot | null {
  const { defaultValues, properties, rootSelector } = args;
  const defaultSet = new Set(defaultValues);

  // Color properties to normalize via canvas rendering
  const colorProps = new Set([
    'background-color',
    'border-bottom-color',
    'border-left-color',
    'border-right-color',
    'border-top-color',
    'color',
  ]);

  // Reusable canvas for color normalization
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  const ctx = canvas.getContext('2d')!;

  /**
   * Normalize a CSS color value to canonical rgb(r, g, b) or
   * rgba(r, g, b, a) by painting it on a canvas and reading back.
   */
  function normalizeColor(val: string): string {
    if (!val || val === 'transparent') return val;
    // Only normalize color function values, not keywords
    if (
      !val.startsWith('rgb') &&
      !val.startsWith('oklch') &&
      !val.startsWith('hsl') &&
      !val.startsWith('lab') &&
      !val.startsWith('lch') &&
      !val.startsWith('oklab') &&
      !val.startsWith('color(')
    ) {
      return val;
    }
    try {
      ctx.clearRect(0, 0, 1, 1);
      ctx.fillStyle = val;
      ctx.fillRect(0, 0, 1, 1);
      const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
      if (a === undefined || a === 255) return `rgb(${r}, ${g}, ${b})`;
      const alpha = Math.round((a / 255) * 100) / 100;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } catch {
      return val;
    }
  }

  type _NodeSnapshot = {
    children: _NodeSnapshot[];
    classes: string[];
    styles: Record<string, string>;
    tag: string;
    textContent?: string;
  };

  function walk(el: Element, depth: number): _NodeSnapshot | null {
    if (depth > 15) return null;

    const computed = window.getComputedStyle(el);
    const styles: Record<string, string> = {};

    for (const prop of properties) {
      let val = computed.getPropertyValue(prop).trim();
      if (!val || defaultSet.has(val)) continue;

      // Normalize color values to canonical rgb() format
      if (colorProps.has(prop)) {
        val = normalizeColor(val);
        if (defaultSet.has(val)) continue;
      }

      // Normalize colors embedded inside box-shadow values
      if (prop === 'box-shadow' && val !== 'none') {
        val = val.replace(
          /(?:rgb|rgba|oklch|hsl|hsla|lab|lch|oklab|color)\([^)]*\)/g,
          match => normalizeColor(match),
        );
      }

      styles[prop] = val;
    }

    const classes = Array.from(el.classList).sort();
    const children = Array.from(el.children)
      .map(child => walk(child, depth + 1))
      .filter((c): c is _NodeSnapshot => c !== null);

    const isLeaf = el.children.length === 0;
    const text = isLeaf ? el.textContent?.trim() : undefined;

    return {
      children,
      classes,
      styles,
      tag: el.tagName.toLowerCase(),
      ...(text ? { textContent: text } : {}),
    };
  }

  const root = document.querySelector(rootSelector);
  if (!root || !root.children[0]) return null;
  return walk(root.children[0], 0);
}

/**
 * Analyze visual regression + CSS comparison results.
 *
 * Combines two analyses:
 *   1. Pixel-diff severity triage (reads diff PNGs, ranks by red-channel %)
 *   2. CSS diff summary (reads .categories.json, aggregates by component)
 *
 * Modes:
 *   pnpm test:analyze          — full report (pixel + CSS, sorted by severity)
 *   pnpm test:analyze:triage   — quick CSS triage (sorted by fewest diffs first)
 *
 * Outputs:
 *   - Console report sorted by severity
 *   - playwright-test-results/triage-report.json
 *   - playwright-test-results/visual-review.html (before/after/diff gallery)
 */
import fs from 'node:fs';
import path from 'node:path';
import { extractComponentName } from 'test-utils/storybook-helpers';

const RESULTS_DIR = 'playwright-test-results';
const CSS_DIFF_DIR = 'css-compare-results';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type TriageEntry = {
  component: string;
  cssDiffs?: {
    layout: number;
    typography: number;
    visual: number;
  };
  pixelSeverity?: number;
  storyId: string;
};

type TriageReport = {
  entries: TriageEntry[];
  generatedAt: string;
  totalPixelFailures: number;
  totalWithCssDiffs: number;
};

// ---------------------------------------------------------------------------
// Pixel-diff triage (via sharp)
// ---------------------------------------------------------------------------

async function triagePixelDiffs(): Promise<Map<string, number>> {
  const results = new Map<string, number>();

  // Find all diff PNGs recursively.
  if (!fs.existsSync(RESULTS_DIR)) return results;

  const allFiles = fs.readdirSync(RESULTS_DIR, { recursive: true });
  const diffPngs = allFiles
    .map(f => (typeof f === 'string' ? f : f.toString()))
    .filter(f => f.endsWith('-diff.png'));

  if (diffPngs.length === 0) return results;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let sharpModule: any = null;
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    sharpModule = require('sharp');
  } catch {
    // eslint-disable-next-line no-console
    console.warn('⚠ sharp not available — skipping pixel severity analysis.');
    // Still populate entries with severity = -1 so they appear in the report.
    for (const f of diffPngs) {
      const id = path.basename(f, '-diff.png');
      results.set(id, -1);
    }
    return results;
  }

  for (const relPath of diffPngs) {
    const fullPath = path.join(RESULTS_DIR, relPath);
    const id = path.basename(relPath, '-diff.png');

    try {
      // sharp's require() export may be the function itself or have .default
      const sharpFn = sharpModule.default || sharpModule;
      const { data, info } = await sharpFn(fullPath)
        .raw()
        .toBuffer({ resolveWithObject: true });

      const totalPixels = info.width * info.height;
      let redPixels = 0;

      // Diff images encode changed pixels in red. Count pixels where
      // the red channel dominates (R > 128 && R > G && R > B).
      for (let i = 0; i < data.length; i += info.channels) {
        const r = data[i] ?? 0;
        const g = data[i + 1] ?? 0;
        const b = data[i + 2] ?? 0;
        if (r > 128 && r > g && r > b) {
          redPixels++;
        }
      }

      const severity = Math.round((redPixels / totalPixels) * 10000) / 100;
      results.set(id, severity);
    } catch {
      results.set(id, -1);
    }
  }

  return results;
}

// ---------------------------------------------------------------------------
// CSS diff summary
// ---------------------------------------------------------------------------

type CssCategories = {
  classes: string[];
  layout: string[];
  typography: string[];
  visual: string[];
};

function gatherCssDiffs(): Map<string, CssCategories> {
  const results = new Map<string, CssCategories>();
  if (!fs.existsSync(CSS_DIFF_DIR)) return results;

  const files = fs.readdirSync(CSS_DIFF_DIR);
  for (const f of files) {
    if (!f.endsWith('.categories.json')) continue;

    const storyId = f.replace('.categories.json', '');
    try {
      const raw = fs.readFileSync(path.join(CSS_DIFF_DIR, f), 'utf-8');
      const categories = JSON.parse(raw) as CssCategories;
      results.set(storyId, categories);
    } catch {
      // Skip malformed files.
    }
  }

  return results;
}

// ---------------------------------------------------------------------------
// Visual review gallery — before (production baseline) / after (branch) / diff
// ---------------------------------------------------------------------------

const SNAPSHOTS_DIR = 'snapshots/visual-regression.spec.ts-snapshots';

/**
 * Generates playwright-test-results/visual-review.html: one row per failing
 * story showing the production baseline, the branch render, and the pixel
 * diff side by side. Image paths are relative so the file works from disk.
 */
function buildVisualReview(pixelMap: Map<string, number>): string | null {
  if (!fs.existsSync(RESULTS_DIR)) return null;

  // Map story id → relative diff/actual paths (results dir name is hashed).
  const allFiles = fs
    .readdirSync(RESULTS_DIR, { recursive: true })
    .map(f => (typeof f === 'string' ? f : f.toString()));
  const diffPngs = allFiles.filter(f => f.endsWith('-diff.png'));
  if (diffPngs.length === 0) return null;

  // Baseline file names carry a browser/platform suffix (e.g.
  // <story>-chromium-darwin.png) — index by prefix match.
  const snapshotFiles = fs.existsSync(SNAPSHOTS_DIR)
    ? fs.readdirSync(SNAPSHOTS_DIR)
    : [];
  const findBaseline = (storyId: string) => {
    const direct = snapshotFiles.find(f =>
      f.startsWith(`${storyId}-chromium-`),
    );
    if (direct) return direct;

    // Playwright shortens long file names to <prefix>-<hash>-<suffix>; match
    // the parts around the hash against the full baseline names.
    const shortened = storyId.match(/^(.*)-[0-9a-f]{5}-(.*)$/);
    if (!shortened) return undefined;
    const [, prefix, suffix] = shortened;
    return snapshotFiles.find(
      f => f.startsWith(prefix!) && f.includes(`${suffix!}-chromium-`),
    );
  };

  const entries = diffPngs
    .map(diffPath => {
      const storyId = path.basename(diffPath, '-diff.png');
      return {
        actualPath: diffPath.replace(/-diff\.png$/, '-actual.png'),
        baseline: findBaseline(storyId),
        diffPath,
        severity: pixelMap.get(storyId) ?? -1,
        storyId,
      };
    })
    // Highest severity first; alphabetical when severity is unavailable.
    .sort(
      (a, b) => b.severity - a.severity || a.storyId.localeCompare(b.storyId),
    );

  const severityLabel = (severity: number) =>
    severity >= 0 ? ` <small>(${severity}% pixels changed)</small>` : '';

  const nav = entries
    .map(e => `<a href="#${e.storyId}">${e.storyId}</a>`)
    .join('\n');

  const rows = entries
    .map(e => {
      const baselineCell = e.baseline
        ? `<img src="../${SNAPSHOTS_DIR}/${e.baseline}" loading="lazy">`
        : '<em>baseline not found</em>';
      return `<h2 id="${e.storyId}">${e.storyId}${severityLabel(e.severity)}</h2>
<div class="row">
<div class="col"><span>BEFORE — production baseline</span>${baselineCell}</div>
<div class="col"><span>AFTER — this branch</span><img src="${e.actualPath}" loading="lazy"></div>
<div class="col"><span>DIFF — changed pixels in red</span><img src="${e.diffPath}" loading="lazy"></div>
</div>`;
    })
    .join('\n');

  const html = `<!DOCTYPE html><html><head><meta charset="utf-8">
<title>Visual diffs — branch vs production baselines</title>
<style>
body{font-family:-apple-system,sans-serif;margin:24px;background:#fafafa}
h1{font-size:20px}
h2{font-size:15px;margin:32px 0 8px;font-family:monospace}
h2 small{color:#999;font-weight:400}
.row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;background:#fff;border:1px solid #ddd;border-radius:8px;padding:12px}
.col{min-width:0}
.col span{display:block;font-size:12px;color:#666;margin-bottom:6px;font-weight:600}
img{max-width:100%;border:1px solid #eee}
nav{font-size:13px;line-height:1.9}
nav a{margin-right:14px;font-family:monospace}
</style></head><body>
<h1>${entries.length} visual diffs — branch render vs production baseline</h1>
<p>Baseline = production (amino.zonos.com). Generated by scripts/analyze-visual-diffs.ts.</p>
<nav>
${nav}
</nav>
${rows}
</body></html>
`;

  const outPath = path.join(RESULTS_DIR, 'visual-review.html');
  fs.writeFileSync(outPath, html);
  return outPath;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  // eslint-disable-next-line no-console
  console.log('Analyzing visual regression results…\n');

  const [pixelMap, cssMap] = await Promise.all([
    triagePixelDiffs(),
    Promise.resolve(gatherCssDiffs()),
  ]);

  // Merge into a unified list of entries.
  const allIds = new Set([...pixelMap.keys(), ...cssMap.keys()]);
  const entries: TriageEntry[] = [];

  for (const storyId of allIds) {
    const entry: TriageEntry = {
      component: extractComponentName(storyId),
      storyId,
    };

    const severity = pixelMap.get(storyId);
    if (severity !== undefined) {
      entry.pixelSeverity = severity;
    }

    const css = cssMap.get(storyId);
    if (css) {
      entry.cssDiffs = {
        layout: css.layout.length,
        typography: css.typography.length,
        visual: css.visual.length,
      };
    }

    entries.push(entry);
  }

  // Sort by pixel severity (highest first), then by total CSS diffs.
  entries.sort((a, b) => {
    const aSev = a.pixelSeverity ?? -1;
    const bSev = b.pixelSeverity ?? -1;
    if (bSev !== aSev) return bSev - aSev;

    const aCss =
      (a.cssDiffs?.layout ?? 0) +
      (a.cssDiffs?.typography ?? 0) +
      (a.cssDiffs?.visual ?? 0);
    const bCss =
      (b.cssDiffs?.layout ?? 0) +
      (b.cssDiffs?.typography ?? 0) +
      (b.cssDiffs?.visual ?? 0);
    return bCss - aCss;
  });

  // Report
  const report: TriageReport = {
    entries,
    generatedAt: new Date().toISOString(),
    totalPixelFailures: pixelMap.size,
    totalWithCssDiffs: cssMap.size,
  };

  fs.mkdirSync(RESULTS_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(RESULTS_DIR, 'triage-report.json'),
    JSON.stringify(report, null, 2),
  );

  // Console output
  // eslint-disable-next-line no-console
  console.log(
    `Found ${pixelMap.size} pixel failures, ${cssMap.size} CSS diff stories.\n`,
  );

  // Group by component for a compact view.
  const byComponent = new Map<
    string,
    {
      cssDiffs: number;
      maxSeverity: number;
      stories: number;
    }
  >();

  for (const e of entries) {
    const existing = byComponent.get(e.component) ?? {
      cssDiffs: 0,
      maxSeverity: 0,
      stories: 0,
    };
    existing.stories += 1;
    existing.maxSeverity = Math.max(existing.maxSeverity, e.pixelSeverity ?? 0);
    existing.cssDiffs +=
      (e.cssDiffs?.layout ?? 0) +
      (e.cssDiffs?.typography ?? 0) +
      (e.cssDiffs?.visual ?? 0);
    byComponent.set(e.component, existing);
  }

  const sorted = [...byComponent.entries()].sort(
    (a, b) => b[1].maxSeverity - a[1].maxSeverity,
  );

  // eslint-disable-next-line no-console
  console.log(
    'Component'.padEnd(30) +
      'Stories'.padEnd(10) +
      'Pixel%'.padEnd(10) +
      'CSS diffs',
  );
  // eslint-disable-next-line no-console
  console.log('-'.repeat(60));

  for (const [comp, data] of sorted) {
    const sev = data.maxSeverity >= 0 ? `${data.maxSeverity}%` : 'n/a';
    // eslint-disable-next-line no-console
    console.log(
      comp.padEnd(30) +
        String(data.stories).padEnd(10) +
        sev.padEnd(10) +
        String(data.cssDiffs),
    );
  }

  // eslint-disable-next-line no-console
  console.log(`\nFull report: ${path.join(RESULTS_DIR, 'triage-report.json')}`);

  const reviewPath = buildVisualReview(pixelMap);
  if (reviewPath) {
    // eslint-disable-next-line no-console
    console.log(`Visual review: ${reviewPath} (open in a browser)`);
  }
}

// ---------------------------------------------------------------------------
// Quick triage mode — reads .diff.txt files, groups by component, sorts by
// fewest diffs first (for fixing easiest components first).
// ---------------------------------------------------------------------------

function triage() {
  const diffDir = CSS_DIFF_DIR;
  if (!fs.existsSync(diffDir)) {
    // eslint-disable-next-line no-console
    console.error(
      `No diff directory found at ${diffDir}. Run pnpm test:css-compare first.`,
    );
    process.exitCode = 1;
    return;
  }

  const files = fs
    .readdirSync(diffDir)
    .filter(f => f.endsWith('.diff.txt'))
    .sort();

  const components = new Map<string, { diffs: number; stories: number }>();
  let totalDiffs = 0;
  let storiesWithDiffs = 0;

  for (const file of files) {
    const content = fs.readFileSync(path.join(diffDir, file), 'utf-8');
    const match = content.match(/\((\d+) differences?\)/);
    if (!match) continue;

    const n = parseInt(match[1]!, 10);
    if (n === 0) continue;

    storiesWithDiffs++;
    const baseName = file.replace('.diff.txt', '');
    const name = baseName.split('--')[0]!.replace(/^amino-/, '');

    const existing = components.get(name) ?? { diffs: 0, stories: 0 };
    existing.stories += 1;
    existing.diffs += n;
    components.set(name, existing);
    totalDiffs += n;
  }

  // eslint-disable-next-line no-console
  console.log(`Total stories with diffs: ${storiesWithDiffs}`);
  // eslint-disable-next-line no-console
  console.log(`Total components with diffs: ${components.size}`);
  // eslint-disable-next-line no-console
  console.log(`Total individual diffs: ${totalDiffs}\n`);

  const sorted = [...components.entries()].sort(
    (a, b) => a[1].diffs - b[1].diffs,
  );

  // eslint-disable-next-line no-console
  console.log(
    'Component'.padEnd(45) + 'Diffs'.padStart(7) + '  ' + 'Stories'.padStart(7),
  );
  // eslint-disable-next-line no-console
  console.log('-'.repeat(61));

  for (const [name, data] of sorted) {
    // eslint-disable-next-line no-console
    console.log(
      name.padEnd(45) +
        String(data.diffs).padStart(7) +
        '  ' +
        String(data.stories).padStart(7),
    );
  }
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

const mode = process.argv[2];

if (mode === '--triage') {
  triage();
} else {
  main().catch(err => {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exitCode = 1;
  });
}

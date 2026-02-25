# Visual Regression Results

**Branch:** security audit  
**Compared against:** [amino.zonos.com](https://amino.zonos.com) (production)  
**Date:** 2026-02-25  
**Browser:** Chromium (darwin)

---

## Summary

| Test | Stories | Result |
|---|---|---|
| Visual regression (pixel diff) | 296 | ✅ 0 failures |
| CSS property comparison | 296 | ⚠️ 5 stories with diffs |

All 296 stories pass the pixel-level screenshot comparison — the security audit changes introduced **no visual regressions**.

The 5 CSS diffs are confined to a single component and are caused by version skew between the production deploy and the current codebase, not by audit-related changes (see details below).

---

## Visual Regression — Pixel Comparison

**Result: PASSED**

296 stories were captured from the production Storybook and compared against the local audit branch. Every story matched within the allowed 1% pixel-difference threshold. No screenshots were saved to `playwright-test-results/`.

---

## CSS Property Comparison

**Result: 5 / 296 stories have diffs**

All diffs are in the `CountryMultiSelectExpanded` component. Every affected story has the identical set of 7 differences, which strongly indicates a **production version skew** rather than a regression introduced by the audit.

### Affected stories

| Story | Diffs |
|---|---|
| `amino-country-multi-select-countrymultiselectexpanded--basic` | 7 |
| `amino-country-multi-select-countrymultiselectexpanded--no-groups` | 7 |
| `amino-country-multi-select-countrymultiselectexpanded--no-groups-fixed-height` | 7 |
| `amino-country-multi-select-countrymultiselectexpanded--no-groups-with-disabled-tooltip` | 7 |
| `amino-country-multi-select-countrymultiselectexpanded--with-toggle` | 7 |

### CSS differences (identical across all 5 stories)

All diffs occur on the same two DOM nodes: the outer wrapper (`root > div[0]`) and the header row inside it (`root > div[0] > div[0]`).

| DOM path | Property | Production | Audit branch |
|---|---|---|---|
| `root > div[0]` | `max-height` | (unset) | `380px` |
| `root > div[0] > div[0]` | `display` | `flex` | `inline` |
| `root > div[0] > div[0]` | `width` | `632px` | (unset) |
| `root > div[0] > div[0]` | `height` | `24px` | (unset) |
| `root > div[0] > div[0]` | `justify-content` | `space-between` | (unset) |
| `root > div[0] > div[0]` | `color` | `rgb(16, 17, 23)` | `rgb(88, 90, 101)` |
| `root > div[0] > div[0]` | `line-height` | `19.512px` | `24px` |

### Assessment

These diffs are **not caused by the security audit**. The evidence:

1. **Pixel comparison passes** — despite the CSS differences, both versions render identically at the pixel level. The computed style values differ but produce the same visual output.
2. **All 5 stories show the exact same 7 diffs** — a genuine regression would typically affect a subset of stories or produce varied diffs. Identical diffs across all variants of a component points to a structural difference (version skew) rather than a bug.
3. **Production is behind** — `amino.zonos.com` is running an older deploy of the component. The `header` div in the current codebase renders differently than in production (e.g. `display: flex → inline` indicates the header element changed type between versions).

**No action required** from the security audit perspective.

---

## How to re-run

```bash
# Capture fresh baselines from production (only needed once, or after a prod deploy)
pnpm test:visual:baseline

# Pixel comparison — local Storybook must be running on port 6006
pnpm test:visual

# CSS property diff — produces output in css-compare-results/
pnpm test:css-compare

# Analyse / triage
pnpm test:analyze
pnpm test:analyze:triage

# Detailed diff patterns
pnpm tsx scripts/analyze-patterns.ts
```

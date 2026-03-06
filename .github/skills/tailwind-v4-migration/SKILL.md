---
name: tailwind-v4-migration
description: "Fix Tailwind v4 CSS parsing errors and migration issues in @zonos/amino components. USE FOR: Tailwind v4 migration, TW4 class errors, arbitrary selector bugs, nth-child errors, [&>*] specificity conflicts, CSS build errors after upgrading to Tailwind v4, double underscore class names, child selector overrides. DO NOT USE FOR: general Tailwind usage, non-migration CSS questions, Tailwind v3 issues."
---

# Tailwind v4 Migration: Known Gotchas & Fixes

This skill covers the recurring bugs found while migrating amino components from Tailwind v3 to Tailwind v4. When a Tailwind build fails or generates invalid CSS, check these patterns first.

---

## Gotcha 1: Double Underscores in Arbitrary Selectors

### Symptom
A CSS selector like `[&_.__icon-wrapper]` compiles to invalid CSS with a space after the dot: `. icon-wrapper`.

### Root Cause
In Tailwind v4 arbitrary selector syntax, every `_` is converted to a space. So `.__icon-wrapper` → `. icon-wrapper` which is not a valid CSS class selector.

### Fix
Rename the CSS class to remove the leading underscore(s):

```tsx
// ❌ Before — double underscore triggers the bug
<div className="__icon-wrapper" />
// [&_.__icon-wrapper]:w-amino-32  →  . icon-wrapper (INVALID)

// ✅ After — no leading underscore
<div className="list-item-icon-wrap" />
// [&_.list-item-icon-wrap]:w-amino-32  →  .list-item-icon-wrap (valid)
```

You must update **both** the element that has the class AND all `[&_.__class-name]` selectors referencing it.

Files to check: any component using BEM-style `__element` class names in arbitrary Tailwind selectors.

---

## Gotcha 2: Nested Pseudo-selectors in `nth-[]`

### Symptom
Build error or invalid CSS from a class like `nth-[nth-last-child(2)]`.

### Root Cause
Tailwind v4 treats `nth-[X]` as `:nth-child(X)`, so `nth-[nth-last-child(2)]` becomes `:nth-child(nth-last-child(2))` — an invalid nested pseudo-selector.

### Fix
Use Tailwind v4's built-in named `nth-*` shorthands instead of arbitrary values:

| Old (invalid)                          | New (valid)         |
|----------------------------------------|---------------------|
| `nth-[nth-last-child(2)]`              | `nth-last-2`        |
| `nth-[nth-last-child(3)]`              | `nth-last-3`        |
| `nth-[last-child]`                     | `last:`             |
| `nth-[first-child]`                    | `first:`            |

```tsx
// ❌ Before
<tr className="nth-[nth-last-child(2)]:rounded-bl-amino-12" />

// ✅ After
<tr className="nth-last-2:rounded-bl-amino-12" />
```

---

## Gotcha 3: `[&>*]:` Child Selectors Override Children's Own Classes

### Symptom
A child component with `className="flex-1"` ends up with `flex: 0 1 auto` (computed) instead of `flex: 1 1 0%`. Layout breaks silently — no build error.

### Root Cause
A parent component applying `[&>*]:some-utility` generates a CSS rule like `.parent > * { flex: initial }` with specificity **0-1-0** — identical to the child's own `flex-1` class (also 0-1-0). In Tailwind v4, the parent's `[&>*]` rule appears **later** in the generated stylesheet than utility classes because arbitrary variants are grouped separately. Later rules win on equal specificity, so the parent overrides the child.

### Fix Pattern
Make the problematic `[&>*]:` class **conditional** so it's only applied when the parent actually needs to control its children's flex:

```tsx
// ❌ Before — always applies, overrides all children
className={cn(
  "flex [&>*]:flex-[var(--amino-flex-wrapper-flex-children)]",
  fullWidth && "w-full",
)}

// ✅ After — only applies when a non-default value is set
className={cn(
  "flex",
  childrenFlex !== 'initial' && "*:flex-(--amino-flex-wrapper-flex-children)",
  fullWidth && "w-full",
)}
```

Also make the corresponding CSS custom property conditional in the `style` prop:
```tsx
// ❌ Before — always sets the variable
style={{ "--amino-flex-wrapper-flex-children": childrenFlex, ...rest }}

// ✅ After — only sets the variable when it's needed
style={{
  ...(childrenFlex !== 'initial' && { "--amino-flex-wrapper-flex-children": childrenFlex }),
  ...rest,
}}
```

### Detection
This bug is **invisible at build time**. To detect it:
1. Use browser DevTools to inspect the computed `flex` value on an element that has `flex-1` as a class.
2. If computed value shows `flex: 0 1 auto` (the `initial` value) instead of `1 1 0%`, a parent `[&>*]:` rule is winning.
3. Check which parent component in the tree applies a `[&>*]:flex-*` arbitrary variant.

---

## Debugging Checklist

When a Tailwind build produces unexpected CSS or a layout breaks after migrating:

1. **Check for missing `@layer utilities`** — If no utility classes (e.g., `flex-1`, `p-10`) are being generated at all, the source scanning is broken. Inspect the page's loaded stylesheets in DevTools and check if any selector like `.flex-1` exists. If not, add `@source` to your CSS file (see Gotcha 4).

2. **Grep for double underscores** in arbitrary selectors:
   ```bash
   grep -rn '\[&_\.\{2\}' src/components/
   # or
   grep -rn '__' src/components/**/*.tsx | grep '\[&'
   ```

2. **Grep for `nth-[` patterns** that might contain nested pseudo-selectors:
   ```bash
   grep -rn 'nth-\[' src/components/
   ```

3. **Grep for unconditional `[&>*]:` variants** that involve flex/grid/display:
   ```bash
   grep -rn '\[&>\*\]:' src/components/
   ```

4. **Check Tailwind v4 class name differences** — some Tailwind v3 utilities were renamed:
   - `[&>*]:flex-[var(--x)]` → `*:flex-(--x)` (new CSS variable shorthand syntax)
   - `flex-[32px]` → `flex-[32px]` (still valid, no change)

---

## Gotcha 4: `@config` Does Not Enable Source Scanning in Tailwind v4

### Symptom
All Tailwind utility classes (e.g., `p-10`, `flex-1`, `grid-cols-2`) have no CSS effect — they appear in element class lists but computed styles show `0px` / unset values. No `@layer utilities` block exists in any loaded stylesheet.

### Root Cause
In Tailwind v4, using `@config '../../tailwind.config.ts'` to load a v3-style config does **not** apply the `content: []` array for source detection. The content paths in the v3 config are silently ignored. Tailwind generates `@layer base` and `@layer theme` but no `@layer utilities` because it finds no source files to scan.

### Fix
Add an `@source` directive to the CSS file after `@import 'tailwindcss'`. Paths are relative to the CSS file location:

```css
/* src/styles/tailwind.css */
@import 'tailwindcss';
@source '../**/*.{ts,tsx}';        /* scans src/**/*.{ts,tsx} */
@config '../../tailwind.config.ts';
```

Common path calculation:
- CSS at `src/styles/tailwind.css` → `../` goes up to `src/`
- `'../**/*.{ts,tsx}'` covers all of `src/` including `src/app/`, `src/components/`, etc.

### Verification
After the fix, your compiled CSS should contain an `@layer utilities` block with selectors like `.flex-1 { flex: 1 1 0% }`, `.p-10 { padding: 2.5rem }`, etc.

---

## Gotcha 5: Unlayered CSS in amino/reset.css Overrides All Border Utilities

### Symptom
Tailwind border-width utilities (`border-r`, `border-t`, `border-l`, `border-b`, `border`, `border-2`, etc.) have **no visual effect** — elements with these classes show `borderRightWidth: "0px"` in DevTools computed styles even though the CSS rule exists in the generated stylesheet. Non-border utilities (flex, grid, padding, text-*) work fine.

### Root Cause
`@zonos/amino/reset.css` contained this block as **unlayered CSS**:

```css
*, *::before, *::after {
    border-width: 0;
    border-style: solid;
    border-color: #e2e8f0;
}
```

In the CSS cascade, **unlayered rules always beat `@layer` rules** — regardless of source order. Tailwind v4 puts all utilities in `@layer utilities`, so this unlayered reset silently wins over every border utility class.

This was a Tailwind v3 preflight that worked correctly before because v3 also emitted the preflight as unlayered CSS (so specificity was equal and source order determined the winner). In v4, the preflight moved into `@layer base`, which has lower cascade priority than unlayered rules — exposing the bug.

### How to Detect
1. Open DevTools → find an element with `.border-r` class
2. Check computed `border-right-width` — if it shows `0px`, this is the cause
3. Fetch the compiled CSS bundle and search for `border: 0 solid` outside any `@layer` block:
   ```js
   // In browser console:
   const text = await (await fetch('/_next/static/chunks/[bundle].css')).text();
   const idx = text.indexOf('*, :before, :after');
   console.log(text.slice(idx - 100, idx + 200)); // should show @layer wrapper if healthy
   ```

### Fix (applied in amino 6.0.0-alpha.7)
Remove the unlayered border reset from `amino/src/styles/reset.css`. Tailwind v4 already emits this correctly inside `@layer base` via `@import 'tailwindcss'`. The `hr { border-top-width: 1px }` and `img { border-style: solid }` rules that followed it can also be removed — both are covered by Tailwind v4's own preflight.

### Important Note
This bug only affected border utilities because the reset only reset `border-*` properties. Other Tailwind utilities were completely unaffected. If `border-r` doesn't work but `flex-1` does, suspect this issue before investigating Tailwind config or source scanning.

---



When these bugs are found in amino source and the change is needed in `fe-6-account-web`:

1. Fix the source in amino, commit
2. Run `pnpm version:prealpha` (see `amino-alpha-release` skill)
3. Wait for CI to publish to npm, then update `fe-6-account-web/package.json`
4. Run `pnpm install` and clear `.next` cache: `rm -rf .next`

While waiting for npm publish, a temporary patch to `node_modules` can unblock local dev — but always follow up with a proper `pnpm install` once the new version is published.

---
name: tailwind-v4-migration
description: "Fix Tailwind v4 CSS parsing errors and migration issues in @zonos/amino components. USE FOR: Tailwind v4 migration, TW4 class errors, arbitrary selector bugs, nth-child errors, [&>*] specificity conflicts, CSS build errors after upgrading to Tailwind v4, double underscore class names, child selector overrides, border utilities not working, border-r border-t border-l border-b no effect. DO NOT USE FOR: general Tailwind usage, non-migration CSS questions, Tailwind v3 issues."
---

# Tailwind v4 Migration: Known Gotchas & Fixes

---

## Gotcha 1: Double Underscores in Arbitrary Selectors

**Symptom:** Selector like `[&_.__icon-wrapper]` compiles to `. icon-wrapper` (space after dot) — invalid CSS, no effect.

**Cause:** TW v4 converts every `_` to a space in arbitrary selectors, so `.__icon-wrapper` → `. icon-wrapper`.

**Fix:** Remove leading underscores from the target class name and all `[&_.__x]` references to it.

```tsx
// ❌ <div className="__icon-wrapper" />  +  [&_.__icon-wrapper]:w-amino-32
// ✅ <div className="icon-wrapper" />    +  [&_.icon-wrapper]:w-amino-32
```

---

## Gotcha 2: Nested Pseudo-selectors in `nth-[]`

**Symptom:** Build error or invalid CSS from `nth-[nth-last-child(2)]`.

**Cause:** `nth-[X]` becomes `:nth-child(X)`, so nesting another pseudo inside is invalid.

**Fix:** Use TW v4's built-in shorthands:

| Old (broken) | New |
|---|---|
| `nth-[nth-last-child(2)]` | `nth-last-2` |
| `nth-[nth-last-child(3)]` | `nth-last-3` |
| `nth-[last-child]` | `last:` |
| `nth-[first-child]` | `first:` |

---

## Gotcha 3: `[&>*]:` Child Selectors Override Children's Own Classes

**Symptom:** Child with `flex-1` computes as `flex: 0 1 auto` instead of `1 1 0%`. No build error.

**Cause:** In TW v4, arbitrary variants (`[&>*]:`) are grouped later in the stylesheet than regular utilities. When specificity is equal (both 0-1-0), the parent's later rule wins.

**Fix:** Make the `[&>*]:` class conditional — only apply it when the parent genuinely needs to override children:

```tsx
// ❌ Always applies, silently overrides all children
"flex [&>*]:flex-[var(--amino-flex-wrapper-flex-children)]"

// ✅ Only applies when a non-default value is set
cn("flex", childrenFlex !== 'initial' && "*:flex-(--amino-flex-wrapper-flex-children)")
```

Also gate the corresponding CSS custom property in `style`:
```tsx
style={{ ...(childrenFlex !== 'initial' && { "--amino-flex-wrapper-flex-children": childrenFlex }) }}
```

**Note:** Also migrate from `[&>*]:flex-[var(--x)]` → `*:flex-(--x)` (TW v4 CSS variable shorthand).

---

## Gotcha 4: `@config` Does Not Enable Source Scanning in Tailwind v4

**Symptom:** All Tailwind utilities appear in class lists but have no CSS effect. No `@layer utilities` block in any loaded stylesheet.

**Cause:** TW v4 silently ignores `content: []` arrays inside a `@config`-loaded v3 config. Source scanning requires `@source` directives.

**Fix:** Add `@source` to the CSS entry file (path is relative to the CSS file):

```css
@import 'tailwindcss';
@source '../**/*.{ts,tsx}';
@config '../../tailwind.config.ts';
```

**Verify:** After the fix, the compiled CSS should contain `.flex-1 { flex: 1 1 0% }` inside `@layer utilities`.

---

## Gotcha 5: Unlayered CSS in reset.css Overrides All Border Utilities

**Symptom:** Border-width utilities (`border-r`, `border-t`, `border-l`, `border-b`, `border-2`, etc.) have no visual effect — DevTools shows `border-right-width: 0px` even though the class is applied. Non-border utilities (flex, padding, etc.) work fine.

**Cause:** `amino/reset.css` had a TW v3 preflight block as **unlayered CSS**: `*, *::before, *::after { border-width: 0; border-style: solid; }`. Unlayered rules always beat `@layer` rules regardless of source order, so this silently overrides every border utility. (In TW v3 this was fine because the preflight was also unlayered; in TW v4 it moved into `@layer base`.)

**Fix:** Remove the unlayered border reset from `amino/src/styles/reset.css`. TW v4 emits the correct version inside `@layer base` via `@import 'tailwindcss'`.

**To confirm the root cause** — fetch the compiled bundle and check if `*, :before, :after { border... }` appears outside any `@layer` block:
```js
const text = await (await fetch('/_next/static/chunks/[bundle].css')).text();
const idx = text.indexOf('*, :before, :after');
console.log(text.slice(idx - 50, idx + 150));
```

---

## Quick Diagnostic Greps

```bash
# Gotcha 1: double-underscore in arbitrary selectors
grep -rn '\[&_\.' src/components/ | grep '__'

# Gotcha 2: nested nth pseudo-selectors
grep -rn 'nth-\[' src/components/

# Gotcha 3: unconditional [&>*]: flex/grid variants
grep -rn '\[&>\*\]:' src/components/

# Gotcha 5: unlayered border reset in reset.css
grep -n 'border-width: 0' node_modules/@zonos/amino/reset.css
```

---

## Releasing Fixes

When a bug is in amino source and needs to reach `fe-6-account-web`:

1. Fix in amino + commit
2. `pnpm version:prealpha` (see `amino-alpha-release` skill)
3. Once CI publishes to npm: `pnpm add @zonos/amino@x.x.x-alpha.N` in fe-6-account-web

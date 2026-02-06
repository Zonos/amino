# CSS Modules to Tailwind Migration Plan

> Phases 0-2 are complete. This document tracks Phases 3-7.
> Each parallel group is designed for a separate agent on the same branch.
> **Rule: No two agents touch the same files.**

## Status Overview

| Phase | Description                                                                   | Status         |
| ----- | ----------------------------------------------------------------------------- | -------------- |
| 0     | Infrastructure (tailwind.config.ts, cn.ts, postcss)                           | ✅ Done        |
| 1     | shadcn Primitives (src/components/ui/)                                        | ✅ Done        |
| 2     | Simple Leaf Components (badge, banner, divider, skeleton, spinner, tag, text) | ✅ Done        |
| 3     | Form + Layout Components (Wave 1+2)                                           | 🔲 Not started |
| 4     | Complex/Composite Components (Wave 3+4)                                       | 🔲 Not started |
| 5     | MUI Removal (Collapse, Tooltip, LanguageSelect)                               | 🔲 Not started |
| 6     | Non-component SCSS (animations, icons, global)                                | 🔲 Not started |
| 7     | Final Cleanup (zero SCSS, remove sass deps)                                   | 🔲 Not started |

## Already-Migrated Components

These use `cn()` + Tailwind and have no `.module.scss` files:

- `badge` — CVA with color/size/bold variants
- `banner` — CVA with intent variants + grid inline styles
- `divider` — Direct Tailwind classes
- `skeleton` — Tailwind + `after:` pseudo-element shimmer animation
- `spinner` — Color class map + custom keyframes
- `tag` — CVA with intent/size/highlighted variants
- `text` — Inline styles for dynamic typography

## Infrastructure in Place

- `tailwind.config.ts` — all amino theme tokens + keyframes (shimmer, spinner-rotate, spinner-dash, ripple, dropdown, dropdown-inverse, fade-in, slide-up, float, amino-pulse, wiggle)
- `src/styles/tailwind.css` — `@custom-variant dark` for night mode
- `src/utils/cn.ts` — clsx + tailwind-merge
- `components.json` — shadcn config
- PostCSS pipeline — `@tailwindcss/postcss` in both Rollup and Storybook

---

## Wave 1 — No Dependencies (fully parallel)

### Group A: Layout Primitives

> **SCSS files: ~12 · Dependency tier: 0 (none) · Status: 🔲**

**Exclusive directories:**

- `src/components/flex/`
- `src/components/stack/`
- `src/components/surface/`
- `src/components/rounded-icon/`
- `src/components/glow/`
- `src/components/text-avatar/`
- `src/components/split-panel/`
- `src/components/danger-zone/`

| Component    | SCSS Files                             | Notes                                                      |
| ------------ | -------------------------------------- | ---------------------------------------------------------- |
| flex         | Flex.module.scss                       | Simple layout utility                                      |
| stack        | Stack, VStack, HStack .module.scss (3) | Simple layout utilities                                    |
| surface      | Surface.module.scss + story            |                                                            |
| rounded-icon | RoundedIcon.module.scss                |                                                            |
| glow         | GlowWrapper.module.scss + story        | ⚠️ Complex `::after` with dynamic calc — use inline styles |
| text-avatar  | TextAvatar.module.scss                 |                                                            |
| split-panel  | SplitPanel.module.scss + story         |                                                            |
| danger-zone  | DangerZone.module.scss                 |                                                            |

---

### Group B: Form Basics

> **SCSS files: ~11 · Dependency tier: 1 (depends on already-migrated Text/Spinner) · Status: 🔲**

**Exclusive directories:**

- `src/components/checkbox/`
- `src/components/radio/`
- `src/components/switch/`
- `src/components/toggle/`
- `src/components/tabs/`
- `src/components/help-text/`
- `src/components/progress-bar/`
- `src/components/list-item/`

| Component    | SCSS Files                                | Notes                                                    |
| ------------ | ----------------------------------------- | -------------------------------------------------------- |
| checkbox     | Checkbox.module.scss + story              |                                                          |
| radio        | Radio.module.scss, RadioGroup.module.scss |                                                          |
| switch       | Switch.module.scss                        |                                                          |
| toggle       | Toggle.module.scss                        |                                                          |
| tabs         | Tabs.module.scss                          | ⚠️ Animated `::after` underline — 7 pseudo-element rules |
| help-text    | HelpText.module.scss                      | Imported by many later components                        |
| progress-bar | ProgressBar.module.scss                   |                                                          |
| list-item    | ListItem.module.scss                      |                                                          |

---

### Group C: Button Family

> **SCSS files: ~7 · Dependency tier: 1 · Status: 🔲**

**Exclusive directories:**

- `src/components/button/`

| Component           | SCSS Files                 | Notes                                                                                                        |
| ------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| button              | Button.module.scss         | Base button styles                                                                                           |
| button              | ButtonIcon.module.scss     | Icon button variant                                                                                          |
| button              | RippleGroup.module.scss    | ⚠️ `@keyframes rippleAnimation` uses CSS var `--amino-ripple-group-opacity` — keyframe in tailwind.config.ts |
| button              | MenuButton.module.scss     | Uses `DropdownAnimation` keyframe (in tailwind.config.ts)                                                    |
| button/**stories**  | Button.stories.module.scss |                                                                                                              |
| button/button-group | ButtonGroup.module.scss    | ⚠️ `::after` dividers between buttons + dark mode                                                            |

---

### Group F: Data Display

> **SCSS files: ~13 · Dependency tier: 1 · Status: 🔲**

**Exclusive directories:**

- `src/components/card/`
- `src/components/currency/`
- `src/components/rest-state/`
- `src/components/thumbnail/`
- `src/components/avatar/`
- `src/components/simple-table/`
- `src/components/list/`
- `src/components/menu/`

| Component    | SCSS Files                                                  | Notes                                                     |
| ------------ | ----------------------------------------------------------- | --------------------------------------------------------- |
| card         | Card.module.scss                                            |                                                           |
| currency     | Currency.module.scss, DualCurrency.module.scss              |                                                           |
| rest-state   | RestState.module.scss                                       |                                                           |
| thumbnail    | Thumbnail.module.scss                                       |                                                           |
| avatar       | AvatarBase.module.scss                                      |                                                           |
| simple-table | SimpleTable.module.scss, SimpleTableRow.module.scss + story | ⚠️ `:global()` for react-data-grid — use `[&_.rdg-class]` |
| list         | List.module.scss, CollapsibleList.module.scss               |                                                           |
| menu         | Menu.module.scss, MenuItem.module.scss                      |                                                           |

---

## Wave 2 — Depends on Wave 1 (parallel within wave)

### Group D: Input Family

> **SCSS files: ~13 · Depends on: HelpText (Group B) · Status: 🔲**

**Exclusive directories:**

- `src/components/input/`
- `src/components/textarea/`

| Component                     | SCSS Files                                                                      | Notes                                              |
| ----------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------- |
| input                         | Input.module.scss, MultiInput.module.scss                                       |                                                    |
| input/input-type              | \_NumberInput, \_FloatLabelInput, \_PasswordInput, \_TimeInput, \_DateInput (5) | ⚠️ `_FloatLabelInput` has `::after` border overlay |
| input/input-simple            | InputSimple.module.scss                                                         |                                                    |
| input/input-simple/input-type | \_DateInput, \_TimeInput, \_InputBase, \_NumberInput, \_PasswordInput (5)       |                                                    |
| textarea                      | Textarea.module.scss                                                            | ⚠️ `::after` for focus ring overlay                |

---

### Group E: Select + Dialog

> **SCSS files: ~10 · Depends on: Button (Group C), HelpText (Group B) · Status: 🔲**

**Exclusive directories:**

- `src/components/select/`
- `src/components/dialog/`

| Component           | SCSS Files                                                 | Notes                                                                              |
| ------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| select              | \_StyledReactSelect.module.scss                            | ⚠️ Heavy `:global()` targeting react-select classes                                |
| select              | LanguageSelect.module.scss + story                         | ⚠️ Still imports `@mui/material` Popover — migrate SCSS only, defer MUI to Phase 5 |
| dialog              | BaseDialog.module.scss                                     |                                                                                    |
| dialog              | Dialog.module.scss                                         |                                                                                    |
| dialog              | DismissableDialog.module.scss                              |                                                                                    |
| dialog/**stories**  | Dialog.stories.module.scss, BaseDialog.stories.module.scss |                                                                                    |
| dialog/announcement | AnnouncementDialog.module.scss + story                     |                                                                                    |

---

## Wave 3 — Depends on Waves 1+2

### Group G: Composite Components

> **SCSS files: ~19 · Depends on: Groups B through F · Status: 🔲**

**Exclusive directories:**

- `src/components/cover-sheet/`
- `src/components/slide-over/`
- `src/components/section/`
- `src/components/filter/`
- `src/components/toast/`
- `src/components/file-upload/`
- `src/components/drop-zone/`
- `src/components/rich-radio/`
- `src/components/rich-checkbox/`
- `src/components/rich-card-select/`

| Component                  | SCSS Files                                                                                     | Notes                |
| -------------------------- | ---------------------------------------------------------------------------------------------- | -------------------- |
| cover-sheet                | CoverSheet.module.scss, CoverSheetActions.module.scss + story                                  |                      |
| slide-over                 | SlideOver.module.scss + story                                                                  |                      |
| section                    | \_SectionHeader, \_SectionSubheader, \_SectionInnerWrapper, HSection, VSection (5) + 2 stories |                      |
| filter                     | FilterWrapper.module.scss + story                                                              | ⚠️ `:global()` usage |
| filter/filter-amount       | FilterAmount.module.scss                                                                       |                      |
| filter/filter-date         | DateControls.module.scss                                                                       |                      |
| filter/filter-multi-select | FilterMultiSelect.module.scss                                                                  |                      |
| toast                      | Toast.module.scss, ToastContext.module.scss + story                                            |                      |
| file-upload                | FileUpload.module.scss                                                                         |                      |
| drop-zone                  | DropZone.module.scss                                                                           |                      |
| rich-radio                 | RichRadio.module.scss                                                                          |                      |
| rich-checkbox              | RichCheckbox.module.scss                                                                       |                      |
| rich-card-select           | RichCardStateSelect.module.scss                                                                |                      |

---

## Wave 4 — Heavy/Special Components

### Group H: Heavy + Special

> **SCSS files: ~15 · Depends on: many · Status: 🔲**

**Exclusive directories:**

- `src/components/layout/`
- `src/components/nested-data-table/`
- `src/components/pivot-table/`
- `src/components/json-vision-viewer/`
- `src/components/country-multi-select/`
- `src/components/theme-select/`
- `src/components/language-picker/`
- `src/components/connection-map/`

| Component            | SCSS Files                                                                         | Notes                                                                                                             |
| -------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| layout               | Layout.module.scss, NavigationGroup.module.scss + 2 stories                        | Grid template with sidebar width                                                                                  |
| nested-data-table    | NestedDataTable.module.scss, \_TableData.module.scss, \_Filter.module.scss + story | ⚠️ Heavy `:global()` targeting internal table classes                                                             |
| pivot-table          | PivotTable.module.scss                                                             | `:global()` for react-data-grid                                                                                   |
| json-vision-viewer   | JsonVisionViewer.module.scss                                                       |                                                                                                                   |
| country-multi-select | CountryMultiSelectExpanded.module.scss                                             |                                                                                                                   |
| theme-select         | ThemeSelect.module.scss                                                            |                                                                                                                   |
| language-picker      | LanguagePicker.module.scss                                                         | ⚠️ 5 custom keyframes (in tailwind.config.ts), custom `@media (max-width: 525px)` breakpoint — use `max-[525px]:` |
| connection-map       | ConnectionMapStories.module.scss                                                   | Story-only                                                                                                        |

---

## Post-Steps (Sequential)

### Phase 5: MUI Removal

| Component                 | MUI Usage                        | Replacement                                                       |
| ------------------------- | -------------------------------- | ----------------------------------------------------------------- |
| collapse/Collapse.tsx     | `@mui/material/Collapse`         | CSS `grid-template-rows: 0fr/1fr` transition or Radix Collapsible |
| tooltip/Tooltip.tsx       | `@mui/material/Tooltip` + styles | shadcn tooltip (already in ui/)                                   |
| select/LanguageSelect.tsx | `@mui/material` Popover          | shadcn popover (already in ui/)                                   |

### Phase 6: Non-Component SCSS

| File                                              | Notes                                                                               |
| ------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `src/animations/DropdownAnimation.module.scss`    | Replaced by keyframes in tailwind.config.ts — delete + update imports               |
| `src/styles/global.module.scss`                   | 3 utility classes (.focusable, .focusableLabel, .inputHidden) — convert to Tailwind |
| `src/icons/flag-icon/_FlagIconBase.module.scss`   | Icon-specific styles                                                                |
| `src/icons/__stories__/Icons.stories.module.scss` | Story-only                                                                          |
| `src/icons/__stories__/Flags.stories.module.scss` | Story-only                                                                          |
| `src/__stories__/Ripple.stories.module.scss`      | Story-only                                                                          |

### Phase 7: Final Cleanup

1. Un-skip Phase 7 tests in `migration-completeness.test.ts`
2. Remove from `package.json`: `sass`, `typed-scss-modules`, `eslint-plugin-css-modules`
3. Remove SCSS-related config from `eslint.config.mjs`
4. Update `CLAUDE.md` to reference Tailwind instead of SCSS modules
5. Run full build: `pnpm build`
6. Visual regression check in Storybook

---

## Agent Prompt Template

Fill in `[DIRECTORIES]` and `[NOTES]`:

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Amino is Zonos's React UI component library (`@zonos/amino`). It provides building blocks for cross-border commerce experiences. Components are built with TypeScript, functional React, and SCSS modules.

## Common Commands

```bash
# Development
pnpm install && pnpm build:theme    # Initial setup
pnpm dev                            # Start dev server with Storybook + SCSS type watching
pnpm dev:open                       # Same as above but opens browser

# Building
pnpm build                          # Full production build
pnpm build:ci                       # CI build (theme + scss types + ts + dts)
pnpm build:theme                    # Generate theme CSS/SCSS from constants
pnpm build:scss:types               # Generate TypeScript types for SCSS modules

# Testing
pnpm test                           # Run Vitest tests
pnpm test:prod                      # Run tests in CI mode (no watch)
pnpm test:pw                        # Playwright visual tests (requires Storybook running)
pnpm test:sb                        # Storybook test runner

# Linting & Type Checking
pnpm lint                           # ESLint
pnpm lint:fix                       # ESLint with auto-fix
pnpm tsc                            # TypeScript check (no emit)

# Icon/Flag Generation
pnpm svgs:react:icons               # Generate icon components from SVGs
pnpm svgs:react:flags               # Generate flag components from SVGs

# Versioning (creates tag and pushes)
pnpm version:patch                  # Patch release
pnpm version:minor                  # Minor release
pnpm version:major                  # Major release
```

## Architecture

### Component Structure

Each component lives in `src/components/{component-name}/` with:

- `{Component}.tsx` - Main component file
- `{Component}.module.scss` - SCSS module styles
- `{Component}.module.scss.d.ts` - Auto-generated types (via `typed-scss-modules`)
- `__stories__/` - Storybook stories
- `__tests__/` - Vitest tests

### Theme System

Theme variables are generated from `build-utils/css/constants/`:

- `theme.ts` - Light theme (source of truth)
- `_night.ts` - Dark theme (extends light theme keys)

Generated outputs:

- `src/styles/constants/theme.ts` - TypeScript theme object with CSS variable references
- `src/styles/theme.css` - CSS custom properties
- `src/styles/theme.scss` - SCSS variables

### Path Aliases (tsconfig.json)

```text
src/*       → ./src/*
svgReact/*  → ./svgReact/*
story-utils/* → ./.storybook/utils/*
```

### Export Pattern

All public exports go through `src/all.ts` which is auto-generated during build.

### Translations

All user-facing text in amino components must be translated. The system supports 18 languages.

**Directory structure:**

- `src/utils/internal/` - Internal utilities (NOT exported to consumers)
  - `translateAminoText.ts` - Internal translation function
  - `strings/*.json` - Translation files per language (english keys → translated values)
- `src/utils/translations/` - Public utilities (exported to consumers)
  - `AminoTranslationStore.ts` - Zustand store for translation state
  - `handleTranslationVariables.tsx` - Variable interpolation utility
- `src/components/internal/TranslateAminoText.tsx` - `<Translate>` component for use within amino

**Using translations in components:**

```typescript
import { translate } from 'src/utils/internal/translateAminoText';
import { Translate } from 'src/components/internal/TranslateAminoText';

// translate() function - returns a string, requires passing languageCode
const label = translate({ text: "Close", languageCode });
const message = translate({
  text: "[count] items selected",
  languageCode,
  variables: { count: 5 },
});

// <Translate> component - auto-reads language from context, supports JSX variables
<Translate text="Close" />

<Translate
  text="[selectedCountries] of [numSelectableCountries] selected"
  variables={{ selectedCountries: 5, numSelectableCountries: 10 }}
/>

// JSX variables (only supported in <Translate>, not translate())
<Translate
  text="See [zonosTermsOfService] and [upsTechnologyAgreement]."
  variables={{
    zonosTermsOfService: <a href="...">Zonos terms of service</a>,
    upsTechnologyAgreement: <a href="...">UPS Technology Agreement</a>,
  }}
/>
```

**Adding context to disambiguate translations:**

```json
"Clear all --context: button text referencing clearing all toasts": "Borrar todo"
```

**Adding new translatable strings:**

1. Add the English key to all JSON files in `src/utils/internal/strings/`
2. Run `pnpm translate` to generate translations (requires zonos.com repo sibling)

## Code Conventions

### Component Props

- All component props extend `BaseProps` (provides `className` and `style`)
- Use named exports, not default exports
- Include explicit return types
- Props interface named `{Component}Props`

```typescript
import type { BaseProps } from 'src/types/BaseProps';

export type ButtonProps = BaseProps & {
  /** @default 'primary' */
  variant?: 'primary' | 'secondary';
};

export const Button = ({
  className,
  variant = 'primary',
}: ButtonProps): ReactNode => {
  // ...
};
```

### Styling

- Use CSS modules with SCSS (`.module.scss` files)
- Use `clsx` for conditional classnames
- Use CSS variables with `--amino-` prefix
- Import theme values from `src/styles/constants/theme.ts` instead of hardcoding
- Dynamic styles use CSS custom properties in style attribute: `style={{ '--amino-custom': value }}`

### TypeScript

- Use `import type` for type-only imports (required by `verbatimModuleSyntax`)
- `noUncheckedIndexedAccess` is enabled - guard array access with optional chaining
- Avoid `any` - use specific types or `unknown`

### Import Order

1. External libraries
2. React imports
3. Third-party libraries (clsx, etc.)
4. Internal absolute imports (`src/...`)
5. Relative imports
6. Style imports (last)

### File Naming

Files prefixed with `_` are internal and won't appear in VS Code auto-import suggestions.

## Testing

- **Unit tests**: Vitest with jsdom environment
- **Visual tests**: Playwright (requires Storybook running on port 6006)
- **Storybook tests**: `test-storybook` runner
- Test files: `**/*.test.ts` in `__tests__/` directories

## Commit Messages

Use conventional commits: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Example: `feat(button): add support for xl size`

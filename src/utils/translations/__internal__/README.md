# Internal Utilities

This directory contains amino-specific utilities that are **NOT exported** in the public bundle.

## Purpose

- ✅ **Internal use only** - These utilities are for amino components and internal functionality
- ❌ **Not exported** - These are NOT included in `src/all.ts` and won't appear in the consuming projects' bundle
- 🔒 **Amino-specific** - These utilities use amino's internal resources (like string files, internal APIs, etc.)

## Examples

- `translateAminoText.ts` - Internal translation utility that uses amino's string files
- `strings/` - Amino's internal translation files

## Usage Pattern

```typescript
// ✅ Good - Internal components can import from here
import { translateAminoText } from 'src/utils/internal/translateAminoText';

// ❌ Bad - Don't export these in src/all.ts
import './utils/internal/translateAminoText'; // Don't do this in all.ts
```

## Directory Structure

```
src/utils/
├── __internal__/          # 🔒 Not exported - amino-specific utilities
│   ├── translateAminoText.ts
│   └── strings/
└── translations/      # ✅ Exported - public utilities for consuming projects
    ├── handleTranslationVariables.tsx
    ├── extractTextKeys.ts
    └── index.ts
```

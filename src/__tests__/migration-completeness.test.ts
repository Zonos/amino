import fs from 'fs';
import { glob } from 'glob';
import path from 'path';
import { describe, expect, it } from 'vitest';

/**
 * Migration Completeness Test Suite
 *
 * These tests verify the progress of the CSS Modules → Tailwind + shadcn migration.
 * Tests for later phases are skipped until those phases are in progress.
 * An agent can iterate until all tests in a given phase pass.
 */

describe('Migration: Phase 0 — Infrastructure', () => {
  it('tailwind.config.ts exists', () => {
    expect(fs.existsSync('tailwind.config.ts')).toBe(true);
  });

  it('src/styles/tailwind.css exists', () => {
    expect(fs.existsSync('src/styles/tailwind.css')).toBe(true);
  });

  it('src/utils/cn.ts exists', () => {
    expect(fs.existsSync('src/utils/cn.ts')).toBe(true);
  });

  it('components.json exists', () => {
    expect(fs.existsSync('components.json')).toBe(true);
  });

  it('package.json contains tailwind dependencies', () => {
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8')) as {
      dependencies: Record<string, string>;
      devDependencies: Record<string, string>;
    };
    const allDeps = {
      ...pkg.dependencies,
      ...pkg.devDependencies,
    };
    expect(allDeps).toHaveProperty('tailwindcss');
    expect(allDeps).toHaveProperty('tailwind-merge');
    expect(allDeps).toHaveProperty('class-variance-authority');
    expect(allDeps).toHaveProperty('@tailwindcss/postcss');
    expect(allDeps).toHaveProperty('tailwindcss-animate');
  });

  it('postcss.config.mts references @tailwindcss/postcss', () => {
    const content = fs.readFileSync('postcss.config.mts', 'utf-8');
    expect(content).toContain('@tailwindcss/postcss');
  });

  it('storybook preview imports tailwind.css', () => {
    const content = fs.readFileSync('.storybook/preview.tsx', 'utf-8');
    expect(content).toContain('tailwind.css');
  });
});

describe('Migration: Phase 1 — shadcn Primitives', () => {
  it('src/components/ui directory exists', () => {
    expect(fs.existsSync('src/components/ui')).toBe(true);
  });

  const requiredPrimitives = [
    'button',
    'dialog',
    'badge',
    'card',
    'checkbox',
    'input',
    'select',
    'tooltip',
    'popover',
  ];

  requiredPrimitives.forEach(component => {
    it(`ui/${component}.tsx exists`, () => {
      expect(fs.existsSync(`src/components/ui/${component}.tsx`)).toBe(true);
    });
  });
});

describe('Migration: Phase 2 — Simple Leaf Components', () => {
  const simpleComponents = [
    'badge',
    'banner',
    'divider',
    'spinner',
    'skeleton',
    'tag',
    'text',
    'truncated-text',
  ];

  simpleComponents.forEach(component => {
    it(`${component} has no .module.scss`, () => {
      const scssFiles = glob.sync(
        `src/components/${component}/**/*.module.scss`,
      );
      expect(scssFiles).toHaveLength(0);
    });
  });
});

describe('Migration: Phase 3 — Wave 1 Components', () => {
  const wave1Components = [
    'avatar',
    'button',
    'card',
    'checkbox',
    'currency',
    'danger-zone',
    'flex',
    'glow',
    'help-text',
    'list',
    'list-item',
    'menu',
    'progress-bar',
    'radio',
    'rest-state',
    'rounded-icon',
    'simple-table',
    'split-panel',
    'stack',
    'surface',
    'switch',
    'tabs',
    'text-avatar',
    'thumbnail',
    'toggle',
  ];

  wave1Components.forEach(component => {
    it(`${component} has no .module.scss`, () => {
      const scssFiles = glob.sync(
        `src/components/${component}/**/*.module.scss`,
      );
      expect(scssFiles).toHaveLength(0);
    });
  });
});

describe('Migration: Phase 3 — Wave 3 Rich Components', () => {
  const richComponents = ['rich-card-select', 'rich-checkbox', 'rich-radio'];

  richComponents.forEach(component => {
    it(`${component} has no .module.scss`, () => {
      const scssFiles = glob.sync(
        `src/components/${component}/**/*.module.scss`,
      );
      expect(scssFiles).toHaveLength(0);
    });
  });
});

describe('Migration: Phase 4 — Complex/Composite Components', () => {
  const complexComponents = [
    'connection-map',
    'country-multi-select',
    'cover-sheet',
    'dialog',
    'drop-zone',
    'file-upload',
    'filter',
    'input',
    'json-vision-viewer',
    'language-picker',
    'layout',
    'nested-data-table',
    'pivot-table',
    'section',
    'select',
    'slide-over',
    'textarea',
    'theme-select',
    'table',
    'toast',
    'tooltip',
  ];

  complexComponents.forEach(component => {
    it(`${component} has no .module.scss`, () => {
      const scssFiles = glob.sync(
        `src/components/${component}/**/*.module.scss`,
      );
      expect(scssFiles).toHaveLength(0);
    });
  });
});

describe('Migration: Phase 5 — MUI Removal', () => {
  const testFile = 'src/__tests__/migration-completeness.test.ts';

  it('no @mui/material imports in src/', () => {
    const tsxFiles = glob.sync('src/**/*.{ts,tsx}').filter(f => f !== testFile);
    const muiImports = tsxFiles.filter(f => {
      const content = fs.readFileSync(f, 'utf-8');
      return content.includes('@' + 'mui/material');
    });
    expect(muiImports).toHaveLength(0);
  });

  it('no @emotion imports in src/', () => {
    const tsxFiles = glob.sync('src/**/*.{ts,tsx}').filter(f => f !== testFile);
    const emotionImports = tsxFiles.filter(f => {
      const content = fs.readFileSync(f, 'utf-8');
      return content.includes('@' + 'emotion/');
    });
    expect(emotionImports).toHaveLength(0);
  });
});

describe('Migration: Phase 7 — Final Cleanup', () => {
  it('no .module.scss files remain in src/', () => {
    const scssFiles = glob.sync('src/**/*.module.scss');
    expect(scssFiles).toHaveLength(0);
  });

  it('no .module.scss.d.ts files remain in src/', () => {
    const dtsFiles = glob.sync('src/**/*.module.scss.d.ts');
    expect(dtsFiles).toHaveLength(0);
  });

  it('deprecated dependencies removed from package.json', () => {
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8')) as {
      dependencies: Record<string, string>;
      devDependencies: Record<string, string>;
    };
    const allDeps = {
      ...pkg.dependencies,
      ...pkg.devDependencies,
    };
    const deprecated = ['typed-scss-modules', 'eslint-plugin-css-modules'];
    deprecated.forEach(dep => {
      expect(allDeps).not.toHaveProperty(dep);
    });
  });

  it('cn() is used in at least 50 component files', () => {
    const tsxFiles = glob.sync('src/components/**/*.tsx');
    const cnUsers = tsxFiles.filter(f => {
      const content = fs.readFileSync(f, 'utf-8');
      return /from\s+['"].*cn['"]/.test(content);
    });
    expect(cnUsers.length).toBeGreaterThanOrEqual(50);
  });
});

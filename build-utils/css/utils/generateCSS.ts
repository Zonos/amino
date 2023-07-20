import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { format, resolveConfig, resolveConfigFile } from 'prettier';

import { night } from '../constants/_night';
import { theme } from '../constants/theme';

import { theme as aminoTheme } from '../../../src/styles/constants/theme';

/**
 * Format css file using prettier api
 * @param content File content to format
 * */
export const formatCSS = async (content: string) => {
  const configFile = await resolveConfigFile();
  const options = (await resolveConfig(configFile || '')) || {};
  return format(content, {
    ...options,
    parser: 'css',
  });
};

/**
 * Generate Light theme content base on configured light theme constant
 * @param themeConstant theme constant (files that has all the styles - Ex: theme.ts/_night.ts)
 * @returns formated css file
 */
export const generateLightThemeContent = async <
  T extends Record<string, string>,
>(
  themeConstant: T,
) => {
  /** Generate file content */
  const content = Object.entries(themeConstant)
    .map(([key, value]) => `--amino-${key}: ${value};`)
    .join('\n');

  const fullContent = `
  :root, [data-theme="day"] {
    ${content}
  }`;

  return formatCSS(fullContent);
};

/**
 * Generate Night theme content base on configured night theme constant
 * @param themeConstant theme constant (files that have all the styles - Ex: theme.ts/_night.ts)
 * @returns formated css file
 */
export const generateNightThemeContent = async <
  T extends Record<string, string>,
>(
  themeConstant: T,
) => {
  /** Generate file content */
  const content = Object.entries(themeConstant)
    .map(([key, value]) => `--amino-${key}: ${value};`)
    .join('\n');

  const fullContent = `
  [data-theme='night'] {
    ${content}

    /* Fix for dark mode surface hover color. Dark mode surfaces have a lighter color than day mode inverted to see shadows better. */
    .elevated {
      --amino-hover-color: ${aminoTheme.gray100};
    }
  }`;

  return formatCSS(fullContent);
};

/**
 * Generate two css snapshots for two themes.
 * Located at 'build-utils/css/utils/__tests__/__previous-test-files__'
 * @info light theme snapshot name: theme.css
 * @info night theme snapshot name: night-theme.css
 */
export const generateThemeCapture = async () => {
  const themeContent = await generateLightThemeContent(theme);
  const nightThemeContent = await generateNightThemeContent(night);
  const rootFolder = process.cwd();
  const path = `${rootFolder}/build-utils/css/utils/__tests__/__previous-test-files__`;

  if (!existsSync(path)) {
    mkdirSync(path);
  }
  /** @desc write to destination */
  writeFileSync(`${path}/theme.css`, themeContent);
  writeFileSync(`${path}/night-theme.css`, nightThemeContent);
};

/**
 * Generate formated CSS file (merged 2 themes together) to destination folder
 * @param destinationPath Destination folder that generated css file would be located
 */
export const generateCSS = async (destinationPath: string) => {
  const themeContent = await generateLightThemeContent(theme);
  const nightThemeContent = await generateNightThemeContent(night);
  const rootFolder = process.cwd();
  const path = `${rootFolder}/${destinationPath}`;

  if (!existsSync(path)) {
    mkdirSync(path);
  }
  const content = await formatCSS(`
  ${themeContent}
  /* Night theme */
  ${nightThemeContent}
  `);
  /** @desc write to destination */
  writeFileSync(`${path}/theme.css`, content);
};

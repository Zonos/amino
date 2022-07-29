import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { format, resolveConfig, resolveConfigFile } from 'prettier';

import { darkStyleList } from '../constants/_darkTheme';
import { theme } from '../constants/theme';

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
 * @param themeConstant theme constant (files that has all the styles - Ex: theme.ts/_darkTheme.ts)
 * @returns formated css file
 */
export const generateLightThemeContent = async <
  T extends Record<string, string>
>(
  themeConstant: T
) => {
  /** Generate file content */
  const content = Object.entries(themeConstant)
    .map(([key, value]) => `--amino-${key}: ${value};`)
    .join('\n');

  const fullContent = `
  :root {
    ${content}
  }`;

  return formatCSS(fullContent);
};

/**
 * Generate Dark theme content base on configured dark theme constant
 * @param themeConstant theme constant (files that have all the styles - Ex: theme.ts/_darkTheme.ts)
 * @returns formated css file
 */
export const generateDarkThemeContent = async <
  T extends Record<string, string>
>(
  themeConstant: T
) => {
  /** Generate file content */
  const content = Object.entries(themeConstant)
    .map(([key, value]) => `--amino-${key}: ${value};`)
    .join('\n');

  const fullContent = `
  [data-theme='dark'] {
    ${content}
  }`;

  return formatCSS(fullContent);
};

/**
 * Generate two css snapshots for two themes.
 * Located at 'build-utils/css/utils/__snapshots__'
 * @info light theme snapshot name: theme.css
 * @info dark theme snapshot name: dark-theme.css
 */
export const generateSnapshots = async () => {
  const themeContent = await generateLightThemeContent(theme);
  const darkThemeContent = await generateDarkThemeContent(darkStyleList);
  const rootFolder = process.cwd();
  const path = `${rootFolder}/build-utils/css/utils/__snapshots__`;

  if (!existsSync(path)) {
    mkdirSync(path);
  }
  /** @desc write to destination */
  writeFileSync(`${path}/theme.css`, themeContent);
  writeFileSync(`${path}/dark-theme.css`, darkThemeContent);
};

/**
 * Generate formated CSS file (merged 2 themes together) to destination folder
 * @param destinationPath Destination folder that generated css file would be located
 */
export const generateCSS = async (destinationPath: string) => {
  const themeContent = await generateLightThemeContent(theme);
  const darkThemeContent = await generateDarkThemeContent(darkStyleList);
  const rootFolder = process.cwd();
  const path = `${rootFolder}/${destinationPath}`;

  if (!existsSync(path)) {
    mkdirSync(path);
  }
  const content = await formatCSS(`
  ${themeContent}
  /* Dark theme */
  ${darkThemeContent}
  `);
  /** @desc write to destination */
  writeFileSync(`${path}/theme.css`, content);
};

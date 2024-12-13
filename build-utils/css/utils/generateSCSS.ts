import { theme } from 'build-utils/css/constants/theme';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { format, resolveConfig, resolveConfigFile } from 'prettier';

/**
 * Format scss file using prettier api
 * @param content File content to format
 * */
export const formatSCSS = async (content: string) => {
  const configFile = await resolveConfigFile();
  const options = (await resolveConfig(configFile || '')) || {};
  return format(content, {
    ...options,
    parser: 'scss',
  });
};

/**
 * Generate theme scss content base on configured theme constant
 * @param themeConstant theme constant (files that has all the styles)
 * @returns formated scss file
 */
export const generateThemeScssContent = async <
  T extends Record<string, string>,
>(
  themeConstant: T,
) => {
  /** Generate file content */
  const content = Object.entries(themeConstant)
    .map(([key]) => `$amino-${key}: var(--amino-${key});`)
    .join('\n');

  return formatSCSS(content);
};

/**
 * Generate formated CSS file (merged 2 themes together) to destination folder
 * @param destinationPath Destination folder that generated css file would be located
 */
export const generateSCSS = async (destinationPath: string) => {
  const themeContent = await generateThemeScssContent(theme);
  const rootFolder = process.cwd();
  const path = `${rootFolder}/${destinationPath}`;

  if (!existsSync(path)) {
    mkdirSync(path);
  }
  const content = await formatSCSS(`
  /** Base amino theme scss variable */
  ${themeContent}
  `);
  /** @desc write to destination */
  writeFileSync(`${path}/theme.scss`, content);
  console.info(`Generated theme scss file to ${path}/theme.scss`);
};

import { convertPascalCaseToCamelCase } from 'build-utils/css/utils/convertPascalCaseToCamelCase';

/**
 * Format color name to kebab-case
 * @example "camelCase" => "camel-case"
 * */
export const convertToKebabCase = (name: string) =>
  convertPascalCaseToCamelCase(name)
    .replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)
    .toLowerCase();

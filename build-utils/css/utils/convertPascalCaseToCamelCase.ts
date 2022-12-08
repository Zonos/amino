/**
 * Format color name to camelCase
 * svgs got from figma currently in format `Blue800`.
 * So just need to lowercase the first letter
 * */
export const convertPascalCaseToCamelCase = (name: string) =>
  name.charAt(0).toLowerCase() + name.slice(1);

import { getHspFromColor } from './getColorContrast';

export const sortColorMatch = (a: string, b: string) =>
  getHspFromColor(a).hsp < getHspFromColor(b).hsp ? 1 : -1;

export const getColorVariables = (fileContent: string) => {
  let content = fileContent;
  const fillPropMatches = content.matchAll(
    /<(path|rect).*?fill=(".*?").*?\/>/gm
  );
  const matches = Array.from(fillPropMatches);
  const fillColors = matches
    .map(x => x[2])
    .sort((a, b) => (getHspFromColor(a).hsp < getHspFromColor(b).hsp ? -1 : 1));
  fillColors.forEach(color => {
    if (!/currentColor/g.test(content)) {
      /** @desc Replace the first color with the variable currentColor */
      content = content.replace(new RegExp(`${color}`, 'gi'), '"currentColor"');
    } else if (!/secondaryColor/g.test(content)) {
      /** @desc Replace the second color with the variable secondaryColor */
      content = content.replace(
        new RegExp(`${color}`, 'gi'),
        `{secondaryColor ? \`\${theme[secondaryColor]}\` : \`\${theme.gray300}\`} data-is-secondary-color="true" `
      );
    }
  });
  return content;
};

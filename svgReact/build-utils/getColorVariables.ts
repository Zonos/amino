import { getHspFromColor } from 'svgReact/build-utils/getColorContrast';

export const sortColorMatch = (a: string, b: string) =>
  getHspFromColor(a).hsp < getHspFromColor(b).hsp ? 1 : -1;

export const getColorVariables = ({
  fileContent,
  isDuotone,
}: {
  fileContent: string;
  isDuotone: boolean;
}) => {
  let content = fileContent;
  // Every tag (except svg) with a fill attribute
  const fillPropMatches = content.matchAll(
    /<(\w+\b(?<!\bsvg)).*?fill=(".*?").*?\/>/gm,
  );
  const matches = Array.from(fillPropMatches);

  const fillColors = matches
    .map(x => x[2])
    .sort((a, b) =>
      getHspFromColor(a!).hsp < getHspFromColor(b!).hsp ? -1 : 1,
    );
  fillColors.forEach(color => {
    if (!/currentColor/g.test(content)) {
      /** @desc Replace the first color with the variable currentColor */
      content = content.replace(new RegExp(`${color}`, 'gi'), '"currentColor"');
    } else if (!/secondaryColor/g.test(content)) {
      /** @desc Replace the second color with the variable secondaryColor */
      const defaultSecondaryColor = isDuotone ? '`${theme.gray400}`' : `'#fff'`;
      content = content.replace(
        new RegExp(`${color}`, 'gi'),
        `{secondaryColor ? \`\${theme[secondaryColor]}\` : ${defaultSecondaryColor}} data-is-secondary-color="true" `,
      );
    }
  });
  return content;
};

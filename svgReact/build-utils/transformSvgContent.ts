import { getColorVariables } from 'svgReact/build-utils/getColorVariables';

const addWrapper = (id: string) => `{\`${id}\`}`;

type Params = {
  content: string;
  isDuotone: boolean;
  skipColorReplacing: boolean;
};

export const transformSvgContent = ({
  content,
  isDuotone,
  skipColorReplacing,
}: Params) => {
  let result = content;
  // We need to preserve the viewbox
  const viewBoxMatches = result.match(/viewBox="(.*?)"/g);
  const viewBoxes = viewBoxMatches
    ? viewBoxMatches.map(x => x.replace(/viewBox=/, '').replace(/"/g, ''))
    : [];
  const viewBox = viewBoxes.find(Boolean) || '0 0 24 24';

  // We need our ids to be unique
  const maskIdMatches = result.match(/id="(.*?)"/g);
  const maskIds = maskIdMatches
    ? maskIdMatches.map(x => x.replace(/id=/, '').replace(/"/g, ''))
    : [];
  maskIds.forEach((maskId, index) => {
    const idRegex = new RegExp(`"${maskId}"`, 'gi');
    const urlRegex = new RegExp(`"url\\(#${maskId}\\)"`, 'gi');
    const hrefRegex = new RegExp(`xlink:href="#${maskId}"`, 'gi');
    const newId = `\${uniqueId}-${index}`;
    result = result
      .replace(idRegex, `${addWrapper(newId)}`)
      .replace(urlRegex, `${addWrapper(`url(#${newId})`)}`)
      .replace(hrefRegex, `xlink:href=${addWrapper(`#${newId}`)}`);
  });

  // Edge cases
  result = result
    .replace(/xlink:href/g, 'xlinkHref')
    .replace(/style="mask-type:alpha"/gi, `style={{ maskType: 'alpha' }}`);

  // Camelcase attributes
  result = result.replace(/-([a-z])/g, (m, w) => w.toUpperCase());

  // Process color
  result = skipColorReplacing
    ? result
    : getColorVariables({ fileContent: result, isDuotone });

  const hasSecondaryColor = /secondaryColor/.test(result);

  // Make TSX friendly
  result = result
    // Remove style props
    .replace(/style="([^"]*)"/gi, ``)
    // Remove <svg>
    .replace(/<svg(.*?)>/gi, '')
    // Remove </svg>
    .replace(/<\/svg>/gi, '');

  return {
    content: result,
    hasSecondaryColor,
    maskIds,
    viewBox,
  };
};

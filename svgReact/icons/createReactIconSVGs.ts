import fs from 'fs';

import { getColorVariables } from './getColorVariables';
import { GenerateIconType } from './types/TypeGenerateIcon';

const addWrapper = (id: string) => `{\`${id}\`}`;

export const createReactIconSVGs = ({
  names,
  inputFolder,
  outputFolder,
}: GenerateIconType): void => {
  names.forEach(name => {
    let fileContent = fs.readFileSync(
      `${inputFolder}/${name.originalFileName}`,
      {
        encoding: 'utf8',
      }
    );

    /** @desc We need to preserve the viewbox */
    const viewBoxMatches = fileContent.match(/viewBox="(.*?)"/g);
    const viewBoxes = viewBoxMatches
      ? viewBoxMatches.map(x => x.replace(/viewBox=/, '').replace(/"/g, ''))
      : [];
    const viewBox = viewBoxes.find(Boolean) || '0 0 24 24';

    /** @desc We need our ids to be unique */
    const maskIdMatches = fileContent.match(/id="(.*?)"/g);
    const maskIds = maskIdMatches
      ? maskIdMatches.map(x => x.replace(/id=/, '').replace(/"/g, ''))
      : [];
    maskIds.forEach((maskId, index) => {
      const idRegex = new RegExp(`"${maskId}"`, 'gi');
      const urlRegex = new RegExp(`"url\\(#${maskId}\\)"`, 'gi');
      const newId = `\${ids[${index}]}`;
      fileContent = fileContent
        .replace(idRegex, `${addWrapper(newId)}`)
        .replace(urlRegex, `${addWrapper(`url(#${newId})`)}`);
    });

    /** @desc Process color */
    const colorVariableContent = getColorVariables(fileContent);

    const svg = colorVariableContent
      .replace(/(?!\w):\w/g, attribute =>
        attribute.replace(':', '').toUpperCase()
      )
      /** @desc Remove style props */
      .replace(/style="([^"]*)"/gi, '')
      /** @desc Remove <svg > */
      .replace(/<svg(.*?)>/gi, '')
      /** @desc Remove </svg > */
      .replace(/<\/svg>/gi, '');

    const hasSecondaryColor = /secondaryColor/.test(colorVariableContent);
    const isDuotone = name.componentName.includes('Duotone');
    const duotoneDefaultColor = isDuotone && hasSecondaryColor ? 'gray800' : 'gray300';
    const component = [
      `import { forwardRef } from 'react';`,
      `import type { IconProps } from 'src/types/IconProps';`,
      hasSecondaryColor &&
        `import { theme } from 'src/styles/constants/theme';`,
      hasSecondaryColor && `import type { Color } from 'src/types';`,
      `import { IconBase } from 'src/icons/icon-base/_IconBase';`,
      maskIds.length &&
        `import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';`,
      hasSecondaryColor
        ? `export const ${name.componentName} = forwardRef<SVGSVGElement, IconProps & {secondaryColor?: Color}>(({ size, color, className, secondaryColor}, ref) => {`
        : `export const ${name.componentName} = forwardRef<SVGSVGElement, IconProps>(({ size, color, className }, ref) => {`,
      maskIds.length && `const ids = useStableUniqueId(${maskIds.length});`,
      isDuotone ? `return (<IconBase ref={ref} size={size} color={color || '${duotoneDefaultColor}'} className={className} viewBox="${viewBox}">`
        : `return (<IconBase ref={ref} size={size} color={color} className={className} viewBox="${viewBox}">`,
      svg,
      `</IconBase>`,
      `  );`,
      `});`,
    ]
      .filter(Boolean)
      .join('\n');
    if (name.originalFileName.includes('.svg')) {
      if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder);
      }

      fs.writeFileSync(`${outputFolder}/${name.newFileName}`, component);
    }
  });
};

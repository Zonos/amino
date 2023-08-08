import fs from 'fs';
import path from 'path';
import { transformSvgContent } from 'svgReact/build-utils/transformSvgContent';
import type { GenerateIconType } from 'svgReact/icons/config/config';

export const createReactIconSVGs = ({
  inputFolder,
  keepColors,
  names,
  outputFolder,
}: GenerateIconType): void => {
  names.forEach(name => {
    const fileContent = fs.readFileSync(
      `${inputFolder}/${name.originalFileName}`,
      {
        encoding: 'utf8',
      },
    );

    const isDuotone = name.componentName.includes('Duotone');

    // Skip color replacing for static colors
    const skipColorReplacing = keepColors;
    if (skipColorReplacing) {
      console.info(`Skip color replacing for ${name.originalFileName}`);
    }

    const { content, hasSecondaryColor, maskIds, viewBox } =
      transformSvgContent({
        content: fileContent,
        isDuotone,
        skipColorReplacing,
      });

    const duotoneDefaultColor =
      isDuotone && hasSecondaryColor ? 'gray800' : 'gray400';
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
      isDuotone
        ? `return (<IconBase ref={ref} size={size} color={color || '${duotoneDefaultColor}'} className={className} viewBox="${viewBox}">`
        : `return (<IconBase ref={ref} size={size} color={color} className={className} viewBox="${viewBox}">`,
      content,
      `</IconBase>`,
      `  );`,
      `});`,
    ]
      .filter(Boolean)
      .join('\n');
    if (name.originalFileName.includes('.svg')) {
      const filename = `${outputFolder}/${name.newFileName}`;
      const parentDir = path.dirname(filename);

      if (!fs.existsSync(parentDir)) {
        fs.mkdirSync(parentDir, { recursive: true });
      }

      fs.writeFileSync(filename, component);
    }
  });
};

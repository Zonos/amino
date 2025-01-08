import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'fs';
import { transformSvgContent } from 'svgReact/build-utils/transformSvgContent';
import type {
  GenerateIconType,
  SvgList,
} from 'svgReact/flags/types/TypeGenerateIcon';

const pascalCased = (string: string) =>
  string.charAt(0).toUpperCase() +
  string.replace(/-([a-z])/g, letters => letters[1]!.toUpperCase()).slice(1);

const convertSvgsObj = (destFolder: string): SvgList[] =>
  readdirSync(destFolder).reduce<SvgList[]>(
    (accumulator, originalFileName) => [
      ...accumulator,
      {
        componentName: pascalCased(originalFileName).replace('.svg', ''),
        newFileName: pascalCased(originalFileName).replace('.svg', '.tsx'),
        originalFileName,
      },
    ],
    [],
  );

export const generateComponentContent = ({
  componentName,
  fileContent,
}: {
  componentName: string;
  fileContent: string;
}) => {
  const { content, maskIds, viewBox } = transformSvgContent({
    content: fileContent,
    isDuotone: false,
    skipColorReplacing: true,
  });

  return [
    maskIds.length
      ? `import { forwardRef, useId } from 'react';`
      : `import { forwardRef } from 'react';`,
    `import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';`,
    `type Props = {`,
    `borderRadius?: number;`,
    `height: number;`,
    `width: number;`,
    `};`,
    ``,
    `export const ${componentName} = forwardRef<SVGSVGElement, Props>(({ height, width, borderRadius }, ref) => {`,
    maskIds.length && `const uniqueId = useId();`,
    `return (`,
    `<FlagIconBase height={height} width={width} ref={ref} viewBox="${viewBox}" borderRadius={borderRadius} >`,
    content,
    `</FlagIconBase>`,
    `  );`,
    `});`,
  ]
    .filter(Boolean)
    .join('\n');
};

export const createReactFlagSvgs = ({
  inputFolder,
  outputFolder,
}: GenerateIconType) => {
  const names = convertSvgsObj(inputFolder);
  names.forEach(name => {
    const fileContent = readFileSync(
      `${inputFolder}/${name.originalFileName}`,
      {
        encoding: 'utf8',
      },
    );

    const component = generateComponentContent({
      componentName: name.componentName,
      fileContent,
    });

    if (name.originalFileName.includes('.svg')) {
      if (!existsSync(outputFolder)) {
        mkdirSync(outputFolder);
      }

      writeFileSync(`${outputFolder}/${name.newFileName}`, component);
    }
  });
};

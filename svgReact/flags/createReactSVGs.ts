import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'fs';

import { GenerateIconType, SvgList } from './types/TypeGenerateIcon';

const addWrapper = (id: string) => `{\`${id}\`}`;

const pascalCased = (string: string) => {
  return (
    string.charAt(0).toUpperCase() +
    string.replace(/-([a-z])/g, letters => letters[1].toUpperCase()).slice(1)
  );
};

const convertSvgsObj = (destFolder: string): SvgList[] =>
  readdirSync(destFolder).reduce((accumulator, originalFileName) => {
    return [
      ...accumulator,
      {
        originalFileName,
        newFileName: pascalCased(originalFileName).replace('.svg', '.tsx'),
        componentName: pascalCased(originalFileName).replace('.svg', ''),
      },
    ];
  }, []);

export const createReactSVGs = ({
  inputFolder,
  outputFolder,
}: GenerateIconType) => {
  const names = convertSvgsObj(inputFolder);
  names.forEach(name => {
    let fileContent = readFileSync(`${inputFolder}/${name.originalFileName}`, {
      encoding: 'utf8',
    });

    /** @desc We need to preserve the viewbox */
    const viewBoxMatches = fileContent.match(/viewBox="(.*?)"/g);
    const viewBoxes = viewBoxMatches
      ? viewBoxMatches.map(x => x.replace(/viewBox=/, '').replace(/"/g, ''))
      : [];
    const viewBox = viewBoxes.find(Boolean) || '0 0 16 12';

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

    const svg = fileContent
      .replace(/(?!\w):\w/g, attribute =>
        attribute.replace(':', '').toUpperCase()
      )
      /** @desc Remove style props */
      .replace(/style="([^"]*)"/gi, '')
      /** @desc Camecase attributes */
      .replace(/-([a-z])/g, (m, w) => w.toUpperCase())
      /** @desc Remove <svg > */
      .replace(/<svg(.*?)>/gi, '')
      /** @desc Remove </svg > */
      .replace(/<\/svg>/gi, '');

    const component = [
      `import React, { forwardRef } from 'react';`,
      `import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';`,
      maskIds.length &&
        `import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';`,
      `type Props = {`,
      `height: number;`,
      `width: number;`,
      `};`,
      `export const ${name.componentName} = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {`,
      maskIds.length && `const ids = useStableUniqueId(${maskIds.length});`,
      `return (`,
      `<FlagIconBase height={height} width={width} ref={ref} viewBox="${viewBox}" >`,
      svg,
      `</FlagIconBase>`,
      `  );`,
      `});`,
    ]
      .filter(Boolean)
      .join('\n');

    if (name.originalFileName.includes('.svg')) {
      if (!existsSync(outputFolder)) {
        mkdirSync(outputFolder);
      }

      writeFileSync(`${outputFolder}/${name.newFileName}`, component);
    }
  });
};

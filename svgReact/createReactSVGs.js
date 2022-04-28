const fs = require('fs');

const addWrapper = id => `{\`${id}\`}`;

const createReactSVGs = ({ names, inputFolder, outputFolder }) => {
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
      `import { FlagIconBase } from '../FlagIconBase/FlagIconBase';`,
      maskIds.length &&
        `import { useStableUniqueId } from '../FlagIconBase/useStableUniqueId';`,
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
      if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder);
      }

      fs.writeFileSync(`${outputFolder}/${name.newFileName}`, component);
    }
  });
};

module.exports = { createReactSVGs };

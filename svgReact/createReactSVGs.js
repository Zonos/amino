const fs = require('fs');
const uuid = require('uuid');

const createReactSVGs = ({ names, inputFolder, outputFolder }) => {
  names.forEach(name => {
    let fileContent = fs.readFileSync(
      `${inputFolder}/${name.originalFileName}`,
      {
        encoding: 'utf8',
      }
    );

    /** @desc We need our ids to be unique */
    const maskIdMatches = fileContent.match(/id="(.*?)"/g);
    const maskIds = maskIdMatches
      ? maskIdMatches.map(x => x.replace(/id=/, '').replace(/"/g, ''))
      : [];
    maskIds.forEach(id => {
      const idRegex = new RegExp(id, 'gi');
      fileContent = fileContent.replace(idRegex, uuid.v4());
    });

    const svg = fileContent
      .replace(/(?!\w):\w/g, attribute =>
        attribute.replace(':', '').toUpperCase()
      )
      /** @desc Remove style props */
      .replace(/style="([^"]*)"/gi, '')
      /** @desc Camecase attributes */
      .replace(/-([a-z])/g, (m, w) => w.toUpperCase());

    // Template for component
    const component =
      `import React from 'react';` +
      '\n\n' +
      `export const ${name.componentName} = () => {` +
      '\n' +
      `  return (` +
      '\n' +
      `    ${svg}` +
      '\n' +
      `  );` +
      '\n' +
      `};`;

    if (name.originalFileName.includes('.svg')) {
      if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder);
      }

      fs.writeFileSync(`${outputFolder}/${name.newFileName}`, component);
    }
  });
};

module.exports = { createReactSVGs };

const fs = require('fs');

const createReactSVGs = ({ names, inputFolder, outputFolder }) => {
  names.forEach(name => {
    const svg = fs
      .readFileSync(`${inputFolder}/${name.originalFileName}`, {
        encoding: 'utf8',
      })
      .replace(/(?!\w):\w/g, attribute =>
        attribute.replace(':', '').toUpperCase()
      )
      .replace(/-([a-z])/g, (m, w) => w.toUpperCase());

    // Template for component
    const component =
      `import React from 'react';` +
      '\n\n' +
      `export const ${name.componentName}Icon = () => {` +
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

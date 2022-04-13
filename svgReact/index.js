const fs = require('fs');
const { createReactSVGs } = require('./createReactSVGs');

const [, , inputFolder, outputFolder] = process.argv;

const pascalCased = string => {
  return (
    string.charAt(0).toUpperCase() +
    string.replace(/-([a-z])/g, letters => letters[1].toUpperCase()).slice(1)
  );
};

const names = fs
  .readdirSync(inputFolder)
  .reduce((accumulator, originalFileName) => {
    return [
      ...accumulator,
      {
        originalFileName,
        newFileName: pascalCased(originalFileName).replace('.svg', '.tsx'),
        componentName: pascalCased(originalFileName).replace('.svg', ''),
      },
    ];
  }, []);

createReactSVGs({ names, inputFolder, outputFolder });

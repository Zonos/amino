const fs = require('fs');

const createIndexFile = () => {
  const [, , folderPath] = process.argv;
  const fileNames = fs.readdirSync(folderPath);

  const content = fileNames
    .filter(name => !name.includes('index'))
    .map(name => {
      const [componentName] = name.split('.');
      return `export { ${componentName} } from './${componentName}';`;
    })
    .join('\n');

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
  fs.writeFileSync(`${folderPath}/index.ts`, content);
};

createIndexFile();

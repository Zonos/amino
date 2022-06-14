import fs from 'fs';

export const createIndexFile = (folderPath: string) => {
  const newIconNames = fs.readdirSync(folderPath);
  const legacyIconNames = fs.readdirSync(`src/icons/legacy`);
  const legacyContent = legacyIconNames
    .filter(name => !name.includes('index'))
    .flatMap(name => {
      const [componentName] = name.split('.');
      return `export { ${componentName} } from './legacy/${componentName}';`;
    })
    .join('\n');
  const content = newIconNames
    .filter(name => !name.includes('index'))
    .flatMap(name => {
      const [componentName] = name.split('.');
      return `export { ${componentName} } from './${componentName}';`;
    })
    .join('\n');
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
  fs.writeFileSync(
    `${folderPath}/IconIndex.ts`,
    `${content}\n${legacyContent}`
  );
};

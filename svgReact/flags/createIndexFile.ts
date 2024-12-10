import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'fs';

export const createIndexFile = (folderPath: string) => {
  const fileNames = readdirSync(folderPath);

  const content = fileNames
    .filter(name => !name.includes('index'))
    .map(name => {
      const [componentName] = name.split('.');
      return `export { ${componentName} } from './${componentName}';`;
    })
    .join('\n');

  if (!existsSync(folderPath)) {
    mkdirSync(folderPath);
  }
  writeFileSync(`${folderPath}/_FlagIndex.ts`, content);
  console.info(`Writing FlaxIndex.ts done!`);
};

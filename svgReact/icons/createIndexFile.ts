import { execSync } from 'child_process';
import fs from 'fs';
import type { GenerateIndexContentType } from 'svgReact/icons/config/config';

const generateContent = ({
  destFolder,
  inputFolderPath,
  titleComment,
}: GenerateIndexContentType) => {
  const iconNames = fs
    .readdirSync(inputFolderPath)
    .filter(name => !/index/i.test(name) && name.includes('.'));
  if (!iconNames.length) {
    return '';
  }
  if (!fs.existsSync(destFolder)) {
    // generate destination folder
    fs.mkdirSync(destFolder);
  }
  return [
    titleComment ? `/** ${titleComment} */` : null,
    iconNames
      .flatMap(name => {
        const [componentName] = name.split('.');
        const pathImport = destFolder.replace(/\/?src\/icons/, '');
        return `export { ${componentName} } from '.${pathImport}/${componentName}';`;
      })
      .join('\n'),
  ]
    .filter(Boolean)
    .join('\n');
};

export const createIndexFile = ({
  generatePath,
  target,
}: {
  generatePath: GenerateIndexContentType[];
  /**
   * @desc location to save the file
   * @example svgReact/icons/dist
   * */
  target: string;
}) => {
  const mergedContent = [...generatePath.map(generateContent)].join('\n');

  fs.writeFileSync(`${target}/_IconIndex.ts`, mergedContent);
};

/**
 * Just the keys, not the components. Meant to be used with dynamic imports
 */
export const createIndexKeyFile = ({
  generatePath,
  target,
}: {
  generatePath: GenerateIndexContentType[];
  /**
   * @desc location to save the file
   * @example svgReact/icons/dist
   * */
  target: string;
}) => {
  console.info(`Generating ${target}`);

  const mergedContent = generatePath
    .flatMap(x => {
      const fileNames = fs
        .readdirSync(x.inputFolderPath)
        .filter(name => !/index/i.test(name) && name.includes('.'));

      const block = `export const ${x.titleComment}List = [${fileNames
        .map(name => {
          const [componentName] = name.split('.');
          return `'${componentName}'`;
        })
        .join(', ')}] as const;`;

      return block;
    })
    .join('\n\n');

  fs.writeFileSync(target, mergedContent);

  console.info('Linting ...');

  execSync(`pnpm eslint --fix ${target} -c ./eslint.config.prod.mjs`, {
    encoding: 'utf8',
  });

  console.info(`Generated ${target}`);
};

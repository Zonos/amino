import fs from 'fs';

import { GenerateIndexContentType } from './config/path';

const generateContent = ({
  inputFolderPath,
  destFolder,
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
  const mergedContent = generatePath.map(generateContent).join('\n');

  fs.writeFileSync(`${target}/IconIndex.ts`, mergedContent);
};

import { readFileSync } from 'fs';
import { glob } from 'glob';

import { logging } from './logging';

/**
 * Function make sure generated color constants are used
 */
export const checkGeneratedColorsAreUsed = async () => {
  const rootDir = process.cwd();
  const generatedColorPath = `${rootDir}/build-utils/css/constants/generated/colors`;
  const themeFilePath = `${rootDir}/build-utils/css/constants/theme.ts`;
  logging(
    'Checking generated colors are used in `build-utils/css/constants/theme.ts` ...'
  );
  /** Get the list of generated colors */
  const generatedColors = glob.sync(`*.ts`, { cwd: generatedColorPath });

  const themeContent = readFileSync(themeFilePath, { encoding: 'utf-8' });

  const notUsedConstantList: string[] = [];
  generatedColors.forEach(colorConstant => {
    const colorConstantWithoutExt = colorConstant.replace('.ts', '');
    const constantName = colorConstant.replace('_', '').replace('.ts', '');

    const match = new RegExp(
      `import { ${constantName} } from '.\\/generated\\/colors\\/${colorConstantWithoutExt}';`,
      'gm'
    ).test(themeContent);
    if (!match) {
      notUsedConstantList.push(colorConstant);
    }
  });

  return notUsedConstantList;
};

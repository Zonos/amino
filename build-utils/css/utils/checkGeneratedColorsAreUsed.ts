import { logging } from 'build-utils/css/utils/logging';
import { type Theme } from 'build-utils/types/Theme';
import { readFileSync } from 'fs';
import { glob } from 'glob';

const themeEntry: Record<Theme, string> = {
  day: 'theme.ts',
  midnight: '_midnight.ts',
  night: '_night.ts',
};

/**
 * Function make sure generated color constants are used
 */
export const checkGeneratedColorsAreUsed = async (theme: Theme) => {
  const rootDir = process.cwd();
  const generatedColorPath = `${rootDir}/build-utils/css/constants/theme/${theme}/colors`;
  const themeFilePath = `${rootDir}/build-utils/css/constants/${themeEntry[theme]}`;
  logging(
    `Checking generated colors are used in 'build-utils/css/constants/${themeEntry[theme]}' ...`,
  );
  /** Get the list of generated colors */
  const generatedColors = glob.sync(`*.ts`, { cwd: generatedColorPath });

  const themeContent = readFileSync(themeFilePath, { encoding: 'utf-8' });

  const notUsedConstantList: string[] = [];
  generatedColors.forEach(colorConstant => {
    const colorConstantWithoutExt = colorConstant.replace('.ts', '');
    const constantName = colorConstant.replace('_', '').replace('.ts', '');

    const match = new RegExp(
      `import { ${constantName} } from '.\\/theme\\/${theme}\\/colors\\/${colorConstantWithoutExt}';`,
      'gm',
    ).test(themeContent);
    if (!match) {
      notUsedConstantList.push(colorConstant);
    }
  });

  return notUsedConstantList;
};

import { checkGeneratedColorsAreUsed } from 'build-utils/css/utils/checkGeneratedColorsAreUsed';
import { generateAminoConstants } from 'build-utils/css/utils/generateAminoContants';
import {
  generateCSS,
  generateThemeCapture,
} from 'build-utils/css/utils/generateCSS';
import { generateSCSS } from 'build-utils/css/utils/generateSCSS';

import type { Theme } from 'src/types/Theme';

const logError = ({
  theme,
  unusedConstants,
}: {
  theme: Theme;
  unusedConstants: string[];
}) => {
  /** Terminate the build process */
  console.error(`Error occurs: There are some ${theme} constants that are generated and not being used in "theme.ts":
 File list: ${unusedConstants.map(constant => `"${constant}"`).join(', ')}`);
  console.error(
    `Please either delete the redundant files or use them in "build-utils/css/constants/theme.ts" to continue.`,
  );
  process.exit(1);
};

(async () => {
  const unusedDayConstants = await checkGeneratedColorsAreUsed('day');
  const unusedNightConstants = await checkGeneratedColorsAreUsed('night');

  if (unusedDayConstants.length) {
    logError({ theme: 'day', unusedConstants: unusedDayConstants });
  }

  if (unusedNightConstants.length) {
    logError({ theme: 'night', unusedConstants: unusedNightConstants });
  }

  /** Generate style constants file to folder desitnation */
  await generateAminoConstants('src/styles/constants');

  /** Generate theme css file to  */
  await generateCSS('src/styles');

  /** Generate theme scss file to  */
  await generateSCSS('src/styles');

  /** Generate theme snapshots after checked and current theme.css is overwritten */
  await generateThemeCapture();
})();

import { readFileSync } from 'fs';

import { darkStyleList } from '../../constants/_darkTheme';
import { theme } from '../../constants/theme';
import {
  generateDarkThemeContent,
  generateLightThemeContent,
} from '../generateCSS';

const lightThemeCSSSnapshot = readFileSync(
  `build-utils/css/utils/__snapshots__/theme.css`,
  {
    encoding: 'utf-8',
  }
);

const darkThemeCSSSnapshot = readFileSync(
  `build-utils/css/utils/__snapshots__/dark-theme.css`,
  {
    encoding: 'utf-8',
  }
);

test(`Case light theme:`, async () => {
  const result = await generateLightThemeContent(theme);
  expect(result).toStrictEqual(lightThemeCSSSnapshot);
});

test(`Case dark theme:`, async () => {
  const result = await generateDarkThemeContent(darkStyleList);
  expect(result).toStrictEqual(darkThemeCSSSnapshot);
});

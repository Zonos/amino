import { night } from 'build-utils/css/constants/_night';
import { theme } from 'build-utils/css/constants/theme';
import {
  generateLightThemeContent,
  generateNightThemeContent,
} from 'build-utils/css/utils/generateCSS';

test(`Case light theme:`, async () => {
  const result = await generateLightThemeContent(theme);
  expect(result).toMatchSnapshot();
});

test(`Case night theme:`, async () => {
  const result = await generateNightThemeContent(night);
  expect(result).toMatchSnapshot();
});

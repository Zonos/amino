import { night } from '../../constants/_night';
import { theme } from '../../constants/theme';
import {
  generateNightThemeContent,
  generateLightThemeContent,
} from '../generateCSS';

test(`Case light theme:`, async () => {
  const result = await generateLightThemeContent(theme);
  expect(result).toMatchSnapshot();
});

test(`Case night theme:`, async () => {
  const result = await generateNightThemeContent(night);
  expect(result).toMatchSnapshot();
});

import { darkStyleList } from '../../constants/_darkTheme';
import { theme } from '../../constants/theme';
import {
  generateDarkThemeContent,
  generateLightThemeContent,
} from '../generateCSS';

test(`Case light theme:`, async () => {
  const result = await generateLightThemeContent(theme);
  expect(result).toMatchSnapshot();
});

test(`Case dark theme:`, async () => {
  const result = await generateDarkThemeContent(darkStyleList);
  expect(result).toMatchSnapshot();
});

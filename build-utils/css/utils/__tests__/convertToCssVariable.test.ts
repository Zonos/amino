import { theme } from 'build-utils/css/constants/theme';
import { convertToCssConstant } from 'build-utils/css/utils/convertToCssVariable';

test(`Theme content:`, () => {
  const content = convertToCssConstant(theme);
  expect(content).toMatchSnapshot();
});

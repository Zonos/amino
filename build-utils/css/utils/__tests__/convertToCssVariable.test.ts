import { theme } from '../../constants/theme';
import { convertToCssConstant } from '../convertToCssVariable';

test(`Theme content:`, () => {
  const content = convertToCssConstant(theme);
  expect(content).toMatchSnapshot();
});

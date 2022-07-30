import { theme } from '../../constants/theme';
import { convertToCssConstant } from '../convertToCssVariable';

test(`Theme content:`, () =>
  expect(convertToCssConstant(theme)).toMatchSnapshot());

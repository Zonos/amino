import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';

export const getAminoColor = (color?: Color | 'inherit') => {
  if (color === 'inherit') {
    return 'inherit';
  }
  if (color) {
    return theme[color];
  }
  return undefined;
};

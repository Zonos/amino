import { theme } from '../constants/theme';

/**
 * @info convert rem value to pixel (base on `--amino-type-scale-base` by default)
 * @param {number} rem rem value to convert
 * @param {number} _fontBase (optional) use pixel value in `--amino-type-scale-base` by default
 * */
export const convertRemToPx = (
  rem: number,
  _fontBase?: number
): `${string}px` | '0' => {
  const fontBase = _fontBase || parseFloat(theme['type-scale-base']);
  return rem !== 0 ? `${Math.round(rem * fontBase)}px` : '0';
};

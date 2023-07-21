import { theme } from 'build-utils/css/constants/theme';

/**
 * @info convert pixel value to rem (base on `--amino-type-scale-base` by default)
 * @param {number} pixel pixel value to convert
 * @param {number} _fontBase (optional) use pixel value in `--amino-type-scale-base` by default
 * */
export const convertPxToRem = (
  pixel: number,
  _fontBase?: number,
): `${string}rem` | '0' => {
  const fontBase = _fontBase || parseFloat(theme['type-scale-base']);
  return pixel !== 0 ? `${parseFloat((pixel / fontBase).toFixed(3))}rem` : '0';
};

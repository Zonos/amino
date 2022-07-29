import { colorStyleList } from './colors';
import { layoutStyleList } from './layout';
import { radius } from './radius';
import { spaces } from './spacing';
import { typoStyleList } from './typography';

const common = {
  transition: 'all 0.2s ease-in-out 0s',
  'type-scale-base': '16px',
};

const componentSizes = {
  'size-xl': '56px',
  'size-lg': '48px',
  'size-md': '40px',
  'size-sm': '32px',
} as const;

export const theme = {
  ...common,
  ...colorStyleList,
  ...componentSizes,
  ...radius,
  ...spaces,
  ...layoutStyleList,
  ...typoStyleList,
};

export type ThemeKey = keyof typeof theme;

export type ThemeValue = typeof theme[ThemeKey];

export const getVar = (string: ThemeKey) => theme[string];

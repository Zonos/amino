import { colorStyleList } from './colors';
import { layoutStyleList } from './layout';
import { radius } from './radius';
import { spaces } from './spacing';
import { typoStyleList } from './typography';

const common = {
  transition: 'var(--amino-transition)',
  'type-scale-base': 'var(--amino-type-scale-base)',
};

const componentSizes = {
  'size-xl': 'var(--amino-size-xl)',
  'size-lg': 'var(--amino-size-lg)',
  'size-md': 'var(--amino-size-md)',
  'size-sm': 'var(--amino-size-sm)',
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

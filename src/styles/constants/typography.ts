import {} from './utils';

export const fontSizes = {
  'font-size-3xl': 'var(--amino-font-size-3xl)',
  'font-size-2xl': 'var(--amino-font-size-2xl)',
  'font-size-xl': 'var(--amino-font-size-xl)',
  'font-size-l': 'var(--amino-font-size-l)',
  'font-size-base': 'var(--amino-font-size-base)',
  'font-size-s': 'var(--amino-font-size-s)',
  'font-size-xs': 'var(--amino-font-size-xs)',
} as const;

export const legacyFontSizes = {
  'text-xxl': 'var(--amino-text-xxl)',
  'text-xl': 'var(--amino-text-xl)',
  'text-lg': 'var(--amino-text-lg)',
  'text-md': 'var(--amino-text-md)',
  'text-base': 'var(--amino-text-base)',
  'text-sm': 'var(--amino-text-sm)',
  'text-xs': 'var(--amino-text-xs)',
} as const;

export const lineHeights = {
  'line-height-3xl': 'var(--amino-line-height-3xl)',
  'line-height-2xl': 'var(--amino-line-height-2xl)',
  'line-height-xl': 'var(--amino-line-height-xl)',
  'line-height-l': 'var(--amino-line-height-l)',
  'line-height-base': 'var(--amino-line-height-base)',
  'line-height-s': 'var(--amino-line-height-s)',
  'line-height-xs': 'var(--amino-line-height-xs)',
} as const;

export const fonts = {
  'font-sans': `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  'font-mono': `Operator Mono, MonoLisa, Dank Mono, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace`,
} as const;

export const typoStyleList = {
  ...fontSizes,
  ...legacyFontSizes,
  ...lineHeights,
  ...fonts,
};

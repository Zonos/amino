import {} from './utils';

export const fontSizes = {
  'font-size-3xl': '2.125rem' /* 34px */,
  'font-size-2xl': '1.75rem' /* 28px */,
  'font-size-xl': '1.375rem' /* 22px */,
  'font-size-l': '1.125rem' /* 18px */,
  'font-size-base': '0.875rem' /* 14px */,
  'font-size-s': '0.75rem' /* 12px */,
  'font-size-xs': '0.625rem' /* 10px */,
} as const;

export const legacyFontSizes = {
  'text-xxl': 'var(--amino-font-size-3xl)',
  'text-xl': 'var(--amino-font-size-2xl)',
  'text-lg': 'var(--amino-font-size-xl)',
  'text-md': 'var(--amino-font-size-l)',
  'text-base': 'var(--amino-font-size-base)',
  'text-sm': 'var(--amino-font-size-s)',
  'text-xs': 'var(--amino-font-size-xs)',
} as const;

export const lineHeights = {
  'line-height-3xl': '118%',
  'line-height-2xl': '119%',
  'line-height-xl': '127%',
  'line-height-l': '133%',
  'line-height-base': '114%',
  'line-height-s': '133%',
  'line-height-xs': '120%',
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

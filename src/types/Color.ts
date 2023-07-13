export const colorPrefixes = [
  'blue',
  'cyan',
  'green',
  'orange',
  'purple',
  'red',
  'gray',
  'glass',
] as const;

export const colorContrasts = [
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '1000',
] as const;

export type ColorContrast = (typeof colorContrasts)[number];
export type ColorPrefix = (typeof colorPrefixes)[number];
export type Color =
  | 'gray0'
  | 'glass0'
  | 'glass50'
  | `${ColorPrefix}${ColorContrast}`
  | 'gray1100'
  | 'gray1200'
  | 'glass1100'
  | 'glass1200';

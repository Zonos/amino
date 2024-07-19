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
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
] as const;

export type ColorContrast = (typeof colorContrasts)[number];
export type ColorPrefix = (typeof colorPrefixes)[number];
export type Color =
  | 'gray0'
  | 'gray50'
  | 'glass0'
  | 'glass50'
  | `${ColorPrefix}${ColorContrast}`
  | 'gray950'
  | 'gray1000'
  | 'glass950'
  | 'glass1000';

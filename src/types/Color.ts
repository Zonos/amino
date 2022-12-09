export const colorPrefixes = [
  'blue',
  'cyan',
  'green',
  'orange',
  'purple',
  'red',
  'gray',
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

type ColorContrast = typeof colorContrasts[number];
type ColorPrefix = typeof colorPrefixes[number];
export type Color =
  | `${ColorPrefix}${ColorContrast}`
  | 'black'
  | 'gray1100'
  | 'gray1200'
  | 'gray1300';

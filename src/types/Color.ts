export const colorPrefixes = [
  'blue',
  'cyan',
  'gray',
  'green',
  'orange',
  'purple',
  'red',
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
export type Color = `${ColorPrefix}-${ColorContrast}` | 'black' | 'test';

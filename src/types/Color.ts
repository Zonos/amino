export const colorPrefixes = [
  'blue',
  'cyan',
  'gray',
  'green',
  'orange',
  'purple',
  'red',
  'yellow',
] as const;

export const colorContrasts = [
  { label: 'L80', value: 'l80' },
  { label: 'L60', value: 'l60' },
  { label: 'L40', value: 'l40' },
  { label: 'L20', value: 'l20' },
  { label: 'Base', value: 'base' },
  { label: 'D20', value: 'd20' },
  { label: 'D40', value: 'd40' },
  { label: 'D60', value: 'd60' },
  { label: 'D80', value: 'd80' },
] as const;

type ColorContrast = typeof colorContrasts[number]['value'];
type ColorPrefix = typeof colorPrefixes[number];
export type Color = `${ColorPrefix}-${ColorContrast}`;

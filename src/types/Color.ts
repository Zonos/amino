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
  'l80',
  'l60',
  'l40',
  'l20',
  'base',
  'd20',
  'd40',
  'd60',
  'd80',
] as const;

type ColorContrast = typeof colorContrasts[number];
type ColorPrefix = typeof colorPrefixes[number];
export type Color = `${ColorPrefix}-${ColorContrast}`;

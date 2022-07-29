import { colorStyleList } from './colors';
import { layoutStyleList } from './layout';
import { constraintDefinedAminoVar } from './utils';

const darkColorStyleList = constraintDefinedAminoVar(colorStyleList, {
  'gray-l80': '#f5f5f6',
  'gray-l60': '#d8d8db',
  'gray-l40': '#c4c4c9',
  'gray-l20': '#b1b1b7',
  'gray-base': '#9d9da5',
  'gray-d20': '#76767c',
  'gray-d40': '#4f4f52',
  'gray-d60': '#2f2f31',
  'gray-d80': '#232326',
  /* BLUE PALETTE */
  'blue-l80': '#e9ebff',
  'blue-l60': '#b4c5ff',
  'blue-l40': '#8fa7ff',
  'blue-l20': '#698aff',
  'blue-base': '#446dff',
  'blue-d20': '#3657cc',
  'blue-d40': '#294199',
  'blue-d60': '#1b2c66',
  'blue-d80': '#1d233b',
  /* CYAN PALETTE */
  'cyan-l80': '#e9fcff',
  'cyan-l60': '#b5f6ff',
  'cyan-l40': '#8ff2ff',
  'cyan-l20': '#6aedff',
  'cyan-base': '#45e9ff',
  'cyan-d20': '#37bacc',
  'cyan-d40': '#298c99',
  'cyan-d60': '#1c5d66',
  'cyan-d80': '#1d363b',
  /* RED PALETTE */
  'red-l80': '#fde5eb',
  'red-l60': '#f9a8bd',
  'red-l40': '#f77d9b',
  'red-l20': '#f4517a',
  'red-base': '#f12659',
  'red-d20': '#c11e47',
  'red-d40': '#911735',
  'red-d60': '#600f24',
  'red-d80': '#371822',
  /* ORANGE PALETTE */
  'orange-l80': '#fff0e5',
  'orange-l60': '#ffd0ad',
  'orange-l40': '#ffb885',
  'orange-l20': '#ffa05c',
  'orange-base': '#ff8933',
  'orange-d20': '#cc6e29',
  'orange-d40': '#99521f',
  'orange-d60': '#663714',
  'orange-d80': '#39271c',
  /* GREEN PALETTE */
  'green-l80': '#e5f9e5',
  'green-l60': '#a5eba8',
  'green-l40': '#78e07d',
  'green-l20': '#4bd651',
  'green-base': '#1ecc26',
  'green-d20': '#18a31e',
  'green-d40': '#127a17',
  'green-d60': '#0c520f',
  'green-d80': '#17311a',
  /* PURPLE */
  'purple-l80': '#f5e5ff',
  'purple-l60': '#dba8ff',
  'purple-l40': '#ca7dff',
  'purple-l20': '#b851ff',
  'purple-base': '#a626ff',
  'purple-d20': '#851ecc',
  'purple-d40': '#641799',
  'purple-d60': '#420f66',
  'purple-d80': '#2c183b',
  /* YELLOW PALLET */
  'yellow-l80': '#fff9e5',
  'yellow-l60': '#ffedad',
  'yellow-l40': '#ffe485',
  'yellow-l20': '#ffdb5c',
  'yellow-base': '#ffd233',
  'yellow-d20': '#cca829',
  'yellow-d40': '#997e1f',
  'yellow-d60': '#665414',
  'yellow-d80': '#39321c',

  'page-background': 'var(--amino-gray-50)',
  'surface-color': 'var(--amino-gray-500)',
  'surface-color-secondary': 'var(--amino-gray-50)',
  'border-color': 'var(--amino-gray-200)',
  'text-color': 'white',
  'input-background': 'var(--amino-gray-300)',
  'hover-color': 'var(--amino-gray-400)',
});

const darkLayoutStyleList = constraintDefinedAminoVar(layoutStyleList, {
  'v3-shadow-inset': 'inset 0px 2px 4px rgba(0, 0, 0, 0.18)',
  'v3-shadow-base':
    '0px 1px 2px rgba(0, 0, 0, 0.18), 0px 1px 3px rgba(0, 0, 0, 0.3)',
  'v3-shadow-medium':
    '0px 2px 4px rgba(0, 0, 0, 0.18), 0px 4px 6px rgba(0, 0, 0, 0.3)',
  'v3-shadow-large':
    '0px 10px 15px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.15)',
  'v3-shadow-xl':
    '0px 20px 25px rgba(0, 0, 0, 0.3), 0px 10px 10px rgba(0, 0, 0, 0.12)',
  'v3-shadow-xxl': '0px 32px 50px rgba(0, 0, 0, 0.72)',
  'backdrop-color': 'var(--amino-gray-200)',
  'header-color': 'var(--amino-gray-100)',
  border: '1px solid var(--amino-border-color)',
});

export const darkStyleList = {
  ...darkColorStyleList,
  ...darkLayoutStyleList,
};

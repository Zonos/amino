import { readFileSync } from 'fs';

import { getMatchedAminoVariables } from '../getMatchedAminoVariables';

const cssContent = readFileSync(
  `build-utils/css/utils/__mocks__/getMatchedAminoVariables-file_with_comment.css`,
  {
    encoding: 'utf-8',
  }
);
type UnitTestItem = {
  case: string;
  input: string;
  expected: ReturnType<typeof getMatchedAminoVariables>;
};

const testCases: UnitTestItem[] = [
  {
    case: 'Real CSS contents',
    input: cssContent,
    expected: [
      { key: '--amino-transition', value: 'all 0.2s ease-in-out 0s' },
      { key: '--amino-type-scale-base', value: '16px' },
      { key: '--amino-font-size-3xl', value: '2.125rem' },
      { key: '--amino-font-size-2xl', value: '1.75rem' },
      { key: '--amino-font-size-xl', value: '1.375rem' },
      { key: '--amino-font-size-l', value: '1.125rem' },
      { key: '--amino-font-size-base', value: '.875rem' },
      { key: '--amino-font-size-s', value: '.75rem' },
      { key: '--amino-font-size-xs', value: '.625rem' },
      { key: '--amino-line-height-3xl', value: '118%' },
      { key: '--amino-line-height-2xl', value: '119%' },
      { key: '--amino-line-height-xl', value: '127%' },
      { key: '--amino-line-height-l', value: '133%' },
      { key: '--amino-line-height-base', value: '114%' },
      { key: '--amino-line-height-s', value: '133%' },
      { key: '--amino-line-height-xs', value: '120%' },
      { key: '--amino-text-xxl', value: 'var(--amino-font-size-3xl)' },
      { key: '--amino-text-xl', value: 'var(--amino-font-size-2xl)' },
      { key: '--amino-text-lg', value: 'var(--amino-font-size-xl)' },
      { key: '--amino-text-md', value: 'var(--amino-font-size-l)' },
      { key: '--amino-text-base', value: 'var(--amino-font-size-base)' },
      { key: '--amino-text-sm', value: 'var(--amino-font-size-s)' },
      { key: '--amino-text-xs', value: 'var(--amino-font-size-xs)' },
      { key: '--amino-space', value: '1.5rem' },
      { key: '--amino-space-negative', value: '-1.5rem' },
      { key: '--amino-space-half', value: '1rem' },
      { key: '--amino-space-half-negative', value: '-1rem' },
      { key: '--amino-space-quarter', value: '0.5rem' },
      { key: '--amino-space-quarter-negative', value: '-0.5rem' },
      { key: '--amino-space-double', value: '2.5rem' },
      { key: '--amino-space-double-negative', value: '-2.5rem' },
      { key: '--amino-radius-sm', value: '0.25rem' },
      { key: '--amino-radius', value: '0.375rem' },
      { key: '--amino-radius-lg', value: '0.5rem' },
      { key: '--amino-radius-xl', value: '0.75rem' },
      { key: '--amino-black', value: '#0c0c0D' },
      { key: '--amino-gray-l80', value: '#f5f5f6' },
      { key: '--amino-gray-l60', value: '#eaeaec' },
      { key: '--amino-gray-l40', value: '#d6d6d9' },
      { key: '--amino-gray-l20', value: '#b7b7bd' },
      { key: '--amino-gray-base', value: '#9898a0' },
      { key: '--amino-gray-d20', value: '#7a7a80' },
      { key: '--amino-gray-d40', value: '#5b5b60' },
      { key: '--amino-gray-d60', value: '#3d3d40' },
      { key: '--amino-gray-d80', value: '#232326' },
      { key: '--amino-gray-50', value: '#f9fafb' },
      { key: '--amino-gray-100', value: 'var(--amino-gray-l80)' },
      { key: '--amino-gray-200', value: 'var(--amino-gray-l60)' },
      { key: '--amino-gray-300', value: 'var(--amino-gray-l40)' },
      { key: '--amino-gray-400', value: 'var(--amino-gray-l20)' },
      { key: '--amino-gray-500', value: 'var(--amino-gray-base)' },
      { key: '--amino-gray-600', value: 'var(--amino-gray-d20)' },
      { key: '--amino-gray-700', value: 'var(--amino-gray-d40)' },
      { key: '--amino-gray-800', value: 'var(--amino-gray-d60)' },
      { key: '--amino-gray-900', value: 'var(--amino-gray-d80)' },
      { key: '--amino-blue-l80', value: '#e9ebff' },
      { key: '--amino-blue-l60', value: '#a7afff' },
      { key: '--amino-blue-l40', value: '#7b86ff' },
      { key: '--amino-blue-l20', value: '#4f5eff' },
      { key: '--amino-blue-base', value: '#2337ff' },
      { key: '--amino-blue-d20', value: '#1c2aca' },
      { key: '--amino-blue-d40', value: '#152099' },
      { key: '--amino-blue-d60', value: '#0f1666' },
      { key: '--amino-blue-d80', value: '#1d233b' },
      { key: '--amino-blue-alpha', value: '#2190ff80' },
      { key: '--amino-blue-50', value: '#ebf5ff' },
      { key: '--amino-blue-100', value: 'var(--amino-blue-l80)' },
      { key: '--amino-blue-200', value: 'var(--amino-blue-l60)' },
      { key: '--amino-blue-300', value: 'var(--amino-blue-l40)' },
      { key: '--amino-blue-400', value: 'var(--amino-blue-l20)' },
      { key: '--amino-blue-500', value: 'var(--amino-blue-base)' },
      { key: '--amino-blue-600', value: 'var(--amino-blue-d20)' },
      { key: '--amino-blue-700', value: 'var(--amino-blue-d40)' },
      { key: '--amino-blue-800', value: 'var(--amino-blue-d60)' },
      { key: '--amino-blue-900', value: 'var(--amino-blue-d80)' },
      { key: '--amino-cyan-l80', value: '#e9fcff' },
      { key: '--amino-cyan-l60', value: '#a5edf6' },
      { key: '--amino-cyan-l40', value: '#77e3f2' },
      { key: '--amino-cyan-l20', value: '#4adaed' },
      { key: '--amino-cyan-base', value: '#1dd1e9' },
      { key: '--amino-cyan-d20', value: '#17a7ba' },
      { key: '--amino-cyan-d40', value: '#117d8c' },
      { key: '--amino-cyan-d60', value: '#0c545d' },
      { key: '--amino-cyan-d80', value: '#1d363b' },
      { key: '--amino-cyan-alpha', value: '#00dfe380' },
      { key: '--amino-cyan-100', value: 'var(--amino-cyan-l80)' },
      { key: '--amino-cyan-200', value: 'var(--amino-cyan-l60)' },
      { key: '--amino-cyan-300', value: 'var(--amino-cyan-l40)' },
      { key: '--amino-cyan-400', value: 'var(--amino-cyan-l20)' },
      { key: '--amino-cyan-500', value: 'var(--amino-cyan-base)' },
      { key: '--amino-cyan-600', value: 'var(--amino-cyan-d20)' },
      { key: '--amino-cyan-700', value: 'var(--amino-cyan-d40)' },
      { key: '--amino-cyan-800', value: 'var(--amino-cyan-d60)' },
      { key: '--amino-cyan-900', value: 'var(--amino-cyan-d80)' },
      { key: '--amino-red-l80', value: '#fde5eb' },
      { key: '--amino-red-l60', value: '#f899b1' },
      { key: '--amino-red-l40', value: '#f5668a' },
      { key: '--amino-red-l20', value: '#f13363' },
      { key: '--amino-red-base', value: '#ee003c' },
      { key: '--amino-red-d20', value: '#be0030' },
      { key: '--amino-red-d40', value: '#8f0024' },
      { key: '--amino-red-d60', value: '#5f0018' },
      { key: '--amino-red-d80', value: '#371822' },
      { key: '--amino-red-alpha', value: '#e0451a80' },
      { key: '--amino-red-50', value: '#fef2f2' },
      { key: '--amino-red-100', value: 'var(--amino-red-l80)' },
      { key: '--amino-red-200', value: 'var(--amino-red-l60)' },
      { key: '--amino-red-300', value: 'var(--amino-red-l40)' },
      { key: '--amino-red-400', value: 'var(--amino-red-l20)' },
      { key: '--amino-red-500', value: 'var(--amino-red-base)' },
      { key: '--amino-red-600', value: 'var(--amino-red-d20)' },
      { key: '--amino-red-700', value: 'var(--amino-red-d40)' },
      { key: '--amino-red-800', value: 'var(--amino-red-d60)' },
      { key: '--amino-red-900', value: 'var(--amino-red-d80)' },
      { key: '--amino-orange-l80', value: '#fff0e5' },
      { key: '--amino-orange-l60', value: '#ffc499' },
      { key: '--amino-orange-l40', value: '#ffa666' },
      { key: '--amino-orange-l20', value: '#ff8933' },
      { key: '--amino-orange-base', value: '#ff6b00' },
      { key: '--amino-orange-d20', value: '#cc5600' },
      { key: '--amino-orange-d40', value: '#994000' },
      { key: '--amino-orange-d60', value: '#662b00' },
      { key: '--amino-orange-d80', value: '#39271c' },
      { key: '--amino-orange-alpha', value: '#ffa51e80' },
      { key: '--amino-orange-100', value: 'var(--amino-orange-l80)' },
      { key: '--amino-orange-200', value: 'var(--amino-orange-l60)' },
      { key: '--amino-orange-300', value: 'var(--amino-orange-l40)' },
      { key: '--amino-orange-400', value: 'var(--amino-orange-l20)' },
      { key: '--amino-orange-500', value: 'var(--amino-orange-base)' },
      { key: '--amino-orange-600', value: 'var(--amino-orange-d20)' },
      { key: '--amino-orange-700', value: 'var(--amino-orange-d40)' },
      { key: '--amino-orange-800', value: 'var(--amino-orange-d60)' },
      { key: '--amino-orange-900', value: 'var(--amino-orange-d80)' },
      { key: '--amino-green-l80', value: '#e5f9e5' },
      { key: '--amino-green-l60', value: '#99e799' },
      { key: '--amino-green-l40', value: '#66db66' },
      { key: '--amino-green-l20', value: '#33cf33' },
      { key: '--amino-green-base', value: '#00c300' },
      { key: '--amino-green-d20', value: '#009c00' },
      { key: '--amino-green-d40', value: '#007500' },
      { key: '--amino-green-d60', value: '#004e00' },
      { key: '--amino-green-d80', value: '#17311a' },
      { key: '--amino-green-alpha', value: '#ecfdf580' },
      { key: '--amino-green-50', value: '#ecfdf5' },
      { key: '--amino-green-100', value: 'var(--amino-green-l80)' },
      { key: '--amino-green-200', value: 'var(--amino-green-l60)' },
      { key: '--amino-green-300', value: 'var(--amino-green-l40)' },
      { key: '--amino-green-400', value: 'var(--amino-green-l20)' },
      { key: '--amino-green-500', value: 'var(--amino-green-base)' },
      { key: '--amino-green-600', value: 'var(--amino-green-d20)' },
      { key: '--amino-green-700', value: 'var(--amino-green-d40)' },
      { key: '--amino-green-800', value: 'var(--amino-green-d60)' },
      { key: '--amino-green-900', value: 'var(--amino-green-d80)' },
      { key: '--amino-purple-l80', value: '#f5e5ff' },
      { key: '--amino-purple-l60', value: '#d599ff' },
      { key: '--amino-purple-l40', value: '#c066ff' },
      { key: '--amino-purple-l20', value: '#ab33ff' },
      { key: '--amino-purple-base', value: '#9600ff' },
      { key: '--amino-purple-d20', value: '#7800cc' },
      { key: '--amino-purple-d40', value: '#5a0099' },
      { key: '--amino-purple-d60', value: '#3c0066' },
      { key: '--amino-purple-d80', value: '#2c183b' },
      { key: '--amino-purple-alpha', value: '#f5f3ff80' },
      { key: '--amino-purple-50', value: '#f5f3ff' },
      { key: '--amino-purple-100', value: 'var(--amino-purple-l80)' },
      { key: '--amino-purple-200', value: 'var(--amino-purple-l60)' },
      { key: '--amino-purple-300', value: 'var(--amino-purple-l40)' },
      { key: '--amino-purple-400', value: 'var(--amino-purple-l20)' },
      { key: '--amino-purple-500', value: 'var(--amino-purple-base)' },
      { key: '--amino-purple-600', value: 'var(--amino-purple-d20)' },
      { key: '--amino-purple-700', value: 'var(--amino-purple-d40)' },
      { key: '--amino-purple-800', value: 'var(--amino-purple-d60)' },
      { key: '--amino-purple-900', value: 'var(--amino-purple-d80)' },
      { key: '--amino-yellow-l80', value: '#fff9e5' },
      { key: '--amino-yellow-l60', value: '#ffe999' },
      { key: '--amino-yellow-l40', value: '#ffdd66' },
      { key: '--amino-yellow-l20', value: '#ffd233' },
      { key: '--amino-yellow-base', value: '#ffc700' },
      { key: '--amino-yellow-d20', value: '#cc9f00' },
      { key: '--amino-yellow-d40', value: '#997700' },
      { key: '--amino-yellow-d60', value: '#665000' },
      { key: '--amino-yellow-d80', value: '#39321c' },
      { key: '--amino-yellow-100', value: 'var(--amino-yellow-l80)' },
      { key: '--amino-yellow-200', value: 'var(--amino-yellow-l60)' },
      { key: '--amino-yellow-300', value: 'var(--amino-yellow-l40)' },
      { key: '--amino-yellow-400', value: 'var(--amino-yellow-l20)' },
      { key: '--amino-yellow-500', value: 'var(--amino-yellow-base)' },
      { key: '--amino-yellow-600', value: 'var(--amino-yellow-d20)' },
      { key: '--amino-yellow-700', value: 'var(--amino-yellow-d40)' },
      { key: '--amino-yellow-800', value: 'var(--amino-yellow-d60)' },
      { key: '--amino-yellow-900', value: 'var(--amino-yellow-d80)' },
      { key: '--amino-amber-alpha', value: '#fffbeb80' },
      { key: '--amino-amber-50', value: '#fffbeb' },
      { key: '--amino-amber-100', value: 'var(--amino-yellow-l80)' },
      { key: '--amino-amber-200', value: 'var(--amino-yellow-l60)' },
      { key: '--amino-amber-300', value: 'var(--amino-yellow-l40)' },
      { key: '--amino-amber-400', value: 'var(--amino-yellow-l20)' },
      { key: '--amino-amber-500', value: 'var(--amino-yellow-base)' },
      { key: '--amino-amber-600', value: 'var(--amino-yellow-d20)' },
      { key: '--amino-amber-700', value: 'var(--amino-yellow-d40)' },
      { key: '--amino-amber-800', value: 'var(--amino-yellow-d60)' },
      { key: '--amino-amber-900', value: 'var(--amino-yellow-d80)' },
      { key: '--amino-danger', value: 'var(--amino-red-500)' },
      { key: '--amino-danger-dark', value: 'var(--amino-red-600)' },
      { key: '--amino-error', value: 'var(--amino-red-500)' },
      { key: '--amino-glow-error', value: '0 0 0 1px var(--amino-red-500)' },
      { key: '--amino-glow-blue', value: '0 0 0 1px var(--amino-primary)' },
      { key: '--amino-glow-cyan', value: '0 0 0 1px var(--amino-cyan-alpha)' },
      { key: '--amino-glow-red', value: '0 0 0 1px var(--amino-red-alpha)' },
      {
        key: '--amino-glow-orange',
        value: '0 0 0 1px var(--amino-orange-alpha)',
      },
      {
        key: '--amino-glow-green',
        value: '0 0 0 1px var(--amino-green-alpha)',
      },
      {
        key: '--amino-glow-purple',
        value: '0 0 0 1px var(--amino-purple-alpha)',
      },
      { key: '--amino-primary', value: 'var(--amino-blue-500)' },
      { key: '--amino-primary-light', value: 'var(--amino-blue-400)' },
      { key: '--amino-primary-dark', value: 'var(--amino-blue-700)' },
      { key: '--amino-success', value: 'var(--amino-green-200)' },
      { key: '--amino-success-dark', value: 'var(--amino-green-600)' },
      { key: '--amino-warning', value: 'var(--amino-amber-100)' },
      { key: '--amino-warning-dark', value: 'var(--amino-amber-600)' },
      { key: '--amino-page-background', value: 'white' },
      { key: '--amino-border-color', value: 'var(--amino-gray-200)' },
      { key: '--amino-hover-color', value: 'var(--amino-gray-50)' },
      { key: '--amino-surface-color', value: 'white' },
      { key: '--amino-surface-color-secondary', value: 'var(--amino-gray-50)' },
      { key: '--amino-text-light', value: 'white' },
      { key: '--amino-text-color', value: 'var(--amino-gray-900)' },
      { key: '--amino-text-dark', value: 'var(--amino-text-color)' },
      { key: '--amino-input-background', value: 'white' },
      { key: '--amino-size-xl', value: '56px' },
      { key: '--amino-size-lg', value: '48px' },
      { key: '--amino-size-md', value: '40px' },
      { key: '--amino-size-sm', value: '32px' },
      { key: '--amino-appbar-height', value: '55px' },
      { key: '--amino-sidebar-width', value: '264px' },
      { key: '--amino-sidebar-color', value: 'white' },
      { key: '--amino-header-color', value: 'white' },
      { key: '--amino-backdrop-color', value: 'var(--amino-gray-900)' },
      { key: '--amino-elevation-0', value: '0' },
      { key: '--amino-elevation-100', value: '100' },
      { key: '--amino-elevation-200', value: '200' },
      { key: '--amino-elevation-300', value: '300' },
      { key: '--amino-elevation-400', value: '400' },
      { key: '--amino-elevation-500', value: '500' },
      { key: '--amino-dialog-elevation', value: 'var(--amino-elevation-400)' },
      { key: '--amino-toast-elevation', value: 'var(--amino-elevation-500)' },
      { key: '--amino-appbar-elevation', value: 'var(--amino-elevation-500)' },
      {
        key: '--amino-font-sans',
        value:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      },
      {
        key: '--amino-font-mono',
        value: `Operator Mono, MonoLisa, Dank Mono, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace`,
      },
      {
        key: '--amino-v3-shadow-inset',
        value: 'inset 0px 2px 4px rgba(0, 0, 0, 0.06)',
      },
      {
        key: '--amino-v3-shadow-base',
        value:
          '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
      },
      {
        key: '--amino-v3-shadow-medium',
        value:
          '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
      },
      {
        key: '--amino-v3-shadow-large',
        value:
          '0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
      },
      {
        key: '--amino-v3-shadow-xl',
        value:
          '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
      },
      {
        key: '--amino-v3-shadow-xxl',
        value: '0px 32px 50px rgba(0, 0, 0, 0.24)',
      },
      { key: '--amino-shadow-inset', value: 'var(--amino-v3-shadow-inset)' },
      { key: '--amino-shadow-small', value: 'var(--amino-v3-shadow-base)' },
      { key: '--amino-shadow-base', value: 'var(--amino-v3-shadow-medium)' },
      { key: '--amino-shadow-medium', value: 'var(--amino-v3-shadow-large)' },
      { key: '--amino-shadow-large', value: 'var(--amino-v3-shadow-xl)' },
      { key: '--amino-shadow-larger', value: 'var(--amino-v3-shadow-xxl)' },
      { key: '--amino-border', value: '1px solid var(--amino-border-color)' },
      { key: '--amino-border-blue', value: '1px solid var(--amino-blue-400)' },
      { key: '--amino-border-red', value: '1px solid var(--amino-red-300)' },
      { key: '--amino-border-cyan', value: '1px solid var(--amino-cyan-300)' },
      {
        key: '--amino-border-orange',
        value: '1px solid var(--amino-orange-300)',
      },
      {
        key: '--amino-border-green',
        value: '1px solid var(--amino-green-300)',
      },
      {
        key: '--amino-border-purple',
        value: '1px solid var(--amino-purple-300)',
      },
      {
        key: '--amino-border-amber',
        value: '1px solid var(--amino-amber-300)',
      },
      { key: '--amino-border-transparent', value: '1px solid transparent' },
    ],
  },
];

test.each(testCases)(`Case $case`, ({ input, expected }) => {
  expect(getMatchedAminoVariables(input)).toStrictEqual(expected);
});

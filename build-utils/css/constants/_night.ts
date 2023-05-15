import { theme } from './theme';
import { blue } from './theme/night/colors/_blue';
import { constraintDefinedAminoVar } from './utils';

export const night = constraintDefinedAminoVar(theme, {

  ...blue,

  'page-background': 'var(--amino-gray-50)',
  'surface-color': 'var(--amino-gray-base)',
  'surface-color-secondary': 'var(--amino-gray-50)',
  'border-color': 'var(--amino-gray-l60)',
  'text-color': 'white',
  'input-background': 'var(--amino-gray-l40)',
  'hover-color': 'var(--amino-gray-l20)',

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
  'backdrop-color': 'var(--amino-gray-l60)',
  'header-color': 'var(--amino-gray-l80)',
  border: '1px solid var(--amino-border-color)',
});

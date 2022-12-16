import { space } from './generated/_space';
import { blue } from './generated/colors/_blue';
import { cyan } from './generated/colors/_cyan';
import { gray } from './generated/colors/_gray';
import { green } from './generated/colors/_green';
import { orange } from './generated/colors/_orange';
import { purple } from './generated/colors/_purple';
import { red } from './generated/colors/_red';

export const theme = {
  transition: 'all 0.2s ease-in-out 0s',
  'type-scale-base': '16px',

  black: '#0c0c0d',
  /* GRAY PALETTE */
  ...gray,
  /** @deprecated this is no longer being used */
  'gray-alpha': '#f9fafb',
  /** @deprecated this is no longer being used */
  'gray-50': '#f9fafb',

  /* BLUE PALETTE */
  ...blue,
  /** @deprecated this is no longer being used */
  'blue-alpha': '#2190ff80',
  /** @deprecated this is no longer being used */
  'blue-50': '#ebf5ff',

  /* CYAN PALETTE */
  ...cyan,

  /* RED PALETTE */
  ...red,
  /** @deprecated this is no longer being used */
  'red-alpha': '#e0451a80',
  /** @deprecated this is no longer being used */
  'red-50': '#fef2f2',

  /* ORANGE PALETTE */
  ...orange,
  /** @deprecated this is no longer being used */
  'orange-alpha': '#ffa51e80',
  /** @deprecated this is no longer being used */
  'orange-50': '#fff0e5',

  /* GREEN PALETTE */
  ...green,
  /** @deprecated this is no longer being used */
  'green-alpha': '#ecfdf580',
  /** @deprecated this is no longer being used */
  'green-50': '#ecfdf5',

  /* PURPLE */
  ...purple,
  /** @deprecated this is no longer being used */
  'purple-alpha': '#f5f3ff80',
  /** @deprecated this is no longer being used */
  'purple-50': '#f5f3ff',

  /* YELLOW PALLETE */
  /** @deprecated this is no longer being used */
  'yellow-l80': '#fff9e5',
  /** @deprecated this is no longer being used */
  'yellow-l60': '#ffe999',
  /** @deprecated this is no longer being used */
  'yellow-l40': '#ffdd66',
  /** @deprecated this is no longer being used */
  'yellow-l20': '#ffd233',
  /** @deprecated this is no longer being used */
  'yellow-base': '#ffc700',
  /** @deprecated this is no longer being used */
  'yellow-d20': '#cc9f00',
  /** @deprecated this is no longer being used */
  'yellow-d40': '#997700',
  /** @deprecated this is no longer being used */
  'yellow-d60': '#665000',
  /** @deprecated this is no longer being used */
  'yellow-d80': '#39321c',
  /** @deprecated this is no longer being used */
  'yellow-alpha': '#fffbeb80',
  /** @deprecated this is no longer being used */
  'yellow-50': '#fffbeb',
  /** @deprecated this is no longer being used */
  'yellow-100': 'var(--amino-yellow-l80)',
  /** @deprecated this is no longer being used */
  'yellow-200': 'var(--amino-yellow-l60)',
  /** @deprecated this is no longer being used */
  'yellow-300': 'var(--amino-yellow-l40)',
  /** @deprecated this is no longer being used */
  'yellow-400': 'var(--amino-yellow-l20)',
  /** @deprecated this is no longer being used */
  'yellow-500': 'var(--amino-yellow-base)',
  /** @deprecated this is no longer being used */
  'yellow-600': 'var(--amino-yellow-d20)',
  /** @deprecated this is no longer being used */
  'yellow-700': 'var(--amino-yellow-d40)',
  /** @deprecated this is no longer being used */
  'yellow-800': 'var(--amino-yellow-d60)',
  /** @deprecated this is no longer being used */
  'yellow-900': 'var(--amino-yellow-d80)',
  /** @deprecated this is no longer being used */
  'amber-alpha': '#fffbeb80',
  /** @deprecated this is no longer being used */
  'amber-50': '#fffbeb',
  /** @deprecated this is no longer being used */
  'amber-100': 'var(--amino-yellow-l80)',
  /** @deprecated this is no longer being used */
  'amber-200': 'var(--amino-yellow-l60)',
  /** @deprecated this is no longer being used */
  'amber-300': 'var(--amino-yellow-l40)',
  /** @deprecated this is no longer being used */
  'amber-400': 'var(--amino-yellow-l20)',
  /** @deprecated this is no longer being used */
  'amber-500': 'var(--amino-yellow-base)',
  /** @deprecated this is no longer being used */
  'amber-600': 'var(--amino-yellow-d20)',
  /** @deprecated this is no longer being used */
  'amber-700': 'var(--amino-yellow-d40)',
  /** @deprecated this is no longer being used */
  'amber-800': 'var(--amino-yellow-d60)',
  /** @deprecated this is no longer being used */
  'amber-900': 'var(--amino-yellow-d80)',

  /* COMMON COLOR */
  danger: 'var(--amino-red-600)',
  'danger-dark': 'var(--amino-red-700)',
  error: 'var(--amino-red-600)',
  primary: 'var(--amino-blue-600)',
  'primary-light': 'var(--amino-blue-500)',
  'primary-dark': 'var(--amino-blue-800)',
  success: 'var(--amino-green-300)',
  'success-dark': 'var(--amino-green-700)',
  warning: 'var(--amino-amber-100)',
  'warning-dark': 'var(--amino-amber-700)',

  /* GLOW COLOR */
  'glow-error': '0 0 0 1px var(--amino-red-600)',
  'glow-blue': '0 0 0 1px var(--amino-primary)',
  'glow-cyan': '0 0 0 1px var(--amino-cyan-alpha)',
  'glow-red': '0 0 0 1px var(--amino-red-alpha)',
  'glow-orange': '0 0 0 1px var(--amino-orange-alpha)',
  'glow-green': '0 0 0 1px var(--amino-green-alpha)',
  'glow-purple': '0 0 0 1px var(--amino-purple-alpha)',

  /* LAYOUT COLOR */
  'page-background': 'white',
  'border-color': 'var(--amino-gray-200)',
  'hover-color': 'var(--amino-gray-50)',
  'surface-color': 'white',
  'surface-color-secondary': 'var(--amino-gray-50)',
  'text-light': 'white',
  'text-color': 'var(--amino-gray-1000)',
  'text-dark': 'var(--amino-text-color)',
  'input-background': 'white',

  /* BUTTON SIZE */
  'size-xl': '56px',
  'size-lg': '48px',
  'size-md': '40px',
  'size-sm': '32px',

  /* BORDER RADIUS */
  /** @info 4px */
  'radius-4': '0.25rem',
  /** @info 6px */
  'radius-6': '0.375rem',
  /** @info 8px */
  'radius-8': '0.5rem',
  /** @info 10px */
  'radius-10': '0.625rem',
  /** @info 12px */
  'radius-12': '0.75rem',

  /** @info 4px */
  /** @deprecated use radius4 instead */
  'radius-sm': '0.25rem',
  /** @info 6px */
  /** @deprecated use radius6 instead */
  radius: '0.375rem',
  /** @info 8px */
  /** @deprecated use radius8 instead */
  'radius-lg': '0.5rem',
  /** @info 12px */
  /** @deprecated use radius12 instead */
  'radius-xl': '0.75rem',

  /* SPACING */
  ...space,

  /** @info px: 24px */
  /** @deprecated use space24 instead */
  space: '1.5rem',
  /** @info px: -24px */
  /** @deprecated use spaceNegative24 instead */
  'space-negative': '-1.5rem',
  /** @info px: 16px */
  /** @deprecated use space16 instead */
  'space-half': '1rem',
  /** @info px: -16px */
  /** @deprecated use spaceNegative16 instead */
  'space-half-negative': '-1rem',
  /** @info px: 8px */
  /** @deprecated use space8 instead */
  'space-quarter': '0.5rem',
  /** @info px: -8px */
  /** @deprecated use spaceNegative8 instead */
  'space-quarter-negative': '-0.5rem',
  /** @info px: 40px */
  /** @deprecated use space40 instead */
  'space-double': '2.5rem',
  /** @info px: -40px */
  /** @deprecated use spaceNegative40 instead */
  'space-double-negative': '-2.5rem',

  /* LAYOUT STYLE */
  'appbar-height': '55px',
  'sidebar-width': '264px',
  'sidebar-color': 'white',
  'header-color': 'white',
  'backdrop-color': 'var(--amino-gray-1000)',
  'elevation-0': '0',
  'elevation-100': '100',
  'elevation-200': '200',
  'elevation-300': '300',
  'elevation-400': '400',
  'elevation-500': '500',
  /** @info 400 */
  'dialog-elevation': 'var(--amino-elevation-400)',
  /** @info 500 */
  'toast-elevation': 'var(--amino-elevation-500)',
  /** @info 500 */
  'appbar-elevation': 'var(--amino-elevation-500)',

  /* BOX SHADOW */
  'v3-shadow-inset': 'inset 0px 2px 4px rgba(0, 0, 0, 0.06)',
  'v3-shadow-base': `0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)`,
  'v3-shadow-medium': `0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)`,
  'v3-shadow-large': `0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)`,
  'v3-shadow-xl': `0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)`,
  'v3-shadow-xxl': '0px 32px 50px rgba(0, 0, 0, 0.24)',
  /* LEGACY BOX SHADOW */
  /** @deprecated use v3ShadowInset instead */
  'shadow-inset': 'var(--amino-v3-shadow-inset)',
  /** @deprecated use v3ShadowBase instead */
  'shadow-small': 'var(--amino-v3-shadow-base)',
  /** @deprecated use v3ShadowMedium instead */
  'shadow-base': 'var(--amino-v3-shadow-medium)',
  /** @deprecated use v3ShadowLarge instead */
  'shadow-medium': 'var(--amino-v3-shadow-large)',
  /** @deprecated use v3ShadowXl instead */
  'shadow-large': 'var(--amino-v3-shadow-xl)',
  /** @deprecated use v3ShadowXxl instead */
  'shadow-larger': 'var(--amino-v3-shadow-xxl)',

  /* BORDER */
  border: '1px solid var(--amino-border-color)',
  'border-blue': '1px solid var(--amino-blue-500)',
  'border-red': '1px solid var(--amino-red-400)',
  'border-cyan': '1px solid var(--amino-cyan-400)',
  'border-orange': '1px solid var(--amino-orange-400)',
  'border-green': '1px solid var(--amino-green-400)',
  'border-purple': '1px solid var(--amino-purple-400)',
  'border-amber': '1px solid var(--amino-amber-400)',
  'border-transparent': '1px solid transparent',

  /** @info 34px */
  'font-size-3xl': '2.125rem',
  /** @info 28px  */
  'font-size-2xl': '1.75rem',
  /** @info 22px */
  'font-size-xl': '1.375rem',
  /** @info 18px */
  'font-size-l': '1.125rem',
  /** @info 14px */
  'font-size-base': '0.875rem',
  /** @info 12px */
  'font-size-s': '0.75rem',
  /** @info 10px */
  'font-size-xs': '0.625rem',

  /* LEGACY FONT SIZE */
  /** @deprecated use fontSize3xl instead */
  'text-xxl': 'var(--amino-font-size-3xl)',
  /** @deprecated use fontSize2xl instead */
  'text-xl': 'var(--amino-font-size-2xl)',
  /** @deprecated use fontSizeXl instead */
  'text-lg': 'var(--amino-font-size-xl)',
  /** @deprecated use fontSizeL instead */
  'text-md': 'var(--amino-font-size-l)',
  /** @deprecated use fontSizeBase instead */
  'text-base': 'var(--amino-font-size-base)',
  /** @deprecated use fontSizeS instead */
  'text-sm': 'var(--amino-font-size-s)',
  /** @deprecated use fontSizeXs instead */
  'text-xs': 'var(--amino-font-size-xs)',

  /* LINE HEIGHT */
  'line-height-3xl': '118%',
  'line-height-2xl': '119%',
  'line-height-xl': '127%',
  'line-height-l': '133%',
  'line-height-base': '114%',
  'line-height-s': '133%',
  'line-height-xs': '120%',

  /* FONTS */
  'font-sans': `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  'font-mono': `Operator Mono, MonoLisa, Dank Mono, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace`,
  'font-harmonized-codes': `'Fira Code', var(--amino-font-sans)`,
} as const;

export type ThemeKey = keyof typeof theme;

export type ThemeValue = typeof theme[ThemeKey];

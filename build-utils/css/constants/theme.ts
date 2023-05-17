import { spacing } from './theme/_spacing';
import { variablesUsingColors } from './theme/_variablesUsingColors';
import { shadow } from './theme/day/_shadow';
import { blue } from './theme/day/colors/_blue';
import { cyan } from './theme/day/colors/_cyan';
import { gray } from './theme/day/colors/_gray';
import { green } from './theme/day/colors/_green';
import { oneOffColors } from './theme/day/colors/_oneOffColors';
import { orange } from './theme/day/colors/_orange';
import { purple } from './theme/day/colors/_purple';
import { red } from './theme/day/colors/_red';
import { transparent } from './theme/day/colors/_transparent';

/* eslint-disable deprecation/deprecation */
export const theme = {
  transition: 'all 0.2s ease-in-out 0s',
  'type-scale-base': '16px',

  /* GRAY PALETTE */
  ...gray,

  /* BLUE PALETTE */
  ...blue,

  /* CYAN PALETTE */
  ...cyan,

  /* RED PALETTE */
  ...red,

  /* ORANGE PALETTE */
  ...orange,

  /* GREEN PALETTE */
  ...green,

  /* PURPLE */
  ...purple,

  /* TRANSPARENT */
  ...transparent,

  /* BOX SHADOW */
  ...shadow,

  /* SPACING */
  ...spacing,

  /* VARIABLES USING COLORS */
  ...variablesUsingColors,

  /* ONE OFF COLORS */
 ...oneOffColors,

  /* LAYOUT STYLE */
  'appbar-height': '55px',
  'sidebar-width': '264px',
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

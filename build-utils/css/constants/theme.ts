import { misc } from 'build-utils/css/constants/theme/_misc';
import { spacing } from 'build-utils/css/constants/theme/_spacing';
import { variablesUsingColors } from 'build-utils/css/constants/theme/_variablesUsingColors';
import { hover } from 'build-utils/css/constants/theme/day/_hover';
import { shadow } from 'build-utils/css/constants/theme/day/_shadow';
import { spinner } from 'build-utils/css/constants/theme/day/_spinner';
import { blue } from 'build-utils/css/constants/theme/day/colors/_blue';
import { cyan } from 'build-utils/css/constants/theme/day/colors/_cyan';
import { glass } from 'build-utils/css/constants/theme/day/colors/_glass';
import { gray } from 'build-utils/css/constants/theme/day/colors/_gray';
import { green } from 'build-utils/css/constants/theme/day/colors/_green';
import { oneOffColors } from 'build-utils/css/constants/theme/day/colors/_oneOffColors';
import { orange } from 'build-utils/css/constants/theme/day/colors/_orange';
import { purple } from 'build-utils/css/constants/theme/day/colors/_purple';
import { red } from 'build-utils/css/constants/theme/day/colors/_red';
import { transparent } from 'build-utils/css/constants/theme/day/colors/_transparent';

export const theme = {
  transition: 'all 0.2s ease-in-out 0s, visibility 0s',
  'type-scale-base': '16px',

  /* GLASS PALETTE */
  ...glass,

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

  /* MISC */
  ...misc,

  /* SPACING */
  ...spacing,

  /* VARIABLES USING COLORS */
  ...variablesUsingColors,

  /* ONE OFF COLORS */
  ...oneOffColors,

  /* BUTTON HOVER COLORS */
  ...hover,

  /* SPINNER COLORS */
  ...spinner,

  /* LAYOUT STYLE */
  'appbar-height': '55px',
  'sidebar-width': '232px',
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

  /** @info 30px */
  'font-size-3xl': '1.875rem',
  /** @info 24px  */
  'font-size-2xl': '1.5rem',
  /** @info 20px */
  'font-size-xl': '1.25rem',
  /** @info 18px */
  'font-size-l': '1.125rem',
  /** @info 16px */
  'font-size-base-docs': '1rem',
  /** @info 13px */
  'font-size-base': '0.813rem',
  /** @info 12px */
  'font-size-s': '0.75rem',
  /** @info 11px */
  'font-size-xs': '0.688rem',

  /* LINE HEIGHT */
  /** @info 48px */
  'line-height-3xl': '3rem',
  /** @info 40px */
  'line-height-2xl': '2.5rem',
  /** @info 32px */
  'line-height-xl': '2rem',
  /** @info 24px */
  'line-height-l': '1.5rem',
  /** @info 24px */
  'line-height-base': '1.5rem',
  /** @info 16px */
  'line-height-s': '1rem',
  /** @info 12px */
  'line-height-xs': '0.75rem',

  /* FONTS */
  'font-sans': `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  'font-mono': `Operator Mono, MonoLisa, Dank Mono, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace`,
  'font-harmonized-codes': `'Fira Code', var(--amino-font-sans)`,

  /* OTHER */
  'input-background': 'inherit',
} as const;

export type ThemeKey = keyof typeof theme;

export type ThemeValue = (typeof theme)[ThemeKey];

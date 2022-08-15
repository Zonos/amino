export const theme = {
  transition: 'all 0.2s ease-in-out 0s',
  'type-scale-base': '16px',

  black: '#0c0c0d',
  /* GRAY PALETTE */
  'gray-l80': '#f5f5f6',
  'gray-l60': '#eaeaec',
  'gray-l40': '#d6d6d9',
  'gray-l20': '#b7b7bd',
  'gray-base': '#9898a0',
  'gray-d20': '#7a7a80',
  'gray-d40': '#5b5b60',
  'gray-d60': '#3d3d40',
  'gray-d80': '#232326',
  'gray-alpha': '#f9fafb',
  'gray-50': '#f9fafb',
  /** @deprecated use gray-l80 instead */
  'gray-100': 'var(--amino-gray-l80)',
  /** @deprecated use gray-l60 instead */
  'gray-200': 'var(--amino-gray-l60)',
  /** @deprecated use gray-l40 instead */
  'gray-300': 'var(--amino-gray-l40)',
  /** @deprecated use gray-l20 instead */
  'gray-400': 'var(--amino-gray-l20)',
  /** @deprecated use gray-base instead */
  'gray-500': 'var(--amino-gray-base)',
  /** @deprecated use gray-d20 instead */
  'gray-600': 'var(--amino-gray-d20)',
  /** @deprecated use gray-d40 instead */
  'gray-700': 'var(--amino-gray-d40)',
  /** @deprecated use gray-d60 instead */
  'gray-800': 'var(--amino-gray-d60)',
  /** @deprecated use gray-d80 instead */
  'gray-900': 'var(--amino-gray-d80)',

  /* BLUE PALETTE */
  'blue-l80': '#e9ebff',
  'blue-l60': '#a7afff',
  'blue-l40': '#7b86ff',
  'blue-l20': '#4f5eff',
  'blue-base': '#2337ff',
  'blue-d20': '#1c2aca',
  'blue-d40': '#152099',
  'blue-d60': '#0f1666',
  'blue-d80': '#1d233b',
  'blue-alpha': '#2190ff80',
  'blue-50': '#ebf5ff',
  /** @deprecated use blue-l80 instead */
  'blue-100': 'var(--amino-blue-l80)',
  /** @deprecated use blue-l60 instead */
  'blue-200': 'var(--amino-blue-l60)',
  /** @deprecated use blue-l40 instead */
  'blue-300': 'var(--amino-blue-l40)',
  /** @deprecated use blue-l20 instead */
  'blue-400': 'var(--amino-blue-l20)',
  /** @deprecated use blue-base instead */
  'blue-500': 'var(--amino-blue-base)',
  /** @deprecated use blue-d20 instead */
  'blue-600': 'var(--amino-blue-d20)',
  /** @deprecated use blue-d40 instead */
  'blue-700': 'var(--amino-blue-d40)',
  /** @deprecated use blue-d60 instead */
  'blue-800': 'var(--amino-blue-d60)',
  /** @deprecated use blue-d80 instead */
  'blue-900': 'var(--amino-blue-d80)',

  /* CYAN PALETTE */
  'cyan-l80': '#e9fcff',
  'cyan-l60': '#a5edf6',
  'cyan-l40': '#77e3f2',
  'cyan-l20': '#4adaed',
  'cyan-base': '#1dd1e9',
  'cyan-d20': '#17a7ba',
  'cyan-d40': '#117d8c',
  'cyan-d60': '#0c545d',
  'cyan-d80': '#1d363b',
  'cyan-alpha': '#00dfe380',
  'cyan-50': '#e9fcff',
  /** @deprecated --*/
  'cyan-100': 'var(--amino-cyan-l80)',
  /** @deprecated use cyan-l60 instead */
  'cyan-200': 'var(--amino-cyan-l60)',
  /** @deprecated use cyan-l40 instead */
  'cyan-300': 'var(--amino-cyan-l40)',
  /** @deprecated use cyan-l20 instead */
  'cyan-400': 'var(--amino-cyan-l20)',
  /** @deprecated use cyan-base instead */
  'cyan-500': 'var(--amino-cyan-base)',
  /** @deprecated use cyan-d20 instead */
  'cyan-600': 'var(--amino-cyan-d20)',
  /** @deprecated use cyan-d40 instead */
  'cyan-700': 'var(--amino-cyan-d40)',
  /** @deprecated use cyan-d60 instead */
  'cyan-800': 'var(--amino-cyan-d60)',
  /** @deprecated use cyan-d80 instead */
  'cyan-900': 'var(--amino-cyan-d80)',

  /* RED PALETTE */
  'red-l80': '#fde5eb',
  'red-l60': '#f899b1',
  'red-l40': '#f5668a',
  'red-l20': '#f13363',
  'red-base': '#ee003c',
  'red-d20': '#be0030',
  'red-d40': '#8f0024',
  'red-d60': '#5f0018',
  'red-d80': '#371822',
  'red-alpha': '#e0451a80',
  'red-50': '#fef2f2',
  /** @deprecated use red-l80 instead */
  'red-100': 'var(--amino-red-l80)',
  /** @deprecated use red-l60 instead */
  'red-200': 'var(--amino-red-l60)',
  /** @deprecated use red-l40 instead */
  'red-300': 'var(--amino-red-l40)',
  /** @deprecated use red-l20 instead */
  'red-400': 'var(--amino-red-l20)',
  /** @deprecated use red-base instead */
  'red-500': 'var(--amino-red-base)',
  /** @deprecated use red-d20 instead */
  'red-600': 'var(--amino-red-d20)',
  /** @deprecated use red-d40 instead */
  'red-700': 'var(--amino-red-d40)',
  /** @deprecated use red-d60 instead */
  'red-800': 'var(--amino-red-d60)',
  /** @deprecated use red-d80 instead */
  'red-900': 'var(--amino-red-d80)',

  /* ORANGE PALETTE */
  'orange-l80': '#fff0e5',
  'orange-l60': '#ffc499',
  'orange-l40': '#ffa666',
  'orange-l20': '#ff8933',
  'orange-base': '#ff6b00',
  'orange-d20': '#cc5600',
  'orange-d40': '#994000',
  'orange-d60': '#662b00',
  'orange-d80': '#39271c',
  'orange-alpha': '#ffa51e80',
  'orange-50': '#fff0e5',
  /** @deprecated use orange-l80 instead */
  'orange-100': 'var(--amino-orange-l80)',
  /** @deprecated use orange-l60 instead */
  'orange-200': 'var(--amino-orange-l60)',
  /** @deprecated use orange-l40 instead */
  'orange-300': 'var(--amino-orange-l40)',
  /** @deprecated use orange-l20 instead */
  'orange-400': 'var(--amino-orange-l20)',
  /** @deprecated use orange-base instead */
  'orange-500': 'var(--amino-orange-base)',
  /** @deprecated use orange-d20 instead */
  'orange-600': 'var(--amino-orange-d20)',
  /** @deprecated use orange-d40 instead */
  'orange-700': 'var(--amino-orange-d40)',
  /** @deprecated use orange-d60 instead */
  'orange-800': 'var(--amino-orange-d60)',
  /** @deprecated use orange-d80 instead */
  'orange-900': 'var(--amino-orange-d80)',

  /* GREEN PALETTE */
  'green-l80': '#e5f9e5',
  'green-l60': '#99e799',
  'green-l40': '#66db66',
  'green-l20': '#33cf33',
  'green-base': '#00c300',
  'green-d20': '#009c00',
  'green-d40': '#007500',
  'green-d60': '#004e00',
  'green-d80': '#17311a',
  'green-alpha': '#ecfdf580',
  'green-50': '#ecfdf5',
  /** @deprecated use green-l80 instead */
  'green-100': 'var(--amino-green-l80)',
  /** @deprecated use green-l60 instead */
  'green-200': 'var(--amino-green-l60)',
  /** @deprecated use green-l40 instead */
  'green-300': 'var(--amino-green-l40)',
  /** @deprecated use green-l20 instead */
  'green-400': 'var(--amino-green-l20)',
  /** @deprecated use green-base instead */
  'green-500': 'var(--amino-green-base)',
  /** @deprecated use green-d20 instead */
  'green-600': 'var(--amino-green-d20)',
  /** @deprecated use green-d40 instead */
  'green-700': 'var(--amino-green-d40)',
  /** @deprecated use green-d60 instead */
  'green-800': 'var(--amino-green-d60)',
  /** @deprecated use green-d80 instead */
  'green-900': 'var(--amino-green-d80)',

  /* PURPLE */
  'purple-l80': '#f5e5ff',
  'purple-l60': '#d599ff',
  'purple-l40': '#c066ff',
  'purple-l20': '#ab33ff',
  'purple-base': '#9600ff',
  'purple-d20': '#7800cc',
  'purple-d40': '#5a0099',
  'purple-d60': '#3c0066',
  'purple-d80': '#2c183b',
  'purple-alpha': '#f5f3ff80',
  'purple-50': '#f5f3ff',
  /** @deprecated use purple-l80 instead */
  'purple-100': 'var(--amino-purple-l80)',
  /** @deprecated use purple-l60 instead */
  'purple-200': 'var(--amino-purple-l60)',
  /** @deprecated use purple-l40 instead */
  'purple-300': 'var(--amino-purple-l40)',
  /** @deprecated use purple-l20 instead */
  'purple-400': 'var(--amino-purple-l20)',
  /** @deprecated use purple-base instead */
  'purple-500': 'var(--amino-purple-base)',
  /** @deprecated use purple-d20 instead */
  'purple-600': 'var(--amino-purple-d20)',
  /** @deprecated use purple-d40 instead */
  'purple-700': 'var(--amino-purple-d40)',
  /** @deprecated use purple-d60 instead */
  'purple-800': 'var(--amino-purple-d60)',
  /** @deprecated use purple-d80 instead */
  'purple-900': 'var(--amino-purple-d80)',

  /* YELLOW PALLETE */
  'yellow-l80': '#fff9e5',
  'yellow-l60': '#ffe999',
  'yellow-l40': '#ffdd66',
  'yellow-l20': '#ffd233',
  'yellow-base': '#ffc700',
  'yellow-d20': '#cc9f00',
  'yellow-d40': '#997700',
  'yellow-d60': '#665000',
  'yellow-d80': '#39321c',
  'yellow-alpha': '#fffbeb80',
  'yellow-50': '#fffbeb',
  /** @deprecated use yellow-l80 instead */
  'yellow-100': 'var(--amino-yellow-l80)',
  /** @deprecated use yellow-l60 instead */
  'yellow-200': 'var(--amino-yellow-l60)',
  /** @deprecated use yellow-l40 instead */
  'yellow-300': 'var(--amino-yellow-l40)',
  /** @deprecated use yellow-l20 instead */
  'yellow-400': 'var(--amino-yellow-l20)',
  /** @deprecated use yellow-base instead */
  'yellow-500': 'var(--amino-yellow-base)',
  /** @deprecated use yellow-d20 instead */
  'yellow-600': 'var(--amino-yellow-d20)',
  /** @deprecated use yellow-d40 instead */
  'yellow-700': 'var(--amino-yellow-d40)',
  /** @deprecated use yellow-d60 instead */
  'yellow-800': 'var(--amino-yellow-d60)',
  /** @deprecated use yellow-d80 instead */
  'yellow-900': 'var(--amino-yellow-d80)',
  'amber-alpha': '#fffbeb80',
  'amber-50': '#fffbeb',
  /** @deprecated use yellow-l80 instead */
  'amber-100': 'var(--amino-yellow-l80)',
  /** @deprecated use yellow-l60 instead */
  'amber-200': 'var(--amino-yellow-l60)',
  /** @deprecated use yellow-l40 instead */
  'amber-300': 'var(--amino-yellow-l40)',
  /** @deprecated use yellow-l20 instead */
  'amber-400': 'var(--amino-yellow-l20)',
  /** @deprecated use yellow-base instead */
  'amber-500': 'var(--amino-yellow-base)',
  /** @deprecated use yellow-d20 instead */
  'amber-600': 'var(--amino-yellow-d20)',
  /** @deprecated use yellow-d40 instead */
  'amber-700': 'var(--amino-yellow-d40)',
  /** @deprecated use yellow-d60 instead */
  'amber-800': 'var(--amino-yellow-d60)',
  /** @deprecated use yellow-d80 instead */
  'amber-900': 'var(--amino-yellow-d80)',

  /* COMMON COLOR */
  danger: 'var(--amino-red-base)',
  'danger-dark': 'var(--amino-red-d20)',
  error: 'var(--amino-red-base)',
  primary: 'var(--amino-blue-base)',
  'primary-light': 'var(--amino-blue-l20)',
  'primary-dark': 'var(--amino-blue-d40)',
  success: 'var(--amino-green-l60)',
  'success-dark': 'var(--amino-green-d20)',
  warning: 'var(--amino-amber-l80)',
  'warning-dark': 'var(--amino-amber-d20)',

  /* GLOW COLOR */
  'glow-error': '0 0 0 1px var(--amino-red-base)',
  'glow-blue': '0 0 0 1px var(--amino-primary)',
  'glow-cyan': '0 0 0 1px var(--amino-cyan-alpha)',
  'glow-red': '0 0 0 1px var(--amino-red-alpha)',
  'glow-orange': '0 0 0 1px var(--amino-orange-alpha)',
  'glow-green': '0 0 0 1px var(--amino-green-alpha)',
  'glow-purple': '0 0 0 1px var(--amino-purple-alpha)',

  /* LAYOUT COLOR */
  'page-background': 'white',
  'border-color': 'var(--amino-gray-l60)',
  'hover-color': 'var(--amino-gray-50)',
  'surface-color': 'white',
  'surface-color-secondary': 'var(--amino-gray-50)',
  'text-light': 'white',
  'text-color': 'var(--amino-gray-d80)',
  'text-dark': 'var(--amino-text-color)',
  'input-background': 'white',

  /* BUTTON SIZE */
  'size-xl': '56px',
  'size-lg': '48px',
  'size-md': '40px',
  'size-sm': '32px',

  /* BORDER RADIUS */
  /** @info 4px */
  'radius-sm': '0.25rem',
  /** @info 6px */
  radius: '0.375rem',
  /** @info 8px */
  'radius-lg': '0.5rem',
  /** @info 12px */
  'radius-xl': '0.75rem',

  /** @info px: 24px */
  space: '1.5rem',
  /** @info px: -24px */
  'space-negative': '-1.5rem',
  /** @info px: 16px */
  'space-half': '1rem',
  /** @info px: -16px */
  'space-half-negative': '-1rem',
  /** @info px: 8px */
  'space-quarter': '0.5rem',
  /** @info px: -8px */
  'space-quarter-negative': '-0.5rem',
  /** @info px: 40px */
  'space-double': '2.5rem',
  /** @info px: -40px */
  'space-double-negative': '-2.5rem',

  /* LAYOUT STYLE */
  'appbar-height': '55px',
  'sidebar-width': '264px',
  'sidebar-color': 'white',
  'header-color': 'white',
  'backdrop-color': 'var(--amino-gray-d80)',
  'elevation-0': '0',
  'elevation-100': '100',
  'elevation-200': '200',
  'elevation-300': '300',
  'elevation-400': '400',
  'elevation-500': '500',
  /** @info 400 */
  'dialog-elevation': 'var(--amino-elevation-l20)',
  /** @info 500 */
  'toast-elevation': 'var(--amino-elevation-base)',
  /** @info 500 */
  'appbar-elevation': 'var(--amino-elevation-base)',

  /* BOX SHADOW */
  'v3-shadow-inset': 'inset 0px 2px 4px rgba(0, 0, 0, 0.06)',
  'v3-shadow-base': `0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)`,
  'v3-shadow-medium': `0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)`,
  'v3-shadow-large': `0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)`,
  'v3-shadow-xl': `0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)`,
  'v3-shadow-xxl': '0px 32px 50px rgba(0, 0, 0, 0.24)',
  /* LEGACY BOX SHADOW */
  /** @deprecated use v3-shadow-inset instead */
  'shadow-inset': 'var(--amino-v3-shadow-inset)',
  /** @deprecated use v3-shadow-base instead */
  'shadow-small': 'var(--amino-v3-shadow-base)',
  /** @deprecated use v3-shadow-medium instead */
  'shadow-base': 'var(--amino-v3-shadow-medium)',
  /** @deprecated use v3-shadow-large instead */
  'shadow-medium': 'var(--amino-v3-shadow-large)',
  /** @deprecated use v3-shadow-xl instead */
  'shadow-large': 'var(--amino-v3-shadow-xl)',
  /** @deprecated use v3-shadow-xxl instead */
  'shadow-larger': 'var(--amino-v3-shadow-xxl)',

  /* BORDER */
  border: '1px solid var(--amino-border-color)',
  'border-blue': '1px solid var(--amino-blue-l20)',
  'border-red': '1px solid var(--amino-red-l40)',
  'border-cyan': '1px solid var(--amino-cyan-l40)',
  'border-orange': '1px solid var(--amino-orange-l40)',
  'border-green': '1px solid var(--amino-green-l40)',
  'border-purple': '1px solid var(--amino-purple-l40)',
  'border-amber': '1px solid var(--amino-amber-l40)',
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
  'text-xxl': 'var(--amino-font-size-3xl)',
  'text-xl': 'var(--amino-font-size-2xl)',
  'text-lg': 'var(--amino-font-size-xl)',
  'text-md': 'var(--amino-font-size-l)',
  'text-base': 'var(--amino-font-size-base)',
  'text-sm': 'var(--amino-font-size-s)',
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
  'harmonized-codes': `'Fira Code', var(--amino-font-sans)`,
} as const;

export type ThemeKey = keyof typeof theme;

export type ThemeValue = typeof theme[ThemeKey];

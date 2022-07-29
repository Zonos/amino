export const layoutStyles = {
  'appbar-height': '55px',
  'sidebar-width': '264px',
  'sidebar-color': 'white',
  'header-color': 'white',
  'backdrop-color': 'var(--amino-gray-900)',
  'elevation-0': '0',
  'elevation-100': '100',
  'elevation-200': '200',
  'elevation-300': '300',
  'elevation-400': '400',
  'elevation-500': '500',
  'dialog-elevation': 'var(--amino-elevation-400)',
  'toast-elevation': 'var(--amino-elevation-500)',
  'appbar-elevation': 'var(--amino-elevation-500)',
} as const;

export const shadows = {
  'v3-shadow-inset': 'inset 0px 2px 4px rgba(0, 0, 0, 0.06)',
  'v3-shadow-base': `0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)`,
  'v3-shadow-medium': `0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)`,
  'v3-shadow-large': `0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)`,
  'v3-shadow-xl': `0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)`,
  'v3-shadow-xxl': '0px 32px 50px rgba(0, 0, 0, 0.24)',
  'shadow-inset': 'var(--amino-v3-shadow-inset)',
  'shadow-small': 'var(--amino-v3-shadow-base)',
  'shadow-base': 'var(--amino-v3-shadow-medium)',
  'shadow-medium': 'var(--amino-v3-shadow-large)',
  'shadow-large': 'var(--amino-v3-shadow-xl)',
  'shadow-larger': 'var(--amino-v3-shadow-xxl)',
} as const;

export const borders = {
  border: '1px solid var(--amino-border-color)',
  'border-blue': '1px solid var(--amino-blue-400)',
  'border-red': '1px solid var(--amino-red-300)',
  'border-cyan': '1px solid var(--amino-cyan-300)',
  'border-orange': '1px solid var(--amino-orange-300)',
  'border-green': '1px solid var(--amino-green-300)',
  'border-purple': '1px solid var(--amino-purple-300)',
  'border-amber': '1px solid var(--amino-amber-300)',
  'border-transparent': '1px solid transparent',
} as const;

export const layoutStyleList = {
  ...layoutStyles,
  ...shadows,
  ...borders,
};

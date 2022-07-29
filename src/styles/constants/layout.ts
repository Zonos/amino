export const layoutStyles = {
  'appbar-height': 'var(--amino-appbar-height)',
  'sidebar-width': 'var(--amino-sidebar-width)',
  'sidebar-color': 'var(--amino-sidebar-color)',
  'header-color': 'var(--amino-header-color)',
  'backdrop-color': 'var(--amino-backdrop-color)',
  'elevation-0': 'var(--amino-elevation-0)',
  'elevation-100': 'var(--amino-elevation-100)',
  'elevation-200': 'var(--amino-elevation-200)',
  'elevation-300': 'var(--amino-elevation-300)',
  'elevation-400': 'var(--amino-elevation-400)',
  'elevation-500': 'var(--amino-elevation-500)',
  'dialog-elevation': 'var(--amino-dialog-elevation)',
  'toast-elevation': 'var(--amino-toast-elevation)',
  'appbar-elevation': 'var(--amino-appbar-elevation)',
} as const;

export const shadows = {
  'v3-shadow-inset': 'var(--amino-v3-shadow-inset)',
  'v3-shadow-base': `0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)`,
  'v3-shadow-medium': `0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)`,
  'v3-shadow-large': `0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)`,
  'v3-shadow-xl': `0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)`,
  'v3-shadow-xxl': 'var(--amino-v3-shadow-xxl)',
  'shadow-inset': 'var(--amino-shadow-inset)',
  'shadow-small': 'var(--amino-shadow-small)',
  'shadow-base': 'var(--amino-shadow-base)',
  'shadow-medium': 'var(--amino-shadow-medium)',
  'shadow-large': 'var(--amino-shadow-large)',
  'shadow-larger': 'var(--amino-shadow-larger)',
} as const;

export const borders = {
  'border': 'var(--amino-border)',
  'border-blue': 'var(--amino-border-blue)',
  'border-red': 'var(--amino-border-red)',
  'border-cyan': 'var(--amino-border-cyan)',
  'border-orange': 'var(--amino-border-orange)',
  'border-green': 'var(--amino-border-green)',
  'border-purple': 'var(--amino-border-purple)',
  'border-amber': 'var(--amino-border-amber)',
  'border-transparent': 'var(--amino-border-transparent)',
} as const;

export const layoutStyleList = {
  ...layoutStyles,
  ...shadows,
  ...borders,
};

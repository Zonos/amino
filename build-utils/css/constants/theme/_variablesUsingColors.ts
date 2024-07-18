export const variablesUsingColors = {
  /* BORDER */
  border: '1px solid var(--amino-border-color)',
  'border-blue': '1px solid var(--amino-blue-500)',
  'border-red': '1px solid var(--amino-red-500)',
  'border-cyan': '1px solid var(--amino-cyan-500)',
  'border-orange': '1px solid var(--amino-orange-500)',
  'border-green': '1px solid var(--amino-green-500)',
  'border-purple': '1px solid var(--amino-purple-500)',
  'border-amber': '1px solid var(--amino-amber-500)',
  'border-transparent': '1px solid transparent',
  'border-subtle': '1px solid var(--amino-gray-100)',

  /* LAYOUT STYLE */
  'sidebar-color': 'var(--amino-gray-0)',
  'header-color': 'var(--amino-gray-0)',

  /* INTENT COLOR */
  danger: 'var(--amino-red-500)',
  'danger-dark': 'var(--amino-red-700)',
  error: 'var(--amino-red-500)',
  primary: 'var(--amino-blue-500)',
  'primary-light': 'var(--amino-blue-400)',
  'primary-dark': 'var(--amino-blue-800)',
  success: 'var(--amino-green-500)',
  'success-dark': 'var(--amino-green-700)',
  warning: 'var(--amino-orange-500)',
  'warning-dark': 'var(--amino-orange-600)',

  /* GLOW COLOR */
  'glow-error': '0 0 0 1px var(--amino-red-500)',
  'glow-blue': '0 0 0 1px var(--amino-primary)',
  'glow-cyan': '0 0 0 1px var(--amino-cyan-500)',
  'glow-red': '0 0 0 1px var(--amino-red-500)',
  'glow-orange': '0 0 0 1px var(--amino-orange-500)',
  'glow-green': '0 0 0 1px var(--amino-green-500)',
  'glow-purple': '0 0 0 1px var(--amino-purple-500)',

  /* LAYOUT COLOR */
  'page-background': 'var(--amino-gray-0)',
  'border-color': 'var(--amino-gray-200)',
  'hover-color': 'var(--amino-gray-50)',
  'text-color': 'var(--amino-gray-1000)',
  'text-color-secondary': 'var(--amino-gray-700)',

  /* BUTTON FOCUS */
  'focus-button-standard':
    '0px 0px 0px 1px var(--amino-transparent-gray-600) inset, var(--amino-button-focus-ring)',
  'focus-button':
    '0px 0px 0px 1px var(--amino-gray-0) inset, var(--amino-button-focus-ring)',
} as const;

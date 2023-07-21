export const variablesUsingColors = {
  /* BORDER */
  border: '1px solid var(--amino-border-color)',
  'border-amber': '1px solid var(--amino-amber-400)',
  'border-blue': '1px solid var(--amino-blue-500)',
  'border-color': 'var(--amino-gray-200)',
  'border-cyan': '1px solid var(--amino-cyan-400)',
  'border-green': '1px solid var(--amino-green-400)',
  'border-orange': '1px solid var(--amino-orange-400)',
  'border-purple': '1px solid var(--amino-purple-400)',
  'border-red': '1px solid var(--amino-red-400)',
  'border-transparent': '1px solid transparent',

  /* INTENT COLOR */
  danger: 'var(--amino-red-600)',
  'danger-dark': 'var(--amino-red-700)',
  error: 'var(--amino-red-600)',
  'glow-blue': '0 0 0 1px var(--amino-primary)',
  'glow-cyan': '0 0 0 1px var(--amino-cyan-600)',

  /* GLOW COLOR */
  'glow-error': '0 0 0 1px var(--amino-red-600)',
  'glow-green': '0 0 0 1px var(--amino-green-600)',
  'glow-orange': '0 0 0 1px var(--amino-orange-600)',
  'glow-purple': '0 0 0 1px var(--amino-purple-600)',
  'glow-red': '0 0 0 1px var(--amino-red-600)',
  'header-color': 'var(--amino-gray-0)',
  'hover-color': 'var(--amino-gray-50)',

  /* LAYOUT COLOR */
  'page-background': 'var(--amino-gray-0)',
  primary: 'var(--amino-blue-600)',
  'primary-dark': 'var(--amino-blue-800)',
  'primary-light': 'var(--amino-blue-500)',

  /* LAYOUT STYLE */
  'sidebar-color': 'var(--amino-gray-0)',
  success: 'var(--amino-green-300)',
  'success-dark': 'var(--amino-green-700)',
  'text-color': 'var(--amino-gray-1000)',
  warning: 'var(--amino-amber-100)',
  'warning-dark': 'var(--amino-amber-700)',
} as const;

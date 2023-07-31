export const shadow = {
  'v3-shadow-base': `0px 0px 0px 1px rgba(255, 255, 255, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.9), 0px 1px 2px rgba(0, 0, 0, 0.8)`,
  'v3-shadow-medium': `0px 0px 0px 1px rgba(255, 255, 255, 0.12), 0px 4px 6px rgba(0, 0, 0, 0.9), 0px 2px 4px rgba(0, 0, 0, 0.8)`,
  'v3-shadow-large': `0px 0px 0px 1px rgba(255, 255, 255, 0.12), 0px 10px 15px rgba(0, 0, 0, 0.9), 0px 4px 6px rgba(0, 0, 0, 0.8)`,
  'v3-shadow-xl': `0px 0px 0px 1px rgba(255, 255, 255, 0.12), 0px 20px 25px rgba(0, 0, 0, 0.9), 0px 10px 10px rgba(0, 0, 0, 0.8)`,
  'v3-shadow-xxl':
    '0px 0px 0px 1px rgba(255, 255, 255, 0.12), 0px 32px 50px rgba(0, 0, 0, 0.96);',
  'v3-shadow-inset':
    ' 0px 0px 0px 1px rgba(255, 255, 255, 0.12), 0px 0px 6px rgba(255, 255, 255, 0.08), 0px 1px 0px #111114, 0px 2px 4px rgba(0, 0, 0, 0.24), inset 0px 1px 1px rgba(0, 0, 0, 0.24), inset 0px 2px 4px rgba(0, 0, 0, 0.24), inset 0px 0px 0px 0.5px rgba(0, 0, 0, 0.24), inset 0px 0px 8px rgba(0, 0, 0, 0.16);',
  'shadow-button-primary':
    '0px -1px 1px 0px rgba(0, 0, 0, 0.20) inset, 0px 0px 0px 0.5px #000, 0px 1px 3px 0px rgba(95, 146, 246, 0.40), var(--amino-primary) inset',
  'shadow-button-success':
    '0px -1px 1px 0px rgba(0, 0, 0, 0.20) inset, 0px 0px 0px 1px rgba(255, 255, 255, 0.08) inset, 0px 0px 0px 0.5px #000, 0px 1px 3px 0px rgba(86, 199, 111, 0.60), var(--amino-success) inset',
  'shadow-button-danger':
    '0px -1px 1px 0px rgba(0, 0, 0, 0.20) inset, 0px 1px 3px 0px rgba(217, 33, 65, 0.40), var(--amino-danger) inset',
  'shadow-button-warning':
    '0px -1px 1px 0px rgba(0, 0, 0, 0.20) inset, 0px 1px 3px 0px rgba(229, 89, 26, 0.40), var(--amino-warning) inset',
  'button-focus-ring': '0 0 0 2px var(--amino-blue-600)',
  'shadow-button-standard':
    '0px -1px 1px 0px rgba(0, 0, 0, 0.40) inset, 0px 0px 2px 1px rgba(255, 255, 255, 0.08) inset, 0px 1px 3px 0px rgba(0, 0, 0, 0.80), 0px 0px 0px 1px rgba(148, 150, 158, 0.12) inset',
} as const;

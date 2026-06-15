import base from './eslint.config.mjs';

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...base,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      'no-console': 'error',
    },
  },
  {
    files: ['svgReact/**', 'build-utils/**/*', '__stories__/**'],
    rules: {
      'no-console': 'off',
    },
  },
];

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['./.eslintrc.js'],
  overrides: [
    {
      files: ['./svgReact/**/*', './build-utils/**/*'],
      rules: {
        'deprecation/deprecation': 'off',
        'no-console': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'no-console': 'error',
  },
};

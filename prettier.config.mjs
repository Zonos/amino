/**
 * @type {import("prettier").Config}
 */
const config = {
  arrowParens: 'avoid',
  overrides: [
    {
      files:
        '{*.js?(on),*.y?(a)ml,.*.js?(on),.*.y?(a)ml,*.md,.prettierrc,.stylelintrc,.babelrc}',
      options: {
        tabWidth: 2,
      },
    },
  ],
  printWidth: 80,
  proseWrap: 'preserve',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
};

export default config;

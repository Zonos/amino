/**
 * @type {import("prettier").Config}
 */
const config = {
  arrowParens: 'avoid',
  customFunctions: ['cn', 'clsx'],
  overrides: [
    {
      files:
        '{*.js?(on),*.y?(a)ml,.*.js?(on),.*.y?(a)ml,*.md,.prettierrc,.stylelintrc,.babelrc}',
      options: {
        tabWidth: 2,
      },
    },
  ],
  plugins: [
    'prettier-plugin-tailwindcss',
    'prettier-plugin-classnames',
    'prettier-plugin-merge',
  ],
  printWidth: 80,
  proseWrap: 'preserve',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
};

export default config;

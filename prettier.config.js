/**
 * @type {import("prettier").Config}
 */
const config = {
  tabWidth: 2,
  printWidth: 80,
  proseWrap: "preserve",
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  arrowParens: "avoid",
  overrides: [
    {
      files:
        "{*.js?(on),*.y?(a)ml,.*.js?(on),.*.y?(a)ml,*.md,.prettierrc,.stylelintrc,.babelrc}",
      options: {
        tabWidth: 2,
      },
    },
  ],
};

export default config;

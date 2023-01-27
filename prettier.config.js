module.exports = {
  tabWidth: 2,
  printWidth: 80,
  proseWrap: 'preserve',
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
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
};

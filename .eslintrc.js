/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:storybook/recommended',
    'plugin:vitest/recommended',
  ],
  globals: {
    JSX: 'readonly',
  },
  overrides: [
    {
      /**
       * Disable no-undef on typescript file since the check it provides are already provided by Typescript without the need for configuration
       * Refs: https://github.com/typescript-eslint/typescript-eslint/blob/bbfed02ce62533d2020dc0b834cfa17e26a6d523/docs/linting/Troubleshooting.mdx?plain=1#L169
       */
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
    {
      /**
       * Turn off sort-keys for generated constants file (we don't want to sort because of comments, but want to do other linting)
       */
      files: ['src/styles/constants/*.ts'],
      rules: {
        'sort-destructure-keys/sort-destructure-keys': 'off',
        'sort-keys': 'off',
        'sort-keys/sort-keys-fix': 'off',
        'typescript-custom-sort-keys/interface': 'off',
      },
    },
    {
      files: ['test-utils/**'],
      rules: {
        'import/no-internal-modules': 'off',
        'react/jsx-props-no-spreading': 'off',
      },
    },
    {
      files: ['**.test.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'vitest',
    '@typescript-eslint',
    'simple-import-sort',
    'prettier',
    'deprecation',
    'sort-keys',
    'typescript-custom-sort-keys',
    'sort-destructure-keys',
    'no-relative-import-paths',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        fixStyle: 'inline-type-imports',
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': ['error'],
    camelcase: 'off',
    // disable since sometime `this` doesn't need to be used in some util function in class
    'class-methods-use-this': 'off',
    'deprecation/deprecation': 'warn',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    /** End Typescript 4.0 changes */
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/no-internal-modules': [
      'error',
      {
        // allow to access to index.ts if that's types folder
        forbid: ['**/src/!(types)/**/index.ts*', '**/src/index.ts*'],
      },
    ],
    // Typescript takes care of this
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    // For debugging ease
    'no-console': 'warn',
    'no-relative-import-paths/no-relative-import-paths': ['warn'],
    'no-restricted-syntax': [
      'error',
      // https://stackoverflow.com/questions/42226436/how-can-i-turn-off-eslints-no-restricted-syntax-rule-just-for-forofstatement
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    // https://github.com/typescript-eslint/typescript-eslint/issues/2483
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'error',
    // Disable the base rule it can report incorrect errors
    'no-unused-vars': 'off',
    // Disable the base rule it can report incorrect errors
    'no-use-before-define': 'off',
    'prettier/prettier': 'error',
    'react/default-props-match-prop-types': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
    // Prettier takes care of this
    'react/jsx-curly-newline': 'off',
    'react/jsx-filename-extension': 'off',
    // Prettier takes care of this
    'react/jsx-indent': 'off',
    'react/jsx-no-useless-fragment': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    // Prettier takes care of this
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': ['error'],
    // Prettier takes care of this
    'react/jsx-wrap-multilines': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^react'], ['^@?w', '^(?!src)'], ['^(src)/'], ['((.|..)/)?']],
      },
    ],
    /**
     * Sort object destructure keys. This rule autofix doesn't tie with comment like `sort-keys`
     * @ref https://github.com/mthadley/eslint-plugin-sort-destructure-keys
     */
    'sort-destructure-keys/sort-destructure-keys': [
      'warn',
      { caseSensitive: false },
    ],
    'sort-keys': 'off',
    /**
     * Sort object keys (not included destructure object)
     * @ref https://github.com/namnm/eslint-plugin-sort-keys
     */
    'sort-keys/sort-keys-fix': ['warn', 'asc'],
    'storybook/use-storybook-expect': 'off',
    /**
     * Sort all types/interface keys
     * @ref https://github.com/prash471/eslint-plugin-typescript-custom-sort-keys
     */
    'typescript-custom-sort-keys/interface': [
      'warn',
      'asc',
      {
        caseSensitive: true,
        showFunctionsAtEnd: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [__dirname],
      },
    },
  },
};

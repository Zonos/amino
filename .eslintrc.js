/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:storybook/recommended',
  ],
  globals: {
    JSX: 'readonly',
  },
  plugins: [
    'jest',
    '@typescript-eslint',
    'simple-import-sort',
    'prettier',
    'deprecation',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['./src/**/*'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  rules: {
    'deprecation/deprecation': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    /** Typescript 4.0 changes */
    // Disable the base rule it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    // https://github.com/typescript-eslint/typescript-eslint/issues/2483
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    /** End Typescript 4.0 changes */
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    camelcase: 'off',
    // Disable the base rule it can report incorrect errors
    'no-unused-vars': 'off',
    'no-unused-expressions': 'error',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    // disable since sometime `this` doesn't need to be used in some util function in class
    'class-methods-use-this': 'off',
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
    'no-underscore-dangle': 'off',
    'prettier/prettier': 'error',
    // Prettier takes care of this
    'react/jsx-curly-newline': 'off',
    'react/jsx-filename-extension': 'off',
    // Prettier takes care of this
    'react/jsx-indent': 'off',
    // Prettier takes care of this
    'react/jsx-one-expression-per-line': 'off',
    // Prettier takes care of this
    'react/jsx-wrap-multilines': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/default-props-match-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-no-useless-fragment': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^react'], ['^@?\\w'], ['^~/src'], ['^'], ['((.|..)/)?']],
      },
    ],
    'storybook/use-storybook-expect': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'MemberExpression[object.name="JSON"][property.name="parse"]',
        message: 'Use `jsonParse` function instead of `JSON.parse`',
      },
      // https://stackoverflow.com/questions/42226436/how-can-i-turn-off-eslints-no-restricted-syntax-rule-just-for-forofstatement
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
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

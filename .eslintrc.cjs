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
  ],
  globals: {
    JSX: 'readonly',
  },
  plugins: ['jest', '@typescript-eslint', 'simple-import-sort', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    /** Typescript 4.0 changes */
    'no-use-before-define': 'off', // Disable the base rule it can report incorrect errors
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-shadow': 'off', // https://github.com/typescript-eslint/typescript-eslint/issues/2483
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
    'no-unused-vars': 'off', // Disable the base rule it can report incorrect errors
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
    ],
    'class-methods-use-this': 'off', // disable since sometime `this` doesn't need to be used in some util function in class
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
    'import/no-unresolved': 'off', // Typescript takes care of this
    'import/prefer-default-export': 'off',
    'no-console': 'warn', // For debugging ease
    'no-underscore-dangle': 'off',
    'prettier/prettier': 'error',
    'react/jsx-curly-newline': 'off', // Prettier takes care of this
    'react/jsx-filename-extension': 'off',
    'react/jsx-indent': 'off', // Prettier takes care of this
    'react/jsx-one-expression-per-line': 'off', // Prettier takes care of this
    'react/jsx-wrap-multilines': 'off', // Prettier takes care of this
    'react/prop-types': 'off', // Try removing this after updating to "react-scripts": "^4.x"
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/default-props-match-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^react'], ['^@?\\w'], ['^~/src'], ['^'], ['((.|..)/)?']],
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

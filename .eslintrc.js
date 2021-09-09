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
  plugins: ['jest', '@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    Blob: 'readonly',
    File: 'readonly',
    FileReader: 'readonly',
    FormData: 'readonly',
    alert: 'readonly',
    confirm: 'readonly',
    document: 'readonly',
    fetch: 'readonly',
    localStorage: 'readonly',
    navigator: 'readonly',
    sessionStorage: 'readonly',
    window: 'readonly',
  },
  rules: {
    camelcase: 'off',
    'no-use-before-define': 'off', // Disable the base rule it can report incorrect errors
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-unused-vars': 'off', // Disable the base rule it can report incorrect errors
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-shadow': 'off', // https://github.com/typescript-eslint/typescript-eslint/issues/2483
    '@typescript-eslint/no-shadow': ['error'],
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
    'react/require-default-props': [
      'error',
      { forbidDefaultForRequired: true, ignoreFunctionalComponents: true },
    ],
    // TODO change to error after legacy occurences are fixed
    '@typescript-eslint/no-explicit-any': 'warn', // 5 left
    'import/no-extraneous-dependencies': 'warn', // 4 left
    'jsx-a11y/click-events-have-key-events': 'warn', // 7 left
    'jsx-a11y/no-static-element-interactions': 'warn', // 7 left
    'no-alert': 'warn', // 18 left
    'no-param-reassign': 'warn', // 4 left
    'no-throw-literal': 'warn', // 5 left
    'react-hooks/exhaustive-deps': 'warn', // 13 left
  },
};

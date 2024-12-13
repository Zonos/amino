import eslint from '@eslint/js';
import pluginVitest from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import * as pluginCssModules from 'eslint-plugin-css-modules';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginNoRelativeImports from 'eslint-plugin-no-relative-import-paths';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginImportSort from 'eslint-plugin-simple-import-sort';
import pluginSortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import pluginSortKeys from 'eslint-plugin-sort-keys';
import pluginStorybook from 'eslint-plugin-storybook';
import pluginTypescriptSortKeys from 'eslint-plugin-typescript-sort-keys';
import globals from 'globals';
import tseslint, { parser } from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      '**/generated/**',
      '**/dist/**',
      'svgReact/flags/svgs/**',
      'svgReact/icons/svgs/**',
      '!svgReact/*/dist/**',
      'storybook-static',
      'src/all.ts',
      '!.storybook',
      '.github',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  pluginImport.flatConfigs.recommended,
  ...pluginStorybook.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'css-modules': pluginCssModules,
      'jsx-a11y': pluginJsxA11y,
      'no-relative-import-paths': pluginNoRelativeImports,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'simple-import-sort': pluginImportSort,
      'sort-destructure-keys': pluginSortDestructureKeys,
      'sort-keys': pluginSortKeys,
      'typescript-sort-keys': pluginTypescriptSortKeys,
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          fixStyle: 'inline-type-imports',
          prefer: 'type-imports',
        },
      ],
      '@typescript-eslint/no-deprecated': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-use-before-define': ['error'],
      'arrow-body-style': ['error', 'as-needed'],
      camelcase: 'off',
      // disable since sometime `this` doesn't need to be used in some util function in class
      'class-methods-use-this': 'off',
      'css-modules/no-undef-class': [2, { camelCase: true }],
      'css-modules/no-unused-class': [2, { camelCase: true }],
      'import/extensions': 'off',
      // False positives
      'import/named': 'off',
      'import/newline-after-import': 'error',
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
      'no-relative-import-paths/no-relative-import-paths': [
        'warn',
        // Allow to import from same folder for importing scss modules
        { allowSameFolder: true },
      ],
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
      'react/jsx-sort-props': [
        'error',
        {
          reservedFirst: true,
        },
      ],
      // Prettier takes care of this
      'react/jsx-wrap-multilines': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react'],
            ['^@?w', '^(?!src)'],
            ['^(src)/'],
            ['((.|..)/)?'],
          ],
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
      /**
       * Sort object keys (not included destructure object)
       * @ref https://github.com/namnm/eslint-plugin-sort-keys
       */
      'sort-keys/sort-keys-fix': ['warn', 'asc'],
      'storybook/use-storybook-expect': 'off',
      'typescript-sort-keys/interface': 'error',
      'typescript-sort-keys/string-enum': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['__tests__/**'], // or any other pattern
    plugins: {
      vitest: pluginVitest,
    },
    rules: {
      ...pluginVitest.configs.recommended.rules, // you can also use vitest.configs.all.rules to enable all rules
      'vitest/max-nested-describe': ['error', { max: 3 }], // you can also modify rules' behavior using option like this
    },
  },
  {
    files: ['**/*.graphql.*.ts'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
  {
    files: ['build-utils/css/constants/**', 'src/styles/constants/**'],
    rules: {
      'sort-keys/sort-keys-fix': 'off',
    },
  },
  {
    files: ['svgReact/**', 'build-utils/**'],
    rules: {
      'no-console': 'off',
    },
  },
);

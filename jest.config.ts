import type { InitialOptionsTsJest } from 'ts-jest/dist/types';

const config: InitialOptionsTsJest = {
  roots: ['<rootDir>'],
  modulePaths: [
    '<rootDir>',
    'build-utils/**/*.ts',
    'src/**/*.ts',
    'src/**/*.tsx',
    '.storybook/**/*.ts',
  ],
  // These modules needed to be transformed :shrug:
  transformIgnorePatterns: ['/node_modules/(?!uuid|d3-.*|internmap)'],
  modulePathIgnorePatterns: ['dist'],
  setupFilesAfterEnv: ['./jest/setupJestMock.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': 'ts-jest',
    '^.+\\.svg$': 'jest-transformer-svg',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
  },
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};

export default config;

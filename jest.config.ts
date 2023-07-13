import type { JestConfigWithTsJest } from 'ts-jest/dist/types';

const config: JestConfigWithTsJest = {
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
  modulePathIgnorePatterns: ['dist', '__stories__', 'playwright'],
  setupFilesAfterEnv: ['./jest/setupJest.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': ['ts-jest', { isolatedModules: true }],
    '^.+\\.svg$': 'jest-transformer-svg',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
  },
  testEnvironment: 'jsdom',
};

export default config;

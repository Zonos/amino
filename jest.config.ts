import type { JestConfigWithTsJest } from 'ts-jest/dist/types';

const config: JestConfigWithTsJest = {
  modulePathIgnorePatterns: ['dist', '__stories__', 'playwright'],
  modulePaths: [
    '<rootDir>',
    'build-utils/**/*.ts',
    'src/**/*.ts',
    'src/**/*.tsx',
    '.storybook/**/*.ts',
  ],
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['./jest/setupJest.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
    '^.+\\.(js|jsx|ts|tsx)?$': ['ts-jest', { isolatedModules: true }],
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  // These modules needed to be transformed :shrug:
  transformIgnorePatterns: ['/node_modules/(?!uuid|d3-.*|internmap)'],
};

export default config;

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
  modulePathIgnorePatterns: ['dist'],
  setupFilesAfterEnv: ['./jest/setupJestMock.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};

export default config;

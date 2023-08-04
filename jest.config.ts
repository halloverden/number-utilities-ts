import type { JestConfigWithTsJest } from 'ts-jest';
// @ts-ignore
import { compilerOptions } from './tsconfig';

export default async (): Promise<JestConfigWithTsJest> => {
  return {
    preset: 'ts-jest',
    testPathIgnorePatterns: [
      '/dist/',
      '/dist_dev/',
    ],
    testRegex: [
      '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$'
    ],
    testEnvironment: 'node',
    coveragePathIgnorePatterns: [
      '/dist/',
      '/dist_dev/',
      '/node_modules/',
      '/tests/'
    ],
    coverageThreshold: {
      'global': {
        'branches': 90,
        'functions': 95,
        'lines': 95,
        'statements': 95
      }
    },
    collectCoverageFrom: [
      'src/**/*.ts'
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
      '@international/(.*)': ['<rootDir>/src/international/$1'],
      '@norway/(.*)': ['<rootDir>/src/countries/norway/$1'],
      '@tests/(.*)': ['<rootDir>/tests/$1']
    },
    coverageDirectory: './coverage'
  };
}

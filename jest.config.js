/** @typedef { import('ts-jest') } */
/** @type { import('@jest/types').Config } */

const { pathsToModuleNameMapper } = require('ts-jest/utils');
const tsConfig = require('./tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testEnvironment: "node",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/__tests__/"
  ],
  coverageThreshold: {
    "global": {
      "branches": 90,
      "functions": 95,
      "lines": 95,
      "statements": 95
    }
  },
  collectCoverageFrom: [
    "src/**/*.ts"
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths, { prefix: '<rootDir>/' } ),
  coverageDirectory: "./coverage"
};

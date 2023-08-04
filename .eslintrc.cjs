module.exports = {
  env: {
    'browser': false,
    'es2021': true,
    'jest/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  ignorePatterns: [
    'jest.config.ts',
    'webpack.config.js',
    'webpack.config.dev.js',
    'webpack.config.prod.js'
  ],
  overrides: [
    {
      files: ['src/*.ts'],
      extends: [
      ],
      parserOptions: {
        project: ['./tsconfig.json']
      }
    },
    {
      files: ['tests/*.ts'],
      extends: [
        'plugin:jest/all',
      ],
      parserOptions: {
        project: ['./tsconfig.json']
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'jest'
  ],
  root: true
};

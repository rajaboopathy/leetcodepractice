/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  "testMatch": [
    "**/src/**/*.test.ts"
  ],
  testEnvironment: 'node',
  verbose: true
};

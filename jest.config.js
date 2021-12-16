module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/**/mock.ts',
    '!src/graphql/**/*.ts',
    '!src/pages/**/*.tsx',
    '!src/services/**/*.ts',
    '!src/styles/**/*.ts',
    '!src/types/**/*.ts',
    '!src/utils/**/*.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/config.ts'],
  modulePaths: ['<rootDir>/src', '<rootDir>/.jest'],
}

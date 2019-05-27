module.exports = {
  roots: [
    '<rootDir>/tests/',
  ],
  preset: 'ts-jest',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,js}',
  ],
  coverageDirectory: '<rootDir>/reports/jest',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  coverageReporters: [
    'text',
    'text-summary',
    'html',
  ],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  testMatch: ['<rootDir>/tests/**/*.test.{ts,js}'],
};

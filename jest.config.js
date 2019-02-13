module.exports = {
  roots: [
    '<rootDir>',
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
    'text-summary',
    'html',
  ],
  // globals: {
  //   'ts-jest': {
  //     diagnostics: false,
  //   },
  // },
  testMatch: ['<rootDir>/tests/**/*.test.{ts,js}'],
};

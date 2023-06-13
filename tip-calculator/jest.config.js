module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.svg$'
  ],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/__mocks__/svgMock.ts'
  }
};

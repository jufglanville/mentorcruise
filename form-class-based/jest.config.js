module.exports = {
	preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.tsx',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
	transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.svg$',
    '^.+\\.png$'
  ],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/__mocks__/svgMock.ts',
    '\\.png$': '<rootDir>/src/__mocks__/pngMock.ts'
  }
}
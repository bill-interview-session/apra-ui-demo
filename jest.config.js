const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'test.setup.js',
    'jest.config.js',
    'next.config.js',
    '.next',
    'coverage',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
    '^@libs/(.*)$': '<rootDir>/src/libs/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1'
  }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)

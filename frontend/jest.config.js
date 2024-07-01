export default {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
      },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  };

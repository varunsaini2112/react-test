module.exports = {
	verbose: true,
	silent: true,
	setupFilesAfterEnv: ['<rootDir>src/setupTests.ts'],
	coverageDirectory: 'reports',
	collectCoverage: true,
	testResultsProcessor: 'jest-sonar-reporter',
	coverageReporters: ['json', 'lcov'],
	// moduleNameMapper: {
	// 	'\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.js',
	// },
	// coverageThreshold: {
	// 	global: {
	// 		branches: 75,
	// 		functions: 75,
	// 		lines: 75,
	// 		statements: 75,
	// 	},
	// },
};

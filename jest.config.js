const { defaults } = require('jest-config');

module.exports = {
  transform: {
    '^.+\\.js$'  : '<rootDir>/node_modules/babel-jest',
    '.*\\.(ts)$' : '<rootDir>/node_modules/ts-jest'
  },
  moduleDirectories: [
    ...defaults.moduleDirectories, "app/javascript/packs"
  ],
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions, 'ts', 'tsx'
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/vendor/"
  ]
};

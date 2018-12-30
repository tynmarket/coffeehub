module.exports = {
  transform: {
    '^.+\\.js$'  : '<rootDir>/node_modules/babel-jest',
    '.*\\.(ts)$' : '<rootDir>/node_modules/ts-jest'
  },
  testPathIgnorePatterns: [
    "/node_modules/",
    "/vendor/"
  ]
};

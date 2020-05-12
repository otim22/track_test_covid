const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, './'),
  transform: {
    "^.+\\.js$": '<rootDir>/node_modules/babel-jest',
    "^.+\\.vue$": '<rootDir>/node_modules/vue-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/coverage/**",
    "!**/*.config.*",
    "!src/main.js"
  ]
};
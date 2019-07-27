module.exports = {
  preset: 'ts-jest',
  rootDir: "./",
  testEnvironment: 'jest-environment-jsdom-fourteen',
  transform: {
    "^.+\\.(ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
  ],
};


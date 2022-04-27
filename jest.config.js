module.exports = {
  "roots": [
    "<rootDir>/src",
    "<rootDir>/tests/sdk"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsconfig: "./tests/tsconfig.json"
    }
  }
}

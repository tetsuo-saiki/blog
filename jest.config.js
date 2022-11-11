const { defaults } = require("jest-config");
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc-node/jest",
      // for testing library
      {
        swc: {
          sourceMaps: true, // エラーを見やすくする
          jsc: {
            parser: {
              syntax: "typescript", // ソースコードをtypescriptとしてパースする
              tsx: true, // jsx記法を許可する
            },
            transform: {
              react: {
                runtime: "automatic", // 必須。省略すると "ReferenceError: React is not defined" が発生
              },
            },
          },
        },
      },
    ],
  },
  roots: ["<rootDir>/app"],
  testPathIgnorePatterns: [...defaults.testPathIgnorePatterns],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // for testing-library
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/app/$1",
  }, // for testing library
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);

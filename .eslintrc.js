module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  plugins: ["unused-imports"],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "@typescript-eslint/no-var-requires": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
      },
    ],
    "import/no-default-export": "error",
    "unused-imports/no-unused-imports": "error",
    "import/order": [
      "warn",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "object",
          "type",
          "index",
        ],
        pathGroups: [
          {
            pattern: "~/components/**",
            group: "internal",
            position: "after",
          },
        ],
      },
    ],
  },
  // config ファイルは lint の対象外にする
  ignorePatterns: ["*.config.js"],
  // pageコンポーネント 及び api のみ default-export を許可する
  overrides: [
    {
      files: [
        "app/**/page.tsx",
        "app/layout.tsx",
        "app/head.tsx",
        "pages/**/*",
      ],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
};

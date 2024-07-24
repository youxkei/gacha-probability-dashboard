// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import importlint from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";

const config = {};

export default tseslint.config({
  files: ["src/**/*.{ts,tsx}"],
  plugins: {
    "@typescript-eslint": tseslint.plugin,
    import: importlint,
    "unused-imports": unusedImports,
  },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: true,
    },
  },
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylistic,
  ],
  rules: {
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "prefer-const": [
      "error",
      {
        ignoreReadBeforeAssign: true,
      },
    ],
    "import/order": [
      "error",
      {
        groups: ["type", "external", "internal"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "import/no-duplicates": "error",
    "unused-imports/no-unused-imports": "error",
  },
  ignores: ["**/poc/**/*.{ts,tsx}", "**/*.test.{ts,tsx}"],
});

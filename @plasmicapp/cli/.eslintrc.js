module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    // "eslint:recommended",
    // "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-restricted-properties": [
      "error",
      {
        property: "readFileSync",
      },
      {
        property: "writeFileSync",
      },
      {
        property: "existsSync",
      },
      {
        property: "unlinkSync",
      },
      {
        property: "renameSync",
      },
    ],
    "no-restricted-syntax": [
      "error",
      {
        selector: "CallExpression[callee.name='readFileSync']",
      },
      {
        selector: "CallExpression[callee.name='writeFileSync']",
      },
      {
        selector: "CallExpression[callee.name='existsSync']",
      },
    ],
  },
};

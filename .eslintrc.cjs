// .eslintrc.cjs

/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  "no-restricted-syntax": [
    "error",
    {
      "selector": "CallExpression[callee.property.name='only']",
      "message": "We don't want to leave .only on our tests😱"
    },
};

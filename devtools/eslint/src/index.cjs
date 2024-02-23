/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint-config-unjs",
    "plugin:mdx/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/react",
    "plugin:vitest/recommended",
    "plugin:storybook/recommended",
  ],
  plugins: ["unused-imports"],
  rules: {
    curly: "off",
    "multiline-ternary": "off",
    "unicorn/no-null": "off",
    "unicorn/no-for-loop": "off",
    "unicorn/no-array-callback-reference": "off",
    "react/no-unknown-property": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "unused-imports/no-unused-imports": "error",
  },
};

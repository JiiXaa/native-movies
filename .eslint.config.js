// eslint.config.js
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactNative from "eslint-plugin-react-native";
import globals from "globals";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.es2021,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: eslintPluginReact,
      "react-native": eslintPluginReactNative,
    },
    rules: {
      "react/prop-types": "off",
    },
  },
];

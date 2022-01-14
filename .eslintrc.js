module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: "module",
    },
    plugins: [
        "react",
    ],
    rules: {
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        indent: ["error", 4],
        "eol-last": ["error", "never"],
        "linebreak-style": 0,
    },
};
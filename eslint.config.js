import js from "@eslint/js";
import svelte from "eslint-plugin-svelte";
import ts from "typescript-eslint";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default ts.config(
    {
        ignores: [
            ".svelte-kit/**",
            ".wrangler/**",
            "build/**",
            "worker-configuration.d.ts",
        ],
    },
    js.configs.recommended,
    ...ts.configs.recommended,
    ...svelte.configs["flat/recommended"],
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    {
        files: ["**/*.svelte"],
        languageOptions: { parserOptions: { parser: ts.parser } },
    },
    prettier,
    ...svelte.configs["flat/prettier"],
);

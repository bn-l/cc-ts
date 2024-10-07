import antfu from "@antfu/eslint-config";

export default antfu(
    {
        typescript: {
            tsconfigPath: "./tsconfig.json",
            parserOptions: {
                project: "./tsconfig.json",
            },
        },
        stylistic: {
            indent: 4,
            quotes: "double",
            semi: true,
            overrides: {
                "style/brace-style": ["error", "stroustrup", { allowSingleLine: true }],
                "style/eol-last": ["error", "always"],
                "style/object-curly-spacing": ["error", "always"],
                "style/no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1, maxBOF: 1 }],
                "style/no-multi-spaces": "off",
                "style/no-trailing-spaces": "off",
                "style/indent": ["error", 4, { SwitchCase: 1 }],
                "style/new-parens": ["error", "always"],
                "style/nonblock-statement-body-position": ["error", "beside"],
            },
        },
        ignores: [
            "build/",
            ".svelte-kit/",
            "dist/",
            "**/fixtures",
            "**/test",
            "**/.ref/**/*",
            "**/__*",
            "node_modules",
            "dist",
            "**/.factor/**",
            ".pnpmfile.cjs",
            "**/*.json",
            "**/*.md",
            "**/*.yaml",
            "**/*.yml",
            "**/*.js",
        ],
    },
    {
        files: ["**/*.ts", "**/*.tsx", "**/*.mts"],
        rules: {
            "no-console": "off",
            "unused-imports/no-unused-vars": "off",
            "ts/no-for-in-array": "error",
            "ts/no-floating-promises": "error",
            "ts/consistent-type-imports": "off",
            "ts/no-unsafe-assignment": "off",
            "ts/no-unsafe-call": "off",
            "ts/no-unsafe-member-access": "off",
            "ts/no-unsafe-return": "off",
            "unicorn/no-object-as-default-parameter": "error",
            "ts/consistent-type-definitions": "off",
            "ts/strict-boolean-expressions": "off",
        },
    },
);

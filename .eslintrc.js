module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'google'
    ],
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: [
        'vue',
        '@typescript-eslint'
    ],
    rules: {
        'comma-dangle': ['error', 'never'],
        indent: ['error', 4],
        'quote-props': ['error', 'as-needed'],
        'require-jsdoc': ['warn', {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: false,
                ClassDeclaration: false,
                ArrowFunctionExpression: false,
                FunctionExpression: false
            }
        }],
        'arrow-parens': ['error', 'as-needed'],
        'max-len': ['error', {
            code: 120
        }],
        'operator-linebreak': ['error', 'before'],
        'brace-style': ['error', 'stroustrup', {
            allowSingleLine: true
        }]
    }
};

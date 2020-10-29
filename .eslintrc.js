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
        'require-jsdoc': ['error', {
            require: {
                FunctionDeclaration: false,
                MethodDefinition: false,
                ClassDeclaration: false,
                ArrowFunctionExpression: false,
                FunctionExpression: false
            }
        }],
        'arrow-parens': ['error', 'as-needed'],
        'operator-linebreak': ['error', 'before']
    }
};

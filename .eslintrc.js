module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    globals: {
        Atomics: 'readonly',
        p5: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    rules: {
        'brace-style': ['error', 'stroustrup'],
        // 'camelcase': 0,
        // 'default-case': 0,
        'indent': ['error',
            4,
            { 'SwitchCase': 1 }
        ],
        // 'new-cap': 0,
        'max-len': 0,
        'new-cap': 0,
        // 'no-bitwise': 0,
        'no-console': 0,
        // 'no-param-reassign': 0,
        // 'no-underscore-dangle': 0,
        'no-plusplus': 0,
        // 'prefer-destructuring': 0,
        // 'prefer-template': 0,
        'semi': 0,
        'semi-style': ['error', 'first'],
    },
}

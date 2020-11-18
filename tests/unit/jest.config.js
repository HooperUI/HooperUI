/**
 * @file: jest.config.js
 * @since: 2020-09-22
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */
const path = require('path');

module.exports = {
    rootDir: path.resolve(__dirname, '../../'),
    moduleFileExtensions: [
        'js',
        'ts',
        'json',
        'vue'
    ],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest'
    },
    testPathIgnorePatterns: [
        '/node_modules/',
        '^.+\\.d\\.ts$'
    ],
    testMatch: ['**/tests/unit/**/*.spec.js', '**/__tests__/**/*.spec.js'],
    moduleNameMapper: {
        '^components(.*)$': '<rootDir>/src/components$1',
        '^utils(.*)$': '<rootDir>/src/utils$1',
        '^tests(.*)$': '<rootDir>/tests$1'
    },
    coverageDirectory: '<rootDir>/tests/coverage',
    collectCoverageFrom: [
        'src/components/**/*.{ts,tsx,vue}',
        '!src/components/*/__tests__/**/*.{js,jsx}',
        '!**/node_modules/**'
    ],
    globals: {
        'ts-jest': {
            // need esmodule syntax
            babelConfig: true
        }
    }
};

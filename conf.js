/**
 * @file: conf.js Hooperui basic CONFIG
 * @since: 2020-09-22
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */
const path = require('path');

const globalPath = {
    components: './src/components',
    directives: './src/directives',
    utils: './src/utils',
    docs: './docs',
    root: './'
};

const alias = (function () {
    let alias = {};
    for (let [key, val] of Object.entries(globalPath)) {
        alias[key] = path.resolve(__dirname, val);
    }
    return alias;
})();

module.exports = {
    globalPath,
    alias
};

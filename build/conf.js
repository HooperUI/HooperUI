/**
 * @file: conf.js 打包配置
 * @since: 2020-09-22
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ Apache Licence 2.0
 */
const path = require('path');

const globalPath = {
    components: './src/components',
    directives: './src/directives',
    utils: './src/utils',
    docs: './document',
    root: './'
};

const alias = (function () {
    let alias = {};
    for (let [key, val] of Object.entries(globalPath)) {
        alias[key] = path.resolve(__dirname, '../', val);
    }
    return alias;
})();

module.exports = {
    globalPath,
    alias
};

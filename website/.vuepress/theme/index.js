/**
 * @file: index.js
 * @since: 2021-01-15
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */
const path = require('path');
module.exports = {
    name: '@vuepress/theme-hooperui',
    clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.js'),
}

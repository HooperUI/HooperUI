/**
 * @file: genVersion.js Generate new version from package.json
 * @since: 2020-09-22
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */
const fs = require('fs-extra');
const path = require('path');

/**
 * Generate a new version for HooperUI form package.json
 * @date 2020-10-31
 */
function genVersion() {
    const {
        version
    } = require(path.resolve(__dirname, '../../package.json'));

    fs.writeFileSync(
        path.join(__dirname, '../../src/utils/version.ts'),
        `export default '${version}';`,
        'utf8'
    );

    console.log('Changed version.ts from package.json');
}

genVersion();

module.exports = genVersion;

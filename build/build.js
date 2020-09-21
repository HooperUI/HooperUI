/**
 * @file: buid.js
 * @since: 2020-09-21
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ Apache Licence 2.0
 */
const fs = require('fs-extra');
const path = require('path');

// 统一更换版本号
(function genVersion() {
    const {
        version
    } = require('../package.json');
    fs.writeFileSync(
        path.join(__dirname, '..', 'src', 'utils', 'version.ts'),
        `export default '${version}';`,
        'utf8',
    );
})();

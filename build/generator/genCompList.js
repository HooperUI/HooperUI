/**
 * @file: genCompList.js Generate components.json
 * @since: 2020-09-22
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */
const fs = require('fs-extra');
const path = require('path');
const confs = require('../../conf');
const watch = require('watch');
const {showLog} = require('../utils');

const componentsJsonPath = path.resolve(confs.alias.root, 'components.json');
const componentsPath = confs.alias.components;


/**
 * Scan all component dir & generate new components.json
 *
 * @date 2020-09-22
 * @return {json} The new components.json file
 */
function genCompList() {
    const allComps = fs.readdirSync(componentsPath);
    const compsList = {};
    const importList = [];
    allComps.forEach(comp => {
        if (!/\_|\./.test(comp)) {
            // setup components.json
            compsList[comp] = path.join(confs.globalPath.components, comp, 'index.ts');
            // setup import list
            importList.push({
                dir: comp,
                name: comp[0].toUpperCase() + comp.substr(1)
            });
        }
    });
    // write components.json
    fs.writeFileSync(componentsJsonPath, JSON.stringify(compsList, null, 4));
    // write index.ts
    let tpl = `// codeHolder\n${importList
        .map(comp => `import ${comp.name} from './${comp.dir}';\n`)
        .join('')}`;
    tpl += `\nconst components = [${importList
        .map(comp => comp.name)
        .join(', ')}];\n// holderEnd\n`;
    tpl = fs.readFileSync(path.resolve(componentsPath, 'index.ts'), 'utf8')
        .toString()
        .replace(/\/\/\scodeHolder(.|\n)*holderEnd\n/, tpl);
    fs.writeFileSync(path.resolve(componentsPath, 'index.ts'), tpl);

    showLog(`Generated new components.json, length is ${Object.keys(compsList).length}\n`);
    return compsList;
}


/**
 * Watch all components dirs, when the changes occurred, auto-generate.
 * On Windows, no events will be emitted if the watched directory is moved or renamed.
 * An EPERM error is reported when the watched directory is deleted.
 *
 * @date 2020-09-22
 * @param {Function} cb When the change occurred, this will be executed
 * @return {Object} The component dir
 */
function genCompListAndWatch() {
    genCompList();
    showLog('I\'m now watching your changes on components...\n');
    // This is for throttle
    let throttleFlag = false;
    watch.watchTree(componentsPath, {
        interval: 1
    }, function(f, curr, prev) {
        // If these changes came from some exact files(not dir) or this executed is init, do nothing.
        if (throttleFlag || typeof f === 'object' && prev === null && curr === null || f.match(/\.\S+$/)) {
            return;
        }

        // Start throttle
        throttleFlag = true;
        setTimeout(() => {
            throttleFlag = false;
        }, 500);

        // New dir or Deleted any dir
        if (prev === null || curr.nlink === 0) {
            showLog(`Changed ${f.split(confs.alias.root)[1]}, now regenerate components...\n`, 'build');
            genCompList();
        }
    });
    return componentsPath;
}

module.exports = {
    genCompList,
    genCompListAndWatch
};

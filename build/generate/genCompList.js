/**
 * @file: genCompList.js Generate components.json
 * @since: 2020-09-22
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */
const fs = require('fs-extra');
const path = require('path');
const confs = require('../../conf');
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
        .map(comp => `import ${comp.name} from './${comp.dir}/index.vue';\n`)
        .join('')}`;
    tpl += `\nconst components = [${importList
        .map(comp => comp.name)
        .join(', ')}];\n// holderEnd\n`;
    tpl = fs.readFileSync(path.resolve(componentsPath, 'index.ts'), 'utf8')
        .toString()
        .replace(/\/\/\scodeHolder(.|\n)*holderEnd\n/, tpl);
    fs.writeFileSync(path.resolve(componentsPath, 'index.ts'), tpl);

    console.log(`Generated new components.json, length is ${Object.keys(compsList).length}`);
    return compsList;
}


/**
 * Watch all components dirs, when changes occured, auto generate.
 * !Notice do NOT use this on Windows system
 * On Windows, no events will be emitted if the watched directory is moved or renamed.
 * An EPERM error is reported when the watched directory is deleted.
 *
 * @date 2020-09-22
 * @param {Function} cb When change occured, this will be executed
 * @return {Object} The watcher of component dir
 */
function genCompListAndWatch(cb) {
    let oldComps = genCompList();
    console.log('I\'m now watching your changes on components...');
    const watcher = fs.watch(componentsPath, {
        recursive: true
    }, function(event, filename) {
        if (event === 'rename' && filename) {
            // when delete a component dir
            if (!fs.existsSync(path.resolve(componentsPath, filename))
                // or you add a new component dir
                || Object.keys(oldComps).indexOf(filename) === -1) {
                const newComps = genCompList();
                cb && cb({
                    event,
                    filename,
                    newComps,
                    oldComps,
                    watcher
                });
                oldComps = newComps;
            }
        // when edit any doc.md file
        } else if (event === 'change' && filename) {
            cb && cb({
                event,
                filename,
                oldComps,
                watcher
            });
        }
    });
    cb && cb({
        event: 'init',
        filename: 'none',
        oldComps,
        watcher
    });
    return watcher;
}


module.exports = {
    genCompList,
    genCompListAndWatch
};

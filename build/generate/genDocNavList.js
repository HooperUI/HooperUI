/**
 * @file: genDocNavList.js Move component readme to document dir
 *
 * @since: 2020-09-22
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

const fs = require('fs-extra');
const path = require('path');
const exec = require('child_process').exec;
const confs = require('../conf');
const {genCompListAndWatch} = require('./genCompList');
let componentsJsonPath = path.resolve(confs.alias.root, 'components.json');
let componentsJson = require(componentsJsonPath);
let componentsPath = confs.alias.components;
let docsPath = confs.alias.docs;


/**
 * Generate new doc Navlist
 * !Notice when you add i18n, you should also change the code below.
 *
 * @date 2020-09-22
 * @param {json} newComps new component list
 */
function genNavList(newComps) {
    newComps = newComps || componentsJson;

    let tpl = `${Object.keys(newComps).map(comp => {
        return `        - ${comp}: components/${comp}.md`;
    }).join('\n')}`;

    tpl = fs.readFileSync(path.resolve(docsPath, 'mkdocs.tpl'), 'utf8')
        .toString()
        .replace('{{componentsNavList}}', tpl);

    fs.writeFileSync(path.resolve(docsPath, 'mkdocs.yml'), tpl);
    console.log('Generated new mkdocs.yml');
}


/**
 * Generate a new Doc dir
 * This will clean doc's dir and rebuild it.
 *
 * @date 2020-09-22
 * @param {json} newComps new component list
 */
function genDocs(newComps) {
    newComps = newComps || componentsJson;
    let compDocPath = path.resolve(docsPath, 'docs/components');
    exec(`cd ${compDocPath} && rm -rf ./*`, () => {
        Object.keys(newComps).forEach(comp => {
            let file = path.resolve(componentsPath, comp, `${comp}.md`);
            if (fs.existsSync(file)) {
                fs.copyFileSync(file, path.resolve(docsPath, `docs/components/${comp}.md`));
            }
        });
        console.log('Updated docs dir');
    });
}


/**
 * Auto generate doc&nav
 * When components changed,
 * 1. auto generate new components.json
 * 2. auto generate new doc's navigation list
 * 3. auto copy or delete new doc.md into documents dir
 *
 * @date 2020-09-22
 * @param {Function} cb when generated, this function will be execute
 */
function genNavListAndWatch(cb) {
    genCompListAndWatch(changed => {
        let {
            event,
            filename,
            oldComps
        } = changed;
        let oldComponents = Object.keys(oldComps || componentsJson);
        let docPath = path.resolve(docsPath, 'docs/components');

        // when delete a component dir
        if (event === 'rename'
            && oldComponents.indexOf(filename) >= 0
            && !fs.existsSync(path.resolve(componentsPath, filename))) {
            let file = path.resolve(docPath, `${filename}.md`);
            if (fs.existsSync(file)) {
                fs.unlinkSync(file);
                console.log(`Deleted ${changed.filename}.md`);
            }
        }
        // when edit any doc.md file
        else if (event === 'change'
            && /.*\/(.*)\.md$/.test(filename)
            && oldComponents.indexOf(RegExp.$1) >= 0) {
            let file = path.resolve(componentsPath, RegExp.$1, `${RegExp.$1}.md`);
            if (fs.existsSync(file)) {
                fs.copyFileSync(file, path.resolve(docPath, `${RegExp.$1}.md`));
                console.log(`Changed ${filename}`);
            }
        }
        // when you add a new component directory.
        // this is a very rare situation, and you may going to edit this doc.md right away.
        // then it will emit change event, so ignore this below.
        // else if (event === 'rename'
        //     && oldComponents.indexOf(filename) >= 0
        //     && newComponents.indexOf(filename) < 0) {
        //     let file = path.resolve(componentsPath, filename, `${filename}.md`);
        //     if (fs.existsSync(file)) {
        //         fs.copyFileSync(file, path.resolve(docPath, `${filename}.md`));
        //         console.log(`Added a new ${filename}.md`);
        //     }
        //     genNavList(newComps);
        // }
        cb && cb(changed);
    });
}

module.exports = {
    genDocs,
    genNavList,
    genNavListAndWatch
};

/**
 * @file: genDocNavList.js 将模块中的 readme copy 到 doc 目录
 *
 * @since: 2020-09-22
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ Apache Licence 2.0
 */

const fs = require('fs-extra');
const path = require('path');
const exec = require('child_process').exec;
const confs = require('../conf');
const {genCompListAndWatch} = require('./genCompList');
let componentsJsonPath = path.resolve(confs.alias.root, 'components.json');
let componentsJson = require(componentsJsonPath);
let componentsPath = path.resolve(confs.alias.components, 'scripts');
let docsPath = confs.alias.docs;


/**
 * 生成新的 doc nav
 *
 * @date 2020-09-22
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
 * 生成新的 doc
 *
 * @date 2020-09-22
 */
function genDocs(newComps) {
    newComps = newComps || componentsJson;
    // let compDocPath = path.resolve(docsPath, 'docs/components');
    // exec(`cd ${compDocPath} && rm`);
    Object.keys(newComps).forEach(comp => {
        let file = path.resolve(componentsPath, comp, `${comp}.md`);
        if (fs.existsSync(file)) {
            fs.copyFileSync(file, path.resolve(docsPath, `docs/components/${comp}.md`));
        }
    });
    console.log('Updated docs dir');
}


/**
 * 当 component 变化时，自动进行 doc 相关操作
 *
 * @date 2020-09-22
 */
function genNavListAndWatch(cb) {
    genCompListAndWatch(changed => {
        let {
            event,
            filename,
            newComps,
            oldComps
        } = changed;
        let oldComponents = Object.keys(oldComps || componentsJson);
        // let newComponents = Object.keys(newComps || {});
        let docPath = path.resolve(docsPath, 'docs/components');

        // 删除一个 component 目录
        if (event === 'rename'
            && oldComponents.indexOf(filename) >= 0
            && !fs.existsSync(path.resolve(componentsPath, filename))) {
            let file = path.resolve(docPath, `${filename}.md`);
            if (fs.existsSync(file)) {
                fs.unlinkSync(file);
                console.log(`Deleted ${changed.filename}.md`);
            }
        }
        // 修改了某个 md 文件
        else if (event === 'change'
            && /.*\/(.*)\.md$/.test(filename)
            && oldComponents.indexOf(RegExp.$1) >= 0) {
            let file = path.resolve(componentsPath, RegExp.$1, `${RegExp.$1}.md`);
            if (fs.existsSync(file)) {
                fs.copyFileSync(file, path.resolve(docPath, `${RegExp.$1}.md`));
                console.log(`Changed ${filename}`);
            }
        }
        // 新增了一个 component 目录，下述情况太少见，反正你新增了 md 之后都要编辑，都会触发 change
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
    });
}

module.exports = {
    genNavList,
    genNavListAndWatch
};

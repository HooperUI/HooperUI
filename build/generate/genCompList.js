/**
 * @file: genCompList.js 生成所有 components 列表
 * @since: 2020-09-22
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */
const fs = require('fs-extra');
const path = require('path');
const confs = require('../conf');
let componentsJsonPath = path.resolve(confs.alias.root, 'components.json');
let componentsPath = path.resolve(confs.alias.components, 'scripts');


/**
 * 读取所有 component 目录，并生成 component 列表
 * @date 2020-09-22
 * @return {json} 新的 component json
 */
function genCompList() {
    let allComps = fs.readdirSync(componentsPath);
    let compsList = {};
    allComps.forEach(comp => {
        if (!/^\_/.test(comp)) {
            compsList[comp] = path.join(confs.globalPath.components, comp, 'index.ts');
        }
    });
    fs.writeFileSync(componentsJsonPath, JSON.stringify(compsList, null, 4));
    console.log(`Generated new components.json, length is ${Object.keys(compsList).length}`);
    return compsList;
}


/**
 * 监听 components 目录，当该目录有新的组件时，自动重新 generate
 *
 * ! 避免在 windows 使用该功能
 * 在 Windows 上，如果监视的目录被移动或重命名，则不会触发任何事件
 * 当监视的目录被删除时，则报告 EPERM 错误。
 * @date 2020-09-22
 * @params {function} cb 每次变化都会执行传入的回调，并将新老 json 当参数传递
 */
function genCompListAndWatch(cb) {
    let oldComps = genCompList();
    console.log('I\'m now watching your changes on components...');
    fs.watch(componentsPath, {
        recursive: true
    }, function (event, filename) {
        if (event === 'rename' && filename) {
            // 某个 components 目录被删除
            if (!fs.existsSync(path.resolve(componentsPath, filename))
                // 或者新增了一个之前不存在的 component
                || Object.keys(oldComps).indexOf(filename) === -1) {
                let newComps = genCompList();
                cb && cb({
                    event,
                    filename,
                    newComps,
                    oldComps
                });
            }
        // 修改了某个文件
        } else if (event === 'change' && filename) {
            cb && cb({
                event,
                filename,
                oldComps
            });
        }
    });
}

module.exports = {
    genCompList,
    genCompListAndWatch
};

/**
 * @file: genDocNavList.js Move component readme to document dir
 *
 * @since: 2020-09-22
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

const path = require('path');
const confs = require('../../conf');
const mvdir = require('mvdir');
const del = require('del');
const watch = require('watch');
const {showLog} = require('../utils');

const docsPath = confs.alias.docs;
const sitePath = confs.alias.website;
const siteDocPath = path.resolve(sitePath, 'webroot');

/**
 * Generate a new website dir
 * This will clean webroot's dir and rebuild it.
 *
 * @date 2020-09-22
 * @param {json} newComps new component list
 */
async function genWebsite() {
    await del([siteDocPath + '**']);
    // copy .vuepress config
    await mvdir(path.resolve(sitePath, '.vuepress'), path.resolve(siteDocPath, '.vuepress'), {
        overwrite: true,
        copy: true
    });
    await mvdir(path.resolve(sitePath, 'package.json'), path.resolve(siteDocPath, 'package.json'), {
        overwrite: true,
        copy: true
    });
    // copy all docs
    await mvdir(docsPath, siteDocPath, {
        copy: true
    });
    await del([path.resolve(siteDocPath, 'zh')]);
    await mvdir(path.resolve(docsPath, 'zh'), siteDocPath, {
        copy: true
    });
    showLog('Updated website dir.\n');
}

/**
 * Auto generate websiteRoot when dos changed,
 *
 * @date 2020-09-22
 * @return {Object} The docs dir
 */
function genWebsiteAndWatch() {
    genWebsite();
    watch.watchTree(docsPath, function(f, curr, prev) {
        // If this is init, do nothing.
        if (typeof f === 'object' && prev === null && curr === null) {
            return;
        }
        // Change ~/HooperUI/docs/zh/guides/pr.md to /zh/guides/pr.md
        let fileName = f.split(docsPath)[1];
        // If file comes from default locale, delete the locale flag.
        fileName = fileName.replace(/^\/zh\//, '/');
        // File is a new file
        if (prev === null) {
            showLog(`Added ${fileName}, copy and regenerate website...\n`, 'build');
            mvdir(f, siteDocPath + fileName, {
                copy: true
            });
        }
        // File was removed
        else if (curr.nlink === 0) {
            showLog(`Removed ${fileName}, delete and regenerate website...\n`, 'build');
            mvdir(path.resolve(siteDocPath, fileName), siteDocPath + 'zh', {
                overwrite: true
            });
        }
        // File was changed
        else {
            showLog(`Changed ${fileName}, copy and regenerate website...\n`, 'build');
            // console.log(f, siteDocPath, path.resolve(siteDocPath, fileName));
            mvdir(f, siteDocPath + fileName, {
                copy: true,
                overwrite: true
            });
        }
    });
    return docsPath;
}

module.exports = {
    genWebsite,
    genWebsiteAndWatch
};

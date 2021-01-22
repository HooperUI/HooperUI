/**
 * @file: dev.js Begin to develop
 * 1. Run webpack, start dev-serve
 * 2. Run mkdoc, import HooperUI libs which build by webpack dev-serve
 * 3. Visit 127.0.0.1:8000, write doc and test your component
 * @since: 2020-09-21
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */
const path = require('path');
const watch = require('watch');

const {spawn} = require('child_process');
const {genWebsiteAndWatch} = require('./generator/genWebsite');
const {genCompListAndWatch} = require('./generator/genCompList');
const {showLog} = require('./utils');

const confs = require('../conf');
const sitePath = confs.alias.website;
const siteDocPath = path.resolve(sitePath, 'webroot');

// Set process title
process.title = 'HooperUI DEV Process';


// Start webpack-dev-server to generate HooperUI on time.
spawn('kill', ['-9', '`lsof -i:8001 -t`']);
const devServer = spawn('webpack-dev-server', ['--config', 'webpack.dev.js', '--client-log-level', 'silent'], {
    cwd: __dirname
});
devServer.stdout.on('data', data => {
    const result = data.toString().match(/\:\s(.*(\n|\r))/);
    result && showLog(`devServer: ${result[1]}`, 'build');
});
devServer.stderr.on('data', data => {
    showLog(`devServerError: ${data.toString()}`, 'error');
});
devServer.on('close', () => {
    showLog('devServer exited\n');
});


// Start website Generate
const websiteWatchRoot = genWebsiteAndWatch();
const compWatchRoot = genCompListAndWatch();

// Start vuePress serve
spawn('kill', ['-9', '`lsof -i:8080 -t`']);
const vuePressServer = spawn('npx', ['vuepress', 'dev', 'webroot'], {
    cwd: path.resolve(__dirname, '../website')
});
vuePressServer.stderr.on('data', data => {
    const result = data.toString().match(/https?\:\/\/(.*)\//);
    result && showLog(`vuePressServer: Website now served on ${result[0]}\n`, 'build');
});
vuePressServer.on('close', () => {
    showLog('vuePressServer exited\n');
});

process.on('SIGINT', function() {
    spawn('kill', [devServer.pid]);
    watch.unwatchTree(websiteWatchRoot);
    watch.unwatchTree(compWatchRoot);
    console.log(''); // This is must.
    showLog('HooperUI DEV serve exited.\n');
    process.exit();
});

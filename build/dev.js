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

// Set process title
process.title = 'HooperUI DEV Process';


// Start webpack-dev-server to generate HooperUI on time.
spawn('kill', ['-9', '`lsof -i:8001 -t`']);
const devServer = spawn('webpack-dev-server', ['--config', 'webpack.dev.js', '--client-log-level', 'silent'], {
    cwd: __dirname
});
devServer.stdout.on('data', data => {
    const result = data.toString().match(/\:\s(.*(\n|\r))/);
    result && showLog(`devServer ${result[1]}`, 'build');
});
devServer.stderr.on('data', data => {
    showLog(`devServerError ${data.toString()}`, 'error');
});
devServer.on('close', () => {
    showLog('devServer exited\n');
});


// Start website Generate
const websiteWatchRoot = genWebsiteAndWatch();
const compWatchRoot = genCompListAndWatch();

// Start vuePress serve
spawn('kill', ['-9', '`lsof -i:8080 -t`']);
const vuePressServer = spawn('npx', ['vuepress', 'dev'], {
    cwd: path.resolve(__dirname, '../website/webroot')
});
vuePressServer.stderr.on('data', data => {
    console.log(data.toString());
    // const result = data.toString().match(/(((INFO|WORNING)\s+\-.*\n)|(\[Errno.*\n))/);
    // if (result && !/Browser\sConnected:/.test(result)) {
    //     result && showLog(`vuePressServer ${result[1]}`, result[1].match(/(\[Errno.*\n)/) ? 'error' : 'info');
    // }
});
vuePressServer.on('close', () => {
    showLog('vuePressServer exited\n');
});

process.on('SIGINT', function() {
    docGen.close();
    spawn('kill', [devServer.pid]);
    watch.unwatchTree(websiteWatchRoot);
    watch.unwatchTree(compWatchRoot);
    console.log(''); // This is must.
    showLog('HooperUI DEV serve exited.\n');
    process.exit();
});

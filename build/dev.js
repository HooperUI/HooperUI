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
const {spawn} = require('child_process');
const {genNavListAndWatch} = require('./generate/genDocNavList');
const {showLog} = require('./utils');

// Set process title
process.title = 'HooperUI DEV Process';


// Start webpack-dev-server
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


// Start Doc Generate
const docGen = genNavListAndWatch();

// Start mkdoc serve
spawn('kill', ['-9', '`lsof -i:8000 -t`']);
const mkdocServer = spawn('mkdocs', ['serve', '--quiet'], {
    cwd: path.resolve(__dirname, '../docs')
});
mkdocServer.stderr.on('data', data => {
    // console.log(data.toString());
    const result = data.toString().match(/(((INFO|WORNING)\s+\-.*\n)|(\[Errno.*\n))/);
    if (result && !/Browser\sConnected:/.test(result)) {
        result && showLog(`mkdocServer ${result[1]}`, result[1].match(/(\[Errno.*\n)/) ? 'error' : 'info');
    }
});
mkdocServer.on('close', () => {
    showLog('mkdocServer exited\n');
});


process.on('SIGINT', function() {
    docGen.close();
    spawn('kill', [mkdocServer.pid, devServer.pid]);
    console.log(''); // This is must.
    showLog('HooperUI DEV serve exited.\n');
    process.exit();
});

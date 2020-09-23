/**
 * @file: dev.js Begin to develop
 * 1. Run webpack, start dev-serve
 * 2. Run mkdoc, import HooperUI libs which build by webpack dev-serve
 * 3. Visit mkdoc, write doc and test your component
 * @since: 2020-09-21
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */
const {spawn} = require('child_process');
const {genNavListAndWatch} = require('./generate/genDocNavList');

// Set process title
process.title = 'HooperUI DEV Process';

// Start webpack-dev-server
const devServer = spawn('webpack-dev-server', ['--config', 'webpack.dev.js'], {
    cwd: __dirname
});

devServer.stdout.on('data', data => {
    process.stdout.write(Buffer.from(data));
});
devServer.stderr.on('data', data => {
    process.stderr.write(Buffer.from(`devServerError: ${data}`));
});
devServer.on('close', () => {
    process.stdout.write(Buffer.from('devServer exited'));
});


// Start Doc Generate
const docGen = genNavListAndWatch();
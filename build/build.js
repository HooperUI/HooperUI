/**
 * @file: buid.js
 * @since: 2020-09-21
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */
// const webpack = require('webpack');
const {spawn} = require('child_process');

// Set process title
process.title = 'HooperUI Build Process';

// Start to build
console.log('Starting webpack build...');
// const compiler = webpack(require('./webpack.prod'));
// compiler.run((err, stats) => {
//     console.log('HooperUI was builded.');
// });
spawn('webpack', ['--config', 'webpack.prod.js', '--client-log-level', 'silent'], {
    cwd: __dirname
});

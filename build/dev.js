/**
 * @file: dev.js 开始开发
 * 1. 启动 webpack，启动 dev-serve
 * 2. 启动 mkdoc，在模板文件中引入 dev-serve 中的 HooperUI
 * 3. 访问 mkdoc，在开发组件的时候，顺便编写文档即可
 * @since: 2020-09-21
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ Apache Licence 2.0
 */

const process = require('process');
const webpack = require('webpack');

// 设置进程标题
process.title = 'HooperUI DEV Process';

// 启动代码编译
console.log('Starting webpack dev build...');
const compiler = webpack(require('./webpack.common'));
compiler.run((err, stats) => {
    console.log('I\'m running!');
});

// 修改 mkdoc 依赖
console.log('Change mkdoc to dev envirement...');

process.on('beforeExit', code => {
    console.log('进程 beforeExit 事件的代码: ', code);
});

process.on('exit', code => {
    console.log('进程 exit 事件的代码: ', code);
});

console.log('此消息最新显示');
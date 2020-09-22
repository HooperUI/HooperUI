/**
 * @file: webpack.common.js 基础打包配置
 * @since: 2020-09-16
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ Apache Licence 2.0
 */

const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const confs = require('./conf');

module.exports = {
    mode: 'development',
    entry: {
        scripts: ['./src/index.ts']
    },
    output: {
        path: path.resolve(process.cwd(), './dist'),
        publicPath: '/dist/',
        filename: 'hooperui-[chunkhash:6].js',
        libraryTarget: 'umd',
        libraryExport: 'default',
        library: 'HooperUI',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        alias: confs.alias
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    performance: {
        hints: 'error'
    },
    module: {
        rules: [{
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ProgressBarPlugin()
    ]
};

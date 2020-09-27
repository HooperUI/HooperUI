/**
 * @file: webpack.dev.js Development webpack config
 * @since: 2020-09-16
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ Apache Licence 2.0
 */
const commonConf = require('./webpack.config');
const webpackMerge = require('webpack-merge');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const confs = require('../conf');

console.log(Object.keys(require('vue-loader')));

module.exports = webpackMerge(commonConf, {
    mode: 'development',
    devtool: 'cheap-source-map',
    devServer: {
        contentBase: '.',
        clientLogLevel: 'silent',
        host: '127.0.0.1',
        port: '8001',
        hot: true
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ['vue-style-loader', 'css-loader', 'sass-loader', {
                    loader: 'sass-resources-loader',
                    options: {
                        resources: path.resolve(confs.alias.components, '_styles/vars.scss')
                    }
                }
            ]
        }]
    },
    performance: {
        hints: false
    },
    output: {
        filename: 'hooperui.js'
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(confs.alias.root, 'demo/index.html')
        })
    ]
});

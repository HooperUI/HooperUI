/**
 * @file: webpack.dev.js Development webpack config
 * @since: 2020-09-16
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ Apache Licence 2.0
 */
const commonConf = require('./webpack.config');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {
    VueLoaderPlugin
} = require('vue-loader');
const path = require('path');
const confs = require('../conf');

module.exports = webpackMerge(commonConf, {
    mode: 'development',
    devtool: 'cheap-source-map',
    devServer: {
        contentBase: '.',
        clientLogLevel: 'silent',
        host: '127.0.0.1',
        port: '8001',
        hot: true,
        hotOnly: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ['vue-style-loader', 'css-loader', 'sass-loader', {
                loader: 'sass-resources-loader',
                options: {
                    resources: path.resolve(confs.alias.components, '_styles/vars.scss')
                }
            }]
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
            template: path.resolve(confs.alias.root, 'demo/index.html'),
            inject: false
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(confs.alias.demo),
                to: path.resolve(confs.alias.root, 'dist'),
                globOptions: {
                    ignore: [
                        '**/*.html'
                    ]
                }
            }]
        })
    ]
});

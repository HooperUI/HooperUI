/**
 * @file: webpack.dev.js Development webpack config
 * @since: 2020-09-16
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ Apache Licence 2.0
 */
const commonConf = require('./webpack.config');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
// const path = require('path');
module.exports = webpackMerge(commonConf, {
    mode: 'development',
    devtool: 'cheap-source-map',
    devServer: {
        contentBase: './dist',
        clientLogLevel: 'silent',
        host: '127.0.0.1',
        port: '8001',
        hot: true,
        hotOnly: true
    },
    module: {
        rules: [{
            test: /\.sass$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    performance: {
        hints: false
    },
    output: {
        filename: 'hooperui.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});

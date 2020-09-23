/**
 * @file: webpack.dev.js Development webpack config
 * @since: 2020-09-16
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ Apache Licence 2.0
 */
const commonConf = require('./webpack.config');
const webpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const path = require('path');
// console.log(typeof webpackMerge);
module.exports = webpackMerge(commonConf, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [{
            test: /\.sass$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }]
    },
    performance: {
        hints: false
    },
    output: {
        filename: 'hooperui.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'hooperui.css'
        })
    ]
});

/**
 * @file: webpack.config.js Basic webpack config
 * @since: 2020-09-16
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ Apache Licence 2.0
 */

const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const confs = require('../conf');

module.exports = {
    mode: 'development',
    entry: {
        scripts: [path.resolve(__dirname, '../src/components/index.ts')]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
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
        }, {
            test: /\.pug$/,
            loader: 'pug-loader'
        }, {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ProgressBarPlugin(),
        new MiniCssExtractPlugin({
            filename: 'hooperui-[chunkhash:6].css'
        })
    ]
};

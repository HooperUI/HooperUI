/**
 * @file: webpack.prod.js Prod webpack config
 * @since: 2020-09-16
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ Apache Licence 2.0
 */

const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const {
    VueLoaderPlugin
} = require('vue-loader');
const confs = require('../conf');

module.exports = {
    mode: 'production',
    entry: {
        scripts: [path.resolve(confs.alias.components, 'index.ts')]
    },
    output: {
        path: path.resolve(confs.alias.root, 'dist'),
        publicPath: '/dist/',
        filename: 'hooperui-[chunkhash:6].js',
        libraryTarget: 'umd',
        libraryExport: 'default',
        library: 'HooperUI',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.vue', '.ts', '.js', '.json'],
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
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.ts$/,
            loader: 'ts-loader',
            options: {
                appendTsSuffixTo: [/\.vue$/]
            }
        }, {
            test: /\.pug$/,
            loader: 'pug-plain-loader'
        }, {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', {
                loader: 'sass-resources-loader',
                options: {
                    resources: path.resolve(confs.alias.components, '_styles/vars.scss')
                }
            }]
        }, {
            test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: path.posix.join('static', '[name].[hash:7].[ext]')
            }
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new ProgressBarPlugin(),
        new MiniCssExtractPlugin({
            filename: 'hooperui-[chunkhash:6].css'
        })
    ]
};

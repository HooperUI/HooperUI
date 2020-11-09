/**
 * @file: webpack.test.js Unit test webpack config
 * @since: 2020-09-16
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ Apache Licence 2.0
 */

const {
    VueLoaderPlugin
} = require('vue-loader');
const path = require('path');
const confs = require('../conf');

module.exports = {
    mode: 'development',
    devtool: '#inline-source-map',
    resolve: {
        extensions: ['.js', '.vue', '.ts', '.json'],
        alias: confs.alias
    },
    stats: 'errors-only',
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.ts$/,
            use: [{
                loader: 'istanbul-instrumenter-loader',
                options: {
                    esModules: true
                }
            }, {
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            }]
        }, {
            test: /\.pug$/,
            loader: 'pug-plain-loader'
        }, {
            test: /\.scss$/,
            use: ['vue-style-loader', 'css-loader', 'sass-loader', {
                loader: 'sass-resources-loader',
                options: {
                    resources: path.resolve(confs.alias.styles, 'vars.scss')
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
        new VueLoaderPlugin()
    ],
    performance: {
        hints: false
    }
};

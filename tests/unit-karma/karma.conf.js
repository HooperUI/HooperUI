const path = require('path');
const webpackConfig = require('../../build/webpack.test');
module.exports = function(config) {
    const karmaConf = {
        basePath: '../../',
        frameworks: ['mocha', 'chai'],
        files: [
            // './src/components/index.ts',
            // './tests/unit/specs/**/*.spec.js'
            './tests/unit-karma/index.js'
        ],
        preprocessors: {
            // './src/components/index.ts': ['coverage', 'webpack', 'sourcemap'],
            // './tests/unit/specs/**/*.spec.js': ['webpack', 'sourcemap']
            './tests/unit-karma/index.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: 'errors-only'
        },
        reporters: ['progress'],
        colors: true,
        logLevel: config.LOG_WARN,
        autoWatch: true,
        customLaunchers: {
            safeChromeHeadless: {
                base: 'ChromeHeadless',
                flags: ['--disable-web-security']
            },
            safeChrome: {
                base: 'Chrome',
                flags: ['--disable-web-security']
            }
        },
        browsers: ['safeChromeHeadless'],
        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-chrome-launcher',
            'karma-webpack',
            'karma-sourcemap-loader',
            'karma-coverage-istanbul-reporter'
        ],
        coverageIstanbulReporter: {
            // html info & console
            reports: ['html', 'lcovonly', 'text-summary'],
            dir: path.resolve('./tests/unit-karma/coverage/'),
            fixWebpackSourcePaths: true,
            'report-config': {
                html: {
                    subdir: 'html'
                }
            }
        }
    };
    if (process.argv.indexOf('--coverage') > -1) {
        karmaConf.reporters.push('coverage-istanbul');
    }
    if (process.argv.indexOf('--debugger') > -1) {
        karmaConf.browsers[0] = 'safeChrome';
    }

    config.set(karmaConf);
};

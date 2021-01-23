/**
 * @file: config.js
 * @since: 2021-01-15
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

module.exports = {
    lang: 'zh-CN',
    title: 'HooperUI - Easy and Fast',
    locales: {
        '/': {
            lang: 'zh-CN',
            description: 'HooperUI 一个基于 Vue3.0 和 typescript 的快速建站UI库'
        },
        '/en/': {
            lang: 'en-US',
            description: 'A super tiny UI library based on Vue.js 3.0 & typescript.'
        }
    },
    shouldPrefetch: () => true,
    debug: true,
    dest: './dist',
    markdown: {
        code: {
            lineNumbers: false
        }
    },
    theme: require('path').resolve(__dirname, './theme'),
    themeConfig: {
        locales: {
            '/': {
                selectLanguageText: '选择语言',
                selectLanguageName: '简体中文',
                editLinkText: '在 GitHub 上编辑此页',
                navbar: [{
                    text: '指南',
                    link: '/guides/'
                }],
                sidebar: {
                    '/': [ /* ... */ ],
                    '/guides/': [ /* ... */ ]
                }
            },
            '/en/': {
                selectLanguageText: 'Languages',
                selectLanguageName: 'English',
                editLinkText: 'Edit this page on GitHub',
                navbar: [{
                    text: 'Guides',
                    link: '/en/guides/'
                }],
                sidebar: {
                    '/en/': [ /* ... */ ],
                    '/en/guides/': [ /* ... */ ]
                }
            }
        }
    }
}

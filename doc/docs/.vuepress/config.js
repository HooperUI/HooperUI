/**
 * @file: config.js
 * @since: 2021-01-15
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

module.exports = {
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
    dest: './dist',
    markdown: {
        lineNumbers: false
    },
    // plugins: ['@vuepress/active-header-links'],
    themeConfig: {
        // nav: [{
        //         text: 'Home',
        //         link: '/'
        //     },
        //     {
        //         text: 'Guide',
        //         link: '/guide/'
        //     },
        //     {
        //         text: 'External',
        //         link: 'https://google.com'
        //     },
        // ]
        locales: {
            '/': {
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 无障碍
                ariaLabel: 'Languages',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                nav: [{
                    text: '指南',
                    link: '/guides/'
                }],
                sidebar: {
                    '/': [ /* ... */ ],
                    '/guides/': [ /* ... */ ]
                }
            },
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                algolia: {},
                nav: [{
                    text: 'Guides',
                    link: '/guides/'
                }],
                sidebar: {
                    '/en/': [ /* ... */ ],
                    '/en/guides/': [ /* ... */ ]
                }
            }
        }
    }
}

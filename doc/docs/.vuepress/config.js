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
        lineNumbers: true
    },
    plugins: ['@vuepress/active-header-links'],
    themeConfig: {
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Guide',
                link: '/guide/'
            },
            {
                text: 'External',
                link: 'https://google.com'
            },
        ]
    }
}

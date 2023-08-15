// .vuepress/config.js
const sidebar = require("./config/sidebar")
module.exports = {
    // 构建位置
    dest: 'dist',
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            {rel: 'icon', href: '/favicon.ico'}
        ],
        // 移动栏优化
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
        // 引入jquery
        ["script", {
            "language": "javascript",
            "type": "text/JavaScript",
            "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
        }],
        // 引入鼠标点击脚本
        ["script", {
            "language": "javascript",
            "type": "text/JavaScript",
            "src": "/js/MouseClickEffect.js"
        }]
    ],
    base: '/MyDocs/',
    title: "Yihui's docs",
    description: '个人文档管理站点',
    plugins: ['@vuepress/back-to-top',
        [
            "dynamic-title",
            {
                showIcon: "/favicon.ico",
                showText: "(/≧▽≦/)咦！欢迎回来！",
                hideIcon: "/favicon.ico",
                hideText: "(●—●)别走啊!",
                recoverTime: 2000
            }
        ],
        ["vuepress-plugin-nuggets-style-copy", {
            copyText: "复制代码",
            tip: {
                content: "复制成功!"
            }
        }]
    ],
    theme: 'reco',
    themeConfig: {
        authorAvatar: '/logo.png',
        logo: 'https://doc.yihuiblog.top/logo.png',
        nav: [
            {text: '首页', link: '/'},
            {text: '时间轴', link: '/timeline/', icon: 'reco-date'},
            {text: 'Github', link: 'https://github.com/MoMeak9', target: '_self', rel: ''},
            {text: '面试题汇总', link: '/wiki/interview/', target: '_blank'}
        ],
        // 备案
        // 项目开始时间，只填写年份
        startYear: '2021',
        searchMaxSuggestions: 10,
        subSidebar: 'auto',
        noFoundPageByTencent: false,
        lastUpdated: 'Last Updated',
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'      // 默认文案 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                {icon: 'reco-github', link: 'https://github.com/recoluan'},
                {icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan'}
            ],
        },
        // 侧边栏
        sidebar: sidebar
    }
}

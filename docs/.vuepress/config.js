// .vuepress/config.js

module.exports = {
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            {rel: 'icon', href: 'logo.png'}
        ]
    ],
    title: "Yihui's docs",
    description: '个人文档管理站点',
    plugins: ['@vuepress/back-to-top'],
    theme: 'reco',
    themeConfig: {
        logo: 'https://doc.yihuiblog.top/logo.png',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'TimeLine', link: '/timeline/', icon: 'reco-date'},
            {text: 'Github', link: 'https://github.com/MoMeak9', target: '_self', rel: ''},
            {text: 'About', link: '/about/', target: '_blank'}
        ],
        sidebar: 'auto',
        subSidebar: 'auto',
        noFoundPageByTencent: false,
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                {icon: 'reco-github', link: 'https://github.com/recoluan'},
                {icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan'}
            ]
        }
    }
}

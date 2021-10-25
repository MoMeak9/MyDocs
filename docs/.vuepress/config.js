// .vuepress/config.js

module.exports = {
    title: "Yihui's docs",
    theme: 'reco',
    description: '文档管理站点',
    plugins: ['@vuepress/back-to-top'],
    theme: 'reco',
    sidebar: 'auto',
    themeConfig: {
        logo: 'img.png',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'TimeLine', link: '/timeline/', icon: 'reco-date'},
            {text: 'External', link: 'https://google.com', target: '_self', rel: ''},
            {text: 'Guide', link: '/guide/', target: '_blank'},
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    {text: 'Chinese', link: '/language/chinese/'},
                    {text: 'Japanese', link: '/language/japanese/'}
                ]
            }
        ],
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

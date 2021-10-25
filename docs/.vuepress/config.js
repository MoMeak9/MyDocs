module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    plugins: ['@vuepress/back-to-top',
        '@vuepress/blog'],
    themeConfig: {
        logo: 'img.png',
        nav: [
            {text: 'Home', link: '/'},
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
        sidebar: 'auto',
        displayAllHeaders: true,
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'vuejs/vuepress',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'
    }
}

// 侧边栏目录

module.exports = [
    {
        title: 'Group 1',   // 必要的
        path: '/blog/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
            '/',
            '/blog/JavaScript/requestAnimationFrame'
        ]
    },
]

const universitySidebar = require("./university")
const javaScriptSidebar = require("./javaScript")
const interviewSidebar = require("./interview")

module.exports = {
    ...universitySidebar,
    ...javaScriptSidebar,
    ...interviewSidebar,
    "/408/": [
        {
            title: "C语言训练营",
            path: "/408/Cpp",
            collapsable: false,
            sidebarDepth: 1,
            children: [
                "/408/Cpp/chapter1",
                "/408/Cpp/chapter2",
                "/408/Cpp/chapter3",
                "/408/Cpp/chapter4",
                "/408/Cpp/chapter6"
            ],
        }
    ],
    "/arithmetic/": [
        {
            title: "算法应知应会",
            collapsable: false,
            children: [
                "/arithmetic/LeetcodeEasy/10"
            ],
        },
        {
            title: "leetcode面试高频",
            path: "/arithmetic/codetop",
            collapsable: false,
            children: [
                "/arithmetic/codetop/10",
                "/arithmetic/codetop/ByteDance",
            ],
        },
        {
            title: "leetcode简单",
            path: "/arithmetic/LeetcodeEasy",
            collapsable: false,
            children: [
                "/arithmetic/LeetcodeEasy/10"
            ],
        }
    ],
    "/wiki/": [
        {
            title: "面试指南",
            collapsable: false,
            children: [
                "/interview/guid/Browser",
                "/interview/guid/JavaScript",
                "/interview/guid/MySQL",
                "/interview/guid/Nodejs",
                "/interview/guid/Optimize",
                "/interview/guid/Vue",
                "/interview/guid/Webpack",
            ],
        },
    ]
}

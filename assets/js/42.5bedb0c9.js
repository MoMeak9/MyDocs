(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{619:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("vue组件非常常见的有父子组件通信，兄弟组件通信。而父子组件通信就很简单，父组件会通过 "),a("code",[t._v("props")]),t._v(" 向下传数据给子组件，当子组件有事情要告诉父组件时会通过 "),a("code",[t._v("$emit")]),t._v(" 事件告诉父组件。今天就来说说如果两个页面没有任何引入和被引入关系，该如何通信了？")]),t._v(" "),a("p",[t._v("如果咱们的应用程序不需要类似Vuex这样的库来处理组件之间的数据通信，就可以考虑Vue中的 "),a("code",[t._v("事件总线")]),t._v(" ，即 **"),a("code",[t._v("EventBus")]),t._v("**来通信。")]),t._v(" "),a("h2",{attrs:{id:"什么是eventbus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是eventbus"}},[t._v("#")]),t._v(" 什么是EventBus")]),t._v(" "),a("p",[a("code",[t._v("EventBus")]),t._v(" 又称为事件总线。在Vue中可以使用 "),a("code",[t._v("EventBus")]),t._v(" 来作为沟通桥梁的概念，就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件，所以组件都可以上下平行地通知其他组件，但也就是太方便所以若使用不慎，就会造成难以维护的“灾难”，因此才需要更完善的Vuex作为状态管理中心，将通知的概念上升到共享状态层次。")]),t._v(" "),a("h2",{attrs:{id:"如何使用eventbus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用eventbus"}},[t._v("#")]),t._v(" 如何使用EventBus")]),t._v(" "),a("h3",{attrs:{id:"一、初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、初始化"}},[t._v("#")]),t._v(" 一、初始化")]),t._v(" "),a("p",[a("strong",[t._v("首先需要创建事件总线并将其导出，以便其它模块可以使用或者监听它")]),t._v("。我们可以通过两种方式来处理。先来看第一种，新创建一个 .js 文件，比如 "),a("code",[t._v("event-bus.js")]),t._v("or"),a("code",[t._v("Bus.js")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// event-bus.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" EventBus "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("实质上"),a("code",[t._v("EventBus")]),t._v("是一个不具备 "),a("code",[t._v("DOM")]),t._v(" 的组件，它具有的仅仅只是它实例方法而已，因此它非常的轻便。")]),t._v(" "),a("p",[t._v("另外一种方式，可以直接在项目中的 "),a("code",[t._v("main.js")]),t._v(" 初始化 "),a("code",[t._v("EventBus")]),t._v(" :")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$EventBus "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("注意，这种方式初始化的 "),a("code",[t._v("EventBus")]),t._v(" 是一个 "),a("code",[t._v("全局的事件总线")]),t._v(" 。稍后再来聊一聊全局的事件总线。")])]),t._v(" "),a("p",[t._v("现在我们已经创建了 "),a("code",[t._v("EventBus")]),t._v(" ，接下来你需要做到的就是在你的组件中加载它，并且调用同一个方法，就如你在父子组件中互相传递消息一样。")]),t._v(" "),a("h3",{attrs:{id:"二、发送和接受事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、发送和接受事件"}},[t._v("#")]),t._v(" 二、发送和接受事件")]),t._v(" "),a("p",[t._v("其实和父子组件的通信差不多,用 "),a("code",[t._v("EventBus.$emit('emit事件名'，数据)")]),t._v("发送， "),a("code",[t._v('EventBus.$on("emit事件名", callback(payload1,…))')]),t._v(" 接受")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[t._v("// 发送消息\nEventBus.$emit(channel: string, callback(payload1,…))\n\n// 监听接收消息\nEventBus.$on(channel: string, callback(payload1,…))\n")])])]),a("p",[t._v("现在假设 A 组件与 B 组件通信")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- A.vue --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{msgB}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sendMsgA()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("-"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" EventBus "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../Bus.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("msg")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        EventBus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bMsg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("msg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a组件接受 b发送来的消息")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("methods")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMsgA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            EventBus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aMsg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'来自A页面的消息'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a 发送数据")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- B.vue --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{msgA}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sendMsgB()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("-"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" EventBus "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../event-bus.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("msg")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        EventBus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aMsg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("msg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// b组件接受 a发送来的消息")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("methods")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMsgB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            EventBus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bMsg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'来自b页面的消息'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// b发送数据")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("如果只监听(接受)一次数据可以使用 "),a("code",[t._v("EventBus.$once('事件名', callback(payload1,…)")])]),t._v(" "),a("p",[t._v("前面提到过，如果使用不善，"),a("code",[t._v("EventBus")]),t._v(" 会是一种灾难，到底是什么样的"),a("code",[t._v("“灾难”")]),t._v("了？大家都知道vue是单页应用，如果你在某一个页面刷新了之后，与之相关的"),a("code",[t._v("EventBus")]),t._v("会被移除，这样就导致业务走不下去。还要就是如果业务有反复操作的页面，"),a("code",[t._v("EventBus")]),t._v(" 在监听的时候就会触发很多次，也是一个非常大的隐患。这时候我们就需要好好处理 "),a("code",[t._v("EventBus")]),t._v(" 在项目中的关系。通常会用到，在vue页面销毁时，同时移除"),a("code",[t._v("EventBus")]),t._v(" 事件监听")]),t._v(" "),a("h3",{attrs:{id:"三、移除移除事件监听者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、移除移除事件监听者"}},[t._v("#")]),t._v(" 三、移除移除事件监听者")]),t._v(" "),a("p",[t._v("EventBus.$off('事件名', 回调函数)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("EventBus.$off('事件名', callback)")]),t._v("，只移除这个回调的监听器。")]),t._v(" "),a("li",[a("code",[t._v("EventBus.$off('事件名')")]),t._v("，移除该事件所有的监听器。")]),t._v(" "),a("li",[a("code",[t._v("EventBus.$off()")]),t._v("， 移除所有的事件监听器，注意不需要添加任何参数。")])]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[t._v("// 导入我们刚刚创建的 EventBus\nimport { EventBus } from '../Bus.js'\n\n// 事件监听函数\nconst clickHandler = function(clickCount) {\n  console.log(`Oh, hello)`)\n}\n\n// 开始监听事件\nEventBus.$on('i-got-clicked', clickHandler);\n\n// 停止监听\nEventBus.$off('i-got-clicked', clickHandler);\n")])])]),a("h3",{attrs:{id:"四、全局eventbus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、全局eventbus"}},[t._v("#")]),t._v(" 四、全局EventBus")]),t._v(" "),a("p",[t._v("全局EventBus，虽然在某些示例中不提倡使用，但它是一种非常漂亮且简单的方法，可以跨组件之间共享数据。")]),t._v(" "),a("p",[t._v("它的工作原理是发布/订阅方法，通常称为 Pub/Sub 。")]),t._v(" "),a("p",[t._v("由于是全局的，必然所有事件都订阅它, 所有组件也发布到它，订阅组件获得更新。也就是说所有组件都能够将事件发布到总线，然后总线由另一个组件订阅，然后订阅它的组件将得到更新。")]),t._v(" "),a("h4",{attrs:{id:"创建全局eventbus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建全局eventbus"}},[t._v("#")]),t._v(" 创建全局EventBus")]),t._v(" "),a("p",[t._v("全局事件总线只不过是一个简单的 vue 组件。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var EventBus = new Vue();\n\nObject.defineProperties(Vue.prototype, {\n  $bus: {\n    get: function () {\n      return EventBus\n    }\n  }\n})\n// 这个初始化的第一种方法，个人感觉区别不大\n")])])]),a("h4",{attrs:{id:"使用-on和-emit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-on和-emit"}},[t._v("#")]),t._v(" 使用 $on和$emit")]),t._v(" "),a("p",[t._v("在这个特定的总线中使用两个方法。一个用于创建发出的事件，它就是$emit；另一个用于订阅$on：")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[t._v("this.$bus.$emit('nameOfEvent',{ ... pass some event data ...});\n\nthis.$bus.$on('nameOfEvent',($event) => {\n    // ...\n})\n")])])]),a("h3",{attrs:{id:"eventbus的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventbus的优缺点"}},[t._v("#")]),t._v(" EventBus的优缺点")]),t._v(" "),a("h4",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("ul",[a("li",[t._v("大家都知道vue是单页应用，如果你在某一个页面刷新了之后，与之相关的EventBus会被移除，这样就导致业务走不下去。")]),t._v(" "),a("li",[t._v("如果业务有反复操作的页面，EventBus在监听的时候就会触发很多次，也是一个非常大的隐患。这时候我们就需要好好处理EventBus在项目中的关系。通常会用到，在vue页面销毁时，同时移除EventBus事件监听。")]),t._v(" "),a("li",[t._v("由于是都使用一个Vue实例，所以容易出现重复触发的情景，两个页面都定义了同一个事件名，并且没有用$off销毁（常出现在路由切换时）。")])]),t._v(" "),a("h4",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("ul",[a("li",[t._v("解决了多层组件之间繁琐的事件传播。")]),t._v(" "),a("li",[t._v("使用原理十分简单，代码量少。")])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://learnku.com/vuejs/t/23292/creating-a-global-event-bus-using-vuejs",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 Vue.js 创建全局事件总线"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.imooc.com/article/289043",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Vue事件总线（EventBus）使用详细介绍")]),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/72777951",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue事件总线（EventBus）使用详细介绍"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000021707081",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue -- 事件总线 EventBus"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v('{\n"title": "RG-RAP1200(FE)产品说明书",\n"type: "images",\n"tabs": [\n{ "name": "产品信息", "key": "xinxi"， index‘：“1’ },\n{ "name": "产品安装", "key": "anzhuang" },\n{ "name": "接口及组网方式", "key": "wangkoulianjie" },\n{ "name": "网络配置", "key": "peizhi" },\n{ "name": "指示灯说明", "key": "zhishideng" },\n{ "name": "售后服务", "key": "shouhou" }\n],\n"contents":{\n“ xinxi”: [  " sadasda","aasdasdasdasd"],"anzhuang":[]')]),t._v(" "),a("p",[t._v("}\n}")])])}),[],!1,null,null,null);s.default=e.exports}}]);
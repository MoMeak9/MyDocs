(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{647:function(e,t,n){"use strict";n.r(t);var a=n(5),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"原理解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原理解析"}},[e._v("#")]),e._v(" 原理解析")]),e._v(" "),n("p",[e._v("探讨乾坤的一些基本实现，帮助了解乾坤原理的一个入门。")]),e._v(" "),n("p",[e._v("关注几个问题，围绕并试图得出理解")]),e._v(" "),n("ul",[n("li",[e._v("qiankun的基本原理")]),e._v(" "),n("li",[e._v("它的路由机制和生命周期")]),e._v(" "),n("li",[e._v("不足和弊端")]),e._v(" "),n("li",[e._v("一个的最佳实践应该怎样")]),e._v(" "),n("li",[e._v("未来框架的形态")])]),e._v(" "),n("h3",{attrs:{id:"single-spa的简单原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#single-spa的简单原理"}},[e._v("#")]),e._v(" single-spa的简单原理")]),e._v(" "),n("p",[e._v("之所以从single-spa说起，缘于乾坤的设计和Ant团队的思考 "),n("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Ftech.antfin.com%2Fcommunity%2Farticles%2F536",target:"_blank",rel:"noopener noreferrer"}},[e._v("可能是你见过最完善的微前端解决方案(19年)"),n("OutboundLink")],1)]),e._v(" "),n("blockquote",[n("p",[e._v("由于我们的子应用都是 lazy load 的，当浏览器重新刷新时，主框架的资源会被重新加载，同时异步 load 子应用的静态资源，由于此时主应用的路由系统已经激活，但子应用的资源可能还没有完全加载完毕，从而导致路由注册表里发现没有能匹配子应用 /subApp/123/detail 的规则，这时候就会导致跳 NotFound 页或者直接路由报错。\n这个问题在所有 lazy load 方式加载子应用的方案中都会碰到，早些年前 angularjs 社区把这个问题统一称之为 Future State。\n解决的思路也很简单，我们需要设计这样一套路由机制：\n主框架配置子应用的路由为subApp: { url: '/subApp/**', entry:'./subApp.js' }，则当浏览器的地址为 /subApp/abc 时，框架需要先加载 entry 资源，待 entry 资源加载完毕，确保子应用的路由系统注册进主框架之后后，再去由子应用的路由系统接管 url change 事件。同时在子应用路由切出时，主框架需要触发相应的destroy 事件，子应用在监听到该事件时，调用自己的卸载方法卸载应用，如 React 场景下 destroy = () => ReactDOM.unmountAtNode(container) 。\n要实现这样一套机制，我们可以自己去劫持 url change 事件从而实现自己的路由系统，也可以基于社区已有的 ui router library，尤其是 react-router 在 v4 之后实现了 Dynamic Routing 能力，我们只需要复写一部分路由发现的逻辑即可。这里我们推荐直接选择社区比较完善的相关实践single-spa")])]),e._v(" "),n("p",[e._v("微前端架构旨在解决应用在一个长时间维护过程中，演变成巨石应用( Frontend Monolith )后，带来的难以维护问题。而乾坤则是基于这类中后台"),n("code",[e._v("单页应用")]),e._v("提出的解决方案。qiankun的主框架选择了成熟的single-spa作为路由方案，同时框架自身还兼顾考虑了父子应用集成方式和应用隔离等问题。")]),e._v(" "),n("p",[e._v("然后single-spa， 它是一个将多个"),n("code",[e._v("单页面应用")]),e._v("聚合为一个整体应用的 JavaScript 微前端框架, 我们先看它的设计目的和解决的问题："),n("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fzh-hans.single-spa.js.org%2Fdocs%2Fgetting-started-overview%2F%23%E6%9E%B6%E6%9E%84%E6%A6%82%E8%A7%88",target:"_blank",rel:"noopener noreferrer"}},[e._v("single-spa架构概览"),n("OutboundLink")],1)]),e._v(" "),n("blockquote",[n("p",[e._v("Single-spa 从现代框架组件生命周期中获得灵感，将生命周期应用于整个应用程序。\n现在 single-spa 几乎支持任何框架。 由于 JavaScript 因其许多框架的寿命短而臭名昭著，我们决定让它在任何您想要的框架都易于使用。")])]),e._v(" "),n("p",[e._v("很重要一点，single-spa的设计基于现代框架，现代spa框架（如vue,react等）的一个重要特点：每个应用程序都可以响应 url 路由事件，并且必须知道如何从 DOM 中初始化、挂载和卸载自己。")]),e._v(" "),n("p",[e._v("我们以vue为例，一个vue项目的初始化通常如下：")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/202203091514543.webp",alt:"截屏2021-03-13 下午6.53.56.png"}})]),e._v(" "),n("p",[e._v("在index文件定义挂载节点（"),n("code",[e._v('div id="app"')]),e._v("）后，在main入口文件执行时，我们将新建vue实例，并挂载到对应的dom节点。")]),e._v(" "),n("p",[e._v("一个尝试，如果不在进入页面时候就初始实例，而是由我决定何时装载卸载实例？卸载实例后是否可以切换装载另一个实例？而这样是否就达到自由切换spa应用的目的了，于是进一步我们有这样一个设计")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/202203091514594.webp",alt:"截屏2021-03-13 下午7.21.29.png"}})]),e._v(" "),n("p",[e._v("事实上这也是single-spa做的最基础的事，我们再回来看它最简单的使用方式："),n("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fzh-hans.single-spa.js.org%2Fdocs%2Fgetting-started-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("中文文档"),n("OutboundLink")],1)]),e._v(" "),n("ol",[n("li",[e._v("创建HTML")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<html>\n<body>\n    <script src="single-spa-config.js"><\/script>\n</body>\n</html>\n\n')])])]),n("ol",[n("li",[e._v("创建启动文件，在这里加载微应用的脚本文件，定义路由的激活规则，注册微应用的信息。采用qiankun registerMicroApps 方式加载微应用的话，基本也基于这种registerApplication的使用方式。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//main.js\nimport * as singleSpa from 'single-spa';\nconst name = 'app1';\n/* loading 是一个返回 promise 的函数，用于 加载/解析 应用代码。\n * 它的目的是为延迟加载提供便利 —— single-spa 只有在需要时才会下载应用程序的代码。\n * 在这个示例中，在 webpack 中支持 import ()并返回 Promise，但是 single-spa 可以使用任何返回 Promise 的加载函数。\n */\nconst app = () => import('./app1/app1.js');\n/* Single-spa 配置顶级路由，以确定哪个应用程序对于指定 url 是活动的。\n * 您可以以任何您喜欢的方式实现此路由。\n * 一种有用的约定是在url前面加上活动应用程序的名称，以使顶层路由保持简单。\n */\nconst activeWhen = '/app1';\nsingleSpa.registerApplication({ name, app, activeWhen });\nsingleSpa.start();\n\n")])])]),n("ol",[n("li",[e._v("定义子应用的生命周期")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//app1.js\nlet domEl;\nexport function bootstrap(props) {\n    return Promise\n        .resolve()\n        .then(() => {\n            // 如果我们使用vue等，这里相当于初始化挂载节点，\n            domEl = document.createElement('div');\n            domEl.id = 'app1';\n            document.body.appendChild(domEl);\n        });\n}\nexport function mount(props) {\n    return Promise\n        .resolve()\n        .then(() => {\n            // 在这里通常使用框架将ui组件挂载到dom。请参阅https://single-spa.js.org/docs/ecosystem.html。\n            // 如果我们使用vue等，这里相当于进行vue实例化和mount执行，https://cn.vuejs.org/v2/api/#vm-mount\n            domEl.textContent = 'App 1 is mounted!'\n        });\n}\nexport function unmount(props) {\n    return Promise\n        .resolve()\n        .then(() => {\n            // 在这里通常是通知框架把ui组件从dom中卸载。参见https://single-spa.js.org/docs/ecosystem.html\n            // 如果我们使用vue等，这里相当于进行vue实例的销毁 destroy()，参见vue文档\n            domEl.textContent = '';\n        })\n}\n\n注意：single-api 有两套api， 「Application api」 和 「Parcel api」\nParcel api提供了手动挂载应用的能力，剥离了registerApplication默认路由监听能力，\nqiankun的「loadMicroApp」手动加载正是基于此方式实现\n\n")])])]),n("p",[e._v("这里single-spa做了几件事情")]),e._v(" "),n("ol",[n("li",[e._v("仿现代应用实现了自己的生命周期，并在不同阶段执行不同的生命周期函数（"),n("code",[e._v("bootstrap，mount,unmount")]),e._v("）")]),e._v(" "),n("li",[e._v("用户需在对应生命周期完成子应用的逻辑，如在mount和unmount执行初始化vue mount和vue的销毁destroy方法")]),e._v(" "),n("li",[e._v("single-spa拦截监听了系统的顶层路由事件，通过"),n("code",[e._v("activeWhen")]),e._v("规则切换不同应用的生命周期（如切换页面，对应执行过程：bootstrap page1，mount page1，unmount page1, bootstrap page2, mount page2, unmount page2···），在完成子应用加载后，框架才把路由事件下发给子应用，子应用可以继续响应自身路由逻辑")])]),e._v(" "),n("h3",{attrs:{id:"乾坤对single-spa的封装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#乾坤对single-spa的封装"}},[e._v("#")]),e._v(" 乾坤对single-spa的封装")]),e._v(" "),n("p",[e._v("乾坤两种微应用加载方式"),n("code",[e._v("registerMicroApps")]),e._v("和"),n("code",[e._v("loadMicroApp")]),e._v("如下("),n("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fqiankun.umijs.org%2Fzh%2Fguide%2Fgetting-started",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网"),n("OutboundLink")],1),e._v(")")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import { registerMicroApps, loadMicroApp, start } from 'qiankun';\n\nregisterMicroApps([\n  {\n    name: 'react app', // app name registered\n    entry: '//localhost:7100',\n    container: '#yourContainer',\n    activeRule: '/yourActiveRule',\n  },\n  {\n    name: 'vue app',\n    entry: { scripts: ['//localhost:7100/main.js'] },\n    container: '#yourContainer2',\n    activeRule: '/yourActiveRule2',\n  },\n]);\n// 或者手动\nloadMicroApp(\n  { \n    name: 'app', \n    entry: '//localhost:7100',\n    container: '#yourContainer', \n  }\n);\n\nstart();\n\n")])])]),n("p",[e._v("实际上也基于single-spa中registerApplication和Parcel，我们可以从源码确认 "),n("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub1s.com%2Fumijs%2Fqiankun%2Fblob%2FHEAD%2Fsrc%2Fapis.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("github1s.com/umijs/qiank…"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("activeRule字段对应了activeWhen, 其他字段和生命周期钩子也是基本配置，但这里我们需关注另一个问题，子页面加载入口"),n("code",[e._v("entry: '//localhost:7100'")]),e._v("。")]),e._v(" "),n("h3",{attrs:{id:"entry文件加载-js-entry-vs-html-entry"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entry文件加载-js-entry-vs-html-entry"}},[e._v("#")]),e._v(" entry文件加载：JS Entry vs HTML Entry")]),e._v(" "),n("p",[e._v("回过头来看single-spa的基本示例，我们觉得是有点不直观反习惯的，主要是加载子应用时候，通过"),n("code",[e._v("const app = () => import('./app1/app1.js')")]),e._v("来定义一个子页面。由于现代spa应用里面，我们通常都是从入口文件加载框架（vue/react）起步，打包生成一个js bundle, 在模版html里面加载构成最后的静态资源。而在使用single-spa时候，我们则需要对入口文件重新封装，使之暴露为一个生命周期钩子函数，并实现构建子应用的容器节点的逻辑，即html挂载节点（single-spa当前通过封装不同"),n("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fsingle-spa.js.org%2Fdocs%2Fecosystem-vue%2F",target:"_blank",rel:"noopener noreferrer"}},[e._v("框架库"),n("OutboundLink")],1),e._v("来实现，其实也挺好）。这样子的好处我们可以在资源加载层面做优化，比如运行时依赖共享。当我们有多个子应用共用一套样式组件，或者vue/react等框架时，可以在打包子应用时候设置webpack的"),n("code",[e._v("externals")]),e._v("，忽略这些依赖的打包，然后再借助"),n("code",[e._v("systemjs")]),e._v("这种动态模块加载工具，把依赖的systemjs版本引进来（简单场景里，也可以动态标签方式引入依赖，反正umd导出的第三方库都支持） 用这样的方式去避免重复加载，single-spa也提供了一种面向webpack5的"),n("code",[e._v("模块联合")]),e._v("方式解决共享问题，"),n("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fzh-hans.single-spa.js.org%2Fdocs%2Frecommended-setup%2F%23%E5%85%B1%E4%BA%AB%E4%BE%9D%E8%B5%96",target:"_blank",rel:"noopener noreferrer"}},[e._v("共享联合"),n("OutboundLink")],1),e._v("，可以对比下。")]),e._v(" "),n("p",[e._v("上述的问题在于，我们在使用single-spa加载子应用的时候，要做的工作是比较繁琐的，至少有2点")]),e._v(" "),n("ol",[n("li",[e._v("改变了子应用原有的开发方式，节点挂载等要么自行实现，要么引入不同的single-spa框架库，然后再对入口文件做适配")]),e._v(" "),n("li",[e._v("修改了子应用原有一些依赖引入的方式（例如模块引入改为script引入等，实现依赖共享的话）")])]),e._v(" "),n("p",[e._v("乾坤在入口加载的处理上有着不同的考量，本着应用分离，快速集成不同技术框架应用的初衷，qiankun采用HTML的加载方式：（乾坤不提倡应用间共享依赖，建议各应用互相独立）")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import { importEntry } from 'import-html-entry';\n// get the entry html content and script executor\nconst { entry, name: appName } = app;\nconst { template, execScripts, assetPublicPath } = await importEntry(entry, importEntryOpts);\n\n")])])]),n("p",[e._v("主要原理是利用fetch获取到请求url的资源，解析对应的模版和脚本文件，获取子应用对应的模版和脚本依赖（包含了生命周期钩子），fetch url的实现主要用了"),n("code",[e._v("import-html-entry")]),e._v("。这样的好处是，基本保留了子应用原有的开发模式（除了增加生命周期钩子），成本相对js entry低廉很多，也适应了"),n("strong",[e._v("不同技术框架项目快速集成")]),e._v("的背景.")]),e._v(" "),n("p",[e._v("关于这两种的选择，可以继续细读"),n("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Ftech.antfin.com%2Fcommunity%2Farticles%2F536",target:"_blank",rel:"noopener noreferrer"}},[e._v("可能是你见过最完善的微前端解决方案(19年)"),n("OutboundLink")],1),e._v("。复制下它的总结")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/202203091514704.webp",alt:"image.png"}})]),e._v(" "),n("h3",{attrs:{id:"不足和定位"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不足和定位"}},[e._v("#")]),e._v(" 不足和定位")]),e._v(" "),n("p",[e._v("乾坤的不足上面已经体现，即无法实现"),n("code",[e._v("依赖共享")]),e._v("，然而这也是框架定位的问题，即作为"),n("code",[e._v("微应用")]),e._v("，乾坤更着重于应用间的隔离和解耦，以便可以以最小的工作量集成大量现有应用，所以乾坤考量的还有应用隔离（"),n("code",[e._v("样式隔离")]),e._v("和"),n("code",[e._v("js沙箱")]),e._v("），关于定位问题，这里推荐一篇文章分析得很不错 "),n("a",{attrs:{href:"https://juejin.cn/post/6871145516026527757",target:"_blank",rel:"noopener noreferrer"}},[e._v("谈谈微前端的两种粒度"),n("OutboundLink")],1)]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("微应用加载器：“微”的粒度是应用，也就是HTML（或main.js），它只能做到应用级别的分享\n微模块加载器：“微”的粒度是模块，也就是JS模块，它能做到模块级别的分享\n\n所以，它们的区别就是微服务的粒度，乾坤的所能服务的粒度是应用级别，而single-spa则是模块级别。\n\n")])])]),n("h3",{attrs:{id:"一些原则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一些原则"}},[e._v("#")]),e._v(" 一些原则")]),e._v(" "),n("h4",{attrs:{id:"关于依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于依赖"}},[e._v("#")]),e._v(" 关于依赖")]),e._v(" "),n("p",[e._v("在梳理single-spa文档时候，官方其实是有推荐设置的，包括什么应该被定义为运行时模块（子应用，大型共享依赖库等），什么是构建时模块。官方也很建议只加载一次大型JavaScript库（react,组件库等），"),n("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fzh-hans.single-spa.js.org%2Fdocs%2Frecommended-setup",target:"_blank",rel:"noopener noreferrer"}},[e._v("推荐设置"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("而乾坤并不建议共享依赖（虽然可以用external实现）。我们可以理解不同背景团队间的项目集成，为了维护目的分离开发。但也有相当部分新项目或项目有相关性强的依赖（比如共用项目组件库，地图库等），还是建议共享依赖，一种未来的方式是通过webpack5的"),n("code",[e._v("模块联合")]),e._v("(下面会提)实现，当前我们可以通过external在子应用忽略依赖，在主应用script引入等方式调用公共依赖库")]),e._v(" "),n("h4",{attrs:{id:"关于路由和手动注册应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于路由和手动注册应用"}},[e._v("#")]),e._v(" 关于路由和手动注册应用")]),e._v(" "),n("p",[e._v("取决于场景，对于简单场景，交与框架监听路由即可，也有子路由复杂的情况（如在主应用存在菜单栏，对两个属于同一子应用的不同路由链接跳转等），这时路由规则可能会让调用方混乱，一种不错的方式是在主应用，以组件方式封装子应用，再通过组件的生命周期控制子应用的加载和销毁，此时在主应用的外层，仅通过v-if等命令就可以便捷地管理切换不同子应用")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const App\nonMounted(() => {\n    App = loadMicroApp({\n        name: 'app',\n        entry: '/app/index.html',\n        container: '#app-container', \n    })\n})\nonBeforeUnmount(() => {\n    if (App) {\n        App.unmount()\n    } \n})\n\n")])])]),n("h3",{attrs:{id:"优化的方向"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优化的方向"}},[e._v("#")]),e._v(" 优化的方向")]),e._v(" "),n("p",[e._v("qiankun提供了一套很方便上手的微前端框架，但减少总体体积，解决依赖共享问题，仍然是值得优化的一个点。其中一种大的趋势和解决方案便是webpack5的"),n("code",[e._v("模块联合")]),e._v("。")]),e._v(" "),n("p",[e._v("模块联合是一种webpack-specific技术，用于共享[构建时模块](#in-browser- vs -build-time-modules)。它涉及到每个microfrontend捆绑它所有的依赖，甚至共享的依赖。这意味着每个共享依赖项都有多个副本——每个microfrontend一个。在浏览器中，共享依赖项的第一个副本将被下载，但随后的microfrontend将重用该共享依赖项，而不需要下载它们的副本。")]),e._v(" "),n("p",[e._v("更多可以参照"),n("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fwebpack.js.org%2Fconcepts%2Fmodule-federation%2F",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack.js.org/concepts/mo…"),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"后话"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后话"}},[e._v("#")]),e._v(" 后话")]),e._v(" "),n("ol",[n("li",[e._v("项目中发现微应用另一个好处：技术框架升级过程很好用，可以在一个简单子应用率先用vue3，后续子应用升级过渡")]),e._v(" "),n("li",[e._v("有时候不能为了微应用而微应用，但还没找到论据")]),e._v(" "),n("li",[e._v("虽然single-spa的颗粒度更小，但反而因为复杂度，有些场景不如qiankun简洁和易于组织")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
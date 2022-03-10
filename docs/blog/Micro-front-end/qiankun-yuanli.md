## 原理解析

探讨乾坤的一些基本实现，帮助了解乾坤原理的一个入门。

关注几个问题，围绕并试图得出理解

- qiankun的基本原理
- 它的路由机制和生命周期
- 不足和弊端
- 一个的最佳实践应该怎样
- 未来框架的形态

### single-spa的简单原理

之所以从single-spa说起，缘于乾坤的设计和Ant团队的思考 [可能是你见过最完善的微前端解决方案(19年)](https://link.juejin.cn?target=https%3A%2F%2Ftech.antfin.com%2Fcommunity%2Farticles%2F536)

>   由于我们的子应用都是 lazy load 的，当浏览器重新刷新时，主框架的资源会被重新加载，同时异步 load 子应用的静态资源，由于此时主应用的路由系统已经激活，但子应用的资源可能还没有完全加载完毕，从而导致路由注册表里发现没有能匹配子应用 /subApp/123/detail 的规则，这时候就会导致跳 NotFound 页或者直接路由报错。
> 这个问题在所有 lazy load 方式加载子应用的方案中都会碰到，早些年前 angularjs 社区把这个问题统一称之为 Future State。
>   解决的思路也很简单，我们需要设计这样一套路由机制：
> 主框架配置子应用的路由为subApp: { url: '/subApp/**', entry:'./subApp.js' }，则当浏览器的地址为 /subApp/abc 时，框架需要先加载 entry 资源，待 entry 资源加载完毕，确保子应用的路由系统注册进主框架之后后，再去由子应用的路由系统接管 url change 事件。同时在子应用路由切出时，主框架需要触发相应的destroy 事件，子应用在监听到该事件时，调用自己的卸载方法卸载应用，如 React 场景下 destroy = () => ReactDOM.unmountAtNode(container) 。
>   要实现这样一套机制，我们可以自己去劫持 url change 事件从而实现自己的路由系统，也可以基于社区已有的 ui router library，尤其是 react-router 在 v4 之后实现了 Dynamic Routing 能力，我们只需要复写一部分路由发现的逻辑即可。这里我们推荐直接选择社区比较完善的相关实践single-spa

微前端架构旨在解决应用在一个长时间维护过程中，演变成巨石应用( Frontend Monolith )后，带来的难以维护问题。而乾坤则是基于这类中后台`单页应用`提出的解决方案。qiankun的主框架选择了成熟的single-spa作为路由方案，同时框架自身还兼顾考虑了父子应用集成方式和应用隔离等问题。

然后single-spa， 它是一个将多个`单页面应用`聚合为一个整体应用的 JavaScript 微前端框架, 我们先看它的设计目的和解决的问题：[single-spa架构概览](https://link.juejin.cn?target=https%3A%2F%2Fzh-hans.single-spa.js.org%2Fdocs%2Fgetting-started-overview%2F%23%E6%9E%B6%E6%9E%84%E6%A6%82%E8%A7%88)

>Single-spa 从现代框架组件生命周期中获得灵感，将生命周期应用于整个应用程序。 
>现在 single-spa 几乎支持任何框架。 由于 JavaScript 因其许多框架的寿命短而臭名昭著，我们决定让它在任何您想要的框架都易于使用。

很重要一点，single-spa的设计基于现代框架，现代spa框架（如vue,react等）的一个重要特点：每个应用程序都可以响应 url 路由事件，并且必须知道如何从 DOM 中初始化、挂载和卸载自己。

我们以vue为例，一个vue项目的初始化通常如下：

![截屏2021-03-13 下午6.53.56.png](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/202203091514543.webp)

在index文件定义挂载节点（`div id="app"`）后，在main入口文件执行时，我们将新建vue实例，并挂载到对应的dom节点。

一个尝试，如果不在进入页面时候就初始实例，而是由我决定何时装载卸载实例？卸载实例后是否可以切换装载另一个实例？而这样是否就达到自由切换spa应用的目的了，于是进一步我们有这样一个设计

![截屏2021-03-13 下午7.21.29.png](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/202203091514594.webp)

事实上这也是single-spa做的最基础的事，我们再回来看它最简单的使用方式：[中文文档](https://link.juejin.cn?target=https%3A%2F%2Fzh-hans.single-spa.js.org%2Fdocs%2Fgetting-started-overview)

1. 创建HTML

```
<html>
<body>
    <script src="single-spa-config.js"></script>
</body>
</html>

```

1. 创建启动文件，在这里加载微应用的脚本文件，定义路由的激活规则，注册微应用的信息。采用qiankun registerMicroApps 方式加载微应用的话，基本也基于这种registerApplication的使用方式。

```
//main.js
import * as singleSpa from 'single-spa';
const name = 'app1';
/* loading 是一个返回 promise 的函数，用于 加载/解析 应用代码。
 * 它的目的是为延迟加载提供便利 —— single-spa 只有在需要时才会下载应用程序的代码。
 * 在这个示例中，在 webpack 中支持 import ()并返回 Promise，但是 single-spa 可以使用任何返回 Promise 的加载函数。
 */
const app = () => import('./app1/app1.js');
/* Single-spa 配置顶级路由，以确定哪个应用程序对于指定 url 是活动的。
 * 您可以以任何您喜欢的方式实现此路由。
 * 一种有用的约定是在url前面加上活动应用程序的名称，以使顶层路由保持简单。
 */
const activeWhen = '/app1';
singleSpa.registerApplication({ name, app, activeWhen });
singleSpa.start();

```

1. 定义子应用的生命周期

```
//app1.js
let domEl;
export function bootstrap(props) {
    return Promise
        .resolve()
        .then(() => {
            // 如果我们使用vue等，这里相当于初始化挂载节点，
            domEl = document.createElement('div');
            domEl.id = 'app1';
            document.body.appendChild(domEl);
        });
}
export function mount(props) {
    return Promise
        .resolve()
        .then(() => {
            // 在这里通常使用框架将ui组件挂载到dom。请参阅https://single-spa.js.org/docs/ecosystem.html。
            // 如果我们使用vue等，这里相当于进行vue实例化和mount执行，https://cn.vuejs.org/v2/api/#vm-mount
            domEl.textContent = 'App 1 is mounted!'
        });
}
export function unmount(props) {
    return Promise
        .resolve()
        .then(() => {
            // 在这里通常是通知框架把ui组件从dom中卸载。参见https://single-spa.js.org/docs/ecosystem.html
            // 如果我们使用vue等，这里相当于进行vue实例的销毁 destroy()，参见vue文档
            domEl.textContent = '';
        })
}

注意：single-api 有两套api， 「Application api」 和 「Parcel api」
Parcel api提供了手动挂载应用的能力，剥离了registerApplication默认路由监听能力，
qiankun的「loadMicroApp」手动加载正是基于此方式实现

```

这里single-spa做了几件事情

1. 仿现代应用实现了自己的生命周期，并在不同阶段执行不同的生命周期函数（`bootstrap，mount,unmount`）
2. 用户需在对应生命周期完成子应用的逻辑，如在mount和unmount执行初始化vue mount和vue的销毁destroy方法
3. single-spa拦截监听了系统的顶层路由事件，通过`activeWhen`规则切换不同应用的生命周期（如切换页面，对应执行过程：bootstrap page1，mount page1，unmount page1, bootstrap page2, mount page2, unmount page2···），在完成子应用加载后，框架才把路由事件下发给子应用，子应用可以继续响应自身路由逻辑

### 乾坤对single-spa的封装

乾坤两种微应用加载方式`registerMicroApps`和`loadMicroApp`如下([官网](https://link.juejin.cn?target=https%3A%2F%2Fqiankun.umijs.org%2Fzh%2Fguide%2Fgetting-started))

```
import { registerMicroApps, loadMicroApp, start } from 'qiankun';

registerMicroApps([
  {
    name: 'react app', // app name registered
    entry: '//localhost:7100',
    container: '#yourContainer',
    activeRule: '/yourActiveRule',
  },
  {
    name: 'vue app',
    entry: { scripts: ['//localhost:7100/main.js'] },
    container: '#yourContainer2',
    activeRule: '/yourActiveRule2',
  },
]);
// 或者手动
loadMicroApp(
  { 
    name: 'app', 
    entry: '//localhost:7100',
    container: '#yourContainer', 
  }
);

start();

```

实际上也基于single-spa中registerApplication和Parcel，我们可以从源码确认 [github1s.com/umijs/qiank…](https://link.juejin.cn?target=https%3A%2F%2Fgithub1s.com%2Fumijs%2Fqiankun%2Fblob%2FHEAD%2Fsrc%2Fapis.ts)

activeRule字段对应了activeWhen, 其他字段和生命周期钩子也是基本配置，但这里我们需关注另一个问题，子页面加载入口`entry: '//localhost:7100'`。

### entry文件加载：JS Entry vs HTML Entry

回过头来看single-spa的基本示例，我们觉得是有点不直观反习惯的，主要是加载子应用时候，通过`const app = () => import('./app1/app1.js')`来定义一个子页面。由于现代spa应用里面，我们通常都是从入口文件加载框架（vue/react）起步，打包生成一个js bundle, 在模版html里面加载构成最后的静态资源。而在使用single-spa时候，我们则需要对入口文件重新封装，使之暴露为一个生命周期钩子函数，并实现构建子应用的容器节点的逻辑，即html挂载节点（single-spa当前通过封装不同[框架库](https://link.juejin.cn?target=https%3A%2F%2Fsingle-spa.js.org%2Fdocs%2Fecosystem-vue%2F)来实现，其实也挺好）。这样子的好处我们可以在资源加载层面做优化，比如运行时依赖共享。当我们有多个子应用共用一套样式组件，或者vue/react等框架时，可以在打包子应用时候设置webpack的`externals`，忽略这些依赖的打包，然后再借助`systemjs`这种动态模块加载工具，把依赖的systemjs版本引进来（简单场景里，也可以动态标签方式引入依赖，反正umd导出的第三方库都支持） 用这样的方式去避免重复加载，single-spa也提供了一种面向webpack5的`模块联合`方式解决共享问题，[共享联合](https://link.juejin.cn?target=https%3A%2F%2Fzh-hans.single-spa.js.org%2Fdocs%2Frecommended-setup%2F%23%E5%85%B1%E4%BA%AB%E4%BE%9D%E8%B5%96)，可以对比下。

上述的问题在于，我们在使用single-spa加载子应用的时候，要做的工作是比较繁琐的，至少有2点

1. 改变了子应用原有的开发方式，节点挂载等要么自行实现，要么引入不同的single-spa框架库，然后再对入口文件做适配
2. 修改了子应用原有一些依赖引入的方式（例如模块引入改为script引入等，实现依赖共享的话）

乾坤在入口加载的处理上有着不同的考量，本着应用分离，快速集成不同技术框架应用的初衷，qiankun采用HTML的加载方式：（乾坤不提倡应用间共享依赖，建议各应用互相独立）

```
import { importEntry } from 'import-html-entry';
// get the entry html content and script executor
const { entry, name: appName } = app;
const { template, execScripts, assetPublicPath } = await importEntry(entry, importEntryOpts);

```

主要原理是利用fetch获取到请求url的资源，解析对应的模版和脚本文件，获取子应用对应的模版和脚本依赖（包含了生命周期钩子），fetch url的实现主要用了`import-html-entry`。这样的好处是，基本保留了子应用原有的开发模式（除了增加生命周期钩子），成本相对js entry低廉很多，也适应了**不同技术框架项目快速集成**的背景.

关于这两种的选择，可以继续细读[可能是你见过最完善的微前端解决方案(19年)](https://link.juejin.cn?target=https%3A%2F%2Ftech.antfin.com%2Fcommunity%2Farticles%2F536)。复制下它的总结

![image.png](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/202203091514704.webp)

### 不足和定位

乾坤的不足上面已经体现，即无法实现`依赖共享`，然而这也是框架定位的问题，即作为`微应用`，乾坤更着重于应用间的隔离和解耦，以便可以以最小的工作量集成大量现有应用，所以乾坤考量的还有应用隔离（`样式隔离`和`js沙箱`），关于定位问题，这里推荐一篇文章分析得很不错 [谈谈微前端的两种粒度](https://juejin.cn/post/6871145516026527757)

```
微应用加载器：“微”的粒度是应用，也就是HTML（或main.js），它只能做到应用级别的分享
微模块加载器：“微”的粒度是模块，也就是JS模块，它能做到模块级别的分享

所以，它们的区别就是微服务的粒度，乾坤的所能服务的粒度是应用级别，而single-spa则是模块级别。

```

### 一些原则

#### 关于依赖

在梳理single-spa文档时候，官方其实是有推荐设置的，包括什么应该被定义为运行时模块（子应用，大型共享依赖库等），什么是构建时模块。官方也很建议只加载一次大型JavaScript库（react,组件库等），[推荐设置](https://link.juejin.cn?target=https%3A%2F%2Fzh-hans.single-spa.js.org%2Fdocs%2Frecommended-setup)

而乾坤并不建议共享依赖（虽然可以用external实现）。我们可以理解不同背景团队间的项目集成，为了维护目的分离开发。但也有相当部分新项目或项目有相关性强的依赖（比如共用项目组件库，地图库等），还是建议共享依赖，一种未来的方式是通过webpack5的`模块联合`(下面会提)实现，当前我们可以通过external在子应用忽略依赖，在主应用script引入等方式调用公共依赖库

#### 关于路由和手动注册应用

取决于场景，对于简单场景，交与框架监听路由即可，也有子路由复杂的情况（如在主应用存在菜单栏，对两个属于同一子应用的不同路由链接跳转等），这时路由规则可能会让调用方混乱，一种不错的方式是在主应用，以组件方式封装子应用，再通过组件的生命周期控制子应用的加载和销毁，此时在主应用的外层，仅通过v-if等命令就可以便捷地管理切换不同子应用

```
const App
onMounted(() => {
    App = loadMicroApp({
        name: 'app',
        entry: '/app/index.html',
        container: '#app-container', 
    })
})
onBeforeUnmount(() => {
    if (App) {
        App.unmount()
    } 
})

```

### 优化的方向

qiankun提供了一套很方便上手的微前端框架，但减少总体体积，解决依赖共享问题，仍然是值得优化的一个点。其中一种大的趋势和解决方案便是webpack5的`模块联合`。

模块联合是一种webpack-specific技术，用于共享[构建时模块](#in-browser- vs -build-time-modules)。它涉及到每个microfrontend捆绑它所有的依赖，甚至共享的依赖。这意味着每个共享依赖项都有多个副本——每个microfrontend一个。在浏览器中，共享依赖项的第一个副本将被下载，但随后的microfrontend将重用该共享依赖项，而不需要下载它们的副本。

更多可以参照[webpack.js.org/concepts/mo…](https://link.juejin.cn?target=https%3A%2F%2Fwebpack.js.org%2Fconcepts%2Fmodule-federation%2F)

### 后话

1. 项目中发现微应用另一个好处：技术框架升级过程很好用，可以在一个简单子应用率先用vue3，后续子应用升级过渡
2. 有时候不能为了微应用而微应用，但还没找到论据
3. 虽然single-spa的颗粒度更小，但反而因为复杂度，有些场景不如qiankun简洁和易于组织
---
title: Vue问题集
date: 2021-06-24 
author: MoMeaks 
sidebar: 'auto' 
categories:
- fontEnd
- wiki
- intern 
tags:
- Vue
---

[来源1](https://github.com/haizlin/fe-interview/blob/master/lib/Vue.md#vue-cli)

## Vue

1. 从0到1自己构架一个vue项目，说说有哪些步骤、哪些重要插件、目录结构你会怎么组织

   vue-cli实际上已经很成熟了，目录除了脚手架默认的， 1、一般会额外创建views，components，api，utils，stores等；
   2、下载重要插件，比如axios，dayjs（moment太大），其他的会根据项目需求补充； 3、封装axios，统一api调用风格和基本配置； 4、如果有国际化需求，配置国际化；
   5、开发，测试和正式环境配置，一般不同环境API接口基础路径会不一样；

   如果是vue.js可以按照普通web项目流程开发，只在代码架构上变为数据和模型分离的模式即可。

2. 你知道vue的模板语法用的是哪个web模板引擎的吗？说说你对这模板引擎的理解?

   是 `mustache`，模板引擎的初衷是解决早期的字符模板拼接的问题，也是因这些方面的慢慢的发展壮大

   模板引擎： 负责组装数据，以另外一种形式或外观展现数据。 优点：

    1. 可维护性（后期改起来方便）；
    2. 可扩展性（想要增加功能，增加需求方便）；
    3. 开发效率提高（程序逻辑组织更好，调试方便）；
    4. 看起来舒服（不容易写错）

3. 你知道v-model的原理吗？说说看

   v-model只不过是一个语法糖而已,真正的实现靠的还是

    - ﻿v-bind:绑定响应式数据
    - 触发 input 事件 并传递数据 (核心和重点)

4. 你有使用过vue开发多语言项目吗？说说你的做法？

   **国际化**  **i18n**(vue-i18n 仓库地址：https://github.com/kazupon/vue-i18n)，重要是初始化时，判断当前语言环境，要想好存储方案。一般存在localStorage就行了。

5. vue中data的属性可以和methods中的方法同名吗？为什么？

   **报错**

   \[Vue warn]: Method "myname" has already been defined as a data property. **data中的属性和methods方法重名会优先执行data中的属性并且报错**

6. 在使用计算属性的时，函数名和data数据源中的数据可以同名吗？

   不能同名 因为不管是计算属性还是data还是props 都会被挂载在vm实例上，因此 这三个都不能同名。data会覆盖methods。
   然后解释为什么会覆盖，因为Props、methods、data、computed、watch都是在initState函数中被初始化的。初始化顺序就是我上面给出的顺序，本质上这些都是要挂载到this上面的，你如果重名的话，后面出现的属性自然而然会覆盖之前挂载的属性了。如果你的eslint配置比较严格的话，同名是编译不通过的。

7. 怎么给vue定义全局的方法？

    - 第一种：挂载到Vue的prototype上。把全局方法写到一个文件里面，然后for循环挂载到Vue的prototype上，缺点是调用这个方法的时候没有提示
    - 第二种：利用全局混入mixin，因为mixin里面的methods会和创建的每个单文件组件合并。这样做的优点是调用这个方法的时候有提示

8. vue2.0不再支持v-html中使用过滤器了怎么办？

   1：全局方法

   2：computed

   3：$options.filters

9. 怎么解决vue打包后静态资源图片失效的问题？

   找到config/index.js 配置文件，找build打包对象里的assetsPublicPath属性

   默认值为/，更改为./就好了（根路径到相对路径）

10. vuejs {{}}，v-text 和 v-html的区别

    ```html
    <div id="app">
    　　<p>{{message}}</p> <!-- 输出：<span>通过双括号绑定</span> -->
    　　<p v-html="html"></p> <!-- 输出：html标签在渲染的时候被解析 -->
    　　<p v-text="text"></p> <!-- 输出：<span>html标签在渲染的时候被源码输出</span> -->
    </div>
    
    
    <script>
    　　let app = new Vue({
    　　el: "#app",
    　　data: {
    　　　　message: "<span>通过双括号绑定</span>",
    　　　　html: "<span>html标签在渲染的时候被解析</span>",
    　　　　text: "<span>html标签在渲染的时候被源码输出</span>",
    　　}
    });
    </script>
    ```

11. 怎么解决vue动态设置img的src不生效的问题？

    因为动态添加src被当做静态资源处理了，没有进行编译，所以要加上require。

    ```css
    require('@/assets/images/xxx.png')
    ```

12. 使用vue后怎么针对搜索引擎做SEO优化？

    1.SSR服务器渲染；vue官方推荐nuxt.js 2.静态化； 3.预渲染prerender-spa-plugin； 4.使用Phantomjs针对爬虫做处理。

13. 跟keep-alive有关的生命周期是哪些？描述下这些生命周期

    activated和deactivated

    - keep-alive的生命周期 1.activated： 页面第一次进入的时候，钩子触发的顺序是created->mounted->activated 2.deactivated:
      页面退出的时候会触发deactivated，当再次前进或者后退的时候只触发activated

14. 如果现在让你从vue/react/angularjs三个中选择一个，你会选哪个？说说你的理由

    1. 考虑当前团队成员技术栈, 基本遵循少数服从多数的情况
    2. 考虑人员招聘成本, 我上家公司当初希望切换到 react 框架, 结果招聘非常难, 新人迟迟进不来影响开发进度
    3. 业务场景考虑, 在平台类应用,并且未来将长期持续维护, 团队开发人员经验不足的情况下, 选择 angular 是不错的方案
    4. 架构上倾向设计的视图层更轻, 尽量弱化框架的绑定

15. 你知道vue2.0兼容IE哪个版本以上吗？

    **不支持ie8及以下，部分兼容ie9 ，完全兼容10以上**

    不兼容ie8及以下，是因为**vue的响应式原理是基于es5的Object.defineProperty的**,而这个**方法不支持ie8及以下**

16. 在vue项目中如果methods的方法用箭头函数定义结果会怎么样？

    因为箭头函数默绑定父级作用域的上下文，所以不会绑定vue实例，所以 this 是undefind

17. 如何在子组件中访问父组件的实例？

    vue中如果父组件想调用子组件的方法，可以在子组件中加上ref，然后通过this.$refs.ref.method调用(https://www.cnblogs.com/jin-zhe/p/9523029.html)
    Vue中子组件调用父组件的方法，这里有三种方法提供参考： 1：直接在子组件中通过this.$parent.event来调用父组件的方法 2：在子组件里用$emit向父组件触发一个事件，父组件监听这个事件
    3：父组件把方法传入子组件中，在子组件里直接调用这个方法 （https://www.cnblogs.com/jin-zhe/p/9523782.html）

18. vue组件里的定时器要怎么销毁？

    当生命周期销毁后，并没有将组件中的计时器销毁，虽然页面上看不出来，但是如果在控制台打印的话，会发现计时器还在运行，所以要销毁计时器，避免代码一直执行

    const timer = setInterval(() =>{ // 某些定时器操作 }, 500); // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。 this.$once('hook:
    beforeDestroy', () => { clearInterval(timer); })

19. vue组件会在什么时候下被销毁？

    页面关闭、路由跳转、v-if和改变key值

20. 在vue中使用this应该注意哪些问题？

    生命周期的钩子函数不能使用箭头函数，否者this不能指向vue实例

21. **Vue风格指南 ！**组件命名规范

    定义组件名有两种方式： 1.kebab-case（短横线分隔命名），引用时必须也采用kebab-case； 2.PascalCase（首字母大写命名），引用时既可以采用PascalCase也可以使用kebab-case；
    但在DOM中使用只有kebab-case是有效的

    https://cn.vuejs.org/v2/style-guide/index.html

    简约版 https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/style-guide.html#component

22. 你有使用过JSX吗？说说你对JSX的理解？

    jsx不是一门新的语言，是一种新的语法糖。让我们在js中可以编写像html一样的代码。 允许XML语法直接加入到JavaScript代码中，让你能够高效的通过代码而不是模板来定义界面

23. vue的:class和:style有几种表示方式？

:class 绑定变量 绑定对象 绑定一个数组 绑定三元表达式
:style 绑定变量 绑定对象 绑定函数返回值 绑定三元表达式

24. vue的is这个特性你有用过吗？主要用在哪些方面？

vue中is的属性引入是为了解决dom结构中对放入html的元素有限制的问题

25. 组件中写name选项有什么作用？

    项目使用keep-alive时，可搭配组件name进行缓存过滤 DOM做递归组件时需要调用自身name vue-devtools调试工具里显示的组见名称是由vue中组件name决定的

26. prop验证的type类型有哪几种？

8种：String、Number、Boolean、Array、Object、**Date、Function、Symbol**、自定义构造函数

27. 说说你对slot的理解有多少？slot使用场景有哪些？

    通过插槽可以让用户可以拓展组件，去更好地复用组件和对其做定制化处理

    如果父组件在使用到一个复用组件的时候，**获取这个组件在不同地方有少量的更改，如果去重写组件是一件不明智的事情** 通过slot插槽向组件内部指定位置传递内容，完成这个复用组件在不同场景的应用

28. 第一次加载页面时会触发哪几个钩子？

    beforeCreate, created, beforeMount, mounted

29. DOM渲染在哪个周期中就已经完成了？

    mounted

30. 你有封装过axios吗？主要是封装哪方面的？

    封装处理配置（baseURL、时间、token）、统一管理接口、错误处理、不同形式的请求、消息提示、loading等。

31. axios跨域

    axios是一种异步请求方式，有cdn引入和npm方法引入并使用 解决跨域常用的有两种方式
    1.CORS解决跨域问题，这需要通过后端来解决，通过设置header头来通配。使服务器允许跨域请求接口数据，而前端正常使用axios请求方式。
    2.通过接口代理的方式，在vue项目中创建一个vue.config.js，导入一个devserve，并配置里面的选项即可。

### Vue-Cli

1. 在使用vue-cli开发vue项目时，自动刷新页面的原理你了解吗？

   自动刷**新页面并不是vue-cli的功能**
   ，而是webpack的hot-module-replacement-plugin插件在做这件事，这个插件是webpack自带的插件，用来做hmr的。如果需要配置hmr只需要在webpack.config.js的devServer字段写
   下面的配置即可。 { contentBase: 服务器可以访问的根目录, hot:true, //开启热模块替换也就是hmr hotOnly:true //不刷新页面，只做hmr }
   而由于vue-cli3集成了webpack的配置，所以**vue.config.js**里面也有这个属性，配置写法是一样的。

2. vue-cli提供了的哪几种脚手架模板？

   ◯ Babel ◯ TypeScript ◯ Progressive Web App (PWA) Support ◯ Router ◯ Vuex ◯ CSS Pre-processors ◯ Linter / Formatter ◯
   Unit Testing ◯ E2E Testing

3. vue-cli工程中常用的npm命令有哪些？

    1. `npm install`：下载 node_modules 资源包的命令 ==思考问题：== 为什么下载资源包要用npm install？ 请你谈一下
    2. `npm run dev`： 启动 vue-cli 开发环境的 npm命令（3.0以下😔 ☞ 脚手架2启动方式）
       `npm run serve`:启动 vue-cli 开发环境的 npm命令（3.0以上😀 ☛ 脚手架3启动方式）
    3. `npm run build`： vue-cli 生成 生产环境部署资源 的 npm命令（常说的打包文件） 脚手架2打包，生成的是build文件 脚手架3打包，生成的是dist文件
    4. `serve build `（脚手架2，把你写好的项目打包，然后在本机测试，查看是否完整）
       `serve dist `（脚手架3，把你写好的项目打包，然后在本机测试，查看是否完整） 因为你最后直接给的是打包文件，交工之前直接测试一下，运行打包文件，查看项目是否完整
    5. `npm run build--report`：用于查看 vue-cli 生产环境部署资源文件大小的 npm命令。（脚手架2、3不一样）

4. vue-cli3插件有写过吗？怎么写一个代码生成插件？

5. vue-cli生成的项目可以使用es6、es7的语法吗？为什么？

   vue-cli 创建的项目配置了babel,可以将es6,es7....etc在webpack打包的时候转换成es5的代码，所以并不会出现问题。

6. vue-cli怎么解决跨域的问题？

   vue-cli无法解决跨域问题。真正解决跨域问的是webpack。只不过vue-cli3.0将webpack的配置继承到了vue.config.js中，才给初学者造成了vue-cli可以解决跨域的错觉。
   与在webpack.config.js中配置跨域一样，在vue.config.js中的`devServer:{proxy:{}}`字段可以编写跨域配置。 具体的配置写法webpack文档写的很清楚。

7. vue-cli中你经常的加载器有哪些？

   style,css,vue,postcss,url,vue-loader/style-loader/sass-loader/url-loader...

8. 说下你了解的vue-cli原理？你可以自己实现个类vue-cli吗？

9. 你知道什么是脚手架吗？

   脚手架是为了保证各施工过程顺利进行而搭设的工作平台。

   首要的就是保证我的项目可以顺利进行。

    - 能够快速帮我生成新项目的目录模板(Node.js)。
    - 能够提升我的开发效率和开发的舒适性(webpack)。

10. 怎么使用vue-cli3创建一个项目？

    `vue create hello-world`

11. vue-cli3你有使用过吗？它和2.x版本有什么区别？

    vue-cli3.0
    将webpack的配置集成了进来，使用vue-cli3.0创建的项目在配置webpack的时候可以直接在vue.config.js里面配置。既可以用chainwebpack的链式语法也可以直接在configureWebpack字段内直接写webpack原生的配置。

12. **vue-cli默认是单页面的，那要弄成多页面该怎么办呢？**

13. 不用vue-cli，你自己有搭建过vue的开发环境吗？流程是什么？

    使用Webpack

    https://juejin.cn/post/6844903904187170823

### Vue-router

1. vue-router怎么重定向页面？ https://router.vuejs.org/zh/guide/essentials/nested-routes.html嵌套子路

   路由中配置`redirect`属性

   ```js
   export default {
      path: '',
      name: '',
      meta: {  //元信息（非必填）
         icon: '',  //路由图标
         title: '',   //路由名称
         light: '',    //高亮显示那个路由name
         show: true,   //是否显示
      },
      redirect: {   
         name: '',    //重定向，指向哪个路由的name
      },
      component: '',    //当前路由时要显示的组件
      children: [],    //嵌套子路由
   }
   ```

2. 404

   ```js
   {
       path: '*',
       name: '404',
       component: () => import('../views/404.vue')
   }
   ```

   需注意：将改路由配置放到所有路由的配置信息的最后，否则会其他路由path匹配造成影响。

3. 切换路由时，需要保存草稿的功能，怎么实现呢？

   ```js
   beforeRouteLeave (to, from, next) {
     const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
     if (answer) {
       next()
     } else {
       next(false)
     }
   }
   ```

4. vue-router路由有几种模式？说说它们的区别？

   **hash模式：**
   1.url路径会出现“#”号字符 2.hash值不包括在Http请求中，它是交由前端路由处理，所以改变hash值时不会刷新页面，也不会向服务器发送请求 3.hash值的改变会触发hashchange事件
   **history模式：**
   1.整个地址重新加载，可以保存历史记录，方便前进后退 2.依赖H5 API和后台配置，没有后台配置的话，页面刷新时会出现404（支持老旧浏览器, 但是如果要部署到服务器的化, 需要在ng上进行相应的正向代理跳转,
   否则拷贝的链接会打不开）

5. vue-router有哪几种导航钩子（ 导航守卫 ）？

   - 1、全局**导航钩子**
     - **router.beforeEach(to, from, next): 路由改变前的钩子**
     - **router.beforeResolve : 在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，该钩子函数就被调用**
     - **router.afterEach : 路由改变后的钩子**
   - 2、路由独享**钩子**
   - 3、组件内的**导航钩子**

6. 说说你对router-link的了解

## 知识点50个

##### 1. Vue的优点？Vue的缺点？

优点：渐进式，组件化，轻量级，虚拟dom，响应式，单页面路由，数据与视图分开

缺点：单页面不利于seo，不支持IE8以下，首屏加载时间长

##### 2. 为什么说Vue是一个渐进式框架？

渐进式：通俗点讲就是，**你想用啥你就用啥**，咱也不强求你。你想用component就用，不用也行，你想用vuex就用，不用也可以。

新增功能可以通过安装新的依赖和轮子完成

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/005b7f7d279f405686b354f00a01383a~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png" style="zoom:50%;" />

##### 3. Vue跟React的异同点？

相同点：

- 1.都使用了**虚拟dom**
- 2.**组件化开发**
- 3.都是单向数据流(父子组件之间，不建议子修改父传下来的数据)
- 4.都支持服务端渲染

不同点：

- 1.**React的JSX，Vue的template**
- 2.数据变化，React手动(setState)，Vue自动(初始化已响应式处理，Object.defineProperty)
- **3.React单向绑定，Vue双向绑定**
- **4.React的Redux，Vue的Vuex**

##### 4. MVVM是什么？和MVC有何区别呢？

MVC

- Model(模型)：负责从数据库中取数据
- View(视图)：负责展示数据的地方
- Controller(控制器)：用户交互的地方，例如点击事件等等
- 思想：Controller将Model的数据展示在View上

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4636ebbfa25049179c27a6b5ab8bb308~tplv-k3u1fbpfcp-watermark.awebp)

MVVM（M，V，VM）

- VM：也就是View-Model，做了两件事达到了数据的双向绑定
  一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。
- 思想：实现了 View 和 Model 的自动同步，也就是当 Model 的属性改变时，我们不用再自己手动操作 Dom 元素，来改变 View 的显示，而是改变属性后该属性对应 View 层显示会自动改变（对应Vue数据驱动的思想）

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aac31b27392b4b0e90ca2f67c64c59c2~tplv-k3u1fbpfcp-watermark.awebp)

区别

整体看来，MVVM 比 MVC 精简很多，不仅简化了业务与界面的依赖，还解决了数据频繁更新的问题，不用再用选择器操作 DOM 元素。因为在 MVVM 中，View 不知道 Model 的存在，Model 和 ViewModel 也观察不到
View，这种**低耦合模式提高代码的可重用性**

Vue是不是MVVM框架？

Vue是MVVM框架，但是**不是严格符合MVVM**，因为MVVM规定Model和View不能直接通信，而Vue的`ref`可以做到这点

##### 5. Vue和JQuery的区别在哪？为什么放弃JQuery用Vue？

- 1.jQuery是直接操作DOM，Vue不直接操作DOM，Vue的数据与视图是分开的，Vue只需要操作数据即可
- 2.在操作DOM频繁的场景里，**jQuery的操作DOM行为是频繁的，而Vue利用虚拟DOM的技术，大大提高了更新DOM时的性能**
- 3.Vue中**不倡导直接操作DOM**，开发者只需要把大部分精力放在**数据层面**上
- 4.Vue集成的一些库，大大提高开发效率，比如Vuex，Router等

##### 6. Vue的作者是谁？大声说出它的名字！！！

他的名字就是：鱿鱼西（尤雨溪）

##### 7. 为什么data是个函数并且返回一个对象呢？

`data`之所以只一个函数，是因为一个组件可能会多处调用，而每一次调用就会执行`data函数`并返回新的数据对象，这样，可以**避免多处调用之间的`数据污染`。**

##### 8. 使用过哪些Vue的修饰符呢？

可以看这篇文章[「百毒不侵」面试官最喜欢问的13种Vue修饰符](https://juejin.cn/post/6981628129089421326)

<img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a1c911988f74cea91da79af3c6049c2~tplv-k3u1fbpfcp-watermark.awebp" alt="截屏2021-07-11 下午9.56.53.png" style="zoom: 80%;" />

##### 9. 使用过哪些Vue的内部指令呢？

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d39d348e686b449e8931f5a85802e3c6~tplv-k3u1fbpfcp-watermark.awebp)

##### 10. 组件之间的传值方式有哪些？

- **父组件传值给子**组件，子组件使用`props`进行接收
- **子组件传值给父**组件，子组件使用`$emit+事件`对父组件进行传值
- 组件中可以使用`$parent`和`$children`获取到父组件实例和子组件实例，进而获取数据
- 使用`$attrs`和`$listeners`，在对一些组件进行二次封装时可以方便传值，例如A->B->C
- 使用`$refs`获取组件实例，进而获取数据
- 使用`Vuex`进行状态管理
- 使用`eventBus`进行跨组件触发事件，进而传递数据
- 使用`provide`和`inject`，官方建议我们不要用这个，我在看`ElementUI`源码时发现大量使用
- 使用浏览器本地缓存，例如`localStorage`

##### 11. 路由有哪些模式呢？又有什么不同呢？

- hash模式：通过`#号`后面的内容的更改，触发`hashchange`事件，实现路由切换
- history模式：通过`pushState`和`replaceState`切换url，触发`popstate`事件，**实现路由切换，需要后端配合**

##### 12. 如何设置动态class，动态style？

- 动态class对象：`<div :class="{ 'is-active': true, 'red': isRed }"></div>`true触发使用
- 动态class数组：`<div :class="['is-active', isRed ? 'red' : '' ]"></div>`
- 动态style对象：`<div :style="{ color: textColor, fontSize: '18px' }"></div>`
- 动态style数组：`<div :style="[{ color: textColor, fontSize: '18px' }, { fontWeight: '300' }]"></div>`

##### 13. v-if和v-show有何区别？

- 1.`v-if`是**通过控制dom元素的删除和生成来实现显隐**，每一次显隐都会使组件重新跑一遍生命周期，因为显隐决定了组件的生成和销毁
- 2.`v-show`是**通过控制dom元素的css样式来实现显隐，不会销毁**
- 3.频繁或者大数量显隐使用`v-show`，否则使用`v-if`
- 与display和visually不一样

##### 14. computed和watch有何区别？

- 1.`computed`是依赖已有的变量来计算一个目标变量，大多数情况都是`多个变量`凑在一起计算出`一个变量`，并且`computed`具有`缓存机制`，依赖值不变的情况下其会直接读取缓存进行复用，`computed`
  不能进行`异步操作`
- 2.`watch`是监听某一个变量的变化，并执行相应的回调函数，通常是`一个变量`的变化决定`多个变量`的变化，`watch`可以进行`异步操作`
- 3.**简单记就是：一般情况下`computed`是`多对一`，`watch`是`一对多**`

##### 15. Vue的生命周期，讲一讲？

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/892fde0e56324868921d0e924c84858a~tplv-k3u1fbpfcp-watermark.awebp)

##### 16. 为什么v-if和v-for不建议用在同一标签？

在Vue2中，`v-for`**优先级是高于**`v-if`的，咱们来看例子

```js
<div v-for="item in [1, 2, 3, 4, 5, 6, 7]" v-if="item !== 3">
    {{item}}
</div>

```

上面的写法是`v-for`和`v-if`同时存在，会先把7个元素都遍历出来，然后再一个个判断是否为3，并把3给隐藏掉，这样的坏处就是，渲染了无用的3节点，增加无用的dom操作，建议使用computed来解决这个问题：

```js
<div v-for="item in list">
    {{item}}
</div>

computed()
{
    list()
    {
        return [1, 2, 3, 4, 5, 6, 7].filter(item => item !== 3)
    }
}
```

##### 17. vuex的有哪些属性？用处是什么？

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9566927e955c4d0ba19df942534e5b53~tplv-k3u1fbpfcp-watermark.awebp)

- State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。
- Getter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。
- Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。
- Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。
- **Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。**

![进阶Vuex](/blog/Vue/vuex)

## 至尊星耀

### 18. 不需要响应式的数据应该怎么处理？

在我们的Vue开发中，会有一些数据，从始至终都`未曾改变过`，这种`死数据`，既然`不改变`，那也就`不需要对他做响应式处理`了，不然只会做一些无用功消耗性能，比如一些写死的下拉框，写死的表格数据，这些数据量大的`死数据`
，如果都进行响应式处理，那会消耗大量性能。

```js
// 方法一：将数据定义在data之外
data()
{
    this.list1 = {xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx}
    this.list2 = {xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx}
    this.list3 = {xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx}
    this.list4 = {xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx}
    this.list5 = {xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx}
    return {}
}

// 方法二：Object.freeze()
data()
{
    return {
        list1: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
        list2: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
        list3: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
        list4: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
        list5: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
    }
}
复制代码
```

##### 19. watch有哪些属性，分别有什么用？

当我们监听一个基本数据类型时：

```js
watch: {
    value()
    {
        // do something
    }
}
```

当我们监听一个引用数据类型时：

```js
watch: {
    obj: {
        handler()
        { // 执行回调
            // do something
        },
        deep: true, // 是否进行深度监听 
        immediate:true // 是否初始执行handler函数
    }
}
```

##### 20. 父子组件生命周期顺序

父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted

##### 21. 对象新属性无法更新视图，删除属性无法更新视图，为什么？怎么办？

- 原因：`Object.defineProperty`**没有对对象的新属性进行属性劫持**
- 对象新属性无法更新视图：使用`Vue.$set(obj, key, value)`，组件中`this.$set(obj, key, value)`
- 删除属性无法更新视图：使用`Vue.$delete(obj, key)`，组件中`this.$delete(obj, key)`

##### 22. 直接arr[index] = xxx无法更新视图怎么办？为什么？怎么办？

- 原因：Vue没有对数组进行`Object.defineProperty`的属性劫持，所以直接arr[index] = xxx是无法更新视图的
- **使用数组的splice方法，`arr.splice(index, 1, item)`**，push等同样可用
- **使用`Vue.$set(arr, index, value)`**

##### 23. 自定义指令

建议看这篇文章[8个非常实用的Vue自定义指令](https://link.juejin.cn?target=https%3A%2F%2Fwww.cnblogs.com%2Flzq035%2Fp%2F14183553.html)

##### 24. 插槽的使用以及原理？

建议看我这篇文章[「Vue源码学习」你真的知道插槽Slot是怎么“插”的吗](https://juejin.cn/post/6949848530781470733)

### 25. 为什么不建议用index做key，为什么不建议用随机数做key？

举个例子：

```js
<div v-for="(item, index) in list" :key = "index" > {
{
    item.name
}
}</div>

list: [
    {name: '小明', id: '123'},
    {name: '小红', id: '124'},
    {name: '小花', id: '125'}
]

渲染为
< div
key = "0" > 小明 < /div>
<div key="1">小红</div>
<div key="2">小花</div>

现在我执行
list.unshift({name: '小林', id: '122'})

渲染为
< div
key = "0" > 小林 < /div>
<div key="1">小明</div>
<div key="2">小红</div>
<div key="3">小花</div>


新旧对比

< div
key = "0" > 小明 < /div>  <div key="0">小林</di
v >
< div
key = "1" > 小红 < /div>  <div key="1">小明</di
v >
< div
key = "2" > 小花 < /div>  <div key="2">小红</di
v >
< div
key = "3" > 小花 < /div>

可以看出，如果用index做key的话，其实是更新了原有的三项，并新增了小花，虽然达到了渲染目的，但是损耗性能

现在我们使用id来做key，渲染为

<div key= "123" > 小明 </div>
<div key="124">小红</div>
<div key="125">小花</div>

现在我执行
list.unshift({name: '小林', id: '122'})，渲染为

< div key = "122" > 小林 < /div>
<div key="123">小明</div>
<div key="124">小红</div>
<div key="125">小花</div>

新旧对比

< div key = "122" > 小林 < /div>
<div key="123">小明</div>
<div key="123">小明</div>
<div key="124">小红</div>
<div key="124">小红</div>
<div key="125">小花</div>
<div key="125">小花</div>

可以看出，原有的三项都不变，只是新增了小林这个人，这才是最理想的结果
复制代码
```

**需要每次生成再赋值，用`index`和用`随机数`都是同理，`随机数`每次都在变，做不到专一性，很`渣男`，也很消耗性能，所以，拒绝`渣男`，选择`老实人`**

##### 26. 说说nextTick的用处？

我举个例子，在vue中：

```js
this.name = '林三心'
this.age = 18
this.gender = '男'
```

我们修改了三个变量，那问题来了，是每修改一次，DOM就更新一次吗？不是的，Vue采用的是`异步更新`的策略，通俗点说就是，`同一事件循环内`多次修改，会`统一`进行一次`视图更新`，这样才能节省性能嘛

看懂了上面，那你应该也看得懂下面的例子了吧：

```js
<div ref="testDiv">{{name}}</div>

name: '小林'

this.name = '林三心'
console.log(this.$refs.testDiv.innerHTML) // 这里是啥呢
```

答案是“小林”，前面说了，Vue是`异步更新`，所以数据一更新，视图却还没更新，所以拿到的还是上一次的旧视图数据，那么想要拿到最新视图数据怎么办呢？

```js
this.name = '林三心'
this.$nextTick(() => {
    console.log(this.$refs.testDiv.innerHTML) // 林三心
})
```

### 27. Vue的SSR是什么？有什么好处？

- `SSR`就是服务端渲染
- 基于`nodejs serve`服务环境开发，所有`html`代码在服务端渲染
- 数据返回给前端，然后前端进行“激活”，即可成为浏览器识别的html代码
- `SSR`首次加载更快，有更好的用户体验，有更好的seo优化，因为爬虫能看到整个页面的内容，如果是vue项目，由于数据还要经过解析，这就造成爬虫并不会等待你的数据加载完成，所以其实Vue项目的seo体验并不是很好

### 28. Vue响应式是怎么实现的？

整体思路是**数据劫持+观察者模式**

对象内部通过` defineReactive` 方法，使用 `Object.defineProperty` 将属性进行劫持（只会劫持已经存在的属性），**数组则是通过重写数组方法来实现**。当页面使用对应属性时，每个属性都拥有自己的`dep`
属性，存放他所依赖的` watcher`（依赖收集），当属性变化后会通知自己对应的` watcher` 去更新(派发更新)。

想详细了解过程，建议阅读我的[Vue源码解析系列](https://juejin.cn/column/6969563635194527758)

```js
const {arrayMethods} = require('./array')

class Observer {
    constructor(value) {
        Object.defineProperty(value, '__ob__', {
            value: this,
            enumerable: false,
            writable: true,
            configurable: true
        })
        if (Array.isArray(value)) {
            value.__proto__ = arrayMethods
            this.observeArray(value)
        } else {
            this.walk(value)
        }
    }

    walk(data) {
        let keys = Object.keys(data)
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i]
            const value = data[key]
            defineReactive(data, key, value)
        }
    }

    observeArray(items) {
        for (let i = 0; i < items.length; i++) {
            observe(items[i])
        }
    }
}

function defineReactive(data, key, value) {
    const childOb = observe(value)

    const dep = new Dep()

    Object.defineProperty(data, key, {
        get() {
            console.log('获取值')
            if (Dep.target) {
                dep.depend()

                if (childOb) {
                    childOb.dep.depend()

                    if (Array.isArray(value)) {
                        dependArray(value)
                    }
                }
            }
            return value
        },
        set(newVal) {
            if (newVal === value) return
            observe(newVal)
            value = newVal
            dep.notify()
        }
    })
}

function observe(value) {
    if (Object.prototype.toString.call(value) === '[object Object]' || Array.isArray(value)) {
        return new Observer(value)
    }
}

function dependArray(value) {
    for (let e, i = 0, l = value.length; i < l; i++) {
        e = value[i]

        e && e.__ob__ && e.__ob__.dep.depend()

        if (Array.isArray(e)) {
            dependArray(e)
        }
    }
}

// array.js
const arrayProto = Array.prototype

const arrayMethods = Object.create(arrayProto)

const methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'reverse',
    'sort'
]

methodsToPatch.forEach(method => {
    arrayMethods[method] = function (...args) {
        const result = arrayProto[method].apply(this, args)

        const ob = this.__ob__

        var inserted

        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args
                break;
            case 'splice':
                inserted = args.slice(2)
            default:
                break;
        }

        if (inserted) ob.observeArray(inserted)

        ob.dep.notify()

        return result
    }
})

```

### 29. 为什么只对对象劫持，而要对数组进行方法重写？

因为对象最多也就几十个属性，拦截起来数量不多，**但是数组可能会有几百几千项，拦截起来非常耗性能，所以直接重写数组原型上的方法，是比较节省性能的方案**

### 30. Vue的模板编译原理？

因为这个问题讲起来可能比较长，所以：

建议看我这篇[「Vue源码学习(二)」你不知道的-模板编译原理](https://juejin.cn/post/6969563640416436232)

### 31. Vue的computed和watch的原理？

因为这个问题讲起来可能比较长，所以：

建议看我这篇[「Vue源码学习(四)」立志写一篇人人都看的懂的computed，watch原理](https://juejin.cn/post/6974293549135167495)

### 32. Vue.set方法的原理？

```js
function set(target, key, val) {
    // 判断是否是数组
    if (Array.isArray(target)) {
        // 判断谁大谁小
        target.length = Math.max(target.length, key)
        // 执行splice
        target.splice(key, 1, val)
        return val
    }

    const ob = target.__ob__

    // 如果此对象没有不是响应式对象，直接设置并返回
    if (key in target && !(key in target.prototype) || !ob) {
        target[key] = val
        return val
    }

    // 否则，新增属性，并响应式处理
    defineReactive(target, key, val)
    return val
}
```

### 33. Vue.delete方法的原理？

```js
function del(target, key) {
    // 判断是否为数组
    if (Array.isArray(target)) {
        // 执行splice
        target.splice(key, 1)
        return
    }

    const ob = target.__ob__

    // 对象本身就没有这个属性，直接返回
    if (!(key in target)) return


    // 否则，删除这个属性
    delete target[key]

    // 判断是否是响应式对象，不是的话，直接返回
    if (!ob) return
    // 是的话，删除后要通知视图更新
    ob.dep.notify()
}
```

### 34. nextTick的原理？

```js
let callbacks = []; //回调函数
let pending = false;

function flushCallbacks() {
    pending = false; //把标志还原为false
    // 依次执行回调
    for (let i = 0; i < callbacks.length; i++) {
        callbacks[i]();
    }
}

let timerFunc; //先采用微任务并按照优先级优雅降级的方式实现异步刷新
if (typeof Promise !== "undefined") {
    // 如果支持promise
    const p = Promise.resolve();
    timerFunc = () => {
        p.then(flushCallbacks);
    };
} else if (typeof MutationObserver !== "undefined") {
    // MutationObserver 主要是监听dom变化 也是一个异步方法
    let counter = 1;
    const observer = new MutationObserver(flushCallbacks);
    const textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
        characterData: true,
    });
    timerFunc = () => {
        counter = (counter + 1) % 2;
        textNode.data = String(counter);
    };
} else if (typeof setImmediate !== "undefined") {
    // 如果前面都不支持 判断setImmediate
    timerFunc = () => {
        setImmediate(flushCallbacks);
    };
} else {
    // 最后降级采用setTimeout
    timerFunc = () => {
        setTimeout(flushCallbacks, 0);
    };
}

export function nextTick(cb) {
    callbacks.push(cb);
    if (!pending) {
        pending = true;
        timerFunc();
    }
}
```

### 35. key有什么用？说说diff算法吧？

直接看这篇吧：[为什么 Vue 中不要用 index 作为 key？（diff 算法详解）](https://juejin.cn/post/6844904113587634184)

我讲的没他好

## 冷门知识点

### 36. 如果子组件改变props里的数据会发生什么

- 改变的props数据是基本类型

> 如果修改的是基本类型，则会报错

```js
props: {
    num: Number,
}
created()
{
    this.num = 999
}
```

![0458e2ff1538ee85d42953cec9a94ca.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/047859eda3bf47a5930dd0b28e842017~tplv-k3u1fbpfcp-watermark.awebp)

- 改变的props数据是引用类型

```js
props: {
    item: {
    default:
        () => ({}),
    }
}
created()
{
    // 不报错，并且父级数据会跟着变
    this.item.name = 'sanxin';

    // 会报错，跟基础类型报错一样
    this.item = 'sss'
}
,
复制代码
```

### 37. props怎么自定义验证

```js
props: {
    num: {
    default:
        1,
            validator
    :

        function (value) {
            // 返回值为true则验证不通过，报错
            return [
                1, 2, 3, 4, 5
            ].indexOf(value) !== -1
        }
    }
}
复制代码
```

### 38. watch的immediate属性有什么用？

> 比如平时created时要请求一次数据，并且当搜索值改变，也要请求数据，我们会这么写：

```js
created()
{
    this.getList()
}
,
watch: {
    searchInputValue()
    {
        this.getList()
    }
}
复制代码
```

> 使用`immediate`完全可以这么写，当它为`true`时，会初始执行一次

```js
watch: {
    searchInputValue:{
        handler: 'getList',
            immediate
    :
        true
    }
}
复制代码
```

### 39. watch监听一个对象时，如何排除某些属性的监听

> 下面代码是，params发生改变就重新请求数据，无论是a，b，c，d属性改变

```js
data()
{
    return {
        params: {
            a: 1,
            b: 2,
            c: 3,
            d: 4
        },
    };
}
,
watch: {
    params: {
        deep: true,
            handler()
        {
            this.getList;
        }
    ,
    }
,
}
复制代码
```

> 但是如果我只想要a，b改变时重新请求，c，d改变时不重新请求呢？

```js
mounted()
{
    Object.keys(this.params)
        .filter((_) => !["c", "d"].includes(_)) // 排除对c，d属性的监听
        .forEach((_) => {
            this.$watch((vm) => vm.params[_], handler, {
                deep: true,
            });
        });
}
,
data()
{
    return {
        params: {
            a: 1,
            b: 2,
            c: 3,
            d: 4
        },
    };
}
,
watch: {
    params: {
        deep: true,
            handler()
        {
            this.getList;
        }
    ,
    }
,
}
复制代码
```

### 40. 审查元素时发现data-v-xxxxx，这是啥？

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ff63f90f2d924ff6b20622a2d05ba367~tplv-k3u1fbpfcp-watermark.awebp)

> 这是在标记vue文件中css时使用scoped标记产生的，因为要保证各文件中的css不相互影响，给每个component都做了唯一的标记，所以每引入一个component就会出现一个新的'data-v-xxx'标记

### 41. computed如何实现传参？

```js
// HTML.md
<div>{{total(3)}}

    // js
    computed: {
        total() {
        return function(n) {
        return n * this.num
    }
    },
    }

    复制代码
```

### 42. vue的hook的使用

- 同一组件中使用

> 这是我们常用的使用定时器的方式

```js
export default {
    data() {
        timer:null
    },
    mounted() {
        this.timer = setInterval(() => {
            //具体执行内容
            console.log('1');
        }, 1000);
    }
    beforeDestory() {
        clearInterval(this.timer);
        this.timer = null;
    }
}
复制代码
```

> 上面做法不好的地方在于：得全局多定义一个timer变量，可以使用hook这么做：

```js
export default {
    methods: {
        fn() {
            let timer = setInterval(() => {
                //具体执行代码
                console.log('1');
            }, 1000);
            this.$once('hook:beforeDestroy', () => {
                clearInterval(timer);
                timer = null;
            })
        }
    }
}
复制代码
```

- 7.2 父子组件使用

> 如果子组件需要在mounted时触发父组件的某一个函数，平时都会这么写：

```js
//父组件
<rl-child @childMounted = "childMountedHandle"
    / >
    method()
{
    childMountedHandle()
    {
        // do something...
    }
}
,

// 子组件
mounted()
{
    this.$emit('childMounted')
}
,
复制代码
```

> 使用hook的话可以更方便：

```js
//父组件
<rl-child @hook:mounted = "childMountedHandle"
    / >
    method()
{
    childMountedHandle()
    {
        // do something...
    }
}
,
复制代码
```

### 43. provide和inject是响应式的吗？

```js
// 祖先组件
provide()
{
    return {
        // keyName: { name: this.name }, // value 是对象才能实现响应式，也就是引用类型
        keyName: this.changeValue // 通过函数的方式也可以[注意，这里是把函数作为value，而不是this.changeValue()]
        // keyName: 'test' value 如果是基本类型，就无法实现响应式
    }
}
,
data()
{
    return {
        name: '张三'
    }
}
,
methods: {
    changeValue()
    {
        this.name = '改变后的名字-李四'
    }
}

// 后代组件
inject:['keyName']
create()
{
    console.log(this.keyName) // 改变后的名字-李四
}
复制代码
```

### 44.Vue的el属性和$mount优先级？

> 比如下面这种情况，Vue会渲染到哪个节点上

```js
new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
}).$mount('#ggg')
复制代码
```

> 这是官方的一张图，可以看出`el`和`$mount`同时存在时，`el优先级` > `$mount`

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da6331091cb145459e0b543c76e9bfc6~tplv-k3u1fbpfcp-watermark.awebp)

### 45. 动态指令和参数使用过吗？

```js
<template>
    ...
    <aButton
    @[someEvent]="handleSomeEvent()" :[someProps]="1000" />...
</template>
<script>
    ...
    data(){
    return{
    ...
    someEvent: someCondition ? "click" : "dbclick",
    someProps: someCondition ? "num" : "price"
}
},
    methods: {
    handleSomeEvent(){
    // handle some event
}
}
</script>
复制代码
```

### 46. 相同的路由组件如何重新渲染？

> 开发人员经常遇到的情况是，多个路由解析为同一个Vue组件。问题是，Vue出于性能原因，默认情况下共享组件将不会重新渲染，如果你尝试在使用相同组件的路由之间进行切换，则不会发生任何变化。

```js
const routes = [
    {
        path: "/a",
        component: MyComponent
    },
    {
        path: "/b",
        component: MyComponent
    },
];
复制代码
```

> 如果依然想重新渲染，怎么办呢？可以使用`key`

```js
<template>
    <router-view
    :key="$route.path">
</router-view>
</template>
复制代码
```

### 47. 自定义v-model

> 默认情况下，v-model 是 @input 事件侦听器和 :value 属性上的语法糖。但是，你可以在你的Vue组件中指定一个模型属性来定义使用什么事件和value属性——非常棒！

```js
export default
:
{
    model: {
        event: 'change',
            prop
    :
        'checked'
    }
}
复制代码
```

### 48. 如何将获取data中某一个数据的初始状态？

> 在开发中，有时候需要拿初始状态去计算。例如

```js
data()
{
    return {
        num: 10
    },
        mounted()
    {
        this.num = 1000
    }
,
    methods: {
        howMuch()
        {
            // 计算出num增加了多少，那就是1000 - 初始值
            // 可以通过this.$options.data().xxx来获取初始值
            console.log(1000 - this.$options.data().num)
        }
    }
    复制代码
```

### 49.为什么不建议v-for和v-if同时存在

```js
<div v-for="item in [1, 2, 3, 4, 5, 6, 7]" v-if="item !== 3">
    {{item}}
</div>
复制代码
```

> 上面的写法是v-for和v-if同时存在，会先把7个元素都遍历出来，然后再一个个判断是否为3，并把3给隐藏掉，这样的坏处就是，渲染了无用的3节点，增加无用的dom操作，建议使用computed来解决这个问题：

```js
<div v-for="item in list">
    {{item}}
</div>

computed()
{
    list()
    {
        return [1, 2, 3, 4, 5, 6, 7].filter(item => item !== 3)
    }
}
复制代码
```

### 50.计算变量时，methods和computed哪个好？

```js
<div>
    <div>{{howMuch1()}}</div>
    <div>{{howMuch2()}}</div>
    <div>{{index}}</div>
</div>

data: ()
{
    return {
        index: 0
    }
}
methods: {
    howMuch1()
    {
        return this.num + this.price
    }
}
computed: {
    howMuch2()
    {
        return this.num + this.price
    }
}
复制代码
```

> `computed`会好一些，因为computed会有`缓存`。例如index由0变成1，那么会触发视图更新，这时候methods会重新执行一次，而computed不会，因为computed依赖的两个变量num和price都没变。


(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{689:function(e,a,v){"use strict";v.r(a);var _=v(5),p=Object(_.a)({},(function(){var e=this,a=e.$createElement,v=e._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("blockquote",[v("p",[e._v("Webpack在前端面试中，只要你有过开发经验，百分之百会被问道，需要做好充分准备，而如果准备充分，这是你的一个亮点。")])]),e._v(" "),v("h2",{attrs:{id:"_1-有哪些常见的loader-你用过哪些loader"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-有哪些常见的loader-你用过哪些loader"}},[e._v("#")]),e._v(" 1.有哪些常见的Loader？你用过哪些Loader？⭐️")]),e._v(" "),v("p",[e._v("raw-loader：加载文件原始内容（utf-8）")]),e._v(" "),v("p",[e._v("file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)")]),e._v(" "),v("p",[e._v("url-loader：与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值时返回其 publicPath，小于阈值时返回文件 base64 形式编码 (处理图片和字体)")]),e._v(" "),v("p",[v("strong",[e._v("source-map-loader：加载额外的 Source Map 文件，以方便断点调试")])]),e._v(" "),v("p",[e._v("svg-inline-loader：将压缩后的 SVG 内容注入代码中")]),e._v(" "),v("p",[v("strong",[e._v("image-loader：加载并且压缩图片文件")])]),e._v(" "),v("p",[e._v("json-loader 加载 JSON 文件（默认包含）")]),e._v(" "),v("p",[e._v("handlebars-loader: 将 Handlebars 模版编译成函数并返回")]),e._v(" "),v("p",[v("strong",[e._v("babel-loader：把 ES6 转换成 ES5")])]),e._v(" "),v("p",[v("strong",[e._v("ts-loader: 将 TypeScript 转换成 JavaScript")])]),e._v(" "),v("p",[e._v("awesome-typescript-loader：将 TypeScript 转换成 JavaScript，性能优于 ts-loader")]),e._v(" "),v("p",[v("strong",[e._v("sass-loader：将SCSS/SASS代码转换成CSS")])]),e._v(" "),v("p",[v("strong",[e._v("css-loader：加载 CSS，支持模块化、压缩、文件导入等特性")])]),e._v(" "),v("p",[v("strong",[e._v("style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS")])]),e._v(" "),v("p",[e._v("postcss-loader：扩展 CSS 语法，使用下一代 CSS，可以配合 autoprefixer 插件自动补齐 CSS3 前缀")]),e._v(" "),v("p",[v("strong",[e._v("eslint-loader：通过 ESLint 检查 JavaScript 代码")])]),e._v(" "),v("p",[v("strong",[e._v("tslint-loader：通过 TSLint检查 TypeScript 代码")])]),e._v(" "),v("p",[e._v("mocha-loader：加载 Mocha 测试用例的代码")]),e._v(" "),v("p",[e._v("coverjs-loader：计算测试的覆盖率")]),e._v(" "),v("p",[v("strong",[e._v("vue-loader：加载 Vue.js 单文件组件")])]),e._v(" "),v("p",[v("strong",[e._v("i18n-loader: 国际化")])]),e._v(" "),v("p",[e._v("cache-loader: 可以在一些性能开销较大的 Loader 之前添加，目的是将结果缓存到磁盘里")]),e._v(" "),v("p",[e._v("更多 Loader 请参考官网")]),e._v(" "),v("h2",{attrs:{id:"_2-有哪些常见的plugin-你用过哪些plugin"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-有哪些常见的plugin-你用过哪些plugin"}},[e._v("#")]),e._v(" 2.有哪些常见的Plugin？你用过哪些Plugin？⭐️")]),e._v(" "),v("p",[e._v("define-plugin：定义环境变量 (Webpack4 之后指定 mode 会自动配置)")]),e._v(" "),v("p",[v("strong",[e._v("ignore-plugin：忽略部分文件")])]),e._v(" "),v("p",[v("strong",[e._v("html-webpack-plugin：简化 HTML 文件创建 (依赖于 html-loader)")])]),e._v(" "),v("p",[e._v("web-webpack-plugin：可方便地为单页应用输出 HTML，比 html-webpack-plugin 好用")]),e._v(" "),v("p",[e._v("uglifyjs-webpack-plugin：不支持 ES6 压缩 (Webpack4 以前)")]),e._v(" "),v("p",[e._v("terser-webpack-plugin: 支持压缩 ES6 (Webpack4)")]),e._v(" "),v("p",[e._v("webpack-parallel-uglify-plugin: 多进程执行代码压缩，提升构建速度")]),e._v(" "),v("p",[v("strong",[e._v("mini-css-extract-plugin: 分离样式文件，CSS 提取为独立文件，支持按需加载 (替代extract-text-webpack-plugin)")])]),e._v(" "),v("p",[e._v("serviceworker-webpack-plugin：为网页应用增加离线缓存功能")]),e._v(" "),v("p",[e._v("clean-webpack-plugin: 目录清理")]),e._v(" "),v("p",[e._v("ModuleConcatenationPlugin: 开启 Scope Hoisting")]),e._v(" "),v("p",[e._v("speed-measure-webpack-plugin: 可以看到每个 Loader 和 Plugin 执行耗时 (整个打包耗时、每个 Plugin 和 Loader 耗时)")]),e._v(" "),v("p",[v("strong",[e._v("webpack-bundle-analyzer: 可视化 Webpack 输出文件的体积 (业务组件、依赖第三方模块)")])]),e._v(" "),v("p",[e._v("更多 Plugin 请参考官网")]),e._v(" "),v("h2",{attrs:{id:"_3-那你再说一说loader和plugin的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-那你再说一说loader和plugin的区别"}},[e._v("#")]),e._v(" 3.那你再说一说Loader和Plugin的区别？⭐️")]),e._v(" "),v("p",[e._v("**Loader 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。**因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，"),v("strong",[e._v("对其他类型的资源进行转译的预处理工作")]),e._v("。")]),e._v(" "),v("p",[v("strong",[e._v("Plugin 就是插件")]),e._v("，基于事件流框架 Tapable，"),v("strong",[e._v("插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。")])]),e._v(" "),v("p",[e._v("Loader 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。")]),e._v(" "),v("p",[e._v("Plugin 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。")]),e._v(" "),v("h2",{attrs:{id:"_4-webpack构建流程简单说一下"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-webpack构建流程简单说一下"}},[e._v("#")]),e._v(" 4.Webpack构建流程简单说一下⭐️")]),e._v(" "),v("p",[e._v("Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：")]),e._v(" "),v("ol",[v("li",[v("p",[v("strong",[e._v("初始化参数")]),e._v("：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("开始编译")]),e._v("：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("确定入口")]),e._v("：根据配置中的 entry 找出所有的入口文件")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("编译模块")]),e._v("：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("完成模块编译")]),e._v("：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("输出资源")]),e._v("："),v("strong",[e._v("根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk")]),e._v("，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("输出完成")]),e._v("：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统")])])]),e._v(" "),v("p",[v("strong",[e._v("简单说:")])]),e._v(" "),v("p",[e._v("**初始化：**启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler")]),e._v(" "),v("p",[v("strong",[e._v("编译："),v("strong",[e._v("从 "),v("strong",[e._v("Entry")]),e._v(" 出发，针对")]),e._v("每个 Module 串行调用对应的 Loader")]),e._v(" 去"),v("strong",[e._v("翻译")]),e._v("文件的内容**，再找到该 Module 依赖的 Module，递归地进行编译处理**")]),e._v(" "),v("p",[e._v("**输出：**将编译后的 "),v("strong",[e._v("Module 组合成 Chunk，将 Chunk 转换成文件")]),e._v("，输出到文件系统中")]),e._v(" "),v("h2",{attrs:{id:"_5-使用webpack开发时-你用过哪些可以提高效率的插件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-使用webpack开发时-你用过哪些可以提高效率的插件"}},[e._v("#")]),e._v(" 5. 使用webpack开发时，你用过哪些可以提高效率的插件？")]),e._v(" "),v("p",[e._v("webpack-dashboard：可以更友好的展示相关打包信息。")]),e._v(" "),v("p",[e._v("webpack-merge：提取公共配置，减少重复配置代码")]),e._v(" "),v("p",[e._v("speed-measure-webpack-plugin：简称 SMP，分析出 Webpack 打包过程中 Loader 和 Plugin 的耗时，有助于找到构建过程中的性能瓶颈。")]),e._v(" "),v("p",[e._v("size-plugin：监控资源体积变化，尽早发现问题")]),e._v(" "),v("p",[e._v("HotModuleReplacementPlugin：模块热替换")]),e._v(" "),v("h2",{attrs:{id:"_6-source-map是什么-生产环境怎么用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-source-map是什么-生产环境怎么用"}},[e._v("#")]),e._v(" 6. source map是什么？生产环境怎么用？⭐️")]),e._v(" "),v("p",[e._v("source map 是将编译、打包、压缩后的代码映射回源代码的过程。打包压缩后的代码不具备良好的可读性，想要调试源码就需要 soucre map。")]),e._v(" "),v("p",[e._v("map文件只要不打开开发者工具，浏览器是不会加载的。")]),e._v(" "),v("p",[e._v("线上环境一般有三种处理方案：")]),e._v(" "),v("p",[e._v("hidden-source-map：借助第三方错误监控平台 Sentry 使用")]),e._v(" "),v("p",[e._v("nosources-source-map：只会显示具体行数以及查看源代码的错误栈。安全性比 sourcemap 高")]),e._v(" "),v("p",[e._v("sourcemap：通过 nginx 设置将 .map 文件只对白名单开放(公司内网)")]),e._v(" "),v("p",[e._v("注意：避免在生产中使用 inline- 和 eval-，因为它们会增加 bundle 体积大小，并降低整体性能。")]),e._v(" "),v("h2",{attrs:{id:"_7-模块打包原理知道吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-模块打包原理知道吗"}},[e._v("#")]),e._v(" 7. 模块打包原理知道吗？")]),e._v(" "),v("p",[e._v("Webpack 实际上为每个模块创造了一个可以导出和导入的环境，本质上并没有修改 代码的执行逻辑，代码执行顺序与模块加载顺序也完全一致。")]),e._v(" "),v("h2",{attrs:{id:"_8-文件监听原理呢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-文件监听原理呢"}},[e._v("#")]),e._v(" 8. 文件监听原理呢？⭐️")]),e._v(" "),v("p",[e._v("在发现源码发生变化时，自动重新构建出新的输出文件。")]),e._v(" "),v("p",[e._v("Webpack开启监听模式，有两种方式：")]),e._v(" "),v("p",[e._v("启动 webpack 命令时，带上 --watch 参数")]),e._v(" "),v("p",[e._v("在配置 webpack.config.js 中设置 watch:true")]),e._v(" "),v("p",[e._v("缺点：每次需要手动刷新浏览器")]),e._v(" "),v("p",[v("strong",[e._v("原理：轮询判断文件的最后编辑时间是否变化，如果某个文件发生了变化，并不会立刻告诉监听者，而是先缓存起来，等 aggregateTimeout 后再执行。")])]),e._v(" "),v("h2",{attrs:{id:"_9-说一下-webpack-的热更新原理吧"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-说一下-webpack-的热更新原理吧"}},[e._v("#")]),e._v(" 9. 说一下 Webpack 的热更新原理吧⭐️")]),e._v(" "),v("p",[e._v("Webpack 的热更新又称热替换（Hot Module Replacement），缩写为 HMR。这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。")]),e._v(" "),v("p",[e._v("HMR的核心就是客户端从服务端拉去更新后的文件，准确的说是 chunk diff (chunk 需要更新的部分)，实际上 WDS 与浏览器之间维护了一个 Websocket，当本地资源发生变化时，WDS 会向浏览器推送更新，并带上构建时的 hash，让客户端与上一次资源进行对比。客户端对比出差异后会向 WDS 发起 Ajax 请求来获取更改内容(文件列表、hash)，这样客户端就可以再借助这些信息继续向 WDS 发起 jsonp 请求获取该chunk的增量更新。")]),e._v(" "),v("p",[e._v("后续的部分(拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？)由 HotModulePlugin 来完成，提供了相关 API 以供开发者针对自身场景进行处理，像react-hot-loader 和 vue-loader 都是借助这些 API 实现 HMR。")]),e._v(" "),v("h2",{attrs:{id:"_10-如何对bundle体积进行监控和分析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-如何对bundle体积进行监控和分析"}},[e._v("#")]),e._v(" 10.如何对bundle体积进行监控和分析？")]),e._v(" "),v("p",[e._v("VSCode 中有一个插件 Import Cost 可以帮助我们对引入模块的大小进行实时监测，还可以使用 webpack-bundle-analyzer 生成 bundle 的模块组成图，显示所占体积。")]),e._v(" "),v("p",[e._v("bundlesize 工具包可以进行自动化资源体积监控。")]),e._v(" "),v("h2",{attrs:{id:"_11-在实际工程中-配置文件上百行乃是常事-如何保证各个loader按照预想方式工作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-在实际工程中-配置文件上百行乃是常事-如何保证各个loader按照预想方式工作"}},[e._v("#")]),e._v(" 11.在实际工程中，配置文件上百行乃是常事，如何保证各个loader按照预想方式工作？")]),e._v(" "),v("p",[e._v("可以使用 enforce 强制执行 loader 的作用顺序，pre 代表在所有正常 loader 之前执行，post 是所有 loader 之后执行。(inline 官方不推荐使用)")]),e._v(" "),v("h2",{attrs:{id:"_12-如何优化-webpack-的构建速度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_12-如何优化-webpack-的构建速度"}},[e._v("#")]),e._v(" 12.如何优化 Webpack 的构建速度？⭐️")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("使用高版本的 Webpack 和 Node.js")])]),e._v(" "),v("li",[v("p",[e._v("多进程/多实例构建：HappyPack(不维护了)、thread-loader")])]),e._v(" "),v("li",[v("p",[e._v("压缩代码")])])]),e._v(" "),v("p",[e._v("webpack-paralle-uglify-plugin")]),e._v(" "),v("p",[e._v("uglifyjs-webpack-plugin 开启 parallel 参数 (不支持ES6)")]),e._v(" "),v("p",[e._v("terser-webpack-plugin 开启 parallel 参数")]),e._v(" "),v("p",[e._v("多进程并行压缩")]),e._v(" "),v("p",[e._v("通过 mini-css-extract-plugin 提取 Chunk 中的 CSS 代码到单独文 件，通过 css-loader 的 minimize 选项开启 cssnano 压缩 CSS。")]),e._v(" "),v("ol",{attrs:{start:"4"}},[v("li",[e._v("图片压缩")])]),e._v(" "),v("p",[e._v("使用基于 Node 库的 imagemin (很多定制选项、可以处理多种图片格式)")]),e._v(" "),v("p",[e._v("配置 image-webpack-loader")]),e._v(" "),v("ol",{attrs:{start:"5"}},[v("li",[e._v("缩小打包作用域：")])]),e._v(" "),v("p",[e._v("exclude/include (确定 loader 规则范围)")]),e._v(" "),v("p",[e._v("resolve.modules 指明第三方模块的绝对路径 (减少不必要的查找)")]),e._v(" "),v("p",[e._v("resolve.mainFields 只采用 main 字段作为入口文件描述字段 (减少搜索步骤，需要考虑到所有运行时依赖的第三方模块的入口文件描述字段)")]),e._v(" "),v("p",[e._v("resolve.extensions 尽可能减少后缀尝试的可能性")]),e._v(" "),v("p",[e._v("noParse 对完全不需要解析的库进行忽略 (不去解析但仍会打包到 bundle 中，注意被忽略掉的文件里不应该包含 import、require、define 等模块化语句)")]),e._v(" "),v("p",[e._v("IgnorePlugin (完全排除模块)")]),e._v(" "),v("p",[e._v("合理使用alias")]),e._v(" "),v("ol",{attrs:{start:"6"}},[v("li",[e._v("提取页面公共资源：")])]),e._v(" "),v("p",[e._v("使用 html-webpack-externals-plugin，将基础包通过 CDN 引入，不打入 bundle 中")]),e._v(" "),v("p",[e._v("使用 SplitChunksPlugin 进行(公共脚本、基础包、页面公共文件)分离(Webpack4内置) ，替代了 CommonsChunkPlugin 插件")]),e._v(" "),v("p",[e._v("基础包分离：")]),e._v(" "),v("ol",{attrs:{start:"7"}},[v("li",[e._v("DLL：")])]),e._v(" "),v("p",[e._v("使用 DllPlugin 进行分包，使用 DllReferencePlugin(索引链接) 对 manifest.json 引用，让一些基本不会改动的代码先打包成静态资源，避免反复编译浪费时间。")]),e._v(" "),v("p",[e._v("HashedModuleIdsPlugin 可以解决模块数字id问题")]),e._v(" "),v("ol",{attrs:{start:"8"}},[v("li",[e._v("充分利用缓存提升二次构建速度：")])]),e._v(" "),v("p",[e._v("babel-loader 开启缓存")]),e._v(" "),v("p",[e._v("terser-webpack-plugin 开启缓存")]),e._v(" "),v("p",[e._v("使用 cache-loader 或者 hard-source-webpack-plugin")]),e._v(" "),v("ol",{attrs:{start:"9"}},[v("li",[e._v("Tree shaking")])]),e._v(" "),v("p",[e._v("purgecss-webpack-plugin 和 mini-css-extract-plugin配合使用(建议)")]),e._v(" "),v("p",[e._v("打包过程中检测工程中没有引用过的模块并进行标记，在资源压缩时将它们从最终的bundle中去掉(只能对ES6 Modlue生效) 开发中尽可能使用ES6 Module的模块，提高tree shaking效率")]),e._v(" "),v("p",[e._v("禁用 babel-loader 的模块依赖解析，否则 Webpack 接收到的就都是转换过的 CommonJS 形式的模块，无法进行 tree-shaking")]),e._v(" "),v("p",[e._v("使用 PurifyCSS(不在维护) 或者 uncss 去除无用 CSS 代码")]),e._v(" "),v("ol",{attrs:{start:"10"}},[v("li",[e._v("Scope hoisting")])]),e._v(" "),v("p",[e._v("构建后的代码会存在大量闭包，造成体积增大，运行代码时创建的函数作用域变多，内存开销变大。Scope hoisting 将所有模块的代码按照引用顺序放在一个函数作用域里，然后适当的重命名一些变量以防止变量名冲突")]),e._v(" "),v("p",[e._v("必须是ES6的语法，因为有很多第三方库仍采用 CommonJS 语法，为了充分发挥 Scope hoisting 的作用，需要配置 mainFields 对第三方模块优先采用 jsnext:main 中指向的ES6模块化语法")]),e._v(" "),v("ol",{attrs:{start:"11"}},[v("li",[e._v("动态Polyfill")])]),e._v(" "),v("p",[e._v("建议采用 polyfill-service 只给用户返回需要的polyfill，社区维护。(部分国内奇葩浏览器UA可能无法识别，但可以降级返回所需全部polyfill)")]),e._v(" "),v("h2",{attrs:{id:"_13-是否写过loader-简单描述一下编写loader的思路"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_13-是否写过loader-简单描述一下编写loader的思路"}},[e._v("#")]),e._v(" 13.是否写过Loader？简单描述一下编写loader的思路？")]),e._v(" "),v("p",[e._v("Loader 支持链式调用，所以开发上需要严格遵循“单一职责”，每个 Loader 只负责自己需要负责的事情。")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("Loader 运行在 Node.js 中，我们可以调用任意 Node.js 自带的 API 或者安装第三方模块进行调用")])]),e._v(" "),v("li",[v("p",[e._v("Webpack 传给 Loader 的原内容都是 UTF-8 格式编码的字符串，当某些场景下 Loader 处理二进制文件时，需要通过 exports.raw = true 告诉 Webpack 该 Loader 是否需要二进制数据")])]),e._v(" "),v("li",[v("p",[e._v("尽可能的异步化 Loader，如果计算量很小，同步也可以")])]),e._v(" "),v("li",[v("p",[e._v("Loader 是无状态的，我们不应该在 Loader 中保留状态")])]),e._v(" "),v("li",[v("p",[e._v("使用 loader-utils 和 schema-utils 为我们提供的实用工具")])]),e._v(" "),v("li",[v("p",[e._v("加载本地 Loader 方法:Npm link和ResolveLoader。")])])]),e._v(" "),v("h2",{attrs:{id:"_14-是否写过plugin-简单描述一下编写plugin的思路"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_14-是否写过plugin-简单描述一下编写plugin的思路"}},[e._v("#")]),e._v(" 14.     是否写过Plugin？简单描述一下编写Plugin的思路？")]),e._v(" "),v("p",[e._v("webpack在运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在特定的阶段钩入想要添加的自定义功能。Webpack 的 Tapable 事件流机制保证了插件的有序性，使得整个系统扩展性良好。")]),e._v(" "),v("p",[e._v("Plugin的API 可以去官网查阅")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("compiler 暴露了和 Webpack 整个生命周期相关的钩子")])]),e._v(" "),v("li",[v("p",[e._v("compilation 暴露了与模块和依赖有关的粒度更小的事件钩子")])]),e._v(" "),v("li",[v("p",[e._v("插件需要在其原型上绑定apply方法，才能访问 compiler 实例")])]),e._v(" "),v("li",[v("p",[e._v("传给每个插件的 compiler 和 compilation对象都是同一个引用，若在一个插件中修改了它们身上的属性，会影响后面的插件")])]),e._v(" "),v("li",[v("p",[e._v("找出合适的事件点去完成想要的功能。emit 事件发生时，可以读取到最终输出的资源、代码块、模块及其依赖，并进行修改(emit 事件是修改 Webpack 输出资源的最后时机)。watch-run 当依赖的文件发生变化时会触发")])]),e._v(" "),v("li",[v("p",[e._v("异步的事件需要在插件处理完任务时调用回调函数通知 Webpack 进入下一个流程，不然会卡住")])])]),e._v(" "),v("h2",{attrs:{id:"_15-聊一聊babel原理吧"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_15-聊一聊babel原理吧"}},[e._v("#")]),e._v(" 15. 聊一聊Babel原理吧？")]),e._v(" "),v("p",[e._v("大多数JavaScript Parser遵循 estree 规范，Babel 最初基于 acorn 项目(轻量级现代 JavaScript 解析器) Babel大概分为三大部分：")]),e._v(" "),v("p",[e._v("**解析：**将代码转换成 AST词法分析：将代码(字符串)分割为token流，即语法单元成的数组")]),e._v(" "),v("p",[e._v("**语法分析：**分析token流(上面生成的数组)并生成 AST")]),e._v(" "),v("p",[e._v("**转换：**访问 AST 的节点进行变换操作生产新的 ASTTaro就是利用 babel 完成的小程序语法转换")]),e._v(" "),v("p",[e._v("**生成：**以新的 AST 为基础生成代码")]),e._v(" "),v("h2",{attrs:{id:"webpack-和-vite-有什么区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webpack-和-vite-有什么区别"}},[e._v("#")]),e._v(" Webpack 和 vite 有什么区别？")]),e._v(" "),v("p",[e._v("如果应用过于复杂，使用Webpack 的开发过程会出现以下问题")]),e._v(" "),v("ol",[v("li",[e._v("Webpack Dev Server 冷启动时间会比较长")]),e._v(" "),v("li",[e._v("Webpack HMR 热更新的反应速度比较慢")])]),e._v(" "),v("p",[e._v("vite的特点")]),e._v(" "),v("ol",[v("li",[e._v("轻量")]),e._v(" "),v("li",[e._v("按需打包")]),e._v(" "),v("li",[e._v("HMR (热渲染依赖）")])]),e._v(" "),v("p",[e._v("webpack dev server 在启动时需要先build一遍，而这个过程需要消耗很多时间")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e3fecbe47be9400ea4cf206d71a34f9c~tplv-k3u1fbpfcp-watermark.awebp",alt:"img"}})]),e._v(" "),v("p",[e._v("而Vite 不同的是 执行vite serve 时，内部直接启动了web Server, 并不会先编译所有的代码文件。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6dce39d902264a5a8aba4936b48c65ec~tplv-k3u1fbpfcp-watermark.awebp",alt:"img"}})]),e._v(" "),v("p",[e._v("但是webpack 这类工具的做法是将所有模块提前编译、打包进bundle里，换句话说，不管模块是否会被执行，都要被编译和打包到bundle里。随着项目越来越大，打包后的bundle也越来越大，打包的速度自然会越来越慢。")])])}),[],!1,null,null,null);a.default=p.exports}}]);
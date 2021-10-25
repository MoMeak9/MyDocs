https://github.com/haizlin/fe-interview/blob/master/category/html.md

1. 第1天 页面导入样式时，使用link和@import有什么区别？

   1.link是HTML标签，@import是css提供的。
   2.link引入的样式页面加载时同时加载，@import引入的样式需等页面加载完成后再加载。
   3.link没有兼容性问题，@import不兼容ie5以下。
   4.link可以通过js操作DOM动态引入样式表改变样式，而@import不可以。

2. HTML全局属性(global attribute)有哪些（包含H5）？

   全局属性：用于任何HTML5元素的属性

   - accesskey:设置快捷键
   - class:为元素设置类标识
   - contenteditable:指定元素内容是否可编辑
   - contextmenu:自定义鼠标右键弹出上下文菜单内容（仅firefox支持）
   - data-*:为元素增加自定义属性
   - dir：设置元素文本方向（默认ltr；rtl）
   - draggable:设置元素是否可拖拽
   - dropzone:设置元素拖放类型（copy|move|link,H5新属性，主流均不支持）
   - hidden:规定元素仍未或不在相关
   - id:元素id，文档内唯一
   - lang:元素内容的语言
   - spellcheck:是否启动拼写和语法检查
   - style:行内css样式
   - tabindex:设置元素可以获得焦点，通过tab导航
   - title:规定元素有关的额外信息
   - translate:元素和子孙节点内容是否需要本地化（均不支持）

3. HTML5的文件离线储存怎么使用，工作原理是什么？

   **优点:**

   没有网络时可以浏览,加快资源的加载速度,减少服务器负载

   使用:

   只需要在页面头部加入,然后创建manifest.appcache文件**manifest.appcache文件配置:**

   1)CACHE MANIFEST放在第一行
   2)CACHE:表示需要离线存储的资源列表,由于包含manifest文件的页面将被自动离线存储,所以不需要列出来
   3)NETWORK:表示在线才能访问的资源列表,如果CACHE列表里也存在,则CACHE优先级更高
   4)FALLBACK:表示如果访问第一个资源是吧,那么使用第二个资源来替换它
   
   **浏览器如何解析manifest**

   1.在线情况:浏览器发现html头部有manifest属性,他会请求manifest文件,如果是第一次访问,那么浏览器会根据manifest文件的内容下载相应的资源并且进行离线存储.如果已经访问过并存储,那么浏览器使用 离线的资源价值,然后对比新的文件,如果没有发生改变就不做任何操作,如果文件改变了,那么就会重新下载文件中的资源并进行离线存储
   2.离线情况:浏览器就直接使用离线存储资源
   
   与传统浏览器的区别

   1)离线缓存是针对整个应用,浏览器缓存是单个文件
   2)离线缓存可以主动通知浏览器更新资源
   
   状态 window.applicationCache对象的status属性

   0:无缓存
   1:闲置
   2.检查中,正在下载描述文件并检查更新
   3:下载中
   4:更新完成
   5:废弃,应用缓存的描述文件已经不存在了,因此页面无法再访问应用缓存
   
   **事件 window.applicationCache对象的相关事件**

   1)oncached:当离线资源存储完成之后就触发这个事件
   2)onchecking:当浏览器对离线存储资源进行更新检查的时候触发
   3)ondounloading:当浏览器开始下载离线资源的时候会触发
   4)onprogress:当浏览器在下载每一个资源的时候会触发
   5)onupdateready:当浏览器对离线资源更新完成之后触发
   6)onnoupdate:当浏览器检查更新之后发现没有这个资源时触发
   
   **注意事项**

   站点离线存储的容量限制是5M
   如果manifest文件,或者内部列举的某一个文件不能正常下载,整个更新过程将视为失败,浏览器继续全部使用老的缓存
   引用manifest的html必须与manifest文件同源,在同一个域下
   在manifest中使用的相对路径,相对参照物为manifest文件
   CACHE MANIFEST字符串硬在第一行,且必不可少
   系统会自动缓存引用清单文件的HTML文件
   manifest文件中CACHE则与NETWORK，FALLBACK的位置顺序没有关系，如果是隐式声明需要在最前面
   FALLBACK中的资源必须和manifest文件同源
   当一个资源被缓存后，该浏览器直接请求这个绝对路径也会访问缓存中的资源。
   站点中的其他页面即使没有设置manifest属性，请求的资源如果在缓存中也从缓存中访问
   当manifest文件发生改变时，资源请求本身也会触发更新
   
4. 简述超链接target属性的取值和作用?

   \<a> 标签的 target 属性规定在何处打开链接文档。

   语法：\<a target="value">
   属性值：

   | 值        | 描述                                 |
   | --------- | ------------------------------------ |
   | _blank    | 在新窗口中打开被链接文档。           |
   | _self     | 默认。在相同的框架中打开被链接文档。 |
   | _parent   | 在父框架集中打开被链接文档。         |
   | _top      | 在整个窗口中打开被链接文档。         |
   | framename | 在指定的框架中打开被链接文档。       |

5. label都有哪些作用？并举相应的例子说明

   lable可以关联控件，可以和表单元素结合，使表单元素获得焦点。有两个属性，for和accesskey。
   for 属性用来关联表单，accesskey属性设置快捷键。
   for属性：
   `<label for="username">姓名</label><input id="username" type="text">`

   ```
   <input type="checkbox" id="a" value="haha" name="cn">
   <label for="a" >haha </label>
   <input type="checkbox" id="b" value="hehe" name="cm">
   <label for="b" >hehe </label>
   ```

   accesskey属性:
   `<label for="username" accesskey＝"N">姓名</label><input id="username" type="text">`

6. 浏览器内多个标签页之间的通信方式有哪些？

   WebSocket （可跨域）
   postMessage（可跨域）
   Worker之SharedWorker
   Server-Sent Events
   localStorage
   BroadcastChannel
   Cookies

7. iframe框架都有哪些优缺点？

   **优点：**

   - 可以实现异步刷新，单个 iframe 刷新不影响整体窗口的刷新（可以实现无刷新上传，在 FormData 无法使用时）
   - 可以实现跨域，每个 iframe 的源都可以不相同（方便引入第三方内容）
     多页面应用时，对于共同的 header, footer 可以使用 iframe 加载，拆分代码（导航栏的应用）

   **缺点**：

   - 每一个 iframe 都对应着一个页面，也就意味着多余的 css, js 文件的载入，会增加请求的开销
   - 如果 iframe 内还有滚动条，会严重影响用户体验
   - window.onload 事件会在所有 iframe 加载完成后才触发，因此会造成页面阻塞

8. 常见的浏览器内核都有哪些？并介绍下你对内核的理解?

   内核主要分为**渲染引擎和 JS 引擎**。前者负责页面的渲染，后者负责执行解析 JavaScript。
   之后，**由于 JS 引擎越来越独立，现在所说的浏览器内核大都指渲染引擎**。

   目前主流的内核有以下 4 个：

   - Trident: 由微软开发，即我们熟知的 IE 内核
   - Gecko: 使用 C++ 开发的渲染引擎，包括了 SpiderMonkey 即我们熟悉的 FireFox
   - Presto: Opera 使用的内核
   - **Webkit: 前端使用最多的 Chrome 和 Safari 使用的内核**

9. 你对**标签语义化**的理解是什么？

   见名知意，方便多人认识，且命名统一，简洁，易于重构代码

10. viewport常见设置都有哪些？（移动端开发）

    在移动端做开发时，必须要搞清楚 `viewport` 这一设置。

    `viewport` 就是视区窗口，也就是浏览器中显示网页的部分。PC 端上基本等于设备显示区域，但在移动端上 `viewport` 会超出设备的显示区域（即会有横向滚动条出现）。
    设备默认的 `viewport` 在 980 - 1024 之间。

    为了让移动端可以很好地显示页面，因此需要对 `viewport` 进行设置。相关的设置值如下：

    | 设置          | 解释                                                         |
    | ------------- | ------------------------------------------------------------ |
    | width         | 设置 layout viewport 的宽度，为一个正整数，或字符串"width-device" |
    | initial-scale | 设置页面的初始缩放值，为一个数字，可以带小数                 |
    | minimum-scale | 允许用户的最小缩放值，为一个数字，可以带小数                 |
    | maximum-scale | 允许用户的最大缩放值，为一个数字，可以带小数                 |
    | height        | 设置 layout viewport 的高度，这个属性对我们并不重要，很少使用 |
    | user-scalable | 是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes 代表允许 |

    **`viewport` 是在 `meta` 标签内进行控制。**

    ```html
    // width=device-width, initial-scale=1.0 是为了兼容不同浏览器
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    />
    ```

    相关的衍生知识： dpr 与 CSS 像素。CSS 像素的 `1px` 在 PC 端上与设备的物理像素基本一致，而到手机端就会有两个物理像素对应一个 CSS 像素的情况出现（如 iPhone 的视网膜屏）。
    所以 iPhone 上的 dpr = 2 即 2 个物理像素 / 一个 CSS 像素（独立像素）

    参考文章：[移动前端开发之 viewport 的深入理解](https://www.cnblogs.com/2050/p/3877280.html)

11. title与h1的区别、b与strong的区别、i与em的区别？

    **title与h1的区别**

    - 定义：
      title是网站标题，一个页面只能有一个
      h1是文章主题
    - 作用：
      title概括网站信息，可以直接告诉搜索引擎和用户这 个网站是关于什么主题和内容的，是显示在网页Tab栏里的；
      h1突出文章主题，面对用户，更突出其视觉效果，指向 页面主体信息，是显示在网页中的。
    - 注意：
      如果title为空，但是页面存在h1,b,strong标签，搜索引擎会默认页面title为h1内的内容，所以 得出结论h1是在没有外界干扰下除title以外第二个能强调页面主旨的标记，在一个页面中应该使用且只使用一次h1标记。

    **b与strong的区别**

    - 定义：
      b(bold)是实体标签，用来给文字加粗
      strong是逻辑标签，作用是加强字符语气
    - 区别：
      b标签只是加粗的样式，没有实际含义，常用来表达无强调或着中意味的粗体文字
      strong表示标签内字符重要，用以强调，其默认格式是加粗，但是可以通过css添加样式，使用别的样式强调
    - 建议：为了符合css3的规范语义化，b应尽量少用而改用strong

    **i与em的区别**

    - 定义：
      i(italic)是实体标签，用来使字符倾斜
      em(emphasis)是逻辑标签，作用是强调文本内容
    - 区别：
      i标签只是斜体的样式，没有实际含义，常用来表达无强调或着重意味的斜体，比如生物学名、术语、外来语；
      em表示标签内字符重要，用以强调，其默认格式是斜体，但是可以通过CSS添加样式。
    - 建议：为了符合CSS3的规 范，i应尽量少用而改用em
    - tootip:
      物理元素是告诉浏览器我应该以何种格式显示文字，逻辑元素告诉浏览器这些文字有怎么样的重要性。
      对于搜索引擎来说em和strong比i和b要重视的多。

12. 为什么HTML5只需要写`<!DOCTYPE HTML>`就可以？

    因为 HTML5 与 HTML4 基于的基准不同。HTML4 基于 SGML 因此需要除了 `DOCTYPE` 外还需要引入 DTD 来告诉浏览器用什么标准进行渲染。DTD 还分为标准模式、严格模式。如果什么都不写，就完全让浏览器自我发挥，会变成怪异模式。

    HTML5 不基于 SGML，因此后面就不要跟 DTD，但是需要 `DOCTYPE` 来规范浏览器的渲染行为。

    注：SGML 是通用标记语言的集合。其中有 HTML、XML，因此需要用 DTD 来指定使用那种规范。

13. html5中的form怎么关闭自动完成？

    h5新增的补全功能，菜鸟教程上写的比较含糊比较难懂；
    解释： 在部分浏览器上，foucs输入框可以把之前输入过的值自动填入，如果不想自动填入，可以关掉它；
    autocomplete="off"
    默认是"on" 开启状态

    一般业务下不会调整这个自动完成，因为对产品来说简化用户操作，建议打开

14. 说说你对`<meta>`标签的理解?

    ![image-20210730102615023](D:\OneDrive\OneDrive - Maynooth University\前端部分\前端面试\images\image-20210730102615023-16276119766131.png)

15. 怎样在页面上实现一个圆形的可点击区域？

    这个问题也可以理解为做一个圆。方案为两种，真的圆和模拟圆

    1. map+area , [demo](http://www.w3school.com.cn/tiy/t.asp?f=html_areamap)

    2. 圆角属性（楼上的2.3.4）{

       1、用canvas画布，弧线画圆，在canvas上监听点击事件
       2、用一个div,给div添加圆角属性50，在div上添加点击事件
       3、button 上添加圆角属性
       4、a标签添加圆角属性}

    3. 判断圆心点和单击点的距离是不是在半径中。（楼上1方案）

    4. svg圆

    ```html
    <svg width="100%" height="100%" version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    
    <circle cx="100" cy="50" r="40" stroke="black"
    stroke-width="2" fill="red" onclick="alert(3)"/>
    
    </svg>
    ```

16. 你认为table的作用和优缺点是什么呢？

    `table` 用于表格数据的展示，并且很符合人们的直观认知。

    在 `div`+`css` 布局流行之前，普遍使用 `table` 进行布局。曾经的神器 Dreamweaver 的可视化拖拽也是基于 `table` 布局。

    `table` 布局的好处在于样式好控制，特别是居中、对齐。缺点在于会多处非常多的 DOM 节点（想想一个 `td` 里面再来一个 `table`），会导致页面加载变慢、不利于 SEO（`table` 原本就不是用来布局的）。也因此，在 CSS 成熟之后，`table` 布局马上就变成历史了。

17. 你喜欢哪种布局风格？说说你的理由?

    弹性布局 display：flex;  可以适配不同的显示屏宽度
    栅格 display:grid;

18. **微信小程序与H5的区别?**

    https://segmentfault.com/a/1190000007388966

    第一条是运行环境的不同。

    第二条是开发成本的不同。

    第三条是获取系统级权限的不同。

    第四条便是应用在生产环境的运行流畅度。

19. 元素的alt和title有什么区别？

    `alt`是图片无法显示的时候的说明文字，视觉障碍者可以从 `alt `中得到图片相关的信息
    `title`是鼠标悬停时出现的文字

20. 说说你对html中的置换元素和非置换元素的理解?

    **置换元素（Replaced Element）**

    简单来说，置换元素可以设置宽 高,他们有自己的属性，和inline-block有一样的属性

    主要是指 img、input、textarea、select、object 等这类默认就有 CSS 格式化外表范围的元素。

    浏览器根据元素的标签和属性，来决定元素的具体显示内容

    例如：浏览器根据标签的src属性显示图片。根据type属性决定显示输入框还是按钮

    **非置换元素（non-Replaced Element）**:

    就是除了 img、input、textarea、select、object 等置换元素以外的元素。

    内容直接展示给浏览器。例如标签，标签里的内容会被浏览器直接显示给用户

21. `<form>`标签的enctype属性你有哪些了解？

    form 标签的 enctype 属性指定将数据回发到服务器时浏览器如果**对表单数据进行编码**，其有三种编码形式：

    1. application/x-www-form-urlencoded(也是默认格式)
       application/x-www-form-urlencoded编码类型会将表单中发送到服务器之前都会进行编码(空格转换为 "+" 加号，特殊符号转换为 ASCII HEX 值)，数据编码成键值对的形式，当表单的action为post时，它会把form数据封装到 http body 中，然后发送到服务器；当表单的action为get时，它会把表单中发送的数据转换成一个字符串(如：a=1&b=2&c=3)并使用?连接到 url 后面。在不指定 enctype 属性时 application/x-www-form-urlencoded 是默认属性。
    2. multipart/form-data
       它不对字符进行编码，在使用包含文件(如图片、mp4等文件)上传控件的表单时必须使用该值
    3. text/plain
       数据以纯文本格式进行编码，空格转换为 "+" 加号，但不对特殊字符编码

22. 说说你对属性data-的理解？

    原本 HTML 也允许自定义 `attributes` 因此在早期前端，为了将数据塞在标签中，往往会采用自定义属性存放数据的方法。

    而 `data-` 便是 HTML 5 中用来存放数据的标签。使用 `data-*` 时，需要注意，`data-` 之后的单词必须是小写的，但是可以用多个 `-` 连接。而在对应的 DOM 方法中，我们可以通过 `ele.dataset[属性名]` 进行访问。在这里的属性名可以使用驼峰（转换规则和 vue 的组件名称转换一样）。

    相比之前的自定义属性存放数据，使用 `data-*` 的方法，在数据的获取上会比较方便。

    参考文章：
    [使用数据属性](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Using_data_attributes)

23. 


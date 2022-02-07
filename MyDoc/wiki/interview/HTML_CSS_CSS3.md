---
title: H5+CSS 高频题目
date: 2021-12-9
author: MoMeaks
sidebar: 'auto'
categories:
- fontEnd
- wiki
- intern
tags:
- HTML
- CSS
---

1. \<img> 的 title 和 alt 有什么区别

   - 通常当鼠标滑动到元素上的时候显示title
   - alt 是\<img> 的特有属性，是图片内容的等价描述，用于图片无法加载显示、读屏器阅读图片。可提图片高可访问性，除了纯装饰图片外都必须设置有意义的值，搜索引擎会重点分析。

2. iframe 标签有那些缺点?

   - iframe 会阻塞主页面的 Onload 事件
   - 搜索引擎的检索程序无法解读这种页面，不利于 SEO
   - iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载
   - 使用 iframe 之前需要考虑这两个缺点。如果需要使用 iframe ，最好是通过 javascript 动态给 iframe 添加 src 属性值，这样可以绕开以上两个问题

3. Xhtml 与 Html 有什么区别?

   - **一个是功能上的差别：**主要是 XHTML 可兼容各大浏览器、手机以及 PDA ，并且浏览器也能快速正确地编译网页
   - **另外是书写习惯的差别：**XHTML 元素必须被正确地嵌套，闭合，区分大小写，文档必须拥有根素

4. HTML5 的离线储存怎么使用，工作原理能不能解释一下?

   - 在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特连接时，更新用户机
     器上的缓存文件

   - 原理：HTML5 的离线存储是基于一个新建的.appcache 文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像 cookie 一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示

5. 语义化的理解

   - 用正确的标签做正确的事情！（标签语义化）
   - HTML 语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析；
   - 在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的。
   - 搜索引擎的爬虫依赖于标记来确定上下文和各个关键字的权重，利 SEO 。
   - 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解

6. 行内元素有哪些？块级元素有哪些？

   行内元素有： a b span img input select strong
   块级元素有： div ul ol li dl dt dd h1 h2 h3 h4… p

7. 空(void)元素有那些？行内元 素和块级元素有什么区别？

   - 空元素： `<br> <hr> <img> <input> <link> <meta>`
   - 行内元素不可以设置宽高，不独占一行
   - 块级元素可以设置宽高，独占一行

8. 请描述一下 cookies，localStorage 和 sessionStorage 的区别？

   - cookie 是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）

   - cookie 数据始终在同源的 http 请求中携带（即使不需要），记会在浏览器和服务器间来回传递

   - sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存
   - 存储大小：
     cookie 数据大小不能超过 4k
     sessionStorage 和 localStorage 虽然也有存储大小的限制，但比 cookie 大得多，可以达到 5M 或更大
   - 有期时间：
     localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据
     sessionStorage 数据在当前浏览器窗口关闭后自动删除
     cookie 设置的 cookie 过期时间之前一直有效，即使窗口或浏览器关闭

9. 简述一下 src 与 href 的区别

   - src 用于替换当前元素，href 用于在当前文档和引用资源之间确立联系。

   - src 是 source 的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求 src 资源时会将其指向的资源下载并应用到文档内，例如 js 脚本，img 图片和frame 等元素

   - href 是 Hypertext Reference 的缩写，指向网络资源所在位置，建立和当前元素（锚点）
     或当前文档（链接）之间的链接，如果我们在文档中添加

   - \<link href="common.css" rel="stylesheet"/> 那么浏览器会识别该文档为 css 文件，就会并行下载资源并且不会停止对当前文档的处理。这也是为什么建议使用 link 方式来加载 css ，而不是使用 @import 方式

10. 请列举几种隐藏元素的方法

    visibility:hidden,这个属性只是简单隐藏，但是元素暂用的空间任然存在。
    opacity:0,一个 CSS3 属性，设置 0 为透明，它可以被 transition 和 animate。
    position:absolute, 元素脱离文档流，处于普通文档之上，给它设置一个很大的 left 负值
    定位，使元素定位在可见区域之外。
    display:none, 元素不可见，不占用文档空间。
    transform:scale(0), 将一个元素设置无限小，这个元素将不可见。、
    html5 hidden attribute:hidden, 属性效果和 display:none 一样，记录一个元素的状态。

    height:0;overflow:hidden, 将元素在垂直方向上收缩为 0，使元素消失。

    filter:blur(0), 将一个元素的模糊度设置为 0

11.  HTML 全局属性有哪些?

    class :为元素设置类标识
    data-* : 为元素增加自定义属性
    draggable : 设置元素是否可拖拽
    id : 元素 id ，文档内唯一
    lang : 元素内容的的语言
    style : 行内 css 样式
    title : 元素相关的建议信息

12. 渐进增强和优雅降级之间的不同?

    - 渐进增强：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。

    - 优雅降级：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

    - 区别: 优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个
      非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。

13. 浏览器的内核分别是什么?

    IE : trident 内核
    Firefox ： gecko 内核
    Safari : webkit 内核
    Opera :以前是 presto 内核， Opera 现已改用 Google - Chrome 的 Blink 内核
    Chrome:Blink (基于 webkit ，Google 与 Opera Software 共同开发)

14. 页面导入样式时，使用 link 和 @import 有什么区别?

    - link 属于 XHTML 标签，import 是 CSS 提供的方式。
    - link 是页面加载时同时执行的，而 import 是在页面加载完之后，才会执行的
    - link 是 XHTML 标签，无兼容问题；@import 是在 CSS2.1 提出的，低版本(IE5 及以下的 浏览器不支持。

15. 介绍一下你对浏览器内核的理解？

    - 要分成两部分：渲染引擎(layout engineer 或 linkRendering Engine)和 JS 引擎。
    - 渲染引擎：用于获取 html、css 和图片,然后会输出至显示器或打印机
    - JS 引擎：解析和执行 javascript 来实现网页的动态效果

16.  SEO 优化

    - 合理的 title 、description 、keywords ：搜索对着三项的权重逐个减小，titl 值强调重点即可，重要关键词出现不要超过 2 次，而且要靠前，不同页面 title 要有所不同；description 把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页 description
      有所不同；keywords 列举出重要关键词即可。
    - 语义化的 HTML 代码，符合 W3C 规范：语义化代码让搜索引擎容易理解网页
    - 重要内容 HTML 代码放在最前：搜索引擎抓取 HTML 顺序是从上到下，有的搜索引擎对抓取长
    - 度有限制，保证重要内容一定会被抓取。
    - 重要内容不要用 js 输出：爬虫不会执行 js 取内容
    - 少用 iframe ：搜索引擎不会抓取 iframe 中的内容
    - 非装饰性图片必须加 alt
    - 提高网站速度：网站速度是搜索引擎排序的一个重要指标

17. 渲染优化

    禁止使用 iframe 阻塞父文档 onload 事件

    禁止使用 gif 图片实现 loading 效果（降低 CPU 消耗，提升渲染性能） 
     使用 CSS3 代码代替 JS 动画（尽可能避免重绘重排以及回流）
     对于一些小图标，可以使用 base64 位编码，以减少网络请求。但不建议大图使用，比较耗
    费 CPU
     页面头部的`<style></style><script></script>`会阻塞页面；（因为 Renderer 进程中 JS 线
    程和渲染线程是互斥的）
     页面中空的 href 和 src 会阻塞页面其他资源的加载 (阻塞下载进程)
     网页 gzip ，CDN 托管，data 缓存 ，图片服务器 
     前端模板 JS+数据，减少由于 HTML 标签导致的带宽浪费，前端用变量保存 AJAX 请求结
    果，每次操作本地变量，不用请求，减少请求次数
     用 innerHTML 代替 DOM 操作，减少 DOM 操作次数，优化 javascript 性能 
     当需要设置的样式很多时设置 className 而不是直接操作 style
     少用全局变量、缓存 DOM 节点查找的结果。减少 IO 读取操作
     图片预加载，将样式表放在顶部，将脚本放在底部 加上时间戳
     对普通的网站有一个统一的思路，就是尽量向前端优化、减少数据库操作、减少磁盘 IO

18. 介绍一下标准的 CSS 的盒子模型？与低版本 IE 的盒子模型有什么 不同的?

    区别内容宽度不同

    - 标准盒子模型：宽度=**内容的宽度（content）**+ border + padding + margin。
    - 低版本 IE 盒子模型：宽度=**内容宽度（content + border + padding）**+ margin。

19. CSS 优先级算法如何计算?

    声明的元素选择符：1
    class 选择符：10
    id 符：100

    行内样式规则，加1000

    !important 声明的样式优先级最高，如果冲突再进行计算。
    如果优先级相同，则选择最后出现的样式。
    继承得到的样式的优先级最低。

20. CSS 选择器有哪些？哪些属性可以继承?

    id 选择器(#myid) 
     类选择器(.myclassname)
     标签选择器(div, h1, p)
     相邻选择器(h1 + p)
     子选择器（ul > li）
     后代选择器（li a）
     通配符选择器（*）
     属性选择器（a[rel=”external”]）
     伪类选择器（a>:hover,li:nth-child）

     可继承的属性：font-size font-faminly color
     不可继承的样式：border,padding,margin,width,height

21. position 的值，relative 和 absolute 的区别

    absolut：生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位
     fixed ：生成绝对定位的元素，相对于浏览器窗口进行定位
     relative：生成相对定位的元素，相对于其正常位置进行定位
     static 默认值。没有定位，元素出现在正常的流中
     inherit 规定从父元素继承 position 属性的值

22.  谈谈浮动和清除浮动?

    浮动的框可以向左或向右移动，直到他的外边缘碰到包含框或另一个浮动框的边框为止。由于浮动框不在文档的普通流中，所以文档的普通流的块框表现得就像浮动框不存在一样。浮动的块框会漂浮在文档普通流的块框上

23.  display:none 与 visibility:hideen 的区别?

    - display：none 不显示对应的元素，在文档布局中不再分配空间（回流+重绘）。
    - visibility：hidden 隐藏对应元素，在文档布局中仍保留原来的空间（重绘）
    - display:none ;会让元素完全从渲染树中消失，渲染的时候不占据任何空间，sibility: hidden ，会让元素从渲染树消失，渲染师元素继续占据空间，只是内容不可见

24. 清除浮动的几种方式，各自的优缺点?

    父级 div 定义 height
    结尾处加空 div 标签 clear:both
    父级 div 定义伪类 :after 和 zoom
    父级 div 定义 overflow:hidden
    父级 div 也浮动，需要定义宽度
    结尾处加 br 标签 clear:both
    比较好的是第 3 种方式，好多网站都这么用

25. 列出你所知道可以改变页面布局的属性?

    position、display、float、width、height、margin、padding、top、left、right

26.  CSS 在性能优化方面的实践?

    css 压缩与合并、Gzip 压缩
    css 文件放在 head 里、不要用@import
    尽量用缩写、避免用滤镜、合理使用选择器

27. 伪类和伪元素的区别

    伪类表状态
    伪元素是真的有元素
    前者单冒号，后者双冒号

28. **水平居中的方法?**

    - 元素为行内元素，设置父元素 text-align:center
    - 如果元素宽度固定，可以设置左右 margin 为 auto ;
    - 如果元素为绝对定位，设置父元素 position 为 relative，元素left:0;right:0;margin:auto;
    - 使用 flex-box 布局，指定 justify-content 属性为 center
    - splay 设置为 tabel-ceil
    
28. **垂直水平居中方案？**

    
    
30. 什么是响应式设计，其原理是什么？

    - 响应式网站设计(Responsive Web design)是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。

    - 基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理。

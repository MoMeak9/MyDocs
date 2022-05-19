(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{664:function(v,_,t){"use strict";t.r(_);var a=t(5),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"前端9种图片格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端9种图片格式"}},[v._v("#")]),v._v(" 前端9种图片格式")]),v._v(" "),t("h3",{attrs:{id:"gif"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gif"}},[v._v("#")]),v._v(" GIF")]),v._v(" "),t("p",[v._v("GIF是一种索引色模式图片，所以GIF每帧图所表现的颜色最多为256种。GIF能够支持动画，也能支持背景透明，这点连古老的IE6都支持，所以在以前想要在项目中使用背景透明图片，其中一种方案就是生成GIF图片。")]),v._v(" "),t("p",[t("strong",[v._v("优点")]),v._v("：")]),v._v(" "),t("ul",[t("li",[v._v("支持动画和透明背景")]),v._v(" "),t("li",[v._v("兼容性好")]),v._v(" "),t("li",[v._v("灰度图像表现佳")]),v._v(" "),t("li",[v._v("支持交错\n部分接收到的文件可以以较低的质量显示。这在网络连接缓慢时特别有用。")])]),v._v(" "),t("p",[t("strong",[v._v("缺点")]),v._v("：")]),v._v(" "),t("ul",[t("li",[v._v("最多支持 8 位 256 色，色阶过渡糟糕，图片具有颗粒感")]),v._v(" "),t("li",[v._v("支持透明，但不支持半透明，边缘有杂边")])]),v._v(" "),t("p",[t("strong",[v._v("适用场景")])]),v._v(" "),t("ul",[t("li",[v._v("色彩简单的logo、icon、线框图适合采用gif格")]),v._v(" "),t("li",[v._v("动画")])]),v._v(" "),t("h3",{attrs:{id:"jpg-jpeg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jpg-jpeg"}},[v._v("#")]),v._v(" JPG/JPEG")]),v._v(" "),t("p",[v._v("这里提个问题： "),t("strong",[v._v("jpg和jpeg有啥区别")]),v._v(" 图片压缩")]),v._v(" "),t("p",[v._v("平常我们大部分见到的静态图基本都是这种图片格式。这种格式的图片能比较好的表现各种色彩，主要在压缩的时候会有所失真，也正因为如此，造就了这种图片格式体积的轻量。")]),v._v(" "),t("p",[t("strong",[v._v("优点")])]),v._v(" "),t("ul",[t("li",[v._v("压缩率高")]),v._v(" "),t("li",[v._v("兼容性好")]),v._v(" "),t("li",[v._v("色彩丰富")])]),v._v(" "),t("p",[t("strong",[v._v("缺点")])]),v._v(" "),t("ul",[t("li",[v._v("JPEG不适合用来存储企业Logo、线框类的这种高清图")]),v._v(" "),t("li",[v._v("不支持动画、背景透明。")])]),v._v(" "),t("h3",{attrs:{id:"ico"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ico"}},[v._v("#")]),v._v(" ICO")]),v._v(" "),t("p",[v._v("ICO (Microsoft Windows 图标)文件格式是微软为 Windows 系统的桌面图标设计的。网站可以在网站的根目录中提供一个名为 favicon.ICO, 在收藏夹菜单中显示的图标，以及其他一些有用的标志性网站表示形式。\n一个 ICO 文件可以包含多个图标，并以列出每个图标详细信息的目录开始。")]),v._v(" "),t("p",[v._v("其主要用来做网站图标，现在png也是可以用来做网站图标的。")]),v._v(" "),t("h3",{attrs:{id:"png"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#png"}},[v._v("#")]),v._v(" PNG")]),v._v(" "),t("p",[v._v("PNG格式是有三种版本的，分别为PNG-8，PNG-24，PNG-32，所有这些版本都不支持动画的。PNG-8跟GIF类似的属性是相似的，都是索引色模式，而且都支持背景透明。"),t("strong",[v._v("相对比GIF格式好的特点在与背景透明时，图像边缘没有什么噪点，颜色表现更优秀。PNG-24其实就是无损压缩的JPEG")]),v._v("。而PNG-32就是在PNG-24的基础上，增加了透明度的支持。")]),v._v(" "),t("p",[v._v("如果没有动画需求推荐使用png-8来替代gif")]),v._v(" "),t("p",[t("strong",[v._v("优点")])]),v._v(" "),t("ol",[t("li",[v._v("不失真的情况下尽可能压缩图像文件的大小")]),v._v(" "),t("li",[v._v("像素丰富")]),v._v(" "),t("li",[v._v("支持透明（alpha通道）")])]),v._v(" "),t("p",[t("strong",[v._v("缺点")])]),v._v(" "),t("ol",[t("li",[v._v("文件大")])]),v._v(" "),t("p",[v._v("这里额外提一下，gif和jpg有渐进，png有交错，都是在没有完全下载图片的时候，能看到图片全貌。")]),v._v(" "),t("p",[v._v("具体可以看在线示例： "),t("strong",[t("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fxiangwenhu.github.io%2FTakeItEasy%2FbgWhithe%2Fprogress.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("png正常，png交错，jpg渐进"),t("OutboundLink")],1)])]),v._v(" "),t("h3",{attrs:{id:"svg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#svg"}},[v._v("#")]),v._v(" SVG")]),v._v(" "),t("p",[v._v("SVG 是一种基于 xml 的矢量图形格式，它将图像的内容指定为一组绘图命令，这些命令创建形状、线条、应用颜色、过滤器等等。SVG 文件是理想的图表，图标和其他图像，可以准确地绘制在任何大小。因此，SVG 是现代 Web 设计中用户界面元素的流行选择。")]),v._v(" "),t("p",[t("strong",[v._v("优点")])]),v._v(" "),t("ul",[t("li",[v._v("可伸缩性\n你可以随心所欲地把它们做大或者做小，而不用牺牲质量")]),v._v(" "),t("li",[v._v("小\nSvg 平均比 GIF、 JPEG、 PNG 小得多，甚至在极高的分辨率下也是如此")]),v._v(" "),t("li",[v._v("支持动画\n更灵活，质量无与伦比")]),v._v(" "),t("li",[v._v("与DOM无缝衔接\nSvg 可以直接使用 HTML、 CSS 和 JavaScript (例如动画)来操作")])]),v._v(" "),t("p",[t("strong",[v._v("缺点")])]),v._v(" "),t("ul",[t("li",[v._v("SVG复杂度高会减慢渲染速度")]),v._v(" "),t("li",[v._v("不适合游戏类等高互动动画")])]),v._v(" "),t("h3",{attrs:{id:"base64"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base64"}},[v._v("#")]),v._v(" base64")]),v._v(" "),t("p",[v._v("图片的 base64 编码就是可以将一副图片数据编码成一串字符串，使用该字符串代替图像地址，图片随着 HTML 的下载同时下载到本地，不再单独消耗一个http来请求图片。")]),v._v(" "),t("p",[t("strong",[v._v("优点")])]),v._v(" "),t("ul",[t("li",[v._v("无额外请求")]),v._v(" "),t("li",[v._v("对于极小或者极简单图片")]),v._v(" "),t("li",[v._v("可像单独图片一样使用，比如背景图片重复使用等")]),v._v(" "),t("li",[v._v("没有跨域问题，无需考虑缓存、文件头或者cookies问题")])]),v._v(" "),t("p",[t("strong",[v._v("缺点")])]),v._v(" "),t("ul",[t("li",[v._v("相比其他格式，体积会至少大1/3")]),v._v(" "),t("li",[v._v("编码解码有额外消耗")])]),v._v(" "),t("h3",{attrs:{id:"webp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webp"}},[v._v("#")]),v._v(" webP")]),v._v(" "),t("p",[v._v("有损 WebP 图像平均比视觉上类似压缩级别的 JPEG 图像小25-35% 。无损耗的 WebP 图像通常比 PNG 格式的相同图像小26% 。WebP 还支持动画: 在有损的 WebP 文件中，图像数据由 VP8位流表示，该位流可能包含多个帧。")]),v._v(" "),t("p",[v._v("包括体积小、色彩表现足够、支持动画。 简直了就是心中的完美女神！！")]),v._v(" "),t("p",[v._v("从"),t("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%23search%3Dwebp",target:"_blank",rel:"noopener noreferrer"}},[v._v("can i use - webp"),t("OutboundLink")],1),v._v("上看，支持率95%。 主要是Safari低版本和IE低版本不兼容。")]),v._v(" "),t("p",[t("strong",[v._v("优点")])]),v._v(" "),t("ul",[t("li",[v._v("同等质量更小")]),v._v(" "),t("li",[v._v("压缩之后质量无明显变化")]),v._v(" "),t("li",[v._v("支持无损图像")]),v._v(" "),t("li",[v._v("支持动画")])]),v._v(" "),t("p",[t("strong",[v._v("缺点")])]),v._v(" "),t("ul",[t("li",[v._v("兼容性吧，相对jpg,png,gif来说")])]),v._v(" "),t("h2",{attrs:{id:"一些对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一些对比"}},[v._v("#")]),v._v(" 一些对比")]),v._v(" "),t("h3",{attrs:{id:"png-gif-jpg-比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#png-gif-jpg-比较"}},[v._v("#")]),v._v(" PNG, GIF, JPG 比较")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("大小比较：通常地，PNG ≈ JPG > GIF 8位的PNG完全可以替代掉GIF\n复制代码\n透明性：PNG > GIF > JPG\n复制代码\n色彩丰富程度：JPG > PNG >GIF\n复制代码\n兼容程度：GIF ≈ JPG > PNG\n复制代码\n")])])]),t("h3",{attrs:{id:"gif-jpg-png-web优缺点和使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gif-jpg-png-web优缺点和使用场景"}},[v._v("#")]),v._v(" gif， jpg， png， web优缺点和使用场景")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("格式")]),v._v(" "),t("th",[v._v("优点")]),v._v(" "),t("th",[v._v("缺点")]),v._v(" "),t("th",[v._v("适用场景")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("gif")]),v._v(" "),t("td",[v._v("文件小，支持动画、透明，无兼容性问题")]),v._v(" "),t("td",[v._v("只支持256种颜色")]),v._v(" "),t("td",[v._v("色彩简单的logo、icon、动图")])]),v._v(" "),t("tr",[t("td",[v._v("jpg")]),v._v(" "),t("td",[v._v("色彩丰富，文件小")]),v._v(" "),t("td",[v._v("有损压缩，反复保存图片质量下降明显")]),v._v(" "),t("td",[v._v("色彩丰富的图片/渐变图像")])]),v._v(" "),t("tr",[t("td",[v._v("png")]),v._v(" "),t("td",[v._v("无损压缩，支持透明，简单图片尺寸小")]),v._v(" "),t("td",[v._v("不支持动画，色彩丰富的图片尺寸大")]),v._v(" "),t("td",[v._v("logo/icon/透明图")])]),v._v(" "),t("tr",[t("td",[v._v("webp")]),v._v(" "),t("td",[v._v("文件小，支持有损和无损压缩，支持动画、透明")]),v._v(" "),t("td",[v._v("浏览器兼容性相对而言不好")]),v._v(" "),t("td",[v._v("支持webp格式的app和webview")])])])])])}),[],!1,null,null,null);_.default=r.exports}}]);
---
title: CSS问题集
date: 2021-04-28
author: MoMeaks
sidebar: 'auto'
categories:
- fontEnd
- wiki
- intern
tags:
- CSS
---

#### css 伪类与伪元素区别

1）伪类(pseudo-classes)

- 其核⼼就是⽤来选择DOM树之外的信息,不能够被普通选择器选择的⽂档之外的元素，⽤来添加⼀些选择器的特殊效果。
- ⽐如:hover :active :visited :link :visited :first-child :focus :lang等
- 由于状态的变化是⾮静态的，所以元素达到⼀个特定状态时，它可能得到⼀个伪类的样式；当状态改变时，它⼜会失去这个样式。
- 由此可以看出，它的功能和class有些类似，但它是**基于⽂档之外的抽象**，所以叫 伪类。

2）伪元素(Pseudo-elements)

- DOM树没有定义的虚拟元素
- 核⼼就是需要创建通常不存在于⽂档中的元素，
- ⽐如::before ::after 它选择的是元素指定内容，表示选择元素内容的之前内容或之后内容。
- 伪元素控制的内容和元素是没有差别的，但是它本身只是基于元素的抽象，并不存在于⽂档中，所以称为伪元素。⽤于将特殊的效果添加到某些选择器

2）伪类与伪元素的区别

- 表示⽅法
  - CSS2 中伪类、伪元素都是以单冒号:表示,
  - CSS2.1 后规定伪类⽤单冒号表示,伪元素⽤双冒号::表示，
  - 浏览器同样接受 CSS2 时代已经存在的伪元素(:before, :after, :first�line, :first-letter 等)的单冒号写法。
  - CSS2 之后所有新增的伪元素(如::selection)，应该采⽤双冒号的写法。
  - CSS3中，伪类与伪元素在语法上也有所区别，伪元素修改为以::开头。浏览器对以:开头的伪元素也继续⽀持，但建议规范书写为::开头
- 定义不同
  - 伪类即假的类，可以添加类来达到效果
  - 伪元素即假元素，需要通过添加元素才能达到效果
- 总结:
  - 伪类和伪元素都是⽤来表示⽂档树以外的"元素"。
  - 伪类和伪元素分别⽤单冒号:和双冒号::来表示。
  - 伪类和伪元素的区别，关键点在于如果没有伪元素(或伪类)，
  - 是否需要添加元素才能达到效果，如果是则是伪元素，反之则是伪类。

4）相同之处：

- 伪类和伪元素都不出现在源⽂件和DOM树中。也就是说在html源⽂件中是看不到伪类和伪元素的。
  不同之处：
- 伪类其实就是基于普通DOM元素⽽产⽣的不同状态，他是DOM元素的某⼀特征。
- 伪元素能够创建在DOM树中不存在的抽象对象，⽽且这些抽象对象是能够访问到的。

#### Css 如何画出一个扇形，动手实现下

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Css画出一个扇形</title>
    <style>
        #sector {
            width: 0;
            height: 0;
            border: 100px solid;
            border-radius: 100px;
            border-color: orangered transparent transparent transparent;
        }
    </style>
</head>
<body>
    <div id="sector"></div>
</body>
</html>
```

#### 说一下盒子模型，以及标准情况和 IE 下的区别

![image-20210729092117805](D:\OneDrive\OneDrive - Maynooth University\前端部分\前端面试\images\image-20210729092117805-16275216799071.png)

```css
.box{
    border:20px solid;
    padding:30px;
    margin:30px;
    background:red;
    width:300px;
}
/* 标准模型 空间宽度 = 300 + 20*2 + 30*2 + 30*2  */
/* IE的传统模型 空间宽度  = 300 + 30*2  */
/* IE的传统模型中的width是包括了padding和border的，而标准模型不包括，不管padding和borde加多少内容区域的宽度不会改变。 */
```

### BFC

**BFC**

BFC(Block Formatting Context)块级格式化上下文，是一种渲染规则，其规则决定了这一块区域如何排列和渲染的。

**BFC的布局规则**

1. 内部的Box会在垂直方向上一个接一个的放置。
2. 内部的Box垂直方向上的距离由margin决定(出于同一个BFC的Boxmargin会重叠，不同BFC的不会重叠)

3. 生成BFC元素的子元素中，每一个子元素左外边距与包含块的左边界相接触（对于从右到左的格式化，右外边距接触右边界），即使浮动元素也是如此（尽管子元素的内容区域会由于浮动而压缩），除非这个子元素也创建了一个新的BFC（如它自身也是一个浮动元素）。

4. BFC的区域不会与float的元素区域重叠

5. 计算BFC的高度时，浮动子元素也参与计算

**如何触发BFC**

<img src="https://note.youdao.com/yws/public/resource/71913cff0dce02db9b5ea11fc2f7e14b/xmlnote/769474E684E64BEC9B52802E241FB629/15108" alt="https://note.youdao.com/yws/public/resource/71913cff0dce02db9b5ea11fc2f7e14b/xmlnote/769474E684E64BEC9B52802E241FB629/15108" style="zoom: 50%;" />

**规则详解**

1. 内部的Box会在垂直方向上一个接一个的放置。

   这个规则很好理解，两个块级元素div，在html中默认是上下垂直排列

2. 内部的Box垂直方向上的距离由margin决定(出于同一个BFC的Boxmargin会重叠，不同BFC的不会重叠)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<style>
  div{
    width: 20px;
    height: 20px;
    margin: 20px;
    padding: 20px;
    background-color: red;
    color: white;
  }

</style>
<body>
  <div>div1</div>
  <div>div2</div>
</body>
</html>
```

<img src="https://note.youdao.com/yws/public/resource/71913cff0dce02db9b5ea11fc2f7e14b/xmlnote/76EA9381C83C45D2975DA58D11FED1A0/15115" alt="https://note.youdao.com/yws/public/resource/71913cff0dce02db9b5ea11fc2f7e14b/xmlnote/76EA9381C83C45D2975DA58D11FED1A0/15115" style="zoom:67%;" />

我们可以清晰看到垂直方向上的margin相互重叠了

根据bfc的规则，div1，div2身处同一个html的BFC中，所以margin会重叠，如果div1，div2都是BFC的话，那么不会重叠。我们给增加一个overflow：hidden样式触发一下BFC的渲染规则,让两个div出于不同的BFC块内，就不会发生重叠。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<style>
  .test{
    width: 20px;
    height: 20px;
    margin: 20px;
    padding: 20px;
    background-color: red;
    color: white;
  }
  .bfc{
    overflow: hidden;
  }

</style>
<body>
  <div class="bfc">
    <div class="test">div1</div>
  </div>
  <div class="bfc">
    <div class="test">div2</div>
  </div>
</body>
</html>
```

<img src="https://note.youdao.com/yws/public/resource/71913cff0dce02db9b5ea11fc2f7e14b/xmlnote/DE6D0DD6AD55472A847ABB45E4F03BC5/15126" alt="https://note.youdao.com/yws/public/resource/71913cff0dce02db9b5ea11fc2f7e14b/xmlnote/DE6D0DD6AD55472A847ABB45E4F03BC5/15126" style="zoom: 33%;" />

3. 生成BFC元素的子元素中，每一个子元素左外边距与包含块的左边界相接触（对于从右到左的格式化，右外边距接触右边界），即使浮动元素也是如此（尽管子元素的内容区域会由于浮动而压缩），除非这个子元素也创建了一个新的BFC（如它自身也是一个浮动元素）。

   这个规则其实可以这样理解，默认BFC内的块级元素宽度是百分之百。浮动元素例外。

4. BFC的区域不会与float的元素区域重叠

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<style>
  .div1{
    background-color: red;
    color: white;
    height: 20px;
    float: left;
  }
  .div2{
    height: 30px;
    background-color: blue;
    color: white;
  }
  
</style>
<body>
    <div class="div1">div11111</div>
    <div class="div2">div2</div>
</body>
</html>
```

![https://note.youdao.com/yws/public/resource/71913cff0dce02db9b5ea11fc2f7e14b/xmlnote/82250EE8B4214DEEB7FC38A33CF45567/15141](https://note.youdao.com/yws/public/resource/71913cff0dce02db9b5ea11fc2f7e14b/xmlnote/82250EE8B4214DEEB7FC38A33CF45567/15141)

float重叠在其他元素上面，

根据BFC的区域不会与float的元素区域重叠的规则，我们让div2是一个BFC即可不重叠

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<style>
  .div1{
    background-color: red;
    color: white;
    height: 20px;
    float: left;
  }
  .div2{
    height: 30px;
    background-color: blue;
    color: white;
    overflow: hidden;
  }

</style>
<body>
    <div class="div1">div11111</div>
    <div class="div2">div2</div>
</body>
</html>
```

![https://note.youdao.com/yws/public/resource/71913cff0dce02db9b5ea11fc2f7e14b/xmlnote/EE01DB701C164D179DF0A6BCFDEEC8BD/15145](https://note.youdao.com/yws/public/resource/71913cff0dce02db9b5ea11fc2f7e14b/xmlnote/EE01DB701C164D179DF0A6BCFDEEC8BD/15145)

5. 计算BFC的高度时，浮动子元素也参与计算

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<style>
  .div0 {
    background-color: antiquewhite;
  }
  .div1{
    background-color: red;
    color: white;
    height: 20px;
    float: left;
  }
  .div2{
    height: 30px;
    float: left;
    background-color: blue;
    color: white;
    overflow: hidden;
  }

</style>
<body>
  <div class="div0">
    <div class="div1">div11111</div>
    <div class="div2">div2</div>
  </div>

</body>
</html>
```

![https://note.youdao.com/yws/public/resource/71913cff0dce02db9b5ea11fc2f7e14b/xmlnote/EB15CBE2CE1449BA86DEDFDFF3392AF0/15150](https://note.youdao.com/yws/public/resource/71913cff0dce02db9b5ea11fc2f7e14b/xmlnote/EB15CBE2CE1449BA86DEDFDFF3392AF0/15150)

我们可以清晰看到最外层的高度为0，因为最外层div不是一个BFC，如果是一个BFC那么内部的float元素的高度参与计算

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<style>
  .div0 {
    background-color: antiquewhite;
    overflow: hidden;
  }
  .div1{
    background-color: red;
    color: white;
    height: 20px;
    float: left;
  }
  .div2{
    height: 30px;
    float: left;
    background-color: blue;
    color: white;
    overflow: hidden;
  }

</style>
<body>
  <div class="div0">
    <div class="div1">div11111</div>
    <div class="div2">div2</div>
  </div>

</body>
</html>
```

![https://note.youdao.com/yws/public/resource/71913cff0dce02db9b5ea11fc2f7e14b/xmlnote/25A1115FC8BF482EA1B330ABCB5A72D6/15154](https://note.youdao.com/yws/public/resource/71913cff0dce02db9b5ea11fc2f7e14b/xmlnote/25A1115FC8BF482EA1B330ABCB5A72D6/15154)

6. 

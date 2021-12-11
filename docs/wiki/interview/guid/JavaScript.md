---
title: JavaScript 面试指南
date: 2021-12-11
author: MoMeaks
sidebar: 'auto'
categories:
- fontEnd
- wiki
- intern
tags:
- JavaScript
---

> 说明：javaScript在笔试题中只有一两题，基本都在与面试官沟通的时候考察，这是考察基础的重点，如果回答不好回给人印象基础不牢固， 只会用的印象，所以要牢牢掌握下面的考点。

## 考点 1：数据类型

**问题：JavaScript 有几种数据类型，分别是什么？**

有 7 种：
string 字符串类型number 数字类型object 对象类型boolean 布尔值类型null 空值undefined 未定义
其中 ES6 还新增了一种：Symbol 类型，用于创建一个独一无二的值。

**问题：判断数据类型的方式有那些**

1. typeof

   对于基本类型，除 null 以外，均可以返回正确的结果。

   对于引用类型，除 function 以外，一律返回 object 类型。对于 null ，返回 object 类型。

   对于 function 返回 function 类型。

2.	instanceOf

3.	Constructor

4.	Object.prototype.toString.call

链接：https://juejin.cn/post/6919805736734162952

**问题：null 和undefined 有什么区别？**

undefined：表示变量声明过但并未赋过值，它是所有未赋值变量默认值；
null：主动释放一个变量引用的对象，表示一个变量不再指向任何对象地址。 当使用完一个比较大的对象时，需要对其进行释放内存时，设置为 null。

**问题：列举三种强制类型转换和两种隐式类型转换？**

强制类型转换：
Number("10") 转换为 number 类型parseInt("20.5") 转换为number 取整parseFloat("10.5") 转换为number 保留小数、String(10) 转换为 string 类型
Boolean(1) 转换为 Boolean 类型

隐式类型转换
1.	四则运算转换：
加法运算符+是双目运算符，只要其中一个是 string 类型，表达式的值便是一个String。对于其他的四则运算，只要其中一个是 Number 类型，表达式的便是一个 Number。
比如：
"10"+20，加号遇到字符串变成连接符，20 隐式转换为字符串；1+true， true 隐式转换为 1；
2.	判断语句转换：
判断语句中的判断条件需要是 Boolean 类型，所以条件表达式会被隐式转换为Boolean。其转换规则则同Boolean 的构造函数。比如:
10 == "10"，"10"隐式转换为 10

## 考点 2：传值 VS 传址

**问题：阅读下面代码，说说运行的结果**

```js
//代码 1： 
let a = 1; 
let b = a; 
b = 3;
console.log(a, b);

//代码 2：
let c = { name:"hello" }; 
let d = c;
c.name = "hi"; 
console.log(c, d);
```

代码 1 运行的结果是：1 3；

理由：基本类型的值是通过值复制的方式来赋值或是传递的，所以这里 b 的改变不会影响a 的。基本类型包括有 null、undefined、string、number、boolean 以及ES6 中的symbol。

代码 2 运行的结果是：{name:"Hi"}    {name:"Hi"}；

理由：引用类型赋值并不会真正重新拷贝引用值，而是拷贝引用的地址，也就是传址。c 与 d 是引用同一个地址。所以如果修改了 c，d 的值也会被修改。

引用类型包括有数组、对象、函数等。



## 考点 3：作用域

**问题：执行以下代码的结果是什么？为什么？**

```js
function test()
{ 
    console.log(a);
    console.log(foo()); 
    var a = 1; 
    function foo() {
        return 2;
    }
}
test();
```

这段代码的执行结果是 undefined 和 2。

原因是：变量和函数都被提升到了函数体的顶部。因此，当打印变量 a 时，它虽存在于函数体（因为 a 已经被声明），但仍然是 undefined。函数 foo 执行后得到的结果是 2。

此题考察是的变量提升的知识点，变量提升：可以理解为把变量声明提升到当前执行环境的最顶端。

**问题：说说你对作用域链的理解？**

当所需要的变量，在所在的作用域中查找不到的时候，它会一层一层向上查找，直到找到全局作用域还没有找到的时候，就会放弃查找。这种一层一层的关系，就是作用域链。

**执行以下代码的结果是什么？为什么？**

```js
var a = 1; 
function check() { 
    return function(){
        console.log(a); 
        console.log(b);
    }
}

var func = check(); 
func();
```

这段代码的执行结果是：1 和 报错 b is not defined。

当作用域内找不到 a，会向上一层一层查找，最后找到了全局下的 a,输出结果为 1。同理，向上一层一层查找，最后找不到 b，所以输出"Uncaught ReferenceError: b is not defined"。

此题考察是的作用域和作用域链的知识点。

## 考点 4：闭包

**问题：请讲一下你对闭包的认识和理解。**

闭包是：指有权访问另一个函数作用域中的变量的函数； 稍微详细一点的回答：

在 js 中变量的作用域属于函数作用域, 在函数执行完后，作用域就会被清理，内存也会随之被回收。但是由于闭包函数是建立在函数内部的子函数, 由于它可以访问上级作用域，即使上级函数执行完, 作用域也不会随之销毁,。

这时的子函数（也就是闭包），便拥有了访问上级作用域中变量的权限，即使上级函数执行完后作用域内的值也不会被销毁。

## 考点 5：原型链和继承

**问题：说一下你的原型链和原型链继承的理解**

原型链：**当对象查找一个属性（方法）的时候**，如果没有在自身找到，那么就会查找自身的原型，如果原型还没有找到，那么会继续查找原型的原型，直到找到 Object.prototype 的原型时，此时原型为 null，查找停止。

这种通过通过原型链接的逐级向上的查找链被称为原型链。

 

原型链继承：一个对象可以使用另外一个对象的属性或者方法，就称之为继承。具体是通过将这个对象的原型设置为另外一个对象，这样根据原型链的规则，如果查找一个对象属性且在自身不存在时，就会查找另外一个对象，相当于一个对象可以使用另外一个对象的属性和方法了。

**问题：ES6 之前是如何使用 prototype 实现继承的？**

```js
function Father(name)
{
    this.name = name;
}
Father.prototype.myName = function ()
{
    return this.name;
}

// 继承属性，通过借用构造函数调用
function Son(name, label) 
{
    Father.call(this, name); 
    this.label = label;
}

// 继承方法，创建备份
Son.prototype = Object.create(Father.prototype);
// 必须设置回正确的构造函数，要不然在会发生判断类型出错
Son.prototype.constructor = Father;

Son.prototype.myLabel = function ()
{
    return this.label;
}
```

## 考点 6：BOM 与 DOM 操作

**问题：什么是 BOM？什么是 DOM？**

BOM 是即浏览器对象模型。 BOM 提供了独立于内容，与浏览器窗口进行交互的对象； 由于 BOM 主要用于管理窗口与窗口之间的通讯，因此其核心对象是 window； BOM 由一系列相关的对象构成，并且每个对象都提供了很多方法与属性；

 

DOM 是文档对象模型。利用 DOM 我们可以操作 HTML 中的元素，使得网页被下载到浏览器后，开发者可以根据需求进行页面内容的修改。

**问题：说出几个你比较常用的 BOM 对象和方法？**

window 对象，是 JS 的最顶层对象，其他的 BOM 对象都是 window 对象的属性； 

document 对象，文档对象；

location 对象，浏览器当前 URL 信息； 

navigator 对象，浏览器本身信息； 

screen 对象，客户端屏幕信息； 

history 对象，浏览器访问历史信息；

常用的方法：

window.alert('提示信息') 

window.confirm("确认信息")

window.prompt("弹出输入框")

window.open("url 地址"，“打开的方式”，“新窗口的大小”） 

window.close() 关闭当前的网页

window.moveTo() - 移动当前窗口

window.resizeTo() - 调整当前窗口的尺寸

swindow.setTimeout(函数，时间) 只执行一次

window.setInterval(函数，时间) 无限执行

## 考点 7：Ajax 与 跨域

**问题：原生 js ajax 请求有几个步骤？分别是什么？**

一共有 5 个步骤，如下：

```js

```

**问题：什么情况造成跨域？**

同源策略限制，不同源会造成跨域。以下任意一种情况不同，都是不同源。

同源：1. 协议；2.域名；3.端口号三者要求全部相同，只要有一个不相同就是非同源策略。

**问题：跨域解决方案有哪些？**

1. JSONP
2. ifarme
3. CORS
4. Nginx反向代理

**问题：请解释 JSONP 的工作原理？**

JSONP 是一个简单高效的跨域方式，HTML 中的 script 标签可以加载并执行其他域的 javascript，于是我们可以通过 script 标记来动态加载其他域的资源。

例如我要从域A 的页面 pageA 加载域 B 的数据，那么在域 B 的页面 pageB 中我以 JavaScript 的形式声明pageA 需要的数据，然后在 pageA 中用 script 标签把 pageB 加载进来，那么 pageB 中的脚本就会得以执行。

JSONP 在此基础上加入了回调函数，pageB 加载完之后会执行 pageA 中定义的函数，所需要的数据会以参数的形式传递给该函数。

JSONP 易于实现，但是也会存在一些安全隐患，如果第三方的脚本随意地执行，那么它就可以篡改页面内容，截获敏感数据。但是在受信任的双方传递数据，JSONP 是非常合适的选择。

## 考点 8：事件模型


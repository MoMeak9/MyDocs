```
title: ES6展开运算符（扩展运算符）
date: 2022-1-12
author: MoMeaks
sidebar: 'auto'
categories:
- fontEnd
tags:
- js
```

# ES6展开运算符（扩展运算符）

在ES6中，我们有了一个新的运算符--展开运算符，它可以使我们的代码的数量有一定的减少，有时候甚至有很有用的作用，我们来举几个常用的例子，同时通过例子来了解展开运算符的使用。

1.apply中的使用

当我们的函数有多个变量的时候（特别是当我们不知道变量的数量的时候），有时候会通过将变量保存在数组中，并通过`call`来执行函数，有了展开运算符后则有了更好的方式（毕竟使用`call`需要手动指定`this`，有时候会不是很方便很准确）

```js
// 一般
function a(x, y, z) { }
var args = [0, 1, 2];
a.apply(null, args);

// 展开运算符
a(...args);
```

除此之外还可以

```js
// 需要传入不定数量的参数，同时最后一个参数为需要指定的值
function b() {
  console.log(arguments.length);
  console.log(arguments[arguments.length -1]);
}
var args = [0, 1, 2];
b(...args, -2)
```

总的来说，使多参数的函数调用有了新的方式, 而且避免的作用域的问题。

2.数组中的使用

数组的合并

```js
var a = [1, 2];
var b = [0, ...a, 3]
```

数组的分割

```js
var [a, ...b] = [0, 1, 2];
console.log(b) // [1, 2]
```

数组的拷贝

```js
var a = [1, 2];
var b = [...a];
```

3.对象中的使用 这里的对象是指类似`{a:1}`这样的对象，因为数组，函数也是对象中的一种。

```js
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(z) // {a: 3, b: 4}
```

这个在函数的参数中也有很好的用处

```js
function test(...args) {
  console.log(args);
}

test('wang', '23', 'man');
```

可能会有人说`arguments`本身就可以啊，但是`arguments`本身并不是数组，所以无法直接对`arguments`进行数组操作。

类外，在Node中有很多的回调函数都是以`error`为第一返回值，其实很多接口都是那么设计的。那么我们可以很方便的分离`error`和其他参数

```js
request.get('./demo', (e, ...data) => {
  console.log(e);
  console.log(data);
})
```

不过现在的`ES6`中还不支持在对象中使用扩展运算符，这个还在`ES7`的草案中，不过我们可以使用`babel`来处理。

最后写一个例子吧，在github上有这个一个库`https://github.com/sindresorhus/pify`用于将回调的函数改为`promise`形式

```js
const fs = require('fs');

const pify = function(fn) {
  return function(...args) {
		return new Promise((resolve) => {
			fn(...args, (...res) => {
				resolve(res);
			})
		})
	}
};

// fs.readFile
pify(fs.readFile)('./package.json', 'utf8').then(([err, data]) => {
	console.log(data);
})

// ajax
pify(request)('http://demo.api.com').then(([err, data]) => {
  console.log(data)
})
```
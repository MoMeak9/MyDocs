---
title: JS问题集
date: 2021-07-28
author: MoMeaks
sidebar: 'auto'
categories:
- fontEnd
- wiki
- intern
tags:
- JavaScript
---

### 题目

1. infinity代表什么数据？

   在JS中Infinity用于表示无穷大的数值，且不是常量，即无法明确表示它到底有多大。可以通过isFinite(val)判断当前数字是否是无穷大，函数返回true表示不是无穷大，返回false表示是无穷大。该数值超出JavaScript所能表示的数值范围

2. 请解释下面题目输出的结果

   ```
   var val = "test";
   console.log("output is " + (val === "Test") ? "123" : "456");
   ```

3. 写一个方法探测CPU占比情况?

4. 如何把10.36四舍五入为最接近的整数？

   `+(10.36).toFixed(0)`，`Number.toFixed()`按照四舍五入的规则进行取舍

5. 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值?

   描述：

   1. 这是一道大题目，把考点拆成了4个小项；需要侯选人用递归算法实现（限制15行代码以内实现；限制时间10分钟内完成）：
      a) 生成一个长度为5的空数组arr。
      b) 生成一个（2－32）之间的随机整数rand。
      c) 把随机数rand插入到数组arr内，如果数组arr内已存在与rand相同的数字，则重新生成随机数rand并插入到arr内[需要使用递归实现，不能使用for/while等循环]
      d) 最终输出一个长度为5，且内容不重复的数组arr

   ```javascript
       var arr = new Array(5);
       var num = randomNumber();
       var i = 0;
       randomArr(arr,num);
       function randomArr(arr,num) {
           if (arr.indexOf(num)< 0){
               arr[i] = num;
               i++;
           } else {
               num = randomNumber();
           }
           if (i>=arr.length){
               console.log(arr);
               return;
           }else{
               randomArr(arr,num)
           }
       }
       function randomNumber() {
           return Math.floor(Math.random()*31 + 2)
       }
   ```

6. 写一个方法去掉字符串中的空格，要求传入不同的类型分别能去掉前、后、前后、中间的空格?

   ```js
   var trim = function(str){
   return str.replace(/\s*/g,"");
   }
   str.replace(/\s*/g,""); //去除字符串内所有的空格
   str.replace(/^\s*|\s*$/g,""); //去除字符串内两头的空格
   str.replace(/^\s*/,""); //去除字符串内左侧的空格
   str.replace(/(\s*$)/g,""); //去除字符串内右侧的空格
   ```

7. 去除字符串中最后一个指定的字符（**正则表达**）

   ```js
   function delLast(str,target) {
     let reg =new RegExp(`${target}(?=([^${target}]*)$)`)
     return str.replace(reg,'')
   }
   ```

8. 写一个方法把下划线命名转成大驼峰命名

```js
function toCamel(str) {
  str = str.replace(/(\w)/, (match, $1) => `${$1.toUpperCase()}`)
  while(str.match(/\w_\w/)) {
    str = str.replace(/(\w)(_)(\w)/, (match, $1, $2, $3) => `${$1}${$3.toUpperCase()}`)
  }
  return str
}

console.log(toCamel('a_c_def')) // ACDef 
```

9.  写一个把字符串大小写切换的方法

   ```js
   function caseConvert(str){
       return str.replace(/([a-z]*)([A-Z]*)/g, (m, s1, s2)=>{
   	return `${s1.toUpperCase()}${s2.toLowerCase()}`
       })
   }
   caseConvert('AsA33322A2aa') //aSa33322a2AA
   ```

   ```js
   function replacer(match, p1, p2, p3, offset, string) {
     // p1 is nondigits, p2 digits, and p3 non-alphanumerics
     return [p1, p2, p3].join(' - ');
   }
   var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
   console.log(newString);  // abc - 12345 - #$*%
   ```

10. 写一个去除制表符和换行符的方法

    ```js
    /**
     * \f  匹配换页字符。
     * \n  匹配换行字符。
     * \r  匹配回车符字符。
     * \t  匹配制表字符。
     * \v  匹配垂直制表符。
     * @param str
     * @returns {void | string}
     */
    const removeEmpty = (str) => str.replace(/[\t\n\v\r\f]/g, "");
    
    console.log(removeEmpty(`||`))
    ```

11. 写一个加密字符串的方法?

    ```js
    // 利用 base64, 浏览器环境自带 btoa / atob 方法
    // Node.js 需要引入相关库
    const str = "abcdefg";
    
    console.log(btoa(str));
    console.log(atob(btoa(str)));
    
    // 凯撒密码
    const encodeCaesar = ({str = "", padding = 3}) =>
      !str
        ? str
        : str
            .split("")
            .map((s) => String.fromCharCode(s.charCodeAt() + padding))
            .join("");
    
    const decodeCaesar = ({str = "", padding = 3}) =>
      !str
        ? str
        : str
            .split("")
            .map((s) => String.fromCharCode(s.charCodeAt() - padding))
            .join("");
    
    console.log(encodeCaesar({str: "hello world"}));
    console.log(decodeCaesar({str: "khoor#zruog"}));
    ```

12. 写一个判断数据类型的方法

    ```js
    function type (obj) {
    	return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g,'');
        //去除"[object Array]"
    }
    
    console.log(type([]))  //"Array"
    console.log(type(1))  //"Number"
    ```

13. 什么是回调函数，举个例子

    回调是把一个函数作为参数传递给另一个函数，当该函数满足某个条件时触发该参数函数。
    主要用于异步操作 例如网络请求 防止页面同步代码阻塞导致渲染线程停止

    ```js
    function longTask(callback,timeout) {
      setTimeout(callback,timeout)
    }
    longTask(()=>{console.log("回调任务被执行了");},2000);
    console.log("我是同步代码 不会阻塞我");
    ```

14. 什么是闭包？优缺点分别是什么？

    闭包是可以访问另一个函数作用域的函数。由于 `javascript` 的特性，外层的函数无法访问内部函数的变量；而内部函数可以访问外部函数的变量（即作用域链）。

    ```js
    function a(){
    	var b = 1;
    	var c = 2;
    	// 这个函数就是个闭包，可以访问外层 a 函数的变量
    	return function(){
    		var d = 3;
    		return b + c + d;
    	}
    }
    
    var e = a();
    console.log(e());
    ```

    因此，使用闭包可以隐藏变量以及防止变量被篡改和作用域的污染，从而实现封装。
    而缺点就是由于保留了作用域链，会增加内存的开销。因此需要注意内存的使用，并且防止内存泄露的问题。

### 50 基础题

1、JavaScript有几种数据类型？

NNUSB 基本数据类型

- number：数字类型
- string：字符串类型
- boolean：布尔值类型
- undefined：未定义类型
- null：空值类型
- object：对象类型
- symbol：symbol类型
- bigint：大数字类型

2、JavaScript最大安全数字与最小安全数字？

```js
console.log(Number.MAX_SAFE_INTEGER)
// 9007199254740991

console.log(Number.MIN_SAFE_INTEGER)
// -9007199254740991
复制代码
```

3、深拷贝与浅拷贝的区别？

- 深拷贝层层拷贝；浅拷贝只拷贝第一层，只是引用
- 在深拷贝中，新对象中的更改不会影响原始对象，而在浅拷贝中，新对象中的更改，原始对象中也会跟着改。
- 在深拷贝中，原始对象不与新对象共享相同的属性，而在浅拷贝中，它们具有相同的属性。

4、**闭包**是什么？

闭包是一个能读取其他函数内部变量的函数

- 优点：使外部能访问到局部的东西。return 函数出去
- 缺点：使用不当容易造成内存泄漏的问题

例子：

```js
function a () {
    let num = 0
    // 这是个闭包
    return function () {
       num++
    }
}
const b = a()
b() // 1
b() // 2
复制代码
```

5、**原型链**是什么呀？详细点！（好好研究）

看看我这篇文章：[掘金讲「原型链」，讲的最好最通俗易懂的](https://juejin.cn/post/7007416743215759373)

大家好，我是林三心，相信大家都听过前端的三座大山：**闭包，原型链，作用域**，这三个其实都只是算基础。

- prototype: 显式原型
- __ proto__: 隐式原型

**有什么关系？**

那么这两个都叫原型，那他们两到底啥关系呢？

一般，`构造函数`的prototype和其`实例`的__proto__是指向同一个地方的，这个地方就叫做`原型对象`

那什么是构造函数呢？俗话说就是，可以用来`new`的函数就叫构造函数，箭头函数不能用来当做构造函数哦

![image-20211022201105133](images/image-20211022201105133.png)

其实这几种的本质都是一样的(只考虑函数的声明)，都可以使用`new Function`来声明，**是的没错`Function`也是一个构造函数。上面的写法等同于下面的写法**

![image-20211022201125403](images/image-20211022201125403.png)

![image-20211022201314571](images/image-20211022201314571.png)

**Function和Object**

上面咱们常说

- `函数`是`Function构造函数`的实例
- `对象`是`Object构造函数`的实例

那`Function构造函数`和`Object构造函数`他们两个又是谁的实例呢？

- `function Object()`其实也是个函数，所以他是`Function构造函数`的实例
- `function Function()`其实也是个函数，所以他也是`Function构造函数`的实例，没错，他是他自己本身的实例

6、**什么是变量提升？函数提升？**

变量提升

```js
console.log(name) // undefined
var name = 'Sunshine_Lin'

if (false) {
  var age = 23
}

console.log(age) // undefined 不会报错
```

函数提升

```js
console.log(fun) // function fun() {}
function fun() {}

if (false) {
  function fun2(){}
}

console.log(fun2) // undefined 不会报错
```

**函数提升优先级 > 变量提升优先级**

```js
console.log(fun) // function fun() {}
var fun = 'Sunshie_Lin'
function fun() {}
console.log(fun) // 'Sunshie_Lin'
```

7、isNaN 与 Number.isNaN的区别？

- isNaN：除了判断NaN为true，**还会把不能转成数字的判断为true，例如'xxx'**
- Number.isNaN：只有判断NaN时为true，其余情况都为false

8、解决遍历对象时，把原型上的属性遍历出来了咋办？

使用`hasOwnProperty`判断

```js
function Person(name) {
  this.name = name
}
Person.prototype.age = 23
const person = new Person('Sunshine_lin')
for (const key in person) { console.log(key) } // name age

// 使用 hasOwnProperty
for (const key in person) {
  person.hasOwnProperty(key) && console.log(key)
} // name
```

9、valueOf 与 toString

- 1、`valueOf`偏向于运算，`toString`偏向于显示
- 2、对象转换时，优先调用`toString`
- 3、强转字符串优先调用`toString`，强转数字优先调用`valueOf`
- 4、正常情况下，优先调用`toString`
- 5、运算操作符情况下优先调用`valueOf`

**调用valueOf**

| 调用者   | 返回值   | 返回值类型 |
| -------- | -------- | ---------- |
| Array    | 数组本身 | Array      |
| Boolean  | 布尔值   | Boolean    |
| Date     | 毫秒数   | Number     |
| Function | 函数本身 | Function   |
| Number   | 数字值   | Number     |
| Object   | 对象本身 | Object     |
| String   | 字符串   | String     |

**调用toString**

| 调用者  | 返回值                                                       | 返回值类型 |
| ------- | ------------------------------------------------------------ | ---------- |
| Array   | 数组转字符串，相当于Array.join()                             | String     |
| Boolean | 转字符串'true'、'false'                                      | String     |
| Date    | 字符串日期，如'Fri Dec 23 2016 11:24:47 GMT+0800 (中国标准时间)' | String     |
| Number  | 数字字符串                                                   | String     |
| Object  | '[object Object]'                                            | String     |
| String  | 字符串                                                       | String     |

10、JavaScript变量在内存中具体存储形式？

- 基本数据类型：存在`栈内存`里
- 引用数据类型：指针存`栈内存`，指向`堆内存`中一块地址，内容存在堆内存中
- 也有说法说其实JavaScript所有数据都存`堆内存`中，我也比较赞同这种说法

**11、讲一讲JavaScript的装箱和拆箱？？？**

**装箱**：把基本数据类型转化为对应的引用数据类型的操作

看以下代码，s1只是一个基本数据类型，他是怎么能调用`indexOf`的呢？

```js
const s1 = 'Sunshine_Lin'
const index = s1.indexOf('_')
console.log(index) // 8
复制代码
```

原来是JavaScript内部进行了装箱操作

- 1、创建String类型的一个实例；
- 2、在实例上调用指定的方法；
- 3、销毁这个实例；

```js
var temp = new String('Sunshine_Lin')
const index = temp.indexOf('_')
temp = null
console.log(index) // 8
复制代码
```

**拆箱**：将引用数据类型转化为对应的基本数据类型的操作

通过`valueOf`或者`toString`方法实现拆箱操作

```js
var objNum = new Number(123);  
var objStr =new String("123");   
console.log( typeof objNum ); //object
console.log( typeof objStr ); //object 
console.log( typeof objNum.valueOf() ); //number
console.log( typeof objStr.valueOf() ); //string

console.log( typeof objNum.toString() ); // string 
console.log( typeof objStr.toString() ); // string
复制代码
```

12、null和undefined的异同点有哪些？

**相同点**

- 都是空变量
- 都是假值，转布尔值都是false
- null == undefined 为 **true**

**不同点**

- typeof判断**null为object**，**判断undefined为undefined**
- **null转数字为0，undefined转数字为NaN**
- **null是一个对象未初始化，undefined是初始化了，但未定义赋值**
- **null === undefined 为 false**

13、如何判断数据类型？

- typeof xxx：能判断出number，string，undefined，boolean，object，function（null是object）
- Object.prototype.toString.call(xxx)：能判断出大部分类型
- Array.isArray(xxx)：判断是否为数组

14、为什么typeof null 是object？

不同的数据类型在底层都是通过二进制表示的，二进制前三位为`000`则会被判断为`object`类型，而null底层的二进制全都是0，那前三位肯定也是`000`，所以被判断为`object`

15、== 与 === 的区别？

非严格等于与严格等于

- ==：在比较过程中会存在隐式转换
- ===：需要类型相同，值相同，才能为true

16、JavaScript的隐式转换规则？

- 1、转成string类型： +（字符串连接符）
- 2、转成number类型：++/--(自增自减运算符) + - * / %(算术运算符) > < >= <= == != === !=== (关系运算符)
- 3、转成boolean类型：!（逻辑非运算符)

17、双等号左右两边的转换规则？

- 1、null == undefined 为 true
- 1、如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值——false转换为0，而true转换为1；
- 2、如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值
- 3、如果一个操作数是对象，另一个操作数不是，则调用对象的toString()方法，用得到的基本类型值按照前面的规则进行比较

**18、undefined >= undefined 为什么是 false ？** 2021.10.22

按照`隐式转换规则`，可转换成`NaN >= NaN`，NaN 不等于 NaN，也不大于，所以是`false`

### 19、null >= null 为什么是 true？

按照`隐式转换规则`，可转换成`0 >= 0`，0 等于 0，所以是`true`

### 20、[] == ![] 为什么是 true ？

按照`双等号左右两边的转换规则`

- 1、`!` 优先级高于 `==`，`[]`不是假值，所以先转换成 `[] == false`
- 2、右边为布尔值，`false`先转数字`0`，所以可转换为`[] == 0`
- 3、左边为对象，`[]`调用`toString`转为 `''`，转换为`'' == 0`
- 4、左边为字符串，`''`转换为`0`，最终为 `0 == 0`

### 21、0.1 + 0.2 === 0.3，对吗？

不对，JavaScript的计算存在精度丢失问题

```js
console.log(0.1 + 0.2 === 0.3) // false
复制代码
```

- 原因：JavaScript中小数是浮点数，需转二进制进行运算，有些小数无法用二进制表示，所以只能取近似值，所以造成误差
- 解决方法：
  - 先变成整数运算，然后再变回小数
  - toFixed() 性能不好，不推荐

### 22、什么是匿名函数？

匿名函数：就是没有函数名的函数，如：

```js
(function(x, y){
    alert(x + y);  
})(2, 3);
复制代码
```

这里创建了一个匿名函数(在第一个括号内)，第二个括号用于调用该匿名函数，并传入参数。

### 23、绑定点击事件有几种方式？

三种

- `xxx.onclick = function (){}`
- `<xxx onclick=""></xxx>`
- `xxx.addEventListence('click', function(){}, false)`

### 24、addEventListence的第三个参数是干嘛的？

第三个变量传一个布尔值，需不需要阻止冒泡，默认是false，不阻止冒泡

### 25、函数声明和函数表达式的区别？

- 函数声明：归类于变量声明，享受变量提升
- 函数表达式：享受函数提升
- 函数提升优先级 > 变量提升优先级

```js
console.log(fun) // fun () {}
// 函数声明
var fun = function(name) {}
// 函数表达式
function fun () {}
console.log(fun) // fun (name) {}
复制代码
```

### 26、JavaScript的事件流模型有哪些？

- 事件冒泡：由最具体的元素接收，并往上传播
- 事件捕获：由最不具体的元素接收，并往下传播
- DOM事件流：事件捕获 -> 目标阶段 -> 事件冒泡

### 27、Ajax、Axios、Fetch有啥区别？

- Ajax：是对XMLHttpRequest对象（XHR）的封装
- Axios：是基于Promise对XHR对象的封装
- Fetch：是window的一个方法，也是基于Promise，但是与XHR无关，不支持IE

### 28、load、$(document).ready、DOMContentLoaded的区别？

DOM文档加载的步骤为：

- 1、解析HTML结构。
- 2、加载外部脚本和样式表文件。
- 3、解析并执行脚本代码。
- 4、DOM树构建完成。// `DOMContentLoaded`触发、`$(document).ready`触发
- 5、加载图片等外部文件。
- 6、页面加载完毕。// `load`触发

### 29、如何阻止事件冒泡？

```js
function stopBubble(e) {
  if (e.stopPropagation) {
    e.stopPropagation()
  } else {
    window.event.cancelBubble = true;
  }
}
复制代码
```

### 30、如何阻止事件默认行为？

```js
function stopDefault(e) {
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    window.event.returnValue = false;
  }
}

复制代码
```

### 31、什么是事件委托？

当所有子元素都需要绑定相同的事件的时候，可以把事件绑定在父元素上，这就是`事件委托`，优点有：

- 绑定在父元素上只需要绑定一次，节省性能
- 子元素不需要每个都去绑定同一事件
- 如果后续又有新的子元素添加，会由于事件委托的原因，自动接收到父元素的事件监听

### 32、如何实现数组去重？

```js
// 使用 Map 去重
function quchong1(arr) {
  const newArr = []
  arr.reduce((pre, next) => {
    if (!pre.get(next)) {
      pre.set(next, 1)
      newArr.push(next)
    }
    return pre
  }, new Map())
  return newArr
}

// 使用 Set 去重
function quchong (arr) {
    return [...new Set(arr)]
}
复制代码
```

### 33、Set与Array的区别是什么？

建议看阮一峰老师的文章：[Set 和 Map 数据结构](https://link.juejin.cn?target=https%3A%2F%2Fes6.ruanyifeng.com%2F%23docs%2Fset-map)

### 34、Map与Object的区别是什么？

建议看阮一峰老师的文章：[Set 和 Map 数据结构](https://link.juejin.cn?target=https%3A%2F%2Fes6.ruanyifeng.com%2F%23docs%2Fset-map)

### 35、NaN是什么？有什么特点？

- NaN不等于自身，也就是 `NaN === NaN` 为 `false`
- NaN为假值，转布尔值为`false`
- NaN本质是一个number，`typeof NaN === number`

### 36、处理异步的方法有哪些？

- 回调函数
- promise
- 事件监听
- 发布订阅
- async await

### 37、JavaScript继承方式有几种？

前置工作

```js
// 定义一个动物类
function Animal (name) {
  // 属性
  this.name = name || 'Animal';
  // 实例方法
  this.sleep = function(){
    console.log(this.name + '正在睡觉！');
  }
}
// 原型方法
Animal.prototype.eat = function(food) {
  console.log(this.name + '正在吃：' + food);
};
复制代码
```

#### 1、原型链继承

核心：将父类的实例作为子类的原型

```js
function Cat(){ 
}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

var cat = new Cat();
console.log(cat.name); // cat
cat.eat('fish') // cat正在吃：fish
cat.sleep() // cat正在睡觉！
console.log(cat instanceof Animal); //true 
console.log(cat instanceof Cat); //true
复制代码
```

优点：

- 1、非常纯粹的继承关系，实例是子类的实例，也是父类的实例
- 2、父类新增原型方法/属性，子类都能访问到
- 3、简单，易于实现

缺点：

- 1、要想为子类新增属性和方法，必须要在`new Animal()`这样的语句之后执行，不能放构造器中
- 2、来自原型对象的所有属性被所有实例共享
- 3、创建子实例时，无法向父类构造函数传参
- 4、不支持多继承

#### 2、构造继承

核心：使用父类的构造器来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）

```js
function Cat(name) {
  Animal.call(this);
  this.name = name || 'Tom';
}

var cat = new Cat();
console.log(cat.name); // Tom
cat.sleep() // Tom正在睡觉！
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true
复制代码
```

优点：

- 1、解决了`原型链继承`中，子类实例共享父类引用属性的问题
- 2、创建子类实例时，可以向父类传递参数
- 3、可以实现多继承(call多个父类对象)

缺点：

- 1、实例并不是父类的实例，知识子类的实例
- 2、是能继承父类的实例属性和方法，不能继承原型属性/方法
- 3、无法实现函数复用，每个子类都有父类实例函数的副本，影响性能

#### 3、实例继承

核心：为父类实例添加新特性，作为子类实例返回

```js
function Cat(name){
  var instance = new Animal();
  instance.name = name || 'Tom';
  return instance;
}

var cat = new Cat();
console.log(cat.name) // Tom
cat.sleep() // Tom正在睡觉！
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // false
复制代码
```

优点：

- 1、不限制调用方式，不管是`new 子类()`还是`子类()`，返回的对象具有相同效果

缺点：

- 1、实例是父类的实例，不是子类的实例
- 2、不支持多继承

#### 4、拷贝继承

核心：就一个一个拷贝

```js
function Cat(name){
  var animal = new Animal();
  for(var p in animal){
    Cat.prototype[p] = animal[p];
  }
  this.name = name || 'Tom';
}

var cat = new Cat();
console.log(cat.name); // Tom
cat.sleep() // Tom正在睡觉！
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true
复制代码
```

优点：

- 1、支持多继承

缺点：

- 1、效率低，内存占用高（因为要拷贝父类的属性）
- 2、无法获取父类不可枚举方法（不可枚举方法，不能使用for in访问到）

#### 5、组合继承

核心：通过父类构造，继承父类的属性并保留传参的有点，然后通过将父类实例作为子类原型，实现函数复用

```js
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}
Cat.prototype = new Animal();

Cat.prototype.constructor = Cat;

var cat = new Cat();
console.log(cat.name); // Tom
cat.sleep() // Tom正在睡觉！
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // true
复制代码
```

优点：

- 1、弥补了`构造继承`的缺陷，可以继承实例属性/方法，也可继承原型属性/方法
- 2、既是子类的实例，也是父类的实例
- 3、不存在引用属性共享问题
- 4、可传参
- 5、函数可复用

缺点：

- 1、调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）

#### 6、寄生组合继承

核心：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造时，就不会初始化两次实例方法/属性，避免`继承组合`的缺点

```js
function Cat(name) {
  Animal.call(this);
  this.name = name || 'Tom';
}
// 创建一个没有实例方法的类
var Super = function () { };
Super.prototype = Animal.prototype;
//将实例作为子类的原型
Cat.prototype = new Super();

// Test Code
var cat = new Cat();
console.log(cat.name); // Tom
cat.sleep() // Tom正在睡觉！
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); //true
复制代码
```

优点：

- 1、堪称完美

缺点：

- 1、实现复杂

### 38、创建一个对象的方式有哪几种？

#### new Object创建

```js
const obj = new Object()
obj.name = 'Sunshine_Lin'
复制代码
```

#### 字面量创建

```js
const obj = { name: 'Sunshin_Lin' }
复制代码
```

#### 工厂模式创建

```js
function createObj(name) {
  const obj = new Object()
  obj.name = name
  return obj
}
const obj = createObj('Sunshine_Lin')
复制代码
```

#### 构造函数创建

```js
function Person(name) {
  this.name = name
}
const person = new Person('Sunshine_Lin')
复制代码
```

### 39、this指向的四种情况？

- 1、new操作符创建实例

```js
function Person(name) {
  this.name = name
  console.log(this)
}
// this指向当前person实例对象
const person = new Person('Sunshine_Lin')
复制代码
```

- 2、指向window

```js
function fn() {
  console.log(this)
}
fn() // 浏览器window，node里global
复制代码
```

- 3、对象调用方法

```js
const target = {
  fn: function () { console.log(this) }
}
target.fn() // target

// 这种就是改变了this了
const fn = target.fn
fn() // 浏览器window，node里global
复制代码
```

- 4、call、apply、bind改变this

```js
const obj1 = {
  name: '林三心',
  sayName: function() {
    console.log(this.name)
  }
}
const obj2 = {
  name: 'Sunshin_Lin'
}
// 改变sayName的this指向obj2
obj1.sayName.call(obj2) // Sunshin_Lin
// 改变sayName的this指向obj2
obj1.sayName.apply(obj2) // Sunshin_Lin
// 改变sayName的this指向obj2
const fn = obj1.sayName.bind(obj2)
fn() // Sunshin_Lin
复制代码
```

### 40、数组的常用方法有哪些？

| 方法    | 作用                                                 | 是否影响原数组 |
| ------- | ---------------------------------------------------- | -------------- |
| push    | 在数组后添加元素，返回数组长度                       | ✅              |
| pop     | 删除数组最后一项，返回被删除项                       | ✅              |
| shift   | 删除数组第一项，并返回数组                           | ✅              |
| unshift | 数组开头添加元素，返回添加的元素                     | ✅              |
| reserve | 反转一个数组，返回修改后的数组                       | ✅              |
| sort    | 排序一个数组，返回修改后的数组                       | ✅              |
| splice  | 截取数组，返回被截取的区间                           | ✅              |
| join    | 将一个数组所有元素连接成字符串并返回这个字符串       | ❌              |
| concat  | arr1.concat(arr2, arr3)  连接数组                    | ❌              |
| join    | arr.join(x)将arr数组元素连接成字符串并返回这个字符串 | ❌              |
| map     | 操作数组每一项并返回一个新数组                       | ❌              |
| forEach | 遍历数组，没有返回值                                 | ❌              |
| filter  | 对数组所有项进行判断，返回符合规则的新数组           | ❌              |
| every   | 数组每一项都符合规则才返回true                       | ❌              |
| some    | 数组有符合规则的一项就返回true                       | ❌              |
| reduce  | 接收上一个return和数组的下一项                       | ❌              |
| flat    | 数组扁平化                                           | ❌              |
| slice   | 截取数组，返回被截取的区间                           | ❌              |

### 41、Math的常用方法有哪些？

| 方法                | 作用            |
| ------------------- | --------------- |
| Math.max(arr)       | 取arr中的最大值 |
| Math.min(arr)       | 取arr中的最小值 |
| Math.ceil(小数)     | 小数向上取整    |
| Math.floor(小数)    | 小数向下取整    |
| Math.round(小数)    | 小数四舍五入    |
| Math.sqrt(num)      | 对num进行开方   |
| Math.pow(num, m)    | 对num取m次幂    |
| Math.random() * num | 取0-num的随机数 |

### 42、哪些因素导致内存泄漏？如何解决？

请看我这篇文章[哪是大神？只是用他人七夕约会时间，整理「JS避免内存泄漏」罢了](https://juejin.cn/post/6996828267068014600)

### 43、讲讲JavaScript的垃圾回收机制

看我这篇文章：[赠你13张图，助你20分钟打败了「V8垃圾回收机制」](https://juejin.cn/post/6995706341041897486)

### 44、JS中有哪些不同类型的弹出框？

在JS中有三种类型的弹出框可用，分别是：

- Alert
- Confirm
- Prompt

### 45. 如何将 JS 日期转换为ISO标准

**toISOString()** 方法用于将js日期转换为ISO标准。 它使用ISO标准将js Date对象转换为字符串。如：

```
var date = new Date();
var n = date.toISOString();
console.log(n);
// YYYY-MM-DDTHH:mm:ss.sssZ
复制代码
```

### 46、如何在JS中编码和解码 URL

**encodeURI()** 函数用于在JS中对URL进行编码。它将url字符串作为参数并返回编码的字符串。

**注意**： encodeURI()不会编码类似这样字符： / ? : @ & = + $ #，如果需要编码这些字符，请使用encodeURIComponent()。 用法：

```js
var uri = "my profile.php?name=sammer&occupation=pāntiNG";
var encoded_uri = encodeURI(uri);
复制代码
```

**decodeURI()** 函数用于解码js中的URL。它将编码的url字符串作为参数并返回已解码的字符串，用法：

```js
var uri = "my profile.php?name=sammer&occupation=pāntiNG";
var encoded_uri = encodeURI(uri);
decodeURI(encoded_uri);
复制代码
```

### 47、什么是BOM？有哪些api？

BOM就是`browser object model`，`浏览器对象模型`

| api                | 作用                 | 代表方法或属性                                               |
| ------------------ | -------------------- | ------------------------------------------------------------ |
| window.history     | 操纵浏览器的记录     | history.back() history.go(-1)                                |
| window.innerHeight | 获取浏览器窗口的高度 |                                                              |
| window.innerWidth  | 获取浏览器窗口的宽度 |                                                              |
| window.location    | 操作刷新按钮和地址栏 | location.host：获取域名和端口 location.hostname：获取主机名 location.port：获取端口号 location.pathname：获取url的路径 location.search：获取?开始的部分 location.href：获取整个url location.hash：获取#开始的部分 location.origin：获取当前域名 location.navigator：获取当前浏览器信息 |

### 48、BOM 和 DOM 的关系

**BOM**全称Browser Object Model，即浏览器对象模型，主要处理浏览器窗口和框架。

DOM全称Document Object Model，即文档对象模型，是 HTML 和XML 的应用程序接口（API），遵循W3C 的标准，所有浏览器公共遵守的标准。

JS是通过访问**BOM**（Browser Object Model）对象来访问、控制、修改客户端(浏览器)，由于**BOM**的window包含了document，window对象的属性和方法是直接可以使用而且被感知的，因此可以直接使用window对象的document属性，通过document属性就可以访问、检索、修改XHTML文档内容与结构。因为document对象又是DOM的根节点。

可以说，BOM包含了DOM(对象)，浏览器提供出来给予访问的是BOM对象，从BOM对象再访问到DOM对象，从而js可以操作浏览器以及浏览器读取到的文档。

### 49、JS中的substr()和substring()函数有什么区别

substr() 函数的形式为substr(startIndex,length)。 它从startIndex返回子字符串并返回'length'个字符数。

```js
var s = "hello";
( s.substr(1,4) == "ello" ) // true
复制代码
```

substring() 函数的形式为substring(startIndex,endIndex)。 它返回从startIndex到endIndex - 1的子字符串。

```js
var s = "hello";
( s.substring(1,4) == "ell" ) // true
复制代码
```

### 50、解释一下 "use strict" ?

“use strict”是Es5中引入的js指令。 使用“use strict”指令的目的是强制执行严格模式下的代码。 在严格模式下，咱们不能在不声明变量的情况下使用变量。 早期版本的js忽略了“use strict”。

### 51、 如何让事件先冒泡后捕获

在DOM标准事件模型中，是先捕获后冒泡。但是如果要实现先冒泡后捕获的效果，对于同一个事件，监听捕获和冒泡，分别对应相应的处理函数，监听到捕获事件，先暂缓执行，直到冒泡事件被捕获后再执行捕获之间。


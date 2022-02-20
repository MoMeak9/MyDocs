### 字节核心广告系统 17：00 一面

- 平时用的什么组件库

  element_UI,Vuetify

- position

- 盒模型

- box-sizing ?

  

- **this指向的4个规则 ?**

  this绑定规则一共分为四种：默认绑定，隐式绑定，显示绑定，new绑定。并且四种绑定规则的优先级顺序是 new绑定 > 显示绑定 > 隐式绑定 >  默认绑定。

  1. new绑定：构造函数返回的如果是function 或者 object  this指向的就是返回的对象
  2. 显示绑定：new apply  bind 是显示绑定的三中方法 this指向的就是绑定的对象
  3. 隐式绑定的调用是发生在某个对象上的，一般为xxx.fn( )
  4. 默认绑定：如果以上都没有，那么就是使用的默认绑定，在非严格模式下，this指向全局

  **ps: 介绍两种特殊情况**

  1.我们在写call apply 以及bind的时候 第一个参数其实是可以传null的  当传null的时候 this遵循默认绑定的规则

  2.箭头函数是没有自己的this的 箭头函数里的this是继承的上一级代码里的this。

- 给一个含有n个url的数组，输出n个请求的平均时间？

  

- 前端路由的实现方式？

  

- localStorage sessionLocalStorage

  

- cookie

  

- cookie有多少个属性？

  

- same-site干嘛的

- 防范csrf，xss？

  

- vue2双向绑定原理

- 组件通信方式

- 了解过vuex吗，没了解过

- react学过吗，没有

- 平时怎么学习前端的

- 全排列，A出来了，讲下思路
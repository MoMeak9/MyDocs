```
title: JS高阶函数及其应用
date: 2022-1-24
author: MoMeaks
sidebar: 'auto'
categories:
- fontEnd
tags:
- js
```

- 以函数作为参数
- 以函数作为返回值
- 常用于作为 **函数装饰器**

```js
funtion HOF(fn) {
    return function(...args) {
        return fn.apply(this, args);
    }
}
```



### 常用高阶函数

#### Once 只执行一次

```js
function once(fn) {
    return function(...args) {
        if(fn) {
            const ret = fn.apply(this, args);
            fn = null;
            return ret;
        }
    }
}

const list = document.querySelector('ul');
const buttons = list.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click', once((evt) => {
        const target = evt.target;
        target.parentNode.className = 'completed';
        setTimeout(()=>{
            list.removeChild(target.parentNode);
        },2000);
    }))
});
```



#### Throttle 节流

为函数添加一个间隔time，每隔time事件调用一次函数，节省其需求，比如某个事件很容易持续的发生（如鼠标移上去就触发），那么他会一直速度特别快的调用这个事件函数，这个时候为其加一个节流函数则可以防止崩溃节约流量。

```js
function throttle(fn, time = 500) {
    let timer;
    return function(...args) {
        if(timer == null) {
            fn.apply(this, args);
            timer = setTimeout(() => {
                timer = null;
            }, timer);
        }
    }
}
btn.onclick = throttle(function(e){
    /* 事件处理 */
    circle.innerHTML = parseInt(circle.innerHTML)+1;
    circle.className = 'fade';
    setTimeout(() => circle.className = '', 250);
});
```

对原始的函数进行包装，没有timer的话就注册一个timer，500ms后取消，因为在这500ms中这个timer都还存在，所以不会去执行函数（或者说执行空函数），500ms后timer取消了，函数就可以被调用执行了。



#### Debounce 防抖

在上面的节流中，timer存在期间是不会去执行函数，而防抖是在每次事件一开始的时候清空timer，然后设置timer为dur，当事件调用dur时间并且没有新的事件再次调用时（比如鼠标移动后悬停一段时间），函数就可以被调用执行了。

```js
function debounce(fn, dur) {
    dur = dur || 100;   // dur若不存在则设置dur为100ms
    var timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, dur);
    }
}
```



#### Consumer

这是将一个函数变成类似setTimeout这样的异步操作的函数，如调用了很多次某事件，将这些事件丢到一个列表中，按设定好的时间隔一段时间并执行返回其结果。先来看代码：

```js
function consumer(fn, time) {
    let tasks = [],
        timer;
    return function (...args) {
        tasks.push(fn.bind(this, ...args));
        if(timer == null) {
            timer = setInterval(() => {
                tasks.shift().call(this);
                if(tasks.length <= 0) {
                    clearInterval(timer);
                    timer = null;
                }
            }, time);
        }
    }
}
btn.onclick = consumer((evt) => {
    /*
     * 事件处理 如每次调用了很多次某事件，将这些事件丢到
     * 一个列表中，按设定好的时间隔一段时间并执行返回其结果。 
     */
    let t = parseInt(count.innerHTML.slice(1)) + 1;
    count.className = 'hit';
    let r = t * 7 % 256,
        g = t * 17  % 128,
        b = t * 31  % 128;
    count.style.color = `rgb(${r}, ${g}, ${b})`.trim();
    setTimeout(() => {
        count.className = 'hide';
    }, 500);
}, 800);
```

这里的事件处理实现了点击按钮时执行这个不断显示+count并在500ms后渐隐，而快速点击时，则将这个点击事件存储到是事件列表中每隔800ms执行（不然上一个+count还未消失）。

要弄明白函数原理，得从其中的bind函数和shift函数和call说起：

> [`bind()`](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fbind) 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

> [`shift()`](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FArray%2Fshift) 方法从数组中删除**第一个**元素，并返回该元素的值。此方法更改数组的长度。与之相反的则是 [`unshift()`](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FArray%2Funshift) 插入第一个元素。
>
> 与之相似的一对方法还有，[`pop()`](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FArray%2Fpop) 和 [`push()`](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FArray%2Fpush) ，他们作用于数组最后一个元素

> [`call()`](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fcall) 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。

那么不难看出上面这个函数的用途，将每次准备调用的函数放入tasks列表中，若定时器为空则设置一个定时器执行内容 `定时执行tasks出队，若全部tasks已经清空（当前没有任务了）则将定时器清除` ，若定时器不为空则不做操作（但放到tasks列表中了）。



#### Iterative

将一个函数，变成可迭代使用的的，这通常用于一个函数要给一组对象执行批量操作的时候。如批量设置颜色，代码如下：

```js
const isIterable = obj => obj != null && typeof obj[Symbol.iterator] === 'function';
function iterative(fn) {
    return function(subject, ...rest) {
        if(isIterable(subject)) {
            const ret = [];
            for(let obj of subject) {
                ret.push(fn.apply(this, [obj, ...rest]));
            }
            return ret;
        }
        return fn.apply(this, [subject, ...rest]);
    }
}
const setColor = iterative((el, color) => {
    el.style.color = color;
})
const els = document.querySelectorAll('li:nth-child(2n+1)');
setColor(els, 'red');
```



#### Toggle

切换状态，也可以封装成一个高级函数，这样有多少种状态只要添加到里面就可以了。

例子：

```js
function toggle(...actions) {
    return function (...args) {
        let action = actions.shift();
        action.push(action);
        return action.apply(this, args);
    }
}
// 多少态都可以!
switcher.onclick = toggle(
    evt => evt.target.className = 'off',
    evt => evt.target.className = 'on'
);
```

#### 思考

为什么要使用高阶函数？

了解一个概念：**纯函数，是指一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用**

这也就意味着，纯函数是非常靠谱的，不会对外界产生影响。

- 方便进行单元测试！
- 减少系统中非纯函数的数量，从而使得系统可靠性增加

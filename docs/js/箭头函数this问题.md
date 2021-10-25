## 导语

ES6标准新增了一种新的函数：Arrow Function（箭头函数）。为什么叫Arrow Function？因为它的定义用的就是一个箭头~

相信大家在日常开发中用到的地方非常之多，因为它很简洁，可读性强，但是它最大的好处，其实是解决了匿名函数的this指向问题，**有利于封装回调函数**。

### 结论

> 箭头函数体内的`this`对象，就是定义**该函数时所在的作用域指向的对象**，而不是使用时所在的作用域指向的对象。

## 说明

### 举个栗子

普通`function()`函数

```js
var name = 'window'; // 其实是window.name = 'window'

var A = {
   name: 'A',
   sayHello: function(){
      console.log(this.name)
   }
}

A.sayHello();// 输出A

var B = {
  name: 'B'
}

A.sayHello.call(B);//输出B

A.sayHello.call();//不传参数指向全局window对象，输出window.name也就是window
```

从上面可以看到，`sayHello`这个方法是定义在A对象中的，当当我们使用call方法，把其指向B对象，最后输出了B；可以得出，`sayHello`的this只跟使用时的对象有关。

**对比一下：**

```js
    var name = 'window';

    var A = {
        name: 'A',
        sayHello: () => {
            console.log(this.name)
        }
    }

    var B = {
        name :'B'
    }

    A.sayHello();// 还是以为输出A ? 错啦，其实输出的是window
    A.sayHello.call(B);// 还是window
```

很多人可能会以为`sayHello`是绑定在A上的，但其实它绑定在window上的。因为“**该函数所在的作用域指向的对象**”，作用域是指函数内部，这里的箭头函数，也就是`sayHello`，所在的作用域其实是最外层的JavaScript环境，指向的对象也就是`window`，因为没有其他函数包裹；然后最外层的JavaScript环境指向的对象是winodw对象，所以这里的this指向的是window对象。

> **关于call 函数：**
>
> `**call()**` 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。`call()` 允许为不同的对象分配和调用属于一个对象的函数/方法。
>
> `call()` 提供新的 **this** 值给当前调用的函数/方法。你可以使用 `call` 来实现继承：写一个方法，然后让另外一个新的对象来继承它（而不是在新对象中再写一次这个方法）。
>
> 注：该方法的语法和作用与 `apply()`]方法类似，只有一个区别，就是 `call()` 方法接受的是**一个参数列表**，而 `apply()` 方法接受的是**一个包含多个参数的数组**。

###  箭头函数跟普通函数的区别

1. 函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象。当对箭头函数使用call()和apply()方法时对函数内的this没有影响。
2. 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
3. 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
4. 不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
5. 箭头函数没有原型属性。
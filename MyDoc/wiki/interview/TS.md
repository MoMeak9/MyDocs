---
title: TypeScript面试题
date: 2021-12-29
author: MoMeaks
sidebar: 'auto'
categories:
- fontEnd
- wiki
- intern
tags:
- TypeScript
---

### ts中的访问修饰符

- public，任何地方
- private，只能在类的内部访问
- protected，能在类的内部访问和子类中访问
- readonly，属性设置为只读

### const和readonly的区别

1. const用于变量，readonly用于属性
2. const在运行时检查，readonly在编译时检查
3. 使用const变量保存的数组，可以使用push，pop等方法。但是如果使用`ReadonlyArray<number>`声明的数组不能使用push，pop等方法。

### 枚举和常量枚举（const枚举）的区别

1. 枚举会被编译时会编译成一个对象，可以被当作对象使用
2. const枚举会在ts编译期间被删除，避免额外的性能开销

```ts
// 普通枚举
enum Witcher {
  Ciri = 'Queen',
  Geralt = 'Geralt of Rivia'
}
function getGeraltMessage(arg: {[key: string]: string}): string {
  return arg.Geralt
}
getGeraltMessage(Witcher) // Geralt of Rivia
复制代码
// const枚举
const enum Witcher {
  Ciri = 'Queen',
  Geralt = 'Geralt of Rivia'
}
const witchers: Witcher[] = [Witcher.Ciri, Witcher.Geralt]
// 编译后
// const witchers = ['Queen', 'Geralt of Rivia'
```

### ts中interface可以给Function/Array/Class做声明吗？

```ts
// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}
```

```ts
// Array
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];
```

```ts
// Class, constructor存在于类的静态部分，所以不会检查
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
```

###  ts中同名的interface或者同名的interface和class可以合并吗？

1. interface会合并
2. class不可以合并

### 什么是TS的泛型

泛型用来来创建可重用的组件，一个组件可以支持多种类型的数据。这样用户就可以以自己的数据类型来使用组件。**简单的说，“泛型就是把类型当成参数”。**

###  type 和 interface 的区别

1. 类型别名可以为任何类型引入名称。例如基本类型，联合类型等
2. 类型别名不支持继承
3. 类型别名不会创建一个真正的名字
4. 类型别名无法被实现(implements)，而接口可以被派生类实现
5. 类型别名重名时编译器会抛出错误，接口重名时会产生合并

###  implements 与 extends 的区别

- extends, 子类会继承父类的所有属性和方法。
- implements，使用implements关键字的类将需要实现需要实现的类的所有属性和方法。

### 枚举和 object 的区别

1. 枚举可以通过枚举的名称，获取枚举的值。也可以通过枚举的值获取枚举的名称。
2. object只能通过key获取value
3. 数字枚举在不指定初始值的情况下，枚举值会从0开始递增。
4. 虽然在运行时，枚举是一个真实存在的对象。但是使用keyof时的行为却和普通对象不一致。必须使用keyof typeof才可以获取枚举所有属性名。

### never, void 的区别

- never，never表示永远不存在的类型。比如一个函数总是抛出错误，而没有返回值。或者一个函数内部有死循环，永远不会有返回值。函数的返回值就是never类型。
- void, 没有显示的返回值的函数返回值为void类型。如果一个变量为void类型，只能赋予undefined或者null。

### unknown, any的区别

unknown类型和any类型类似。与any类型不同的是。unknown类型可以接受任意类型赋值，但是unknown类型赋值给其他类型前，必须被断言

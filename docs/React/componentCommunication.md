---
title: React组件通信
date: 2022-02-16
author: MoMeaks
sidebar: 'auto'
categories:
- blog
tags:
- Reactc
---

> 参考：
>
> 作者：啦啦啦啦啦啦啦啦
> 链接：https://juejin.cn/post/7029675679230722084

## **为什么需要组件通讯**

组件是独立且封闭的单元，默认情况下，只能使用组件自己的数据。

在组件化过程中，我们将一个完整的功能拆分成多个组件，以更好的完成整个应用的功能。

而在这个过程中，多个组件之间不可避免的要共享某些数据

为了实现这些功能，就需要`打破组件的独立封闭性`，让其与外界沟通。这个过程就是**组件通讯**。

### **React组件通讯主要有三种方式**

1、父子组件之间

2、兄弟组件之间

3、跨组件层级

## 一、父子组件之间通信

**父子组件之间的通讯主要分为两种情况**

### 父传子

- 首先我们讲一下函数式组件的父传子

  函数式组件的父传子主要分为5步

  ```
  1.在函数式组件外导入 import { useState } from 'react'
  2.在函数式组件类  const [num, setNum] = useState(0) 这样我们就给num赋予了初始值
  3.在子组件标签上定义 <Son num={num}></Son>
  4.在子组件内部的函数式参数上写上实参props
  5.直接调用 props.num
  ```

![image-20220216232122512](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/202202162321668.png)

以下为函数式中父组件的代码

```jsx
   import { useState } from 'react' //引入useState 函数
   import reactDom from 'react-dom' 
   import Son from './son'
   export default function Father () {
     const [num, setNum] = useState(0) // 0 是初始值 返回值是一个数组
     console.log(setNum)// 修改状态的函数setNum
     return (
           <div>
               父组件
               <Son num={num}>
                   <span>
                       children的值
                   </span>
               </Son>
           </div>
     )
   }
   reactDom.render(<Father></Father>, document.getElementById('root'))
```

子组件代码

```jsx
 export default function son (props) {
 const { num } = props
 return (
       <div>
           子组件:{num}
           子组件内部的:{ children }
       </div>
 )
}
```

以下是类组件中父组件的代码

```jsx
import { Component } from 'react'
import reactDom from 'react-dom'
import Son from './son'
export default class Father extends Component {
    state={ //创建一个初始值
      num: 0
    }

    render () {
      const { num } = this.state //解构
      return (
            <div>
                父组件:{num}
                <Son num={num}></Son>
            </div>
      )
    }
}
reactDom.render(<Father></Father>, document.getElementById('root'))
```

子组件代码

```jsx
/* eslint-disable react/prop-types */  //eslint报错,需要验证传入的值,这里就不做校验了
import { Component } from 'react'

export default class son extends Component {
  render () {
    const { num } = this.props //解构传入的值
    return (
            <div>
                子组件:
                {num}
            </div>
    )
  }
}
```

### 子传父

子传父之间的传值归根结底就是在父组件中定义一个函数,然后传到子组件后进行调用,也是一种父传子的表现

- 以下为函数式组件的子传父(`类组件也类似`)

父组件

```jsx
    import { useState } from 'react'
    import reactDom from 'react-dom'
    import Son from './son'
    export default function Father () {
      const [num, setNum] = useState(0)
      //   console.log(setNum)
      const fn = () => { //定义一个函数
        setNum(num + 1)  //调用修改数据的方法
      }
      return (
            <div>
                父组件
                <Son num={num} fn={fn}></Son> //将函数传入子组件
            </div>
      )
    }
    reactDom.render(<Father></Father>, document.getElementById('root'))
```

子组件

```jsx
    export default function son (props) {
      const { num, fn } = props
      return (
            <div>
                子组件:{num}
                <button onClick={fn}>+1</button> //子组件内调用
                注意!!!  如果需要传入参数 onClick={()=>{fn(参数)}}
                //避免出现加载就触发
            </div>
      )
    }
复制代码
```

props可以传递：数字， 字符串， 布尔类型， 数组， 对象， 函数， jsx

## 二、兄弟组件之间

在react中其实不存在兄弟组件之间的传值,涉及到的兄弟组件之间的传值都会**状态提升**

- 将共享状态提升到最近的公共父组件中，由公共父组件管理这个状态
- 思想：**状态提升**
- 公共父组件职责：
  - 提供共享状态
  - 提供操作共享状态的方法
- 要通讯的子组件只需通过 props 接收状态或操作状态的方法

![image-20220216233706019](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/202202162337104.png)

## 三、跨组件层级

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d070cb5dbaa742589b2b5b44f9c36c93~tplv-k3u1fbpfcp-watermark.awebp?)

**1、类组件的跨组件传值**

类跨组件之间的传值主要有三个步骤:

1. 导入并调用createContext方法，从结果中解构出 Provider, Consumer 组件

   ```jsx
     import { createContext } from 'react'
     const { Provider, Consumer } = createContext()
   ```

2. 使用 **Provider** 组件**包裹根组件**，并通过 **value** 属性提供要共享的数据

   ```jsx
    return (
    <Provider value={ 这里放要传递的数据 }>
         <根组件的内容/>
    </Provider>
    )
   ```

3. 在任意后代组件中，使用第1步中导出的Consumer组件包裹整个组件

   ```jsx
    return (
         <Consumer>
         {
       （data） => {
         // 这里的形参data 就会自动接收Provider中传入的数据
         // console.log(data)
         return <组件的内容>
         }
     }
   </Consumer>
   )
   ```

**2、函数组件的跨组件传值**

函数跨组件之间的传值主要有三个步骤:

1. 导入并调用createContext方法，得到Context对象，导出

   ```jsx
     import { createContext } from 'react'
     export const Context = createContext()
   ```

2. 使用 **Provider** 组件**包裹根组件**，并通过 **value** 属性提供要共享的数据

   ```jsx
      return (
       <Context.Provider value={ 这里放要传递的数据 }>
             <根组件的内容/>
       </Provider>
     )
   ```

3. 在任意后代组件中，如果希望获取公共数据： 导入useContext；调用useContext(第一步中导出的context) 得到value的值

   ```jsx
    import React, { useContext } from 'react'
    import { Context } from './index'
     const 函数组件 = () => {
         const 公共数据 = useContext(Context)
         return ( 函数组件的内容 )
     }
   ```

---

---

> 总结：**Diff算法是一种对比算法**。对比两者是`旧虚拟DOM和新虚拟DOM`，对比出是哪个`虚拟节点`更改了，找出这个`虚拟节点`，并只更新这个虚拟节点所对应的`真实节点`，而不用更新其他数据没发生改变的节点，实现`精准`地更新真实DOM，进而`提高效率`

## 前言

大家好，我是林三心，在日常面试中，`Diff算法`都是绕不过去的一道坎，**用最通俗的话，讲最难的知识点**一直是我写文章的宗旨，今天我就用通俗的方式来讲解一下`Diff算法`吧？Lets Go

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3208317c535348a9abb7438bebab01d6~tplv-k3u1fbpfcp-watermark.awebp)

## 什么是虚拟DOM

讲`Diff算法`前，我先给大家讲一讲什么是`虚拟DOM`吧。这有利于后面大家对`Diff算法`的理解加深。

`虚拟DOM`是一个`对象`，一个什么样的对象呢？**一个用来表示真实DOM的对象**，要记住这句话。我举个例子，请看以下`真实DOM`：

```js
<ul id="list">
    <li class="item">哈哈</li>
    <li class="item">呵呵</li>
    <li class="item">嘿嘿</li>
</ul>
复制代码
```

对应的`虚拟DOM`为：

```js
let oldVDOM = { // 旧虚拟DOM
        tagName: 'ul', // 标签名
        props: { // 标签属性
            id: 'list'
        },
        children: [ // 标签子节点
            {
                tagName: 'li', props: { class: 'item' }, children: ['哈哈']
            },
            {
                tagName: 'li', props: { class: 'item' }, children: ['呵呵']
            },
            {
                tagName: 'li', props: { class: 'item' }, children: ['嘿嘿']
            },
        ]
    }
复制代码
```

这时候，我修改一个`li标签`的文本：

```js
<ul id="list">
    <li class="item">哈哈</li>
    <li class="item">呵呵</li>
    <li class="item">林三心哈哈哈哈哈</li> // 修改
</ul>
复制代码
```

这时候生成的`新虚拟DOM`为：

```js
let newVDOM = { // 新虚拟DOM
        tagName: 'ul', // 标签名
        props: { // 标签属性
            id: 'list'
        },
        children: [ // 标签子节点
            {
                tagName: 'li', props: { class: 'item' }, children: ['哈哈']
            },
            {
                tagName: 'li', props: { class: 'item' }, children: ['呵呵']
            },
            {
                tagName: 'li', props: { class: 'item' }, children: ['林三心哈哈哈哈哈']
            },
        ]
    }
复制代码
```

这就是咱们平常说的`新旧两个虚拟DOM`，这个时候的`新虚拟DOM`是数据的最新状态，那么我们直接拿`新虚拟DOM`去渲染成`真实DOM`的话，效率真的会比直接操作真实DOM高吗？那肯定是不会的，看下图：

![截屏2021-08-07 下午10.24.17.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0089a781a80244308472447b86cad21e~tplv-k3u1fbpfcp-watermark.awebp)

由上图，一看便知，肯定是第2种方式比较快，因为第1种方式中间还夹着一个`虚拟DOM`的步骤，所以**虚拟DOM比真实DOM快**这句话其实是错的，或者说是不严谨的。那正确的说法是什么呢？**虚拟DOM算法操作真实DOM，性能高于直接操作真实DOM**，`虚拟DOM`和`虚拟DOM算法`是两种概念。`虚拟DOM算法 = 虚拟DOM + Diff算法`

## 什么是Diff算法

上面咱们说了`虚拟DOM`，也知道了只有`虚拟DOM + Diff算法`才能真正的提高性能，那讲完`虚拟DOM`，我们再来讲讲`Diff算法`吧，还是上面的例子(这张图被压缩的有点小，大家可以打开看，比较清晰)：

![截屏2021-08-07 下午10.59.31.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c57a7b4e91a4a359474fb4c281f6d8e~tplv-k3u1fbpfcp-watermark.awebp)

上图中，其实只有一个li标签修改了文本，其他都是不变的，所以没必要所有的节点都要更新，只更新这个li标签就行，Diff算法就是查出这个li标签的算法。

总结：**Diff算法是一种对比算法**。对比两者是`旧虚拟DOM和新虚拟DOM`，对比出是哪个`虚拟节点`更改了，找出这个`虚拟节点`，并只更新这个虚拟节点所对应的`真实节点`，而不用更新其他数据没发生改变的节点，实现`精准`地更新真实DOM，进而`提高效率`。

`使用虚拟DOM算法的损耗计算`： 总损耗 = 虚拟DOM增删改+（与Diff算法效率有关）真实DOM差异增删改+（较少的节点）排版与重绘

`直接操作真实DOM的损耗计算`： 总损耗 = 真实DOM完全增删改+（可能较多的节点）排版与重绘

## Diff算法的原理

### Diff同层对比

新旧虚拟DOM对比的时候，Diff算法比较只会在同层级进行, 不会跨层级比较。 所以Diff算法是:`深度优先算法`。 时间复杂度:`O(n)`

![截屏2021-08-08 上午11.32.47.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ca3d338e5a445ab80e40042c50ac79a~tplv-k3u1fbpfcp-watermark.awebp)

### Diff对比流程

当数据改变时，会触发`setter`，并且通过`Dep.notify`去通知所有`订阅者Watcher`，订阅者们就会调用`patch方法`，给真实DOM打补丁，更新相应的视图。对于这一步不太了解的可以看一下我之前写[Vue源码系列](https://juejin.cn/column/6969563635194527758)

`newVnode和oldVnode`：同层的新旧虚拟节点 ![截屏2021-08-08 上午11.49.38.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1db54647698e4c76b6fc38a02067ad72~tplv-k3u1fbpfcp-watermark.awebp)

### patch方法

这个方法作用就是，对比当前同层的虚拟节点是否为同一种类型的标签`(同一类型的标准，下面会讲)`：

- 是：继续执行`patchVnode方法`进行深层比对
- 否：没必要比对了，直接整个节点替换成`新虚拟节点`

来看看`patch`的核心原理代码

```js
function patch(oldVnode, newVnode) {
  // 比较是否为一个类型的节点
  if (sameVnode(oldVnode, newVnode)) {
    // 是：继续进行深层比较
    patchVnode(oldVnode, newVnode)
  } else {
    // 否
    const oldEl = oldVnode.el // 旧虚拟节点的真实DOM节点
    const parentEle = api.parentNode(oldEl) // 获取父节点
    createEle(newVnode) // 创建新虚拟节点对应的真实DOM节点
    if (parentEle !== null) {
      api.insertBefore(parentEle, vnode.el, api.nextSibling(oEl)) // 将新元素添加进父元素
      api.removeChild(parentEle, oldVnode.el)  // 移除以前的旧元素节点
      // 设置null，释放内存
      oldVnode = null
    }
  }

  return newVnode
}
复制代码
```

### sameVnode方法

patch关键的一步就是`sameVnode方法判断是否为同一类型节点`，那问题来了，怎么才算是同一类型节点呢？这个`类型`的标准是什么呢？

咱们来看看sameVnode方法的核心原理代码，就一目了然了

```js
function sameVnode(oldVnode, newVnode) {
  return (
    oldVnode.key === newVnode.key && // key值是否一样
    oldVnode.tagName === newVnode.tagName && // 标签名是否一样
    oldVnode.isComment === newVnode.isComment && // 是否都为注释节点
    isDef(oldVnode.data) === isDef(newVnode.data) && // 是否都定义了data
    sameInputType(oldVnode, newVnode) // 当标签为input时，type必须是否相同
  )
}
复制代码
```

### patchVnode方法

这个函数做了以下事情：

- 找到对应的`真实DOM`，称为`el`
- 判断`newVnode`和`oldVnode`是否指向同一个对象，如果是，那么直接`return`
- 如果他们都有文本节点并且不相等，那么将`el`的文本节点设置为`newVnode`的文本节点。
- 如果`oldVnode`有子节点而`newVnode`没有，则删除`el`的子节点
- 如果`oldVnode`没有子节点而`newVnode`有，则将`newVnode`的子节点真实化之后添加到`el`
- 如果两者都有子节点，则执行`updateChildren`函数比较子节点，这一步很重要

```js
function patchVnode(oldVnode, newVnode) {
  const el = newVnode.el = oldVnode.el // 获取真实DOM对象
  // 获取新旧虚拟节点的子节点数组
  const oldCh = oldVnode.children, newCh = newVnode.children
  // 如果新旧虚拟节点是同一个对象，则终止
  if (oldVnode === newVnode) return
  // 如果新旧虚拟节点是文本节点，且文本不一样
  if (oldVnode.text !== null && newVnode.text !== null && oldVnode.text !== newVnode.text) {
    // 则直接将真实DOM中文本更新为新虚拟节点的文本
    api.setTextContent(el, newVnode.text)
  } else {
    // 否则

    if (oldCh && newCh && oldCh !== newCh) {
      // 新旧虚拟节点都有子节点，且子节点不一样

      // 对比子节点，并更新
      updateChildren(el, oldCh, newCh)
    } else if (newCh) {
      // 新虚拟节点有子节点，旧虚拟节点没有

      // 创建新虚拟节点的子节点，并更新到真实DOM上去
      createEle(newVnode)
    } else if (oldCh) {
      // 旧虚拟节点有子节点，新虚拟节点没有

      //直接删除真实DOM里对应的子节点
      api.removeChild(el)
    }
  }
}
复制代码
```

其他几个点都很好理解，我们详细来讲一下`updateChildren`

### updateChildren方法

这是`patchVnode`里最重要的一个方法，新旧虚拟节点的子节点对比，就是发生在`updateChildren方法`中，接下来就结合一些图来讲，让大家更好理解吧

是怎么样一个对比方法呢？就是`首尾指针法`，新的子节点集合和旧的子节点集合，各有首尾两个指针，举个例子：

```html
<ul>
    <li>a</li>
    <li>b</li>
    <li>c</li>
</ul>

修改数据后

<ul>
    <li>b</li>
    <li>c</li>
    <li>e</li>
    <li>a</li>
</ul>

复制代码
```

那么新旧两个子节点集合以及其首尾指针为：

![截屏2021-08-08 下午2.55.26.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3eb33b1b28e7461f9aedb857736a142c~tplv-k3u1fbpfcp-watermark.awebp)

然后会进行互相进行比较，总共有五种比较情况：

- 1、`oldS 和 newS `使用`sameVnode方法`进行比较，`sameVnode(oldS, newS)`
- 2、`oldS 和 newE `使用`sameVnode方法`进行比较，`sameVnode(oldS, newE)`
- 3、`oldE 和 newS `使用`sameVnode方法`进行比较，`sameVnode(oldE, newS)`
- 4、`oldE 和 newE `使用`sameVnode方法`进行比较，`sameVnode(oldE, newE)`
- 5、如果以上逻辑都匹配不到，再把所有旧子节点的 `key` 做一个映射到旧节点下标的 `key -> index` 表，然后用新 `vnode` 的 `key` 去找出在旧节点中可以复用的位置。

![截屏2021-08-08 下午2.57.22.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/727b5dd8a3424d22afd9dc5cf0dae05e~tplv-k3u1fbpfcp-watermark.awebp)

**接下来就以上面代码为例，分析一下比较的过程**

分析之前，请大家记住一点，最终的渲染结果都要以newVDOM为准，这也解释了为什么之后的节点移动需要移动到newVDOM所对应的位置

![截屏2021-08-08 下午3.03.31.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1efbc4e76c234dccb44cef0a75073d98~tplv-k3u1fbpfcp-watermark.awebp)

- 第一步

```js
oldS = a, oldE = c
newS = b, newE = a
复制代码
```

比较结果：`oldS 和 newE` 相等，需要把`节点a`移动到`newE`所对应的位置，也就是末尾，同时`oldS++`，`newE--`

![截屏2021-08-08 下午3.26.25.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d7698f560bb44107911585580c241a99~tplv-k3u1fbpfcp-watermark.awebp)

- 第二步

```js
oldS = b, oldE = c
newS = b, newE = e
复制代码
```

比较结果：`oldS 和 newS`相等，需要把`节点b`移动到`newS`所对应的位置，同时`oldS++`,`newS++`

![截屏2021-08-08 下午3.27.13.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1cda8545d6634bcdbf2d007193922092~tplv-k3u1fbpfcp-watermark.awebp)

- 第三步

```js
oldS = c, oldE = c
newS = c, newE = e
复制代码
```

比较结果：`oldS、oldE 和 newS`相等，需要把`节点c`移动到`newS`所对应的位置，同时`oldS++`,`newS++`

![截屏2021-08-08 下午3.31.48.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fdbca1cefdec4ba08637c37a70f26af6~tplv-k3u1fbpfcp-watermark.awebp)

- 第四步

`oldS > oldE`，则`oldCh`先遍历完成了，而`newCh`还没遍历完，说明`newCh比oldCh多`，所以需要将多出来的节点，插入到真实DOM上对应的位置上

![截屏2021-08-08 下午3.37.51.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ec374b664e94888b00721829738ea7a~tplv-k3u1fbpfcp-watermark.awebp)

- 思考题

我在这里给大家留一个思考题哈。上面的例子是`newCh比oldCh多`，假如相反，是`oldCh比newCh多`的话，那就是`newCh`先走完循环，然后`oldCh`会有多出的节点，结果会在真实DOM里进行删除这些旧节点。大家可以自己思考一下，模拟一下这个过程，像我一样，画图模拟，才能巩固上面的知识。

附上`updateChildren`的核心原理代码

```js
function updateChildren(parentElm, oldCh, newCh) {
  let oldStartIdx = 0, newStartIdx = 0
  let oldEndIdx = oldCh.length - 1
  let oldStartVnode = oldCh[0]
  let oldEndVnode = oldCh[oldEndIdx]
  let newEndIdx = newCh.length - 1
  let newStartVnode = newCh[0]
  let newEndVnode = newCh[newEndIdx]
  let oldKeyToIdx
  let idxInOld
  let elmToMove
  let before
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx]
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx]
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx]
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldStartVnode, newStartVnode)) {
      patchVnode(oldStartVnode, newStartVnode)
      oldStartVnode = oldCh[++oldStartIdx]
      newStartVnode = newCh[++newStartIdx]
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      patchVnode(oldEndVnode, newEndVnode)
      oldEndVnode = oldCh[--oldEndIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldStartVnode, newEndVnode)) {
      patchVnode(oldStartVnode, newEndVnode)
      api.insertBefore(parentElm, oldStartVnode.el, api.nextSibling(oldEndVnode.el))
      oldStartVnode = oldCh[++oldStartIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldEndVnode, newStartVnode)) {
      patchVnode(oldEndVnode, newStartVnode)
      api.insertBefore(parentElm, oldEndVnode.el, oldStartVnode.el)
      oldEndVnode = oldCh[--oldEndIdx]
      newStartVnode = newCh[++newStartIdx]
    } else {
      // 使用key时的比较
      if (oldKeyToIdx === undefined) {
        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx) // 有key生成index表
      }
      idxInOld = oldKeyToIdx[newStartVnode.key]
      if (!idxInOld) {
        api.insertBefore(parentElm, createEle(newStartVnode).el, oldStartVnode.el)
        newStartVnode = newCh[++newStartIdx]
      }
      else {
        elmToMove = oldCh[idxInOld]
        if (elmToMove.sel !== newStartVnode.sel) {
          api.insertBefore(parentElm, createEle(newStartVnode).el, oldStartVnode.el)
        } else {
          patchVnode(elmToMove, newStartVnode)
          oldCh[idxInOld] = null
          api.insertBefore(parentElm, elmToMove.el, oldStartVnode.el)
        }
        newStartVnode = newCh[++newStartIdx]
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].el
    addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx)
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
  }
}
复制代码
```

## 用index做key

平常v-for循环渲染的时候，为什么不建议用index作为循环项的key呢？

我们举个例子，左边是初始数据，然后我在数据前插入一个新数据，变成右边的列表

```js
<ul>                      <ul>
    <li key="0">a</li>        <li key="0">林三心</li>
    <li key="1">b</li>        <li key="1">a</li>
    <li key="2">c</li>        <li key="2">b</li>
                              <li key="3">c</li>
</ul>                     </ul>

复制代码
```

按理说，最理想的结果是：只插入一个li标签新节点，其他都不动，确保操作DOM效率最高。但是我们这里用了index来当key的话，真的会实现我们的理想结果吗？废话不多说，实践一下：

```js
<ul>
   <li v-for="(item, index) in list" :key="index">{{ item.title }}</li>
</ul>
<button @click="add">增加</button>

list: [
        { title: "a", id: "100" },
        { title: "b", id: "101" },
        { title: "c", id: "102" },
      ]
      
add() {
      this.list.unshift({ title: "林三心", id: "99" });
    }
复制代码
```

点击按钮我们可以看到，并不是我们预想的结果，而是所有li标签都更新了

![keyindex.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44fc88e0125f49328afb321108c72bcd~tplv-k3u1fbpfcp-watermark.awebp)

为什么会这样呢？还是通过图来解释

按理说，`a，b，c`三个li标签都是复用之前的，因为他们三个根本没改变，改变的只是前面新增了一个`林三心`

![截屏2021-08-08 下午5.43.25.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f4f0d74d014743a79e11552b0c9351d5~tplv-k3u1fbpfcp-watermark.awebp)

但是我们前面说了，在进行子节点的 `diff算法` 过程中，会进行 旧首节点和新首节点的`sameNode`对比，这一步命中了逻辑，因为现在`新旧两次首部节点` 的 `key` 都是 `0`了，同理，key为1和2的也是命中了逻辑，导致`相同key的节点`会去进行`patchVnode`更新文本，而原本就有的`c节点`，却因为之前没有key为4的节点，而被当做了新节点，所以很搞笑，使用index做key，最后新增的居然是本来就已有的c节点。所以前三个都进行`patchVnode`更新文本，最后一个进行了`新增`，那就解释了为什么所有li标签都更新了。

![截屏2021-08-08 下午5.45.17.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ecc93fb2bc544a83b8cc7b7cbcaf1857~tplv-k3u1fbpfcp-watermark.awebp)

那我们可以怎么解决呢？其实我们只要使用一个独一无二的值来当做key就行了

```js
<ul>
   <li v-for="item in list" :key="item.id">{{ item.title }}</li>
</ul>
复制代码
```

现在再来看看效果

![idkey.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/885269d6d23340f19e9100ec60564173~tplv-k3u1fbpfcp-watermark.awebp)

为什么用了id来当做key就实现了我们的理想效果呢，因为这么做的话，`a，b，c节点`的`key`就会是永远不变的，更新前后key都是一样的，并且又由于`a，b，c节点`的内容本来就没变，所以就算是进行了`patchVnode`，也不会执行里面复杂的更新操作，节省了性能，而林三心节点，由于更新前没有他的key所对应的节点，所以他被当做新的节点，增加到真实DOM上去了。

![截屏2021-08-08 下午6.04.34.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/833e0a795a3e4893a0c03bb78a63bffc~tplv-k3u1fbpfcp-watermark.awebp)

## 结语

希望能帮到那些一直想了解虚拟DOM和Diff算法的同学

如果你觉得本文有帮到你一点点的话，请点个赞呗哈哈

欢迎各位同学指出我的错误，我会及时更改滴

学习群请点[这里](https://juejin.cn/pin/6969565162885873701)，一起学习，一起摸鱼！！！

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b39cd5171de148bf898c5c9f50e30268~tplv-k3u1fbpfcp-watermark.awebp)

>作者：Sunshine_Lin
>链接：https://juejin.cn/post/6994959998283907102
>来源：稀土掘金
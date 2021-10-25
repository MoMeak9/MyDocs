> 整理了一套比较完整的npm发布的教程，希望可以帮到你
>

## 1. 先从npm说起

### **一、npm（node `package` manager）**

- 是一个辅助前端开发的**包管理工具**
- 包括：
  - 网站：找包、注册用户
  - 命令行：程序员与npm交互的主要形式
  - 仓库：最大的JavaScript软件库
- 管理对象：包（package）
- 管理方式：
  - 增（发布：npm publish；安装：npm i）
  - 删（废弃：npm deprecate；卸载：npm rm）
  - 改（更新：npm up）
  - 查（搜索：npm s）

npm中涉及到的主体主要有两个：**package**和**module**，定义如下：

- package：`含有package.json描述文件`并`发布到npm仓库`的文件或者文件夹
- module：`在node_modules中`，可以`被Node.js的require()方法加载`的任何文件或文件夹

可以这样理解：**`一个JavaScript软件，从本地发布到npm仓库时是package，从npm仓库下载到本地时就变成了module`**

另外，基于以上，可以看出package和module的关系：

- module不一定是package（比如node内置模块），package一定是module
- 含package.json文件的module一定是package

除了以上概念外，再分别看下两个主体中的细节部分：

### 二、package（包）

主要有两个重要的属性：

##### **1.Scope**（作用域，范围）

一旦注册个人或者团体账户，就获得了与个人或者团体名相匹配的scope，可以用这个scope作为包的命名空间，例如@yuyy、@58。

分类：

- unscoped：例如babel
- scoped
  - user： 例如@yuyy/babel
  - org：@babel/parser

作用：为你自己发布的包提供命名空间，防止与他人的包名冲突

##### **2.Accessibility**（可访问性）

属性值有：

- private：私有，仅作者本人或团队成员可见
- public：公有，所有人可见

此属性和github创建仓库时设定访问性的策略一致：公有，所有人可见，免费；私有，仅自己可见，收费。

以上两个属性之间的关系如下：

![clipboard.png](https://segmentfault.com/img/bVblqar?w=897&h=236)

需要说明的几点：

- 个人账户（User）可以创建和管理Unscoped的package；团队账户（Org）相互只能管理Scoped的package
- Unscoped总是public
- Private的package总是Scoped
- `Scoped的package默认Private，但需要付费`，可以通过命令行改变其属性

### 三、module（模块）

下载到本地的module主要是用于在node环境被引用，为了能被Node.js的require()方法加载，module必须是下列情况之一：

- 包含package.json，且package.json中有main字段的文件夹
- 含有index.js的文件夹
- JavaScript文件

以上都是一些npm相关的知识，在下一篇[《npm发布包教程（二）：发布包》](https://segmentfault.com/a/1190000017463371)中，我们开始演示发布npm包的实际操作过程。

## 2. 发布包

### 一、准备工作

在正式开始演示前，我们还需要做两项准备工作：

#### 1.注册npm账户

[注册地址](https://www.npmjs.com/)

- 全名：
- 邮箱：
- 用户名：`重要！发布scoped包时会用到`
- 密码：

#### 2.全局安装nrm

```
npm i nrm -g
```

[nrm](https://link.segmentfault.com/?url=https%3A%2F%2Fgithub.com%2FPana%2Fnrm)是npm仓库管理的软件，可用于npm仓库的快速切换

nrm 常用命令：

```
 nrm //展示nrm可用命令
 nrm ls //列出已经配置的所有仓库
 nrm test //测试所有仓库的响应时间
 nrm add <registry> <url> //新增仓库
 nrm use <registry> //切换仓库
```

### 二、发布包

开始演示前做两个简短说明：
（1）npm官方建议规范的包**至少**包含：

- package.json（包的基本信息）
- README.md（文档）
- index.js （入口文件）

后续的演示都遵循此规范。

（2）本次仅演示个人账户的包发布，包括一个unscoped包和一个scoped的包。团体账户下的包发布流程和个人账户差别不大，在此不做展开。

#### 1.发布unscoped包

yuyy-test-pkg

##### **第一步：创建项目**

**（1）创建工程文件夹**

```
mkdir yuyy-test-pkg && cd yuyy-test-pkg
```

**（2）创建package.json**

```
npm init
```

按照提示一步步完善即可，也可使用`npm init -y`使用npm默认设置，稍后再通过编辑package.json修正。
注意：本次演示的包的入口文件是index.js，请务必确保package.json中字段main对应的值是“index.js”。
最终结果：

```
{
  "name": "yuyy-test-pkg",
  "version": "1.0.0",
  "description": "my first npm package",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "npm",
    "packge"
  ],
  "author": "yuyy",
  "license": "ISC"
}
```

**（3）创建README.md**
内容：

```
### yuyy-test-pkg

This is my first npm package!

It is just for learning.
```

**（4）创建index.js**
内容：

```
module.exports = {
    printMsg: function () {
        console.log('this message is from yuyy-test-pkg!');
    }
}
```

最终的目录结构：

```
└── yuyy-test-pkg
    ├── README.md
    ├── index.js
    └── package.json
```

##### **第二步：发布**

```
npm publish
```

可能报的错：
（1）未登录
`npm ERR!` code ENEEDAUTH
`npm ERR!` need auth auth required for publishing
`npm ERR!` need auth You need to authorize this machine using `npm adduser`

解决办法：`npm adduser`
输入：

- 用户名（忘记的话，去npm网站查看:头像 > Profile Settings）
- 密码
- 邮箱

（2）仓库地址不对
`npm ERR!` code E409
`npm ERR!` Registry returned 409 for PUT on [http://r.cnpmjs.org/-/user/or...](https://link.segmentfault.com/?url=http%3A%2F%2Fr.cnpmjs.org%2F-%2Fuser%2Forg.couchdb.user):yuyy: conflict

原因：通过`nrm ls` 命令查看我此时的仓库地址为cnpm，而不是npm

![clipboard.png](https://segmentfault.com/img/bVblqB5?w=323&h=147)

解决办法：用nrm切换到npm仓库，执行命令`nrm use npm`

以上问题解决后再次执行发布命令`npm publish`，发布成功

.![clipboard.png](https://segmentfault.com/img/bVblqCn?w=481&h=304)

##### **第三步：去npm 官网搜索**

有可能有延迟，不能立马看不到。

![clipboard.png](https://segmentfault.com/img/bVblqCT?w=1490&h=689)

#### 2.发布scoped包

@yuyy/babel

##### **第一步：创建项目**

**（1）创建工程文件夹**

```
mkdir babel && cd babel
```

**（2）创建package.json**

```
npm init
```

按提示操作，最终结果：

```
{
  "name": "babel",
  "version": "1.0.0",
  "description": "my scoped test package",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "npm",
    "package"
  ],
  "author": "yuyy",
  "license": "ISC"
}
```

**（3）创建README.md**
内容：

```
### @yuyy/babel

This is my scoped npm package!

It is just for learn.
```

**（4）创建index.js**
内容：

```
module.exports = {
    printMsg: function () {
        console.log('this message is from @yuyy/babel!');
    }
}
```

最终的目录结构：

```
└── babel
    ├── README.md
    ├── index.js
    └── package.json
```

##### **第二步：发布**

```
npm publish
```

报错：没有发布权限
`npm ERR!` publish Failed PUT 401
`npm ERR!` code E401
`npm ERR!` This package requires that publishers enable TFA and provide an OTP to publish. For more info, visit: [https://go.npm.me/2fa-guide](https://link.segmentfault.com/?url=https%3A%2F%2Fgo.npm.me%2F2fa-guide) : babel

原因：已经存在babel包，而我又不是babel的发布者

解决：包名和域名差不多，先到先得，如果我非要发布一个叫babel的包，只能给它加作用域放到我的命名空间下

##### **第三步：加作用域**

```
npm init --scope=@yuyy -y
```

@符号后面的是你注册npm账户时的username，如果不记得可以通过`npm whoami`查询。
上面的命令其实是在重新生成package.json，只是会给包增加了作用域，执行完后package.json现在的内容：

```
{
  "name": "@yuyy/babel",
  "version": "1.0.0",
  "description": "my scoped test package",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "npm",
    "package"
  ],
  "author": "yuyy",
  "license": "ISC"
}
```

唯一的变化是name字段由原来的babel变成了@yuyy/babel。

##### **第四步：再次发布**

```
npm publish
```

报错：
`npm ERR!` publish Failed PUT 402
`npm ERR!` code E402
`npm ERR!` You must sign up for private packages : @yuyy/babel

原因：

- `npm publish` 命令执行，默认是进行私有发布，参见[官网publish命令](https://link.segmentfault.com/?url=https%3A%2F%2Fdocs.npmjs.com%2Fcli%2Fpublish.html)
- [上一篇文章](https://segmentfault.com/a/1190000017461666)最后提到过scoped的包私有发布时需要收费

解决：如果不想花钱，那只能将包面向公共发布，这也符合npm鼓励开源的精神，这一点和GitHub创建仓库类似。

##### **第五步：公共发布**

```
npm publish --access public
```

执行结果：

![clipboard.png](https://segmentfault.com/img/bVblq7S?w=479&h=322)

值得注意的一点：我们的项目名是babel，最终发布的包名是@yuyy/babel，可见**发布的包名可以和项目名不一致，包名取决于package.json中的name字段。**

##### **第六步：npm官网搜索**

![clipboard.png](https://segmentfault.com/img/bVblq76?w=1486&h=695)

至此，我们完成了npm包发布的全部过程，一个unscoped包：yuyy-test-pkg，另一个scoped包：@yuyy/babel，也包括过程中可能遇到的问题。

## 3. 安装和加载原理

#### 第一步：初始化测试工程

```
mkdir test-my-pkg && cd test-my-pkg
 
npm init -y
```

#### 第二步：npm官网找包

官网输入我们已经发布的包

- yuyy-test-pkg
- @yuyy/babel

页面会有安装命令，如下图所示：

![clipboard.png](https://segmentfault.com/img/bVblre6?w=1505&h=703)

#### 第三步：安装

依次执行下面的命令

```
 npm i yuyy-test-pkg

 npm i @yuyy/babel
```

此时的目录结构：

```
test-my-pkg
├── node_modules
│   ├── @yuyy
│   │   └── babel
│   │       ├── README.md
│   │       ├── index.js
│   │       └── package.json
│   └── yuyy-test-pkg
│       ├── README.md
│       ├── index.js
│       └── package.json
├── package-lock.json
└── package.json
```

#### 第四步：使用

(1) 建index.js
index.js:

```javascript
let printer = require('yuyy-test-pkg');
let otherPrinter = require('@yuyy/babel');

printer.printMsg();
otherPrinter.printMsg();
```

(2) 运行index.js

```
node index.js
```

执行结果：

```
this message is from yuyy-test-pkg!
this message is from @yuyy/babel!
```

以上即为对我们自己的包引用的整个过程，值得注意的是：
我们知道在Node环境中是通过CommonJS的风格管理模块的，所以在第四步引用模块的时候使用的是require()。关于require()的原理，阮一峰老师的《require()源码解读》中有详细介绍，不再赘述，仅将require()的内部原理摘抄整理如下，以伪代码的形式呈现：

Node中执行：

```
require(X)
```

解析过程：

```javascript
if(X 是Node内部模块){
    return X
}else if(X 带路径，以 ‘/‘、‘./‘、’../'开头){
    resolveModule(X)
}else if(X 不带路径){
    /当前工程/node_modules 执行 resolveModule(X)
    ./当前工程 node_modules 执行 resolveModule(X)
    ../当前工程 node_modules 执行 resolveModule(X)
    .
    .
    .
}else {
    return 'not found'
}

function resolveModule(X){
    absolutePath = X的绝对路径（根据X所在的父模块可知）
    if(X 是文件){
        return absolutePath/X || absolutePath/X.js || absolutePath/X.json || absolutePath/X.node;
    }else if(X 是目录){
        return absolutePath/X/package.json(main字段) || absolutePath/X/index.js || absolutePath/X/index.json || absolutePath/X/index.node
    }
}
```

## 4. 迭代

npm包的每次迭代都要涉及到两个方面：

- 内容的变更
- 版本的变更

我们首先来演示内容的变更，以yuyy-test-pkg为例

#### 一、更新内容

index.js变更为：

```
module.exports = {
    printMsg: function () {
        console.log('this message is from yuyy-test-pkg!');
        
        console.log('the version of this package has updated!');
    }
}
```

#### 二、更新版本

在演示版本变更前，我们先来了解一下npm版本相关的知识。

**npm采用[语义化版本](https://link.segmentfault.com/?url=https%3A%2F%2Fdocs.npmjs.com%2Fabout-semantic-versioning)，共三位，以’.’隔开，从左至右依次代表：主版本（major）、次要版本（minor）、补丁版本（patch）。**

例如：
`1.0.0`
`major.minor.patch`

关于版本变更规范：
![clipboard.png](https://segmentfault.com/img/bVbluJW?w=1570&h=394)

变更版本号的命令：npm version <major | minor | patch>

假如我们本次是次要发布，我们执行命令：

```
npm version minor
```

执行结果：

![clipboard.png](https://segmentfault.com/img/bVbluIV?w=275&h=38)

package.json中的version也已变为1.1.0：

```
{
  "name": "yuyy-test-pkg",
  "version": "1.1.0",
  "description": "my first npm package",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "npm",
    "packge"
  ],
  "author": "yuyy",
  "license": "ISC"
}
```

#### 三、发布

```
npm publish
```

结果：

![clipboard.png](https://segmentfault.com/img/bVbluJb?w=484&h=303)

我们可以通过命令查看我们包的所有版本：

```
npm view yuyy-test-pkg versions
```

结果：

![clipboard.png](https://segmentfault.com/img/bVbluJe?w=414&h=44)

#### 四、安装更新

（1）切换到test-my-pkg目录下

```
npm up yuyy-pkg
```

结果：

![clipboard.png](https://segmentfault.com/img/bVbluJo?w=373&h=150)

（2）执行index.js

```
node index.js
```

输出结果：

![ww](https://segmentfault.com/img/bVbluJs?w=393&h=87)

以上就是npm包迭代的过程，我们本次已unscoped包yuyy-test-pkg为例，对于scoped包的迭代过程没有差异。

## 5. 废弃/删除

npm包发布后可以对包进行废弃或删除操作，废弃和删除的区别在于：

- 废弃不会将包或版本从npm仓库删除，仍然可以继续下载安装，并在安装的时候会有警示
- 删除会将包从npm彻底删除，无法被下载安装

无论是废弃还是删除，都包含两个层面：

- 版本的废弃/删除
- 包的废弃/删除

#### 一、废弃

废弃原因：

- 版本：鼓励用户更新最新版本
- 包：此包内容已经过时，没有了维护的价值

**第一步：废弃指定版本**
语法：`npm deprecate <pkg>[@<version>] <message>`

我们以yuyy-test-pkg为例：

```
npm deprecate yuyy-test-pkg@1.1.0 'test deprecate'
```

执行后我们用`npm view yuyy-test-pkg versions`查看版本：

![clipboard.png](https://segmentfault.com/img/bVblvso?w=354&h=38)

记录的版本号并无变化。

**第二步：安装废弃版本**
切换到test-my-pkg目录下，执行：

```
npm i yuyy-test-pkg@1.1.0
```

运行结果：

![clipboard.png](https://segmentfault.com/img/bVblvs4?w=404&h=150)

**第三步：运行index.js**
在test-my-pkg目录下

```
node index.js
```

结果：
![clipboard.png](https://segmentfault.com/img/bVblvtw?w=307&h=78)

所以，废弃的包除了安装时会有警示，并不影响使用。

#### 二、删除

npm不鼓励任何形式的删除，主要因为我们发布的包可能已经被其他人引用，如果我们删除了此包，其他人在重新安装含有我们包的依赖的工程时，出现找不到包问题。

基于此，npm做了相关的删除限制：

- `删除的版本24小时后方可重发!`
- `只有发布72小时之内的包可以删除!`

**第一步：删除发布的包**
我们之前在[《npm发布包教程（二）：发布包》](https://segmentfault.com/a/1190000017463371)发布的包仅为演示所用，为保持npm仓库的纯净，我们都删除掉：

```
npm unpublish yuyy-test-pkg --force
npm unpublish @yuyy/babel --force
```

**第二步：去官网查找**

![clipboard.png](https://segmentfault.com/img/bVblvt7?w=643&h=175)

![clipboard.png](https://segmentfault.com/img/bVblvt9?w=605&h=163)

**第二步**
切换到test-my-pkg目录下，先将两个包卸载：

```
npm rm yuyy-test-pkg @yuyy/babel
```

结果：

![clipboard.png](https://segmentfault.com/img/bVblvuI?w=363&h=116)

然后再重新安装：

```
npm i yuyy-test-pkg @yuyy/babel
```

结果：

![clipboard.png](https://segmentfault.com/img/bVblvuJ?w=536&h=112)

已经删除的包无法再安装。

至此，我们完成npm包的整个生命周期的演示过程，大家可以开源的道路上又多了一条很重要的道路。

最后，我觉得作为一个开发者，我们有责任和义务维护每一个社区的纯净，所以在发布npm包的时候应该尽量精益求精，避免发一些没有价值的东西给其他人造成困扰。构建美好生态，人人有责。
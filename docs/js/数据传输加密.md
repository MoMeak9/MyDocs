# 前端加密那点事

## 前奏

最近公司一个项目在传输数据的时候，测试部门安全扫描后，发现密码类型的数据是明文传输的，果断不符合要求，让加密，就有了接下来的故事。

## 使用场景

前后端使用HTTP协议进行交互的时候，由于HTTP报文为明文，所以通常情况下对于比较敏感的信息可以通过加密在前端加密，然后在后端解密实现"混淆"的效果，避免在传输过程中敏感信息的泄露（如，密码，证件信息等）。不过前端加密只能保证传输过程中信息是‘混淆’过的，对于高手来说，打个debugger，照样可以获取到数据，并不安全，所谓的前端加密只是稍微增加了攻击者的成本，并不能保证真正的安全。
综上，服务端绝对不能相信前端传递过来的密文直接保存入库，只能通过服务端自己加密进行加密保存。那么前端加密是不是就没有意义了呢？答案是否定的，至少可以保证传输过程中不是明文传输，如果前后端交互需要安全的通道建议使用HTTPS协议进行通信。

## 分类

简单来说，加密分两种方式

- 对称加密
  **对称加密采用了对称密码编码技术，它的特点是文件加密和解密使用相同的密钥加密也就是密钥也可以用作解密密钥，这种方法在密码学中叫做对称加密算法，对称加密算法使用起来简单快捷，密钥较短，且破译困难，除了数据加密标准（DES），另一个对称密钥加密系统是国际数据加密算法（IDEA），它比DES的加密性好，而且对计算机功能要求也没有那么高**
  常见的对称加密算法有DES、3DES、Blowfish、IDEA、RC4、RC5、RC6和AES
- 非对称加密
  **非对称加密算法需要两个密钥：公钥（publickey）和私钥（privatekey）。 公钥与私钥是一对，如果用公钥对数据进行加密，只有用对应的私钥才能解密；如果用私钥对数据进行加密，那么只有用对应的公钥才能解密。因为加密和解密使用的是两个不同的密钥，所以这种算法叫作非对称加密算法。 非对称加密算法实现机密信息交换的基本过程是：甲方生成一对密钥并将其中的一把作为公钥向其它方公开；得到该公钥的乙方使用该密钥对机密信息进行加密后再发送给甲方；甲方再用自己保存的另一把专用密钥对加密后的信息进行解密。甲方只能用其专用密钥解密由其公钥加密后的任何信息。**
  常见的非对称加密算法有：RSA、ECC（移动设备用）、Diffie-Hellman、El Gamal、DSA（数字签名用）

## 前后端实现（NodeJS）

- 后台使用的技术栈是

  ```
    + express
  复制代码
  ```

- 前端技术栈

  ```
    + vite
    + vue3
    + axios
    + jsencrypt
    + crypto-js
  复制代码
  ```

### 安装项目并启动

##### Node后端

- 创建一个新的文件夹执行

  ```
  yarn add express
  ```

- 根目录下创建app.js

```javascript
   const fs  = require("fs")
   const path = require("path")
   const crypto = require("crypto") // node自带的密码相关的模块

   const express = require("express")

   const app = new express() // 实例化 express

   const router = express.Router() // 创建理由

   router.get("/api/get", (req, res) => {
       res.json([{
           name: '张三',
           age: 28
       },{
           name: '李四',
           age: 24
       }])
   })


   app.use(router) //将路由注入到 express中


   // 启动服务
   const port = 5555
   app.listen(port,() => {
       console.log("server running: 127.0.0.1:" + port);
   })
```

- 启动项目

```javascript
    nodemon ./app.js
```

## 前端项目启动

- 安装 

  ```
  vite
  ```

  ```
      npm init @vitejs/app
  复制代码
  ```

- 创建工程化目录,并安装依赖

  ```
      npm init @vitejs/app client --template vue
      cd client
      yarn add axios jsencrypt crypto-js
      yarn install
  复制代码
  ```

- 修改

  ```
  vite.config.js
  ```

  添加反向代理

  ```js
      import { defineConfig } from 'vite'
      import vue from '@vitejs/plugin-vue'
  
      // https://vitejs.dev/config/
      export default defineConfig({
        plugins: [vue()],
        server: {
          proxy:{
            '/api': 'http://localhost5555'
          }
        },
      })
  
  复制代码
  ```

- src目录下创建

  ```
  utils/http.js
  ```

  设置 

  ```
  axios
  ```

  拦截器

  ```js
      import axios from 'axios'
      //请求拦截
      axios.interceptors.request.use(function (config) {
          return config;
        }, function (error) {
          return Promise.reject(error);
        });
  
      // 响应拦截
      axios.interceptors.response.use(function (response) {
          return response;
        }, function (error) {
          return Promise.reject(error);
        });
  
        export default axios
  复制代码
  ```

- 接下来再改造下

  ```
  app.vue
  ```

  ```js
      <template>
     <div>
       <ul>
         <li v-for="(item, idx) in info.getData" :key="idx">
           <span>{{item.name}}</span>
           <span>{{item.age}}</span>
         </li>
       </ul>
     </div>
     </template>
  
     <script setup>
     import { reactive } from 'vue'
     import http from './utils/http'
     const info = reactive({
       getData: []
     })
     http({
       url: '/api/get',
       method: 'get',
       params: {
         name: '张三',
         age: '18'
       }
     }).then(res => {
       info.getData = res.data
     })
     </script>
  
  复制代码
  ```

- 黎明前的最后一步了，启动项目访问

  ```
  localhost:3000
  ```

  ```
      yarn dev
  复制代码
  ```

- 当我们看到这个页面就证明第一步大功告成了 ![test01.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/acc8ff1c58514816b03861df951c4e9f~tplv-k3u1fbpfcp-watermark.image)

## 2、加密逻辑

- 我们来理一下整个加密过程的逻辑。防止非法分子在请求发送、响应的过程中篡改数据
- 首先在客户端启动的时候，发送一个请求，获取公钥，存在浏览器本地(`sessionStorage、Storage`)都可以，这次我们就存在`sessionStorage`,

然后我们发送数据的时候首先通过`HMACSHA256`对数据进行散列消息认证，得到一串不可逆的字符串，然后通过非对称加密的方式使用我们请求回来的公钥加密这个字符串。通过请求头发送给后台

- 后台
  - 当用户请求公钥时，
    - 首先我们需要判断项目跟目录下是否有公钥文件，如果有直接返回公钥文件内容
    - 如果没有创建公钥和私钥，再返回公钥
  - 接下来需要写一个中间件，判断哪些路由是不需要验证的，
    - 比如获取公钥的接口就不需要验证，对不需要验证的接口直接放行
    - 对需要验证的路由，我们拿到请求头信息，用公钥对应的私钥去解密， 就会获取到`HMACSHA256`认证后的字符串。接下来我们用`HMACSHA256`对明文参数进行相同的消息认证。对比解密出来的认证字符串和自己生成的认证字符串是否一致，一致的话证明数据没有被篡改，执行放行操作，否则返回对应的错误信息提示

## 3、 加解密

### 3.1、前端通过`/api/getpubkey`接口获取公钥

```js
        http({
          url: '/api/getpubkey',
          method: 'get',
        }).then(res => {
          sessionStorage.setItem("pubKey",res.data.data)
        })
复制代码
```

### 3.2、后台相关代码如下

```js
        const { execSync } = require('child_process'); //execSync方法主要是允许我们在node中写linux命令
        const resolve = _path => path.resolve(__dirname, _path)

router.get("/api/getpubkey", (req, res) => {
    //1. 读取公钥文件

    let resPublicKey = ''
    try {
        resPublicKey = fs.readFileSync(resolve('./rsa_public.key')).toString()
    } catch (error) {
            //文件不存在则创建
        execSync("openssl genrsa -out rsa_private.key 1024")
        execSync('openssl rsa -in rsa_private.key -pubout -out rsa_public.key')
        resPublicKey = fs.readFileSync(resolve('./rsa_public.key')).toString()
    }
    // 返回信息
    res.json({
        status: 0,
        data: resPublicKey
    })
})
复制代码
```

### 3.3、前端在`http.js`中对数据加密

```js
        import axios from 'axios'
        import jsencrypt from 'jsencrypt'
        import hmacsha256 from 'crypto-js/hmac-sha256'

        const HMACSHA256KEY = '1001'

        function hashSHA246(params) {
                    // 通过 hmacsha256 生成散列字符串
            return hmacsha256(JSON.stringify(params), HMACSHA256KEY).toString()
          }

        //请求拦截
        axios.interceptors.request.use(function (config) {
            const excludesArr = ['/api/getpubkey']
            const { url, params,data, method } = config
            if(!excludesArr.includes(url)) {
                let Authorization = ''
                if (method === "get" && params) {
                    Authorization = hashSHA246(params)
                }else if (method === "post" && data) {
                    Authorization = hashSHA246(data)
                }
                // 获取保存的公钥
                const pubKey = sessionStorage.getItem("pubKey")
                //实例化 jsencrypt
                const JSencrypt = new jsencrypt()
                // 对实例化对象设置公钥
                JSencrypt.setPublicKey(pubKey)
                // 通过公钥对数据加密
                const encrypt = JSencrypt.encrypt(Authorization)
                // 加密数据添加到请求头中
                config.headers.common['Authorization'] = encrypt
            }

            return config;
          }, function (error) {
            return Promise.reject(error);
          });

        // 响应拦截
        axios.interceptors.response.use(function (response) {
            return response;
          }, function (error) {
            return Promise.reject(error);
          });

          export default axios
复制代码
```

### 3.4、node中间件的解密

```js
    const fs = require("fs")
    const path = require("path")
    const crypto = require("crypto") // node自带的密码相关的模块
    const { execSync } = require('child_process'); //execSync方法主要是允许我们在node中写linux命令
    const express = require("express")

    const app = new express() // 实例化 express

    const router = express.Router() // 创建理由

    const resolve = _path => path.resolve(__dirname, _path)

    // 中间件
    app.use((req, res, next) => {
        const HMACSHA256KEY = '1001'
        // 过滤不需要验证的接口
        const excludesArr = ['/api/getpubkey']
        const { originalUrl } = req
        if (!excludesArr.includes(originalUrl)) {
            // 读取请求头消息
            const Authorization = req.get('Authorization')
            if (Authorization) {
                let de_res = {
                    status: 1,
                    message: '数据被篡改'
                };
                try {
                    const decryptText = crypto.privateDecrypt({
                        key: fs.readFileSync(resolve("./rsa_private.key")),
                        padding: crypto.constants.RSA_PKCS1_PADDING
                    }, Buffer.from(Authorization, "base64")).toString()
                    try {
                        if (decryptText) {
                            let hash = crypto.createHmac("sha256", HMACSHA256KEY)
                            const { method, query, body } = req
                            const obj = {
                                GET: query,
                                POST: body
                            }

                            let hashed = hash.update(JSON.stringify(obj[method])).digest("hex").toString()
                            console.log(hashed,decryptText);
                            if (hashed === decryptText) {
                                de_res = {
                                    status: 0,
                                    message: '通过'
                                }
                            } else {
                                console.log('hash摘要不相等');
                            }
                        } else {
                            console.log("缺少参数message和date");
                        }
                    } catch (error) {
                        console.log(error);
                    }
                } catch (error) {
                    console.log(error);
                }
                if(de_res.status === 0) {
                    next()
                }else {
                    res.json(de_res)
                }

            } else {
                res.json({
                    status: 1,
                    message: 'Authorization 不能为空'
                })
            }
        } else {
            //放行
            next()
        }
    })

    router.get("/api/getpubkey", (req, res) => {
        //1. 读取公钥文件

        let resPublicKey = ''
        try {
            resPublicKey = fs.readFileSync(resolve('./rsa_public.key')).toString()
        } catch (error) {
            //文件不存在则创建
            execSync("openssl genrsa -out rsa_private.key 1024")
            execSync('openssl rsa -in rsa_private.key -pubout -out rsa_public.key')
            resPublicKey = fs.readFileSync(resolve('./rsa_public.key')).toString()
        }
        // 返回信息
        res.json({
            status: 0,
            data: resPublicKey
        })
    })
    router.get("/api/get", (req, res) => {
        res.json([{
            name: '张三',
            age: 28
        }, {
            name: '李四',
            age: 24
        }])
    })


    app.use(router) //将路由注入到 express中


    // 启动服务
    const port = 5555
    app.listen(port, () => {
        console.log("server running: 127.0.0.1:" + port);
    })
复制代码
```

- 到这个时候请求的加密解密都写完了。妈妈再也不用担心数据请求被篡改了，

接下来就是设置防止响应篡改了

https://juejin.cn/post/6963922820971790372

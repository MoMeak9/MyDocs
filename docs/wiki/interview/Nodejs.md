1. NodeJs的特性主要有哪些？

   1. 单线程，单线程的好处，减少了内存开销，操作系统的内存换页。
   2. 非阻塞I/O， 不会傻等I/O语句结束，而会执行后面的语句。
   3. 事件机制，事件环，不管是新用户的请求，还是老用户的I/O完成，都将以事件方式加入事件环，等待调度。

2. NodeJs适用于哪些场景开发？

   Nodejs适用于在高并发、I/O密集、少量业务逻辑的场景

3. 你是怎么调试NodeJs呢？有哪些方法？

   1. 使用VSCode
   2. 使用命令窗口 node debug xxx
   3. 使用浏览器 需要提前安装 node-inspector

4. 你知道NodeJs是如何工作的吗？

   node的工作原理： node使用chrom的V8引擎来解释编译JS语言，将编译后的代码传递给libuv，在libuv中进行区别是调用linux的libev/libio还是window的IOCP实现具体操作
   node中事件环工作原理：node执行JS栈中的代码，发现宏任务将其放到对应的宏任务队列，微任务放到微任务队列。将JS栈中的代码执行完毕后，清空微任务队列，进入事件环，取出第一个宏任务进入JS执行栈执行。完毕后，清空微任务对列，进入宏任务取下一个，形成事件环
   注意：process.nextTick微任务会在微任务队列中第一个执行

5. NodeJs和V8引擎是什么关系？

   V8引擎是chrome浏览器编译解释执行js的环境，Node移植了V8引擎用来解析执行js代码

6. NodeJs是基于单线程的吗？为什么？

   js 本身就是 single thread，NodeJS 发明者将 Chorme v8 vm 引擎 runtime 加上 async io 使得效能得以突出，所以 NodeJS 的发明者完成 libuv 就离开 NodeJS 了。

7. NodeJs的回调有什么用吗？

   由于Node的IO操作是异步的，不知道什么时候执行完毕，用户为了拿到异步操作的结果，采取回调函数的方式拿到操作的结果。因此回调中采取错误优先原则，防止异步操作中有错误，而拿不到错误结果（回调错误的时候的执行回调函数）。

8. Node的全局变量有哪些？

   1. __dirname：当前文件所处目录
   2. __filename：当前文件所处目录+文件名
   3. export：用于导出实现变量 等价于module.export
   4. module：CommonJS中的Module的实例

9. Node的全局对象有哪些？

   setTimeout
   setInterval
   process
   console、Buffer、clearImmediate、setImmediate

10. 怎样在NodeJs中加载HTML文件？

    1. 开启http服务器
    2. 使用fs读取对应目录的文件
    3. 设置请求头 res.setHeader("Content-Type","text/html;charset=utf-8");
    4. res.write(html字符串)，调用res.end()；获采取res.end(html字符串)；
    5. 如果文件过大采取 fs.createReadStream(文件路径).pipe(res);

11. 请解释下你对EventEmitter的理解?

    - EventEmitter是Node基于发布订阅模式实现的第三方库events
    - EventEmitter多用于被继承，而并非直接使用
    - EventEmitter中实现了on、emit、once、off、listen等其他功能
    - 当on中监听newListener事件时，对应的回调会被自动派发

12. 你知道什么是REPL吗？

    REPL(Read Eval Print Loop:交互式解释器) 表示一个电脑的环境，类似 Window 系统的终端或 Unix/Linux shell，我们可以在终端中输入命令，并接收系统的响应。装有node环境的命令行窗口

13. npm是干什么用的？它有什么优缺点？有没有类似的方案？

    npm是node包管理工具
    优点：通过npm命令下载第三方包，实现代码的共享，下载的第三方包会在node_modules中。无需再去对应网站下载js文件。
    缺点：当第三方包所需依赖过大时，需要安装的包的数量也是巨大的。由于第三方包属于同级关系，所需要下载的第三方包不利于查看。
    其他工具 **yarn** ?

14. 说说你对package.json的理解，它都有哪些作用？

    package.json是node项目用来记录作者，项目入口，项目描述，项目依赖，启动脚本，项目版本号，项目ip代理，开源许可等其他的项目相关信息，通过package.json可以进行npm包的发布与项目依赖的安装。与之还会存在package-lock.json文件，会具体项目所需依赖的版本等其他信息

15. 你了解NodeJs的子进程吗？

    - node遵循的是单线程单进程的模式，node的单线程是指js的引擎只有一个实例，且在nodejs的主线程中执行，同时node以事件驱动的方式处理IO等异步操作。node的单线程模式，只维持一个主线程，大大减少了线程间切换的开销。

    - 但是node的单线程使得在主线程不能进行CPU密集型操作，否则会阻塞主线程。对于CPU密集型操作，在node中通过child_process可以创建独立的子进程，父子进程通过IPC通信，子进程可以是外部应用也可以是node子程序，子进程执行后可以将结果返回给父进程。

    - node中使用child_process创建子线程，通常使用child_process.spawn()、child_process.exec()、child_process.execFile() 或 child_process.fork()进行子线程的创建工作

16. 你有使用过NodeJs吗？说说你对它的理解，它的运用场景有哪些呢？

    NodeJS使JavaScript运行在服务端。具有异步非阻塞IO，事件循环，主线程为单线，发挥了JavaScript的优势，能够解决高并发，I/O操作密集等问题

17. 你有使用过express和koa吗？它俩有什么区别

    - express采取回调方式解决异步问题，koa采取promise方式解决异步问题
    - express 内置许多中间件，koa只提供了核心代码，没有扩展其他中间件
    - express中间件与koa中间件又差异
    - express只能通过回调的方式处理错误，koa可以通过监听 on("error") 处理错误
    - koa中请求与响应都扩展到了ctx上，express是直接对请求req与响应res进行扩展

18. 


---
title: MCSManager API 文档
date: 2021-11-19
author: MoMeaks
sidebar: 'auto'
---

控制面板拥有基于 `http` 协议的 `API` ，可以帮助开发人员完成很多事情，比如QQ机器人，脚本，只要能发送和接收http请求的任何方式，均可调用这些 API。

API 使用 `API Key` 来进行访问，拥有 `API Key` 后将视为拥有相应账号的全部权限，`API Key` 可以在用户管理界面看见。

- 若 `API Key` 是来自管理账号，则拥有完全的 **创建/删除/开启/关闭服务器，创建/删除用户，获取所有用户所有服务器信息与列表**等。
- 若 `API Key` 是来自普通账号，则只能**管理其拥有的服务器，只能对拥有的服务器获取信息，执行命令，开启关闭**等，

**务必将 `API Key` 妥善保管， `API Key` 与`账号密码`同等重要，切勿泄露。**



# 响应体格式

所有请求都拥有大致相同的响应格式，除个别例外，绝大部分响应都有特定格式。

```
// 一切正常
{"status":200}

// 一切正常，并返回相关数据
{"status":200,"data":"....数据...."}

// 执行失败，无错误信息
{"status":500,"error":"null"}

// 执行错误，并返回错误信息
{"status":500,"error":"....错误信息...."}

// 权限不足
{"status":403,"error":"权限不足 | Forbidden"}

// 请求过于频繁
{"status":503,"error":"请求频繁，拒绝服务 | Service Unavailable"}


// status 码是根据 HTTP 协议状态码所写，目前响应码仅有这些。
```

所有接口请求以 `http://127.0.0.1:23333/` 为基本举例地址，所有 API 均已经过 `Postman` 集成测试。

所有 `POST` 请求建议采用 `application/x-www-form-urlencoded` 编码格式。



## 获取指定服务器部分信息

- 权限: 无需登陆，完全公开
- 方式: `GET`
- 地址: http://127.0.0.1:23333/api/status/{服务器名字}
- 列子:

```
http://127.0.0.1:23333/api/status/FristMinecraftServer
```

- 响应:

```
// 未运行，服务器关闭状态
{"id":"FristMinecraftServer","lastDate":"2020-7-18 12:05:01 PM","status":false}
// 正在运行，但未获取到服务器游戏信息
{"id":"FristMinecraftServer","lastDate":"2020-7-18 12:19:09 PM","status":true}
// 正在运行，已获取服务器游戏信息
{"id":"FristMinecraftServer","serverName":"MinecraftServer","status":true,"current_players":"0","max_players":"20","motd":"A Minecraft Server","version":"1.9"}
```



## 开启服务器

- 权限: 所有用户
- 限制: 10 秒内只能请求一次
- 方式: `GET`
- 地址: http://127.0.0.1:23333/api/start_server/{服务器名}?apikey={KEY}
- 列子:

```
http://127.0.0.1:23333/api/start_server/FristMinecraftzServer?apikey=5e72ce7f3f7240a895d973a4ff5246f1
```

- 响应:

```
{"status":200}
```



## 关闭服务器

- 权限: 所有用户
- 限制: 1 秒内只能请求一次
- 方式: `GET`
- 地址: http://127.0.0.1:23333/api/stop_server/{服务器名}?apikey={KEY}
- 列子:

```
http://127.0.0.1:23333/api/stop_server/TestServer?apikey=5e72ce7f3f7240a895d973a4ff5246f1
```

- 响应:

```
{"status":200}
```



## 重启服务器

- 权限: 所有用户
- 限制: 60秒内只能请求一次
- 方式: `GET`
- 地址: http://127.0.0.1:23333/api/restart_server/{服务器名}?apikey={KEY}
- 列子:

```
http://127.0.0.1:23333/api/restart_server/TestServer?apikey=bc77fd5e8b604303878f2a219498bb25
```

- 响应:

```
{"status":200}
```



## 向某服务器发送命令

- 权限: 所有用户
- 限制: 1 秒内只能请求一次
- 方式: `POST`
- 地址: http://127.0.0.1:23333/api/execute/?apikey={KEY}
- 参数:

```
name=FristMinecraftServer     // 服务器名字
command=list                  // 需要执行的命令
```

- 响应:

```
// 暂时不支持返回命令执行结果
{"status":200}
```



## 查看所有服务器信息

- 权限: 仅限管理用户
- 方式：`GET`
- 地址：http://127.0.0.1:23333/api/server_list/?apikey={KEY}
- 例子:

```
http://127.0.0.1:23333/api/server_list/?apikey=5e72ce7f3f7240a895d973a4ff5246f1
```

- 返回:

```
{
    "status": 200,
    "data": [ // 服务器列表
        {
            "serverName": "FristMinecraftServer",
            "data": {
                "__filename__": "./server/FristMinecraftServer.json",
                "name": "FristMinecraftServer",      // 服务器名
                "createDate": "2019-9-12 9:36:55 PM",// 创建时间
                "lastDate": "2020-7-14 7:44:26 PM",  // 最后启动时间
                "timeLimitDate": "",                 // 到期时间
                "ie": "GBK",                         // 输入编码
                "oe": "GBK",                         // 输出编码
                "autoRestart": false,                // 是否自动重启
                "schedule": [],                      // 计划任务
                "dockerConfig": {                    // Docker 配置
                    "dockerCommand": "docker run -i ${xmx} -v ${serverpath}:/mcsd/ ${ports} ${imagename} ${commande}",
                    "dockerImageName": "mcsd",       // 镜像名
                    "dockerXmx": "",                 // 容器最大内存限制
                    "dockerPorts": "",               // 容器开放的端口
                    "isDocker": false                // 是否使用 Docker
                },
                "mcpingConfig": {                    // 玩家人数监听协议配置
                    "mcpingName": "Minecraft Server2",
                    "mcpingHost": "localhost",
                    "mcpingPort": "",
                    "mcpingMotd": ""
                },
                "addCmd": [                          // 附加参数
                    ""
                ],
                "java": "java",                                   // Java 环境变量，或 java.exe 的绝对路径
                "jarName": "spigot-1.9-R0.1-SNAPSHOT-latest.jar", // 服务端文件名
                "Xmx": "",                                        // 最大内存
                "Xms": "",                                        // 最小内存
                "cwd": "./server/server_core/NewServer_5414000/", // 工作目录与文件存放目录
                "highCommande": "",                               // 自定义启动参数
                "run": false,                                     // 是否正在运行
                "serverName": "NewServer_5414000",                // 服务器名字
                "currentPlayers": "--",                           // 当前玩家数量
                "maxPlayers": "--"                                // 最大玩家数量
            }
        }
    ]
}
```



## 查看所有用户信息

- 权限: 仅限管理用户
- 方式：`GET`
- 地址：http://127.0.0.1:23333/api/user_list/?apikey={KEY}
- 例子:

```
http://127.0.0.1:23333/api/user_list/?apikey=5e72ce7f3f7240a895d973a4ff5246f1
```

- 响应格式一（8.6.15 之前）

```
{
    "status": 200,
    "data": [
        {
            "username": "#master",
            "data": {
                "username": "#master",
                "lastDate": "2020-7-18 10:52:09 AM",
                "createDate": "2019-9-12 9:25:32 PM"
            }
        },
        {
            "username": "Elzzas",
            "data": {
                "username": "Elzzas",
                "lastDate": "2019-9-17 10:15:00 AM",
                "createDate": "2019-9-17 10:15:00 AM"
            }
        }
    ]
}
```

- 响应格式二（含 8.6.15 之后）

```
{
    "status": 200,
    "data": [
        {
            "username": "#master",
            "createDate": "2019-9-12 9:25:32 PM",
            "lastDate": "2020-10-24 9:40:31 PM",
            "allowedServer": []
        },
        {
            "username": "Public",
            "createDate": "2020-1-27 11:34:45 AM",
            "lastDate": "2020-10-24 9:05:08 PM",
            "allowedServer": [
                "FristMinecraftServer",
                "Group_MainServer"
            ]
        },
        {
            "username": "TestUser",
            "createDate": "2020-7-18 2:50:21 PM",
            "lastDate": "2020-7-18 2:50:21 PM",
            "allowedServer": [
                "FristMinecraftServer",
                "Group_MainServer",
                "Group_MiniGameServer"
            ]
        }
    ]
}
```



## 创建用户

- 权限: 仅限管理用户
- 方式：`POST`
- 地址：http://127.0.0.1:23333/api/create_user/?apikey={KEY}
- 参数:

```
username=TestUser          //必填，用户名字（6~18 位,A-Za-z_#）
password=123456            //必填，用户密码（6~18 位）
serverlist=服务器A 服务器B  //必填，拥有的服务器，按空格分隔。
```

- 响应

```
{"status":200}
```



## 创建服务器

- 权限: 仅限管理用户
- 方式：`POST`
- 地址：http://127.0.0.1:23333/api/create_server/?apikey={KEY}
- 参数:

```
serverName=TestServer001   //必填，服务器名字，必须唯一。
java=java                  //选填，Java 环境路径，不填则自动分配。
jarName=Server.jar         //选填，Jar 核心文件名。
Xmx=2048                   //选填，最大内存。
Xms=1024                   //选填，最小内存。
ie=utf-8                   //选填，输入编码。
oe=utf-8                   //选填，输出编码。
timeLimitDate=2020/8/1     //选填，到期时间。
cwd=C:/xx/x/               //选填，服务器目录，可以写成绝对或相对路径，不填则自动分配。
highCommande=cmd.exe       //选填，自定义启动命令，填写后将只执行此命令。
addCmd=-server -xxx -aaa   //选填，附加参数，以空格为分界线。

// 暂时不支持 Docker 配置和更多设置。
```

- 响应

```
{"status":200}
```



## 创建服务器（高级，8.6.15 以上）

- 权限: 仅限管理用户
- 方式：`POST`
- 地址：/api/advanced_create_server/?apikey={KEY}
- 参数:

```
serverName=服务器名字
config=JSON格式数据
```

- 其中 `config` 参数如下格式（不可少任何参数）:

```
// 这是举例 JSON。
// 实际请求传输时，可以采用压缩格式，即没有换行，没有空格的格式。
{
    "addCmd": [             // 附加参数列表
        "-server",
    ],
    "java": "java",         // Java 环境变量或者写绝对路径
    "jarName": "jarName",   // Jar 文件名
    "Xmx": "",              // 最大内存
    "Xms": "",              // 最小内存
    "timeLimitDate": "2099/1/1", // 到期时间，默认不限制
    "cwd": "",                   // 工作目录，默认自动分配
    "highCommande": "cmd.exe",   // 自定义脚本，填写后 java 相关设置将失效
    "stopCommand": "stop",       // 关服命令 ^C 为 Ctrl+C
    "dockerConfig": {            // Docker 配置参数
        "dockerCommand": "",     // 为空即可   
        "dockerImageName": "mcsd",      // 容器启动时所用镜像名
        "dockerXmx": "2G",              // 容器最大内存限制
        "dockerPorts": "25565:25565",   // 端口开放
        "isDocker": false               // 是否启用容器 
    },
    "mcpingConfig": {           
        "mcpingName": "",       // API 查询时显示的名字
        "mcpingHost": "",       // 目标地址，为空则自动获取
        "mcpingPort": "",       // 目标端口，为空则自动获取
        "mcpingMotd": ""        // API 查询时显示的 motd
    }
}
```

- 响应

```
// 响应200代码创建成功，其他状态码则代表失败！
{"status":200}
```



## 修改服务器（高级，8.6.15 以上）

- 权限: 仅限管理用户
- 方式：`POST`
- 地址：/api/advanced_configure_server/?apikey={KEY}
- 参数:

```
serverName=服务器名字
config=JSON格式数据
```

- 其中 `config` 参数与 `创建服务器（高级）`一模一样，但是所有参数都是可以选填:
- 列如我只想修改部分配置，则只需这样写！

```
// 只发送部分JSON格式数据，代表只修改服务端实例这部分内容
{
    "timeLimitDate": "2088/8/8", // 修改到期时间到 2088/8/8
    "stopCommand": "test_stop",  // 修改关服命令
    "Xmx": "1000GB",             // 修改最大内存
    // 注意：如果写了类似于Docker配置这种子对象，则必须全部写全！  
    // 但可以直接不写这个配置，则不会进行任何更改。
    "dockerConfig": {             
        "dockerCommand": "",     // 必有。为空就行
        "dockerImageName": "mcsd",      // 必有。修改目标实例镜像名
        "dockerXmx": "1024",            // 必有。容器最大内存
        "dockerPorts": "25565:25565",   // 必有。端口分配
        "isDocker": true                // 必有。是否启动
    }
}
```

- 其中 `config` 也可以这样写：

```
// 这里只修改模板服务端的到期时间与关闭命令
{
    "timeLimitDate": "2088/8/8", // 修改到期时间到 2088/8/8
    "stopCommand": "test_stop",  // 修改关闭命令
}
```

- 响应

```
// 响应200代码创建成功，其他状态码则代表失败！
{"status":200}
```

## 删除用户

- 权限: 仅限管理用户
- 方式: `GET`
- 地址: http://127.0.0.1:23333/api/delete_user/{用户名}?apikey={KEY}
- 列子:

```
http://127.0.0.1:23333/api/delete_user/TestUser?apikey=7c5b8edf73b440a5823886eaee4604cd
```

- 响应

```
{"status":200}
```



## 删除服务器

- 权限: 仅限管理用户
- 方式: `GET`
- 地址: http://127.0.0.1:23333/api/delete_server/{服务器名}?apikey={KEY}
- 列子:

```
http://127.0.0.1:23333/api/delete_server/TestServer001?apikey=5e72ce7f3f7240a895d973a4ff5246f1
```

- 响应

```
{"status":200}
```

(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{718:function(a,e,t){"use strict";t.r(e);var s=t(5),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("控制面板拥有基于 "),t("code",[a._v("http")]),a._v(" 协议的 "),t("code",[a._v("API")]),a._v(" ，可以帮助开发人员完成很多事情，比如QQ机器人，脚本，只要能发送和接收http请求的任何方式，均可调用这些 API。")]),a._v(" "),t("p",[a._v("API 使用 "),t("code",[a._v("API Key")]),a._v(" 来进行访问，拥有 "),t("code",[a._v("API Key")]),a._v(" 后将视为拥有相应账号的全部权限，"),t("code",[a._v("API Key")]),a._v(" 可以在用户管理界面看见。")]),a._v(" "),t("ul",[t("li",[a._v("若 "),t("code",[a._v("API Key")]),a._v(" 是来自管理账号，则拥有完全的 "),t("strong",[a._v("创建/删除/开启/关闭服务器，创建/删除用户，获取所有用户所有服务器信息与列表")]),a._v("等。")]),a._v(" "),t("li",[a._v("若 "),t("code",[a._v("API Key")]),a._v(" 是来自普通账号，则只能"),t("strong",[a._v("管理其拥有的服务器，只能对拥有的服务器获取信息，执行命令，开启关闭")]),a._v("等，")])]),a._v(" "),t("p",[t("strong",[a._v("务必将 "),t("code",[a._v("API Key")]),a._v(" 妥善保管， "),t("code",[a._v("API Key")]),a._v(" 与"),t("code",[a._v("账号密码")]),a._v("同等重要，切勿泄露。")])]),a._v(" "),t("h1",{attrs:{id:"响应体格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#响应体格式"}},[a._v("#")]),a._v(" 响应体格式")]),a._v(" "),t("p",[a._v("所有请求都拥有大致相同的响应格式，除个别例外，绝大部分响应都有特定格式。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('// 一切正常\n{"status":200}\n\n// 一切正常，并返回相关数据\n{"status":200,"data":"....数据...."}\n\n// 执行失败，无错误信息\n{"status":500,"error":"null"}\n\n// 执行错误，并返回错误信息\n{"status":500,"error":"....错误信息...."}\n\n// 权限不足\n{"status":403,"error":"权限不足 | Forbidden"}\n\n// 请求过于频繁\n{"status":503,"error":"请求频繁，拒绝服务 | Service Unavailable"}\n\n\n// status 码是根据 HTTP 协议状态码所写，目前响应码仅有这些。\n')])])]),t("p",[a._v("所有接口请求以 "),t("code",[a._v("http://127.0.0.1:23333/")]),a._v(" 为基本举例地址，所有 API 均已经过 "),t("code",[a._v("Postman")]),a._v(" 集成测试。")]),a._v(" "),t("p",[a._v("所有 "),t("code",[a._v("POST")]),a._v(" 请求建议采用 "),t("code",[a._v("application/x-www-form-urlencoded")]),a._v(" 编码格式。")]),a._v(" "),t("h2",{attrs:{id:"获取指定服务器部分信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取指定服务器部分信息"}},[a._v("#")]),a._v(" 获取指定服务器部分信息")]),a._v(" "),t("ul",[t("li",[a._v("权限: 无需登陆，完全公开")]),a._v(" "),t("li",[a._v("方式: "),t("code",[a._v("GET")])]),a._v(" "),t("li",[a._v("地址: http://127.0.0.1:23333/api/status/{服务器名字}")]),a._v(" "),t("li",[a._v("列子:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("http://127.0.0.1:23333/api/status/FristMinecraftServer\n")])])]),t("ul",[t("li",[a._v("响应:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('// 未运行，服务器关闭状态\n{"id":"FristMinecraftServer","lastDate":"2020-7-18 12:05:01 PM","status":false}\n// 正在运行，但未获取到服务器游戏信息\n{"id":"FristMinecraftServer","lastDate":"2020-7-18 12:19:09 PM","status":true}\n// 正在运行，已获取服务器游戏信息\n{"id":"FristMinecraftServer","serverName":"MinecraftServer","status":true,"current_players":"0","max_players":"20","motd":"A Minecraft Server","version":"1.9"}\n')])])]),t("h2",{attrs:{id:"开启服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启服务器"}},[a._v("#")]),a._v(" 开启服务器")]),a._v(" "),t("ul",[t("li",[a._v("权限: 所有用户")]),a._v(" "),t("li",[a._v("限制: 10 秒内只能请求一次")]),a._v(" "),t("li",[a._v("方式: "),t("code",[a._v("GET")])]),a._v(" "),t("li",[a._v("地址: http://127.0.0.1:23333/api/start_server/{服务器名}?apikey={KEY}")]),a._v(" "),t("li",[a._v("列子:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("http://127.0.0.1:23333/api/start_server/FristMinecraftzServer?apikey=5e72ce7f3f7240a895d973a4ff5246f1\n")])])]),t("ul",[t("li",[a._v("响应:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{"status":200}\n')])])]),t("h2",{attrs:{id:"关闭服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭服务器"}},[a._v("#")]),a._v(" 关闭服务器")]),a._v(" "),t("ul",[t("li",[a._v("权限: 所有用户")]),a._v(" "),t("li",[a._v("限制: 1 秒内只能请求一次")]),a._v(" "),t("li",[a._v("方式: "),t("code",[a._v("GET")])]),a._v(" "),t("li",[a._v("地址: http://127.0.0.1:23333/api/stop_server/{服务器名}?apikey={KEY}")]),a._v(" "),t("li",[a._v("列子:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("http://127.0.0.1:23333/api/stop_server/TestServer?apikey=5e72ce7f3f7240a895d973a4ff5246f1\n")])])]),t("ul",[t("li",[a._v("响应:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{"status":200}\n')])])]),t("h2",{attrs:{id:"重启服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重启服务器"}},[a._v("#")]),a._v(" 重启服务器")]),a._v(" "),t("ul",[t("li",[a._v("权限: 所有用户")]),a._v(" "),t("li",[a._v("限制: 60秒内只能请求一次")]),a._v(" "),t("li",[a._v("方式: "),t("code",[a._v("GET")])]),a._v(" "),t("li",[a._v("地址: http://127.0.0.1:23333/api/restart_server/{服务器名}?apikey={KEY}")]),a._v(" "),t("li",[a._v("列子:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("http://127.0.0.1:23333/api/restart_server/TestServer?apikey=bc77fd5e8b604303878f2a219498bb25\n")])])]),t("ul",[t("li",[a._v("响应:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{"status":200}\n')])])]),t("h2",{attrs:{id:"向某服务器发送命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#向某服务器发送命令"}},[a._v("#")]),a._v(" 向某服务器发送命令")]),a._v(" "),t("ul",[t("li",[a._v("权限: 所有用户")]),a._v(" "),t("li",[a._v("限制: 1 秒内只能请求一次")]),a._v(" "),t("li",[a._v("方式: "),t("code",[a._v("POST")])]),a._v(" "),t("li",[a._v("地址: http://127.0.0.1:23333/api/execute/?apikey={KEY}")]),a._v(" "),t("li",[a._v("参数:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("name=FristMinecraftServer     // 服务器名字\ncommand=list                  // 需要执行的命令\n")])])]),t("ul",[t("li",[a._v("响应:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('// 暂时不支持返回命令执行结果\n{"status":200}\n')])])]),t("h2",{attrs:{id:"查看所有服务器信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看所有服务器信息"}},[a._v("#")]),a._v(" 查看所有服务器信息")]),a._v(" "),t("ul",[t("li",[a._v("权限: 仅限管理用户")]),a._v(" "),t("li",[a._v("方式："),t("code",[a._v("GET")])]),a._v(" "),t("li",[a._v("地址：http://127.0.0.1:23333/api/server_list/?apikey={KEY}")]),a._v(" "),t("li",[a._v("例子:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("http://127.0.0.1:23333/api/server_list/?apikey=5e72ce7f3f7240a895d973a4ff5246f1\n")])])]),t("ul",[t("li",[a._v("返回:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{\n    "status": 200,\n    "data": [ // 服务器列表\n        {\n            "serverName": "FristMinecraftServer",\n            "data": {\n                "__filename__": "./server/FristMinecraftServer.json",\n                "name": "FristMinecraftServer",      // 服务器名\n                "createDate": "2019-9-12 9:36:55 PM",// 创建时间\n                "lastDate": "2020-7-14 7:44:26 PM",  // 最后启动时间\n                "timeLimitDate": "",                 // 到期时间\n                "ie": "GBK",                         // 输入编码\n                "oe": "GBK",                         // 输出编码\n                "autoRestart": false,                // 是否自动重启\n                "schedule": [],                      // 计划任务\n                "dockerConfig": {                    // Docker 配置\n                    "dockerCommand": "docker run -i ${xmx} -v ${serverpath}:/mcsd/ ${ports} ${imagename} ${commande}",\n                    "dockerImageName": "mcsd",       // 镜像名\n                    "dockerXmx": "",                 // 容器最大内存限制\n                    "dockerPorts": "",               // 容器开放的端口\n                    "isDocker": false                // 是否使用 Docker\n                },\n                "mcpingConfig": {                    // 玩家人数监听协议配置\n                    "mcpingName": "Minecraft Server2",\n                    "mcpingHost": "localhost",\n                    "mcpingPort": "",\n                    "mcpingMotd": ""\n                },\n                "addCmd": [                          // 附加参数\n                    ""\n                ],\n                "java": "java",                                   // Java 环境变量，或 java.exe 的绝对路径\n                "jarName": "spigot-1.9-R0.1-SNAPSHOT-latest.jar", // 服务端文件名\n                "Xmx": "",                                        // 最大内存\n                "Xms": "",                                        // 最小内存\n                "cwd": "./server/server_core/NewServer_5414000/", // 工作目录与文件存放目录\n                "highCommande": "",                               // 自定义启动参数\n                "run": false,                                     // 是否正在运行\n                "serverName": "NewServer_5414000",                // 服务器名字\n                "currentPlayers": "--",                           // 当前玩家数量\n                "maxPlayers": "--"                                // 最大玩家数量\n            }\n        }\n    ]\n}\n')])])]),t("h2",{attrs:{id:"查看所有用户信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看所有用户信息"}},[a._v("#")]),a._v(" 查看所有用户信息")]),a._v(" "),t("ul",[t("li",[a._v("权限: 仅限管理用户")]),a._v(" "),t("li",[a._v("方式："),t("code",[a._v("GET")])]),a._v(" "),t("li",[a._v("地址：http://127.0.0.1:23333/api/user_list/?apikey={KEY}")]),a._v(" "),t("li",[a._v("例子:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("http://127.0.0.1:23333/api/user_list/?apikey=5e72ce7f3f7240a895d973a4ff5246f1\n")])])]),t("ul",[t("li",[a._v("响应格式一（8.6.15 之前）")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{\n    "status": 200,\n    "data": [\n        {\n            "username": "#master",\n            "data": {\n                "username": "#master",\n                "lastDate": "2020-7-18 10:52:09 AM",\n                "createDate": "2019-9-12 9:25:32 PM"\n            }\n        },\n        {\n            "username": "Elzzas",\n            "data": {\n                "username": "Elzzas",\n                "lastDate": "2019-9-17 10:15:00 AM",\n                "createDate": "2019-9-17 10:15:00 AM"\n            }\n        }\n    ]\n}\n')])])]),t("ul",[t("li",[a._v("响应格式二（含 8.6.15 之后）")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{\n    "status": 200,\n    "data": [\n        {\n            "username": "#master",\n            "createDate": "2019-9-12 9:25:32 PM",\n            "lastDate": "2020-10-24 9:40:31 PM",\n            "allowedServer": []\n        },\n        {\n            "username": "Public",\n            "createDate": "2020-1-27 11:34:45 AM",\n            "lastDate": "2020-10-24 9:05:08 PM",\n            "allowedServer": [\n                "FristMinecraftServer",\n                "Group_MainServer"\n            ]\n        },\n        {\n            "username": "TestUser",\n            "createDate": "2020-7-18 2:50:21 PM",\n            "lastDate": "2020-7-18 2:50:21 PM",\n            "allowedServer": [\n                "FristMinecraftServer",\n                "Group_MainServer",\n                "Group_MiniGameServer"\n            ]\n        }\n    ]\n}\n')])])]),t("h2",{attrs:{id:"创建用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建用户"}},[a._v("#")]),a._v(" 创建用户")]),a._v(" "),t("ul",[t("li",[a._v("权限: 仅限管理用户")]),a._v(" "),t("li",[a._v("方式："),t("code",[a._v("POST")])]),a._v(" "),t("li",[a._v("地址：http://127.0.0.1:23333/api/create_user/?apikey={KEY}")]),a._v(" "),t("li",[a._v("参数:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("username=TestUser          //必填，用户名字（6~18 位,A-Za-z_#）\npassword=123456            //必填，用户密码（6~18 位）\nserverlist=服务器A 服务器B  //必填，拥有的服务器，按空格分隔。\n")])])]),t("ul",[t("li",[a._v("响应")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{"status":200}\n')])])]),t("h2",{attrs:{id:"创建服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建服务器"}},[a._v("#")]),a._v(" 创建服务器")]),a._v(" "),t("ul",[t("li",[a._v("权限: 仅限管理用户")]),a._v(" "),t("li",[a._v("方式："),t("code",[a._v("POST")])]),a._v(" "),t("li",[a._v("地址：http://127.0.0.1:23333/api/create_server/?apikey={KEY}")]),a._v(" "),t("li",[a._v("参数:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("serverName=TestServer001   //必填，服务器名字，必须唯一。\njava=java                  //选填，Java 环境路径，不填则自动分配。\njarName=Server.jar         //选填，Jar 核心文件名。\nXmx=2048                   //选填，最大内存。\nXms=1024                   //选填，最小内存。\nie=utf-8                   //选填，输入编码。\noe=utf-8                   //选填，输出编码。\ntimeLimitDate=2020/8/1     //选填，到期时间。\ncwd=C:/xx/x/               //选填，服务器目录，可以写成绝对或相对路径，不填则自动分配。\nhighCommande=cmd.exe       //选填，自定义启动命令，填写后将只执行此命令。\naddCmd=-server -xxx -aaa   //选填，附加参数，以空格为分界线。\n\n// 暂时不支持 Docker 配置和更多设置。\n")])])]),t("ul",[t("li",[a._v("响应")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{"status":200}\n')])])]),t("h2",{attrs:{id:"创建服务器-高级-8-6-15-以上"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建服务器-高级-8-6-15-以上"}},[a._v("#")]),a._v(" 创建服务器（高级，8.6.15 以上）")]),a._v(" "),t("ul",[t("li",[a._v("权限: 仅限管理用户")]),a._v(" "),t("li",[a._v("方式："),t("code",[a._v("POST")])]),a._v(" "),t("li",[a._v("地址：/api/advanced_create_server/?apikey={KEY}")]),a._v(" "),t("li",[a._v("参数:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("serverName=服务器名字\nconfig=JSON格式数据\n")])])]),t("ul",[t("li",[a._v("其中 "),t("code",[a._v("config")]),a._v(" 参数如下格式（不可少任何参数）:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('// 这是举例 JSON。\n// 实际请求传输时，可以采用压缩格式，即没有换行，没有空格的格式。\n{\n    "addCmd": [             // 附加参数列表\n        "-server",\n    ],\n    "java": "java",         // Java 环境变量或者写绝对路径\n    "jarName": "jarName",   // Jar 文件名\n    "Xmx": "",              // 最大内存\n    "Xms": "",              // 最小内存\n    "timeLimitDate": "2099/1/1", // 到期时间，默认不限制\n    "cwd": "",                   // 工作目录，默认自动分配\n    "highCommande": "cmd.exe",   // 自定义脚本，填写后 java 相关设置将失效\n    "stopCommand": "stop",       // 关服命令 ^C 为 Ctrl+C\n    "dockerConfig": {            // Docker 配置参数\n        "dockerCommand": "",     // 为空即可   \n        "dockerImageName": "mcsd",      // 容器启动时所用镜像名\n        "dockerXmx": "2G",              // 容器最大内存限制\n        "dockerPorts": "25565:25565",   // 端口开放\n        "isDocker": false               // 是否启用容器 \n    },\n    "mcpingConfig": {           \n        "mcpingName": "",       // API 查询时显示的名字\n        "mcpingHost": "",       // 目标地址，为空则自动获取\n        "mcpingPort": "",       // 目标端口，为空则自动获取\n        "mcpingMotd": ""        // API 查询时显示的 motd\n    }\n}\n')])])]),t("ul",[t("li",[a._v("响应")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('// 响应200代码创建成功，其他状态码则代表失败！\n{"status":200}\n')])])]),t("h2",{attrs:{id:"修改服务器-高级-8-6-15-以上"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改服务器-高级-8-6-15-以上"}},[a._v("#")]),a._v(" 修改服务器（高级，8.6.15 以上）")]),a._v(" "),t("ul",[t("li",[a._v("权限: 仅限管理用户")]),a._v(" "),t("li",[a._v("方式："),t("code",[a._v("POST")])]),a._v(" "),t("li",[a._v("地址：/api/advanced_configure_server/?apikey={KEY}")]),a._v(" "),t("li",[a._v("参数:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("serverName=服务器名字\nconfig=JSON格式数据\n")])])]),t("ul",[t("li",[a._v("其中 "),t("code",[a._v("config")]),a._v(" 参数与 "),t("code",[a._v("创建服务器（高级）")]),a._v("一模一样，但是所有参数都是可以选填:")]),a._v(" "),t("li",[a._v("列如我只想修改部分配置，则只需这样写！")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('// 只发送部分JSON格式数据，代表只修改服务端实例这部分内容\n{\n    "timeLimitDate": "2088/8/8", // 修改到期时间到 2088/8/8\n    "stopCommand": "test_stop",  // 修改关服命令\n    "Xmx": "1000GB",             // 修改最大内存\n    // 注意：如果写了类似于Docker配置这种子对象，则必须全部写全！  \n    // 但可以直接不写这个配置，则不会进行任何更改。\n    "dockerConfig": {             \n        "dockerCommand": "",     // 必有。为空就行\n        "dockerImageName": "mcsd",      // 必有。修改目标实例镜像名\n        "dockerXmx": "1024",            // 必有。容器最大内存\n        "dockerPorts": "25565:25565",   // 必有。端口分配\n        "isDocker": true                // 必有。是否启动\n    }\n}\n')])])]),t("ul",[t("li",[a._v("其中 "),t("code",[a._v("config")]),a._v(" 也可以这样写：")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('// 这里只修改模板服务端的到期时间与关闭命令\n{\n    "timeLimitDate": "2088/8/8", // 修改到期时间到 2088/8/8\n    "stopCommand": "test_stop",  // 修改关闭命令\n}\n')])])]),t("ul",[t("li",[a._v("响应")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('// 响应200代码创建成功，其他状态码则代表失败！\n{"status":200}\n')])])]),t("h2",{attrs:{id:"删除用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除用户"}},[a._v("#")]),a._v(" 删除用户")]),a._v(" "),t("ul",[t("li",[a._v("权限: 仅限管理用户")]),a._v(" "),t("li",[a._v("方式: "),t("code",[a._v("GET")])]),a._v(" "),t("li",[a._v("地址: http://127.0.0.1:23333/api/delete_user/{用户名}?apikey={KEY}")]),a._v(" "),t("li",[a._v("列子:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("http://127.0.0.1:23333/api/delete_user/TestUser?apikey=7c5b8edf73b440a5823886eaee4604cd\n")])])]),t("ul",[t("li",[a._v("响应")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{"status":200}\n')])])]),t("h2",{attrs:{id:"删除服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除服务器"}},[a._v("#")]),a._v(" 删除服务器")]),a._v(" "),t("ul",[t("li",[a._v("权限: 仅限管理用户")]),a._v(" "),t("li",[a._v("方式: "),t("code",[a._v("GET")])]),a._v(" "),t("li",[a._v("地址: http://127.0.0.1:23333/api/delete_server/{服务器名}?apikey={KEY}")]),a._v(" "),t("li",[a._v("列子:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("http://127.0.0.1:23333/api/delete_server/TestServer001?apikey=5e72ce7f3f7240a895d973a4ff5246f1\n")])])]),t("ul",[t("li",[a._v("响应")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{"status":200}\n')])])])])}),[],!1,null,null,null);e.default=r.exports}}]);
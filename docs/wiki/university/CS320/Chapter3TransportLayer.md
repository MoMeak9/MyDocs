---
title: 计算机网络Chapter3 Transport-layer  传输层
date: 2021-12-20
author: MoMeaks
sidebar: 'auto'
categories:
- 大学课程
- wiki
tags:
- 计算机网络
---

# Transport-layer 传输层

## 3.2 multiplexing and demultiplexing

**Multiplexing at sender： 多路复用**

handle data from multiple sockets, add transport header  (later used for demultiplexing)

处理来自多个套接字的数据，添加传输头(稍后用于解复用)

**Demultiplexing at receiver：多路分解**

use header info to deliver received segments to correct  socket

How demultiplexing works:

- host receives IP datagrams  (message, data)
  - i. each datagram has source IP address, 
    destination IP address
  - ii. each datagram carries one transportlayer segment (packets)
  - iii. each segment has source, destination 
    port number
- host uses IP addresses & port  numbers to direct segment  to appropriate socket

## 3.3 connectionless transport: UDP

![image-20211220170415926](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211220170415926.png)

校验：

![image-20211220170540770](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211220170540770.png)

## 3.4 connection-oriented transport: TCP

面向连接传输（可靠传输 reliable data transfer）

![image-20211220170553343](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211220170553343.png)

### TCP 连接建立

![image-20211220170702372](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211220170702372.png)

### TCP连接释放

![image-20211220170736189](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211220170736189.png)

### 流量控制

TCP利用滑动窗口机制实现流量控制。

:star:在通信过程中，接收方根据自己接收缓存的大小，动态地调整发送方的发送窗口大小，即接收窗口rwnd （接收方设置确认报文段的窗口字段来将rwnd通知给发送方） ，发送方的发送窗口取**接收窗口rwnd**和**拥塞窗口cwnd**的最小值

**作用：**

- 防止接收方内存溢出，分组丢失 **Prevent receiver memory overflow and packet loss**

## 3.5 TCP congestion control TCP拥塞控制

- 慢开始
- 拥塞避免
- 快重传
- 快恢复

![image-20211220171514255](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211220171514255.png)

![image-20211220171524665](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211220171524665.png)
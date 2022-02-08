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

**Multiplexing at sender： 多路复用在发送方**

- gathering data chunks at the source host from different sockets.

- gathering data chunks at the source host from different sockets, encapsulating each data chunk(collection of bits) with header information (that will later be used in demultiplexing) to create segments

- passing the segments to the network layer.

- 在源主机上从不同的socket收集数据块。

- 在源主机上从不同的套接字收集数据块，用头信息(稍后将用于解复用)封装每个数据块(位的集合)来创建段

- 将网段传递给网络层。

**Demultiplexing at receiver：接收方多路分解**

use header info to deliver received segments to correct  socket

How demultiplexing works:

- host receives IP datagrams 数据报  (message, data)
  - i. each datagram has source IP address, 
    destination IP address
  - ii. each datagram carries one transportlayer segment (packets)
  - iii. each segment has source, destination 
    port number
- host uses IP addresses & port  numbers to direct segment  to appropriate socket

## 3.3 connectionless transport: UDP

![image-20211220170415926](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211220170415926.png)

**校验：**注意反码运算 1‘s compomect 最高位溢出则结果加一

校验和为结果值的反码

![image-20211220170540770](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211220170540770.png)

## 3.4 connection-oriented transport: TCP

面向连接传输（可靠传输 reliable data transport）

![image-20211220170553343](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211220170553343.png)

### TCP 连接建立（三次握手）

seq:请求确认信息，ack:确认信息并依赖于ack

1. 客户机发起：**SYN=1,seq=x**
2. 服务器响应并返回确认信息：**SYN=1,ACK=1,ack=x+1,seq=y**
3. 客户端收到并返回确认信息：**ACK=1,ack=y+1,seq=x+1**

![image-20211220170702372](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211220170702372.png)

### 数据传输

![image-20211226183606034](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211226183606034.png)

### TCP连接释放（四次握手）

1. 客户机主动发起连接释放报文段，停止发送数据，主动关闭TCP连接The client initiates a connection to release the packet segment, stops sending data, and closes the TCP connection：

   **FIN = 1,seq = u**

2. 服务器收到连接释放报文段后确认The server acknowledges the connection release packet after receiving the segment：

   **ACK = 1,seq = v,ack=u+1**

3. 服务器通知客户端释放连接The server notifies the client to release the connection：

   **FIN = 1, ACK=1,seq=w,ack=u+1**

4. 客户端收到连接释放报文后，发出确认After receiving the connection release packet, the client sends an acknowledgement：

   **ACK=1,seq=u+1,ack=w+1**

![image-20211220170736189](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211220170736189.png)

### 流量控制

TCP利用滑动窗口机制实现流量控制。

:star:在通信过程中，接收方根据自己接收缓存的大小，动态地调整发送方的发送窗口大小，即接收窗口rwnd （接收方设置确认报文段的窗口字段来将rwnd通知给发送方） ，发送方的**发送窗口**取**接收窗口rwnd**和**拥塞窗口cwnd**的最小值min

**接收窗口rwnd：**

**拥塞窗口cwnd：**

**作用：**（为什么要通知窗口大小）

- 防止接收方内存溢出，分组丢失 **Prevent receiver memory overflow and packet loss**

![image-20211226184114391](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211226184114391.png)

## 3.5 TCP congestion control TCP拥塞控制

- 慢开始 Slow start
- 拥塞避免 Congestion avoidance

![image-20211220171514255](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211220171514255.png)

- 快重传 fast retransmission

  <img src="https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211226184434588.png" alt="image-20211226184434588" style="zoom: 67%;" />

- 快恢复 quick recovery  

![image-20211220171524665](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211220171524665.png)

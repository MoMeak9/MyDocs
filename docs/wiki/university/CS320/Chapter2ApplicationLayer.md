---
title: 计算机网络Chapter2 应用层
date: 2021-12-7
author: MoMeaks
sidebar: 'auto'
categories:
- 大学课程
- wiki
tags:
- 计算机网络
---

# Application Layer 应用层

## Network Applications

### TCP/IP

- These protocols describe the data transmission between the source and destination over the internet
- Among these layers, application layer is the 1st layer. 

**Application Layer:**

- The application layer in the TCP/IP model is the closest layer
  to the end user
- It means that the application layer and end user can interact
  directly with the software application
- The application layer programs are based on client and
  servers

**Two different architectures are used in modern network  applications:**

- client-server architecture (C/S)
- peer-to-peer (P2P) architecture（去中心化的，每个主机都是服务器和客户端）

### FTP File Transfer Protocol

- FTP is a standard network protocol **provided by TCP/IP** and it is used for exchanging the files from one host to another.
- It is also used for downloading the files to computer from other servers.
- FTP is built on client-server architecture

 Types of File Transfer Protocol(FTP):

Control Connection 逐行传输，随时关闭

Data Connection 进程连结，指令开启，传输完关闭

### Socket

- A process sends messages into, and receives messages from, the network through a software interface called a socket.

- socket is the door between the client/server  process and the TCP connection

### IP

- IP address
- port number

IP address have two parts 
**i. Network id and**
**ii. Host id**
If IP address is 192.168.1.32,
**Network id is 192.168.1**
**and the host ID will be 32**

**Mainly 4 different services that a transport-layer protocol can  offer: **

1. Data integrity 数据完整性

2. Throughput
3. Timing
4. Security

## Web and HTTP

**3 components of web:**

1. **Uniform Resource Locator (URL):** serves as system for resources
    on web.
2. **Hyper Text Transfer Protocol (HTTP):** specifies communication
    of browser and server.
  - HTTP uses TCP as its underlying transport protocol
  - A HTTP client first initiates TCP connection
  - the browser and the server processes access TCP through their **socket interfaces.**
3. **Hyper Text Markup Language (HTML):** defines structure,
    organisation and content of webpage.

#### HTTP

1. **Non-persistent HTTP**

2. **Persistent HTTP（1.1）**

**two types of HTTP messages:** request, response

**RTT(round-trip time 往返时间):** time for a small packet to travel from client to server and back

**Response status codes：**

- 200 OK
- 301 Moved Permanently 永久移动
- 400 Bad Request
- 404 Not Found
- 505 HTTP Version Not Supported

#### **Cookies**

- Webserver transmits certain messages to a web browser so that the web server can monitor the user’s activity on a particular website, the messages are known as cookies.

- Web server can monitor the user’s activity on a particular website

**four components：**

1. 在响应头
2. 在请求头
3. 存储在用户主机被浏览器管理
4. 后台数据库

**Types of Cookies：**

- Session Cookies 会话cookies
- Permanent Cookies 永久的
- Permanent Cookies 第三方

**Use For:**

- authorization
- shopping carts
- recommendations
- user session state (Web e-mail)

## Electronic mail

#### Three major components:
1. user agents 

2. mail servers (帮忙代收答案) 

3. SMTP (simple mail transfer protocol)

   user to mail server

   mail server to server

## SMTP

<img src="https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211104101651020.png" alt="image-20211104101651020" style="zoom:67%;" />

Post Office Protocol—Version 3 (POP3), Internet Mail  Access Protocol (IMAP), and HTTP

## DNS 域名系统

domain name system, application-layer protocol

- People prefer the hostname identifier more，更简单容易记住
- DNS is a directory service that provides a mapping between the name of a host on the network and its IP address

**DNS services hostname to IP address translation:**

❖ The IP address of www.someschool.edu. This is done as
follows.
❖ 1. The same user machine runs the client side of the DNS
application.
❖ 2. The browser extracts the hostname, www.someschool.edu,
from the URL and passes the hostname to the client side of
the DNS application.
❖ 3. The DNS client sends a query containing the hostname to
a DNS server.
❖ 4. The DNS client eventually receives a reply, which includes
the IP address for the hostname.
❖ 5. Once the browser receives the IP address from DNS, it
can initiate a TCP connection to the HTTP server process
located at port 80 at that IP address

**Three different  sections:**

i. generic domains,  ii. country domains,  iii. and inverse domain(反解析)

## P2P Applications

### BitTorrent（BT）

- peers participating in the  distribution of a particular file is called a torrent.
- file divided into 256Kb chunks
- peers in torrent send/receive file chunks

下载速度取决于参与者的数量，提供上行带宽Uplink bandwidth给下载者，已经下载的数据又提供给其他人共享下载

## CDN 

Content Distribution Network 内容分发网络

A CDN is essentially **a group of servers that are strategically placed across the globe** with the purpose of accelerating the delivery of web content.

**Work：**

▪ Manages servers that are geographically distributed over different locations.
▪ Stores the web content in its servers.
▪ Attempts to direct each user to a server that is part of the CDN so as to deliver content quickly.

## Socket programming

进程通信 process communication

**Two socket types for two transport services:**
▪ UDP: unreliable segment
▪ TCP: reliable, connection-oriented segments capturing a continuous byte-stream

### UDP

-  no “connection” between client & server
- transmitted data may be lost or received out-of order
- UDP provides **unreliable** transfer of groups of bytes  (“datagrams”) between client and server (不可靠传输)

### TCP

- client must contact server

- 三次握手（连接三次），可靠传输 TCP provides reliable, in-order byte-stream transfer (“pipe”)  between client and server

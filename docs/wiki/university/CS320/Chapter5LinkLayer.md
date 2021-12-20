---
title: 计算机网络Chapter5 Link Layer 链路层
date: 2021-12-20
author: MoMeaks
sidebar: 'auto'
categories:
- 大学课程
- wiki
tags:
- 计算机网络
---

# Link Layer 链路层

## error detection,  correction  差错控制

### Error Detection Techniques 差错检查

![image-20211207143843613](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211207143843613.png)

**Parity Check** 奇偶校验码

奇偶校验，校验1的个数为奇数或偶数，符合则接受

<img src="https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211207144450174.png" alt="image-20211207144450174" style="zoom:80%;" />

只能检查出奇数个比特错误，检错能力为50%

Only an odd number of bits can be detected, and the error detection capability is 50%

**Checksum and**

**Cyclic Redundancy Check (CRC)** 循环冗余码

## multiple access  protocols 多址协议

### TDM(A) 时分多路复用

Time is divided into equal length TDM frames. Each TDM user occupies the time interval of fixed serial number in each TDM frame, and all users occupy the channel in turn.

<img src="https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211207142208816.png" alt="image-20211207142208816" style="zoom:80%;" />

### FDM(A) 频分多路复用

FDM users occupy different bandwidth resources at the same time.<img src="https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211207142506885.png" alt="image-20211207142506885" style="zoom:80%;" />

### ALOHA 协议

#### pure ALOHA 纯ALOHA协议

<img src="https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211207143516149.png" alt="image-20211207143516149" style="zoom:80%;" />

#### Slotted ALOHA 时隙ALOHA协议

<img src="https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211207143448069.png" alt="image-20211207143448069" style="zoom:80%;" />

#### 区别

1. Pure ALOHA than time slot ALOHA throughput is lower and lower efficiency. 吞吐量，效率低
2. Pure ALOHA want to send it, time slot ALOHA can send only at the beginning of the time slice. ALOHA只有在时间片段开始时才能发

### CSMA 协议

**CSMA/CD**、**CSMA/CA**

<img src="https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211207145753860.png" alt="image-20211207145753860" style="zoom:80%;" />

#### 1-Persistent:

？

#### Non-Persistent:

？

#### P-Persistent:

？

### 令牌传递协议：循环访问介质访问控制 “Taking turns” MAC protocols

A special format MAC control frame that contains no information.

Control channel usage to ensure that only one node occupy the channel at a time.

<img src="https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211207150003683.png" alt="image-20211207150003683" style="zoom:80%;" />

### Sliding Window Protocol 滑动窗口协议

？

### LANs 局域网

<img src="https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211207150231184.png" alt="image-20211207150231184" style="zoom:80%;" />

#### Address Resolution Protocol (ARP)地址解析协议

<img src="https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211207161930100.png" alt="image-20211207161930100" style="zoom:80%;" />

ARP协议解决下一跳走哪的问题

#### Ethernet 以太网

<img src="https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211207160856904.png" alt="image-20211207160856904" style="zoom:80%;" />

Ethernet provides connectionless, unreliable services.

#### switches 局域网交换机

A network switch forwards data packets between devices. Switches send packets directly to devices

multiple simultaneous transmissions

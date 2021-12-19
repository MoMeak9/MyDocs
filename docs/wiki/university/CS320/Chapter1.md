---
title: 计算机网络Chapter1
date: 2021-12-7
author: MoMeaks
sidebar: 'auto'
categories:
- 大学课程
- wiki
tags:
- 计算机网络
---

# L1

## TCP/IP五层模型

- Physical layer 
- Link layer 
- Network layer 
- Transport layer 
- Application layer

## computer networks

A computer network is a **set of nodes** that are connected together by **communication links**. 

**Set of nodes：**

Computers, switches（交换机）, routers, hubs（集线器）, printers, and servers, smart phone, tablet（平板电脑）

**Communication links：**

Fiber optics（光纤）, Coaxial pair cable（同轴电缆）, copper（铜）, radio wave, micro wave

#### Basic components

Server, Client, Hub,Router, Data cable, Peers

**Server:**

A server is a computer or system that provides resources, data, services, or programs to other computers. Types: File server, Domain Name System(DNS) server, web server, print server, mail server etc.**

**Client:**

Client is a computer that accesses a service made available by a server

**Hub:** 

Hub is a device that splits分割 a network connection into multiple computers.

**Router：**

A Router is a networking device that **receives and forwards data packets between computer network**.

**Data cable: 数据电缆**

Data cables are used to transmit the information from a source to a destination.

**Peers: 对等点**

Peer is a computer that accesses a service made available by a server

#### Components of data communication system in computer networks

- Sender, Receiver, Message
- Transmission Medium 传输媒介
- Protocol （数据传输）协议

#### Types of data communication

- Simplex Mode 单工
- Half-Duplex Mode 半双工
- Full-Duplex Mode 双工

#### Data communication ways  传播方式

**Unicast：单播**

Unicast is the term used to describe communication where a piece of information is sent from one point to another point. In this case there is just one sender, and one receiver.

**Broadcast：广播**

- Broadcast is the term used to describe communication where a piece of information is sent from one point to all other points.
- In this case there is just one sender, but the information is sent to all connected receivers.

**Multicast：多播**

- Multicast is the term used to describe communication where a
piece of information is sent from one point to a set of other points.
- In this case, the information is distributed to a set of receivers

#### Protocols 协议

Network protocols：

A network protocol is an established set of rules that determine how data is transmitted between different devices in the network.

## Network edge

The network edge refers to endpoints of a networks. 

End systems 端系统:

The computers and other devices connected to the Internet are often referred to as end systems

access networks：接入网络

is a network that connects subscribers to a particular service provider(DSL, cable networks)

Links：连接

physical media 物理媒介: wired, wireless communication links

### **Access network**: 

**digital subscriber line DSL  数字用户线路**

DSL is a technology for transmitting digital information at a high bandwidth **on existing phone lines** to homes and businesses

**cable network：有线电视网络**

unlike DSL, which has dedicated access to central office

#### Physical media

\- Wired communication links: - twisted pair 双绞线, - coaxial cable, - fiber optics - Wireless communication links: - micro wave - radio wave - infrared 红外

**Types of physical media**

**Guided：有引导的线路**

****

**Twisted pair cable:**

- least expensive and most commonly used

- copper wire
- wired connections from the telephone handset to the local telephone switch

分为 1.  Shielded（有屏蔽层的）2.Un-shielded（无屏蔽层的）

**Coaxial Cable: 同轴电缆**

- used in cable Television networks

**Fiber optic cables：光纤**

****

**Unguided Media：无引导的可以四处发散的**

- Radio waves

- Unguided or Wireless Media Microwaves 无线电波
- Infrared signals 红外信号

## Network Core

<img src="https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211101144356757.png" alt="image-20211101144356757" style="zoom:50%;" />

**Functions:**

1. routing: determines sourcedestination route taken by  packets(by routing algorithms)
2. forwarding: move packets from  router ’s input to appropriate  router output

#### Circuit switching

-  Circuit establishment 电路建立
- Data transfer
- Circuit disconnect

##### Frequency Division Multiplexing (TDM) 分频多路复用

![image-20211102143717444](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211102143717444.png)

##### Time Division Multiplexing (TDM) 时分多路复用

![image-20211102143729110](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211102143729110.png)

### Packet-switching: 分组交换

packet switching is a switching technique in which the packets are transferred from a source end system to a destination end system

-  Store-and-Forward Transmission 存储转发传输（拥有缓存）

  Most packet switches use store-and-forward transmission at the inputs to the links

## Delay 迟延

![image-20211102144332625](https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211102144332625.png)

**Processing Delay 处理:** The time required to examine the packet’s header and determine where to direct the packet is part of the processing delay.

<img src="https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211102145822255.png" alt="image-20211102145822255" style="zoom: 67%;" />

**Queueing delay 排队:** At the queue, the packet experiences a queuing delay as it waits to be transmitted onto the link. The length of the queuing delay of a specific packet will depend on the number of earlier-arriving packets that are queued and waiting for transmission onto the link.

<img src="https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211102145835308.png" alt="image-20211102145835308" style="zoom:67%;" />

**Transmission delay 传输:** This is the amount of time required to transmit  the packet bits from the node into the out link buffer.  The transmission delay is L/R. 

<img src="https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211102145850223.png" alt="image-20211102145850223" style="zoom:67%;" />

**Propagation delay 传播:** Once a bit is transmitted into the link, it needs to  propagate to router B. The time required to propagate from the  beginning of the link to router B is the propagation delay. 在链路上传播

<img src="https://mc-web-1259409954.cos.ap-guangzhou.myqcloud.com/MyImages/image-20211102145900489.png" alt="image-20211102145900489" style="zoom:67%;" />

#### Packet loss

- Since the amount of buffer space is finite, an arriving packet may find that the buffer is completely full with other packets waiting for transmission 

- In this case, packet loss will occur—either the arriving packet or one of the already-queued packets will be dropped

#### type of switching

**Circuit-switching:** 电路交换
 Does not need to be broken into packets
 Connection establishment is required to start transmission 
 It is not a store and forward technique
**Packet switching:** 分组交换
 Data are broken into pieces, called packets
 Connection establishment is not required to start transmission 
 It is a store and forward technique

#### Throughput 吞吐量 bits/sec

- **instantaneous:** rate at given point in time
- **average:** rate over longer period of time

去类比水管

## Networks types

- LAN(Local Area Network) 局域网
- PAN(Personal Area Network) 个人区域网
- MAN(Metropolitan Area Network) 城域网
- WAN(Wide Area Network) 广域网

## Bus topology

Network topology 网络拓扑

Bus topology 总线拓扑

Star Topology 星型拓扑

Ring topology 环形拓扑

Tree topology 树形拓扑



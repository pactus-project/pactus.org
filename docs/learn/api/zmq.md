---
title: ZMQ
---

# What is ZeroMQ?

::: quote

ZeroMQ (also spelled ØMQ, 0MQ or ZMQ) is an asynchronous messaging library, aimed at use in distributed or concurrent applications. It provides a message queue, but unlike message-oriented middleware, a ZeroMQ system can run without a dedicated message broker; the zero in the name is for zero broker.

::: right

From [Wikipedia](https://en.wikipedia.org/wiki/ZeroMQ)

:::


## Message fromat


Block messages fromat:

```
|<1 byte topic ID: 0xb1>|<32 bytes block hash>|<4 bytes height>|<4 bytes sequence number>|
```
---
layout: post
title: "DEV meeting 29 August 2022"
date: 2022-08-29 00:00:00 +0000
tags: dev-meeting
summary: How to PubSub
---

- Joseph suggested using Nanomsg instead of ZeroMQ. building ZeroMQ is not easy (specially in Windows) and more importantly we can use pure Go implementation of NanoMsg.

- We defined format of block events like this:

```
<event_id: 1 byte><event_data: variant><height: 4 bytes><seq_num: 4 bytes>
```

- Consequences:

  - Smart contract can be defined easily
  - Infura-like services become easy. Just replaying the events.

- Nagaraj's [PR](https://github.com/pactus-project/pactus/pull/355) reviewed.

- Renaming (rebranding) project discussed. Ask everyone to share their suggested names and run a polling.

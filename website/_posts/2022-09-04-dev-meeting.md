---
layout: post
title: "Dev meeting 29 August 2022"
date: 2022-08-29 00:00:00 +0000
tags: dev-meeting
summary: How to PubSub
---

## Meeting Summary

### NanoMsg instead of ZeroMQ

During the meeting, Joseph suggested using Nanomsg instead of ZeroMQ because building ZeroMQ is not easy,
especially in Windows. Additionally, we can use the pure Go implementation of Nanomsg.

The format of block events was defined as follows:

```text
<event_id: 1 byte><event_data: variant><height: 4 bytes><seq_num: 4 bytes>
```

As a consequence of this, smart contracts events can be defined more easily and Infura-like services become simple, as we can just replay the events.

### Reviewing a Pull Request

Nagaraj's [pull request](https://github.com/pactus-project/pactus/pull/355) reviewed.

### Renaming project

The team discussed renaming (rebranding) the project and decided to create an online survey to gather suggestions for a new name. Everyone is encouraged to participate in the survey and suggest new names for the project.

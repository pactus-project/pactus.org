---
layout: post
title: "Dev meeting"
date: 2023-07-09 00:00:00 +0000
tags: dev-meeting
---

## Meeting Summary

The meeting took place on 09 July 2023, at 2:00 PM UTC via Google Meet,
with team members from different time zones joining to discuss key aspects of the Pactus project.

## Overview to the Network Module

The meeting began with an overview of the Network module in Pactus.
This module uses [Libp2p](https://libp2p.io/) as its underlying network protocol.

The Network module is agnostic about the content of the message and
handles two types of messages: Gossip messages, which are broadcasted,
and Stream messages, which are sent directly to a specific peer.
The team discussed the relay nodes that enable communication for nodes behind NAT.
Upon receiving a message, the module publishes an event.
The two types of events are Gossip events and Steam events.

![Network messages](/blog/images/2023-07-09-dev-meeting/network-messages.png)

The team discussed the issue of Relay connections resetting, and explored solutions such as
[hole punching](https://docs.libp2p.io/concepts/nat/hole-punching/) or using UDP and IPv6.

Some users in the Testnet reported high network usage.
The team discussed implementing metrics for LibP2P to monitor network usage effectively.
The discussion related to this issue can be found [here](https://github.com/pactus-project/pactus/discussions/571).
Additionally, the team discussed the customization of network resources,
including setting limits for inbound and outbound connections.

## Overview to the Sync Module

Moving on, the Sync module was discussed.
Unlike the Network module, the Sync module has full knowledge about the messages and packets.
The module handles a range of message types, which can be found
[here](https://github.com/pactus-project/pactus/blob/239bb98120053a220c6732989d9a4541ff0c4fc9/sync/bundle/message/message.go#L41C1-L52C2).

It was suggested that we need to define metrics for each message type.
There was also a discussion about the need for reducing the messages to optimize the use of network resources.

The team decided to continue discussing these topics in future meetings.
They also plan to work on improving the Network and Sync modules based on these discussions.

---
version: 1
---

## Preface

Pactus is designed for low traffic usage.
However, some users still face bandwidth limitations imposed by their Internet Service Providers (ISPs).
This guide will explore effective ways to reduce networking usage for a Pactus node.

### Reducing the number of connection

By default, Pactus attempts to maintain 64 open connections with other nodes, split into 32 inbound and 32 outbound connections.
To reduce networking usage, you can decrease this maximum number of connections.
However, it's important to remember that more connections with peers usually enable the node to function more effectively and securely.
The `max_connections` setting in the config file can be adjusted to manage the maximum number of connections.

### Disabling Relay

A relay connection is a type of connection that can be established between two peers, usually behind a NAT, by a third-party peer known as a relay.
This is especially helpful when users run Pactus on a private network like home internet.
However, the relay connection is not as stable as a direct connection.
Disabling the relay connection may reduce network usage.
If you have a reliable and public IP address, you can disable the relay connection.
The relay connection is enabled by default. To disable the relay connection, set `enable_relay` to `false` inside the config file.

### Disabling Node-Network service

A node-network is a type of node that provides historical data, such as blocks, to other nodes so they can sync with the network.
By default, this service is enabled.
Disabling this service helps reduce traffic usage.
Keep in mind that new nodes rely on other nodes to be able to sync.
To disable the node-network service, set `node_network` to `false`.

### Disabling Node-Gossip service

The node-gossip is a type of node that helps the network by broadcasting data such as transactions and consensus votes.
By default, this service is disabled. If you enable this service, the network usage of your node will increase.

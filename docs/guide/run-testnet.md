---
id: run-tesnt-net
title: TestNets history
---

# Story of TestNets

Here is brief history of Zarb testnets:

## TestNet Version 1:

The first testNet is launched with only 4 validators. The goal was testing the stability of the consensus 
engine

## TestNet Version 2:

The second testNet is launched with 7 validators and the [committee](./learn-committee.md) size set 
to 4. The goal was testing the sortition algorithm, networking and state modules. Here is some 
statistic, after 100,000 blocks:

- Number of block: **100,000 blocks**
- Total number of transactions: **120,680 transactions**
- Size of blockchain: **61 MegaBytes**

![TestNet v2, Transactions](../assets/images/testnet_v2_transactions.png)
![TestNet v2, Blockchain size](../assets/images/testnet_v2_size.png)

## TestNet Version 3:

The third testNet is launched with 11 nodes in different time zones. Some of the nodes are configured to be
faulty and send malicious messages. The goal was to test the liveness and stability of the network in 
faulty situations. The TestNet could successfully commit 130 thousands blocks.

![TestNet v3, Network topology](../assets/images/testnet_v3_topology.png)

## TestNet Version 4:

Currently, we are running testNet version 4 with 15 validators. The goal is to test the sortition algorithm in real situations.

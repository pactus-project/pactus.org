---
layout: post
title: "Story of Testnet-2"
date: 2024-01-22 00:00:00 +0000
tags: announcement, testnet
---

## What is Testnet?

Testnet is a testing environment where developers and users can try out the functionality of a blockchain project,
without putting real assets or data at risk.
It helps to ensure that the final product is reliable and secure for users to use.
If you like to read more about the Testnet you can check out our post on
"[What is Testnet?]({{ site.baseurl }}/2023/03/01/what-is-testnet.html)".

## Summary

In October 2023, we launched [Testnet-2]({{ site.baseurl }}/2023/10/15/testnet-2-launched.html).
The main purpose of this Testnet was to closely monitor the new consensus mechanism and the stability of the P2P network.

The [committee](https://docs.pactus.org/concepts/consensus/committee/) for Testnet-2 was set to 51 validators,
and 2084 validators [joined]({{ site.baseurl }}/2023/07/05/testnet-500-validators.html) during the Testnet period.
More than 1500 computers and servers joined the network, and we experienced a high volume of data transmission in the network.
More than 800,000 blocks were created, and about 2 million transactions were processed during this time.
The size of the blockchain is about 450 megabytes.

About 500,000 coins were staked during this period, almost 60% of the total generated coins.
It shows that users, even in Testnet, tend to stake their coins.

## Stability of Consensus

In Testnet-1, we had one consensus failure that caused us to
[conclude the Testnet-1]({{ site.baseurl }}/2023/08/01/testnet-1-concluded.html).
During Testnet-2, there were no issues with the consensus mechanism, and
we had no case of failure during the testing period,
although the number of validators and nodes significantly increased on Testnet-2 compared to its predecessor.
It proved that the consensus mechanism is in a stable situation.

## Networking issues

In Testnet-2, the blockchain stopped twice, and each time it took more than 24 hours to fix the problem.
In the second blockage, we had no choice but to ask active validators inside the committee to
update their nodes to overcome the networking issue.
The development team faced a difficult situation and had to make the proper decision to fix the networking issues.
On one hand, the networking traffic increased significantly, and on the other hand, we had to
make sure normal users with limited internet bandwidth could still participate in the consensus mechanism without any problems.
After examining different scenarios, the networking issues were resolved, and
no major problems were reported till the end of Testnet.

## Major updates

During Testnet-2, we introduced several updates, including versions
[0.15.0]({{ site.url }}/2023/10/15/release-0-15-0.html),
[0.16.0]({{ site.url }}/2023/10/29/release-0-16-0.html),
[0.17.0]({{ site.url }}/2023/11/12/release-0-17-0.html),
[0.18.0]({{ site.url }}/2023/12/12/release-0-18-0.html),
[0.19.0]({{ site.url }}/2024/01/04/release-0-19-0.html), and
[0.20.0]({{ site.url }}/2024/01/11/release-0-20-0.html).
The update process went smoothly, and with the stability of Version 0.20.0 confirmed,
the development team shifted its focus to the Mainnet launch.

## Special thanks to the community

This Testnet was important for us.
It helped us learn what we need to do to make Pactus work even better.
Without the community that supports us and dedicates their time and resources to testing and feedback,
we wouldn't have been able to progress as we have.

We thank all of them for their valuable contributions.
As promised, **participants in Testnets will be given priority as validators for the MainNet**, and
will receive bounty PAC coins to set up their validators.

We are grateful to all those who participated in Testnets, and we encourage them to join the Mainnet.
As a community-based project, we rely on the support of our community members, and we value any help we receive.

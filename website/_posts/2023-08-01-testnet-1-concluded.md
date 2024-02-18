---
layout: post
title: "Story of Testnet-1"
date: 2023-08-01 00:00:00 +0000
tags: announcement, testnet
---

## What is Testnet?

Testnet is a testing environment where developers and users can try out the functionality of a blockchain project,
without putting real assets or data at risk.
It helps to ensure that the final product is reliable and secure for users to use.
If you like to read more about the Testnet you can check out our post on
"[What is Testnet?]({{ site.baseurl }}/2023/03/01/what-is-testnet.html)".

## Summary

In May 2023, we launched [Testnet-1]({{ site.baseurl }}/2023/05/09/testnet-1-launched.html).
The main purpose of this Testnet was to measure block time creation and the responsiveness of the blockchain.
The development team also focused on evaluating the network's performance.
Additionally, the overall performance of the software and the syncing process were closely examined and assessed.

The [committee]({{ site.baseurl }}/learn/consensus/committee/) for Testnet-1 was set to 21 validators,
and 584 validators [joined]({{ site.baseurl }}/2023/07/05/testnet-500-validators.html) during the Testnet period.
More than 600,000 blocks were created, and more than 1 million transactions were processed during this time.
The size of the blockchain is about 300 megabytes.

About 300,000 coins were staked during this period, it was almost 50% of the total generated coins.
It shows that users, even in Testnet, tend to stake their coins.

![Staking chart]({% image_url %}/staked-coins.png)

We were able to extract the confirmation time of transactions.
More than 97% of transactions were confirmed in just one block after submission.
This indicates that the transaction pool and broadcasting models are working fine.

![Transaction confirmation chart]({% image_url %}/transaction-confirmation.png)

Based on logs from one of the validators, the time for creating a block is about 3 seconds in normal cases.
More than 97% of blocks are committed in the first rounds.

![Consensus round chart]({% image_url %}/consensus-round.png)

## Major updates

During Testnet-1, we released three versions(Version
[0.11.0]({{ site.url }}/2023/05/29/release-0-11-0.html),
[0.12.0]({{ site.url }}/2023/06/19/release-0-12-0.html),
[0.13.0]({{ site.url }}/2023/07/01/release-0-13-0.html)), and the upgrade process was smooth.
Unfortunately, during Testnet-1, we encountered a consensus failure that may occur at any time in the future.
The consensus failure was resolved by requiring some validators to re-sync their nodes.
At this time, the development team decided to stop Testnet-1 and work on improvements that are not backward compatible,
including:

- Improving the consensus protocol
- Reducing the blockchain size
- Optimizing the network usage

After stabilizing the changes, we will announce the next Testnet, and hopefully, this will be the pre-launch Testnet.

## Special thanks to the community

This Testnet was important for us.
It helped us learn what we need to do to make Pactus work even better.
Without the community that supports us and dedicates their time and resources to testing and feedback,
we wouldn't have been able to progress as we have.

We thank all of them for their valuable contributions.
As promised, **participants in Testnets will be given priority as validators for the MainNet**, and
will receive bounty PAC coins to set up their validators.

We are grateful to all those who participated in Testnet-1, and
we encourage them to join our next Testnet to help us improve Pactus.
As a community-based project, we rely on the support of our community members, and we value any help we receive.

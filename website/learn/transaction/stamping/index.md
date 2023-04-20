---
layout: learn
title: Stamping Transactions
sidebar: Stamping Transactions
---

# Stamping Transactions

"Stamping a transaction" involves adding a piece of information from a confirmed block to the header of a transaction.
This links the stamped transaction to the main chain.
Unlike regular transactions, stamped transactions have a **Time-to-Live (TTL)** interval and remain
valid only for a specific duration.

The Time-to-Live interval is determined by the [consensus parameters]({{ site.baseurl }}/learn/consensus/parameters),
and currently set to 8640 blocks or approximately one day.
This means that a stamped transaction can only be included in the blockchain within one day from the block it references.
If it's not included within this period, it will be considered expired and will need to
be re-stamped again with a new reference block.
In Pactus, stamps are represented by the first 4 bytes of a [block hash]({{ site.baseurl }}/learn/blockchain/block#block-hash).

![Stamped transaction]({{ site.url }}/assets/images/pactus_stamped_transaction.png)

## Long-Range attack

A long-range attack in blockchains occurs when an attacker or group of attackers create an alternative blockchain (fork)
starting from a point far back in history. They use old private keys with significant past stake,
build the fork in secret, and try to make it longer than the main chain.
The aim is to double-spend, censor transactions, or disrupt consensus.

![Long-Range attack]({{ site.url }}/assets/images/long-range-attack.png)

Stamped transactions help prevent long-range attacks, as the transactions in the private fork become
invalid due to incorrect stamps.

![Preventing Long-Range attack]({{ site.url }}/assets/images/preventing-long-range-attack.png)

## Transaction Pool

Stamped transactions have a significant effect on the transaction pool size.
By having a limited lifetime, stamped transactions prevent the transaction pool from becoming too large.
This is because the expired transactions cen be removed from the pool.

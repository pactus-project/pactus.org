---
layout: learn
title: Stamping Transactions
sidebar: Stamping Transactions
---

# Stamping Transactions

"Stamping a transaction" involves adding a piece of information from a confirmed block to the header of a transaction.
This links the stamped transaction to the main chain.
Unlike regular transactions, stamped transactions have a **Validity Period** and remain valid only for a specific duration.
The Validity Period is determined by the [consensus parameters]({{ site.url }}/learn/consensus/parameters),
and currently set to 8640 blocks or approximately one day.
This means that a stamped transaction can only be included in the blockchain within one day from the block it references.
If it's not included within this period, it will be considered expired and will need to be re-stamped again with a new reference block.
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

## Consequences

### Advantages

- **Reducing the size of the transaction pool**

  Each stamped transaction has a limited lifetime.

- **Preventing long forks**

  Stamped transactions prevents any long fork.

### Disadvantage

- **Increasing the size of transaction**

Stamping transaction increases the size of the transaction by four bytes.

- **Blockchain query requirement**

Users need to query the blockchain before signing a transaction.

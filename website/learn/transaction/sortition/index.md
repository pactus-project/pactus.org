---
layout: learn
title: Sortition Transaction
sidebar: Sortition Transaction
---

# Sortition Transaction

Sortition transaction is used to enter a [validator](https://docs.pactus.org/docs/concepts/blockchain/validator/)
in the [committee](https://docs.pactus.org/docs/concepts/consensus/committee/).
By committing a sortition transaction, the validator will enter the committee.
Sortition transactions are valid for 7 blocks, which is defined as "sortition interval" in the
[consensus parameters](https://docs.pactus.org/docs/concepts/consensus/parameters/).

## Payload Structure

The sortition transaction has a payload consists the following fields:

| Size     | Field           |
| -------- | --------------- |
| 21 bytes | Address         |
| 48 bytes | Sortition Proof |

- **Address** is the address of the validator that evaluated the sortition
- **Sortition Proof** is the proof of evaluating the sortition

Validators do not need to pay a fee for sortition transactions, and the fee should be set to zero.

---
layout: learn
title: Sortition Transaction
sidebar: Sortition Transaction
---

# Sortition Transaction

Sortition transaction is used to enter a validator in the committee.
By committing a sortition transaction, the validator will enter to the committee.
Sortition transactions are valid for 7 block that is defined in
[consensus parameters]({{ site.url }}/learn/consensus/parameters/).

## Payload structure

The sortition transaction has a payload consists the following fields:

| Size     | Field           |
| -------- | --------------- |
| 21 bytes | Address         |
| 48 bytes | Sortition Proof |

- **Address** is the address of the validator that evaluated the sortition
- **Sortition Proof** is the proof of evaluating the sortition

Validator doesn't need to pay a fee for the sortition transaction and, and the fee should be set to zero.

---
layout: learn
title: Unbond Transaction
sidebar: Unbond Transaction
---

# Unond Transaction

Unbond transaction is used to unbond a validator.
An unbond transaction cannot participate in the sortition algorithm anymore and after 21 days the stake can be withdraw.

## Payload structure

The unbond transaction has a payload consists the following field:

| Size     | Field             |
| -------- | ----------------- |
| 21 bytes | Validator address |

- **Validator address** is the address of [validator]({{ site.url }}/learn/blockchain/validator/) that is unbonded.

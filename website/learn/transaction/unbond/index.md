---
layout: learn
title: Unbond Transaction
sidebar: Unbond Transaction
---

# Unond Transaction

Unbond transaction is used to unbond a [validator]({{ site.baseurl }}/learn/blockchain/validator/).
An unbonded validator cannot participate in the sortition algorithm anymore, and after 21 days, the stake can be withdrawn.
This is called the "unbond interval" and is defined in the [consensus parameter]({{ site.baseurl }}/learn/consensus/parameters/).

## Payload structure

The unbond transaction has a payload consists the following field:

| Size     | Field             |
| -------- | ----------------- |
| 21 bytes | Validator address |

- **Validator address** is the address of [validator]({{ site.baseurl }}/learn/blockchain/validator/) that is unbonded.

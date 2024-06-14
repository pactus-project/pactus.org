---
layout: learn
title: Unbond Transaction
sidebar: Unbond Transaction
---

# Unond Transaction

Unbond transaction is used to unbond a [validator](https://docs.pactus.org/docs/concepts/blockchain/validator/).
An unbonded validator cannot participate in the sortition algorithm anymore, and after 21 days, the stake can be withdrawn.
This is called the "unbond interval" and is defined in the [consensus parameter](https://docs.pactus.org/docs/concepts/consensus/parameters/).

## Payload Structure

The unbond transaction has a payload consists the following field:

| Size     | Field             |
| -------- | ----------------- |
| 21 bytes | Validator address |

- **Validator address** is the address of validator that is unbonded.

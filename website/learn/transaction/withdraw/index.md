---
layout: learn
title: Withdraw Transaction
sidebar: Withdraw Transaction
---

# Withdraw Transaction

Withdraw transaction is used to withdraw the staked coins from an unbonded
[validator](https://docs.pactus.org/docs/concepts/blockchain/validator/)

## Payload Structure

The withdraw transaction has a payload consists the following fields:

| Size     | Field            |
| -------- | ---------------- |
| 21 bytes | Sender address   |
| 21 bytes | Receiver address |
| Variant  | Amount           |

- **Sender address** is the address of the sender validator.
- **Receiver address** is the address of the receiver [account](https://docs.pactus.org/docs/concepts/blockchain/account/).
- **Amount** is the amount of coins that should be withdrawn

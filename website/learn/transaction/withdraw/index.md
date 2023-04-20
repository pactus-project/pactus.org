---
layout: learn
title: Withdraw Transaction
sidebar: Withdraw Transaction
---

# Withdraw Transaction

Withdraw transaction is used to withdraw the staked coins from an unbonded
[validator]({{ site.baseurl }}/learn/blockchain/validator/)

## Payload structure

The unbond transaction has a payload consists the following field:

| Size     | Field            |
| -------- | ---------------- |
| 21 bytes | Sender address   |
| 21 bytes | Receiver address |
| 8 bytes  | Amount           |

- **Sender address** is the address of the sender validator.
- **Receiver address** is the address of the receiver [account]({{ site.baseurl }}/learn/blockchain/account/).
- **Amount** is the amount of coins that should be withdraw

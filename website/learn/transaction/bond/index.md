---
layout: learn
title: Bond Transaction
sidebar: Bond Transaction
---

# Bond Transaction

Bond transaction is used to bond stake to a [validator]({{ site.baseurl }}/learn/blockchain/validator/).
If the validator does not exist, it will be created.
Once a bond transaction committed, the validator cannot participate in the
[sortition algorithm]({{ site.baseurl }}/learn/consensus/sortition/) for 1 hour.
This is called the boding interval and set as a [consensus parameter]({{ site.baseurl }}/learn/consensus/parameters/).

## Payload structure

The bond transaction has a payload consists the following fields:

| Size                | Field            |
| ------------------- | ---------------- |
| 21 bytes            | Sender address   |
| 21 bytes            | Receiver address |
| 96 bytes (optional) | Public key       |
| 8 bytes             | Amount           |

- **Sender address** is the address of the sender [account]({{ site.baseurl }}/learn/blockchain/account/).
- **Receiver address** is the address of the receiver validator.
- **Public key** is the validator's public key. If the validator is not exist yet,
  the public key should be set, otherwise it should left empty.
- **Amount** is the amount of coins that should be staked or bonded.

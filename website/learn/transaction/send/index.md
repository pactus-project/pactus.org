---
layout: learn
title: Send Transaction
sidebar: Send Transaction
---

# Send Transaction

Send transaction is used to send values between the [accounts]({{ site.url }}/learn/blockchain/account/).
If the receiver account does not exist, it will be created.

## Payload structure

The sortition transaction has a payload consists the following fields:

| Size     | Field            |
| -------- | ---------------- |
| 21 bytes | Sender address   |
| 21 bytes | Receiver address |
| 8 bytes  | Amount           |

- **Sender address** is the account address that sends the amount
- **Receiver address** is the account address that receives the amount
- **Amount** is the amount of stake that should be transferred

## Reward transaction

Reward transaction is the first transaction in each block. There is only one reward transaction
per block and the format of reward transaction is the same as send transaction but
the fee is zero and it doesn't have the signature.

Sender address is the [Treasury address]({{ site.baseurl }}/learn/blockchain/address#treasury-address) and receiver
address is defined by the block proposer. The amount of reward transaction should be equal to the
[block reward]({{ site.baseurl }}/learn/blockchain/incentive/#flat-reward) plus transactions fee.
This amount will go to the receiver
account as block reward. Therefore in each block one coin from
[treasury account]({{ site.baseurl }}/learn/blockchain/account#treasury-account)
moves to the validator account as block reward.

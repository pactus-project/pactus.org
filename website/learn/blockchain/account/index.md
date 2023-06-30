---
layout: learn
title: Account
sidebar: Account
---

# Account

An account is an entity that is identified by a unique [address]({{ site.baseurl }}/learn/blockchain/address),
which can send transactions on the blockchain.

## Account structure

The account structure is 16 bytes long and consists the following fields:

| Size    | Field    |
| ------- | -------- |
| 4 bytes | Number   |
| 4 bytes | Sequence |
| 8 bytes | Balance  |

- **Number** is a sequential and unique number assigned to each account when it is created for the first time.
  The account number is used to calculate the [state hash]({{ site.baseurl }}/learn/blockchain/state-hash) of the blockchain.
- **Sequence** increases every time a transaction is sent from an account.
  This protects the account against replay attacks, where a previously committed transaction is broadcasted again.
- **Balance** holds the balance of the account, which is the amount of Pactus coins held by the account.

## Treasury account

The Treasury account is a special account that is defined at the genesis time.
The Treasury account holds the total supply of Pactus coins, which is fixed at 21 million coins,
and each coin is divided into 1 billion units.

The sequence number of the Treasury account is the same as the number of blocks in the blockchain.
In each block, one coin from the treasury account is transferred to the proposer account
as [block reward]({{ site.baseurl }}/learn/blockchain/incentive).

This block reward serves as an incentive for validators to propose and validate new blocks on the blockchain.
As a result, the total number of Pactus coins in circulation increases gradually over time as new blocks
are added to the blockchain.

---
layout: learn
title: Validator
sidebar: Validator
---

# Validator

A Validator is an entity that participates in the consensus process by sharing its votes.
Validators get rewarded for creating new blocks, and to become a Validator,
they must "bond" or lock up a certain amount of coins as stake.
The amount of stake held by validators determines their power in the consensus.

## Validator Structure

The Validator structure is 120 bytes long and consists the following fields:

| Size     | Field               |
| -------- | ------------------- |
| 96 bytes | Public Key          |
| 4 bytes  | Number              |
| 8 bytes  | Stake               |
| 4 bytes  | Last Bonding Height |
| 4 bytes  | Unbonding Height    |
| 4 bytes  | Last Joined Height  |

- **Public Key** is the Validator's public key.
- **Number** is a sequential and unique number assigned to each validator when it is created for the first time.
  The validator number is used to calculate the [state hash]({{ site.baseurl }}/learn/blockchain/state-hash) of the blockchain.
- **Stake** holds the Validator's stake or the amount of Pactus coins locked or "staked" by the Validator.
- **Bonding Height** is the last block height that the validator has bonded their stake.
- **Unbonding Height** is the block height that the validator's stake is unbonded.
- **Last Joined Height** is the block height that the validator joined the committee.

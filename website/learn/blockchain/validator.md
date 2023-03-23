---
layout: learn
title: Validator
---

# Validator

## What is Validator?

A Validator is a node that participates in the consensus process by sharing its votes.
Validators get rewarded for creating new blocks, and to become a Validator, they must bond tokens in the form of stake.
The more stake they bond, the higher their weight in the consensus protocol.

The Validator structure is 124 bytes long and consists the following fields:

| Size     | Field               |
| -------- | ------------------- |
| 96 bytes | Public Key          |
| 4 bytes  | Number              |
| 4 bytes  | Sequence            |
| 8 bytes  | Stake               |
| 4 bytes  | Last Bonding Height |
| 4 bytes  | Unbonding Height    |
| 4 bytes  | Last Joined Height  |

- **PublicKey** is the Validator's public key.
- **Number** is a sequential and unique number assigned to each validator when it is created for the first time. The validator number is used to calculate the [state hash](./state-merkle) of the blockchain.
- **Sequence** increases every time a transaction is sent from an validator. This protects the validator against replay attacks, where a previously committed transaction is broadcasted again.
- **Stake** holds the Validator's stake or the amount of Pactus coins locked or "staked" by the Validator.
- **BondingHeight** is the last height that the validator is bonded some stake.
- **UnbondingHeight** is the height that the validator is unbonded.
- **LastJoinedHeight** is the validator joined the committee.

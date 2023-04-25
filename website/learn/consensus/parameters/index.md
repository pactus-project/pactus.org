---
layout: learn
title: Consensus Parameters
sidebar: Parameters
---

# Consensus Parameters

Consensus parameters are a set of configurable settings that determine how the Pactus blockchain operates.
These parameters are agreed upon by all validators in the network,
ensuring that validators behave in the same way and that the network operates consistently.

Here is the list of the consensus parameters:

- **Block Version:** The version number of the blockchain protocol.
  This is set to 1.
- **Block Time:** The time interval in seconds between the creation of two consecutive blocks.
  This is set to 10 seconds, which means that a new block is created every 10 seconds.
- **Committee Size** The number of validators in the committee.
  This is set to 21 validators.
- **Block Reward** The fixed reward amount given to the validator who successfully creates and proposes a new block.
  This is set to 1,000,000,000, which is equivalent to one coin.
- **Time-to-Live Interval**: The number of blocks that a transaction can remain unprocessed before
  it is removed from the transaction pool.
  This is set to 8640 blocks, which is almost one day.
- **Bond Interval**: The minimum number of blocks that must elapse after a validator has submitted a bond transaction
  before they can participate in the consensus process and join the validator committee.
  This is set to 360 blocks, which is almost one hour.
- **Unbond Interval**: The minimum number of blocks that must elapse after a validator has submitted
  an unbond transaction before
  they can withdraw their staked coins.
  This is set to 181440 blocks, which is almost 21 days.
- **Sortition Interval**: The maximum number of blocks that a sortition transaction can remain valid and be included
  in a block.
  This is set to 7 blocks.
- **Fee Fraction**: The fraction of transaction value that must be paid in order for a transaction to be included in a block.
  This is set to 0.0001, meaning that 0.01% of transaction value are awarded to the block proposer.
- **Minimum Fee**: The minimum transaction fee that must be paid.
  This is set to 1,000, which is equivalent to 0.000001 coin.
- **Maximum Fee**: The maximum transaction fee that must be paid.
  This is set to 100,000,000, which is equivalent to 0.1 coin.
- **Maximum Stake**: The maximum amount of coins that can be staked by a validator.
  This is set to 12,381,000,000,000, which is 12,381 coins.

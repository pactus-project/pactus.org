---
id: learn-incentive
title: Incentive
---

# Incentive

## Deflationary economic model

Zarb is a deflationary blockchain same as Bitcoin. Total number of coin in Zarb is 21 million and it
set at genesis time. Zarb doesn't have any pre-minted token or privileged account.

## Flat reward

The incentive may help encourage nodes to stay honest[^first]. To have better understanding about
incentive model in Zarb, let's do a comparison with bitcoin incentive and reward distribution model.
We use this comparison to show the difference. We love bitcoin and bitcoin is the king.

| Zarb                                             | Bitcoin                                      |
| ------------------------------------------------ | -------------------------------------------- |
| Consensus engine is Proof of Stake               | Consensus engine is Proof of Work            |
| _Exactly_ every 10 seconds one block is _minted_ | Around every 10 minutes one block is _mined_ |
| Total supply is 21,000,000 coin                  | Total supply is 21,000,000 coin              |
| Always one coin per block                        | Initial block reward is 50 coin              |
| No halving                                       | Halving happens every 4 years                |

The way bitcoin distributes the tokens is a good solution for proof of work blockchain. Early
contributors in bitcoin collect most of the tokens. This scheme in Proof of Stake blockchain will
damage the network by powering early contributors. Simply because the validators are weighed by
their stake. More stake, more power.

![Rewards in Bitcoin](../assets/images/bitcoin_reward.png)

![Rewards in Zarb](../assets/images/zarb_reward.png)

In Zarb token distribution is flat. It means the reward for each block is fixed and doesn't change
in time. There is no halving in Zarb. The flat reward is part of the consensus parameters and for
the main net it set one coin per block.

![Token distribution in Bitcoin](../assets/images/bitcoin_token_distribution.png)

![Token distribution in Zarb](../assets/images/zarb_token_distribution.png)

## Treasury account

Treasury account is special account and define at the genesis time. Treasury account at the genesis
time holds total coins (21 million).

## Reward transaction

The first transaction in each block is reward transaction.

[^first]: [Bitcoin: A Peer-to-Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf)

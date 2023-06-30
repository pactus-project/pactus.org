---
layout: learn
title: Incentive
sidebar: Incentive
---

# Incentive

> The incentive may help encourage nodes to stay honest.
>
> [Satoshi Nakamoto](https://bitcoin.org/bitcoin.pdf)

In Pactus, rewards are given to validators for proposing and validating new blocks on the blockchain.
These rewards serve as an incentive for validators to participate in the consensus process and
maintain the security and integrity of the network.

## Flat Reward

To better understand the incentive model in Pactus, let's compare it with the Bitcoin reward model.
This comparison will help to understand how the incentive model works in Pactus.

| Pactus                                           | Bitcoin                                      |
| ------------------------------------------------ | -------------------------------------------- |
| Consensus engine is Proof of Stake               | Consensus engine is Proof of Work            |
| _Exactly_ every 10 seconds one block is _minted_ | Around every 10 minutes one block is _mined_ |
| Total supply is 21,000,000 coin                  | Total supply is 21,000,000 coin              |
| Always one coin per block                        | Initial block reward is 50 coin              |
| No halving                                       | Halving happens every 4 years                |

The halving mechanism in Bitcoin rewards early contributors more significantly.
However, in a Proof-of-Stake blockchain, this mechanism can lead to wealth centralization,
as early validators gain too much power based on their staked coins.

To promote fairer block rewards, Pactus has introduced a simple and straightforward incentive model called the "Flat Reward."
In this model, the block reward remains constant at one coin per block and does not change over time.

![Rewards in Bitcoin]({{ site.url }}/assets/images/bitcoin_reward.png)

![Rewards in Pactus]({{ site.url }}/assets/images/pactus_reward.png)

### Coin distribution

In Pactus, the coin distribution is linear. This linear distribution is a direct result of the Flat Reward system.
Unlike other blockchains that have a curved distribution, Pactus maintains a consistent coin distribution.

![Coin distribution in Bitcoin]({{ site.url }}/assets/images/bitcoin_coin_distribution.png)

![Coin distribution in Pactus]({{ site.url }}/assets/images/pactus_coin_distribution.png)

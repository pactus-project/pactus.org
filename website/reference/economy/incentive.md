---
layout: reference
title: Incentive model
permalink: /reference/economy/incentive/index.html
---

# Incentive model

## Flat Reward

The incentive may help encourage nodes to stay honest[^first]. To have a better understanding about
the incentive model in Pactus, let's do a comparison with the Bitcoin incentive and reward
distribution model. We will use this comparison to show the difference. is the king.

| Pactus                                           | Bitcoin                                      |
| ------------------------------------------------ | -------------------------------------------- |
| Consensus engine is Proof of Stake               | Consensus engine is Proof of Work            |
| _Exactly_ every 10 seconds one block is _minted_ | Around every 10 minutes one block is _mined_ |
| Total supply is 21,000,000 coin                  | Total supply is 21,000,000 coin              |
| Always one coin per block                        | Initial block reward is 50 coin              |
| No halving                                       | Halving happens every 4 years                |

The way Bitcoin distributes the tokens is a good solution for Proof-of-Work blockchain. Early
contributors in Bitcoin collect most of the tokens. This scheme in Proof-of-Stake blockchain will
damage the network by powering early contributors. Simply because the validators are weighed by
their stake. More stake, more power.

![Rewards in Bitcoin](/assets/images/bitcoin_reward.png)

![Rewards in Pactus](/assets/images/pactus_reward.png)

In Pactus, the token distribution is flat. It means the reward for each block is fixed and does not
change over time. There is no halving in Pactus. The flat reward is a part of the consensus parameters
and, for the main net, it sets one coin per block.

![Token distribution in Bitcoin](/assets/images/bitcoin_token_distribution.png)

![Token distribution in Pactus](/assets/images/pactus_token_distribution.png)

[^first]: [Bitcoin: A Peer-to-Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf)

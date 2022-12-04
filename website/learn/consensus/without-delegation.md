---
layout: learn
title: Consensus without delegation
permalink: /learn/consensus/without-delegation/index.html
---

# Consensus without delegation

## Proof of Stake

Proof of Stake is a way to secure the network through requesting users to stake some amount of their coins.
These stakeholders, called validators, are responsible to collect, validate and add transactions to the blockchain.
The validators will be rewarded with the native tokens.
They are also motivated by the opportunity to act as stewards of the blockchain.

Unlike Proof of Work, which is based on competition, Proof of Stake is based on collaboration.
Validators work together to manage the expansion of the blockchain.
A Proof of Stake blockchain is more decentralized and therefore more secure if more validators participated in it.

But there is a problem here; Increasing the number of validators, will increase the voting time, and therefore the consensus
mechanism becomes less efficient.

### Delegated Proof of Stake

Some blockchains address this problem by defining "delegator".
In Delegated Proof of Stake, people put their stakes in the hands of a group of “delegates”.
Number of delegates are limited and they are responsible for validating the transactions and producing the blocks.

![Delegated Proof of Stake](/assets/images/delegated_proof_of_stake.png)

## Pactus has no delegation

The solution we are offering in Pactus is creating a dynamic set of validators.
The size of the committee is fixed but the members of the committee change randomly.
The number of validators outside the committee is unlimited and anyone can become a validator by staking some tokens.
At each block, validators start running a lottery in order to choose themselves.
A validator can be in the committee for the next block based on his stake and his luck.
Once a validator enters the committee, the oldest validator in the committee leaves.

![Pactus Proof of Stake](/assets/images/pactus_validator_pool.png)

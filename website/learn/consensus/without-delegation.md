---
layout: learn
title: Consensus without delegation
permalink: /learn/consensus/without-delegation/index.html
---

# Consensus without delegation

## Proof of Stake

Proof of Stake is a way to secure the network through requesting users to stake some amount of their coins.
These stakeholders, called validators, are responsible to collect, validate and add transactions to the blockchain.
The validators will be rewarded with native tokens to be honest and available.
They are also motivated by the opportunity to act as stewards of the blockchain.

Unlike Proof of Work, which is based on competition, Proof of Stake is based on collaboration.
Validators work together to manage the expansion of the blockchain.

Increasing the number of validators, will increase the voting time, and therefore the consensus mechanism becomes less efficient.
On the other hand, a Proof of Stake blockchain is more secure and decentralized if more validators participated in it.
The question is how many validators a blockchain can have?


### Delegated Proof of Stake

Some blockchains answer this question by defining "delegator".
In Delegated Proof of Stake, people put their stakes in the hands of a group of “delegates”.
Number of delegates are limited and they are responsible  for validating the transactions and producing the blocks.

![Delegated Proof of Stake](/assets/images/delegated_proof_of_stake.png)

## Pactus Has No Delegation

The solution we are offering in Pactus is creating a **dynamic set** of validators.
This member of committee changes randomly. The size of the committee is fixed but the number of validator is unlimited.


![Pactus Proof of Stake](/assets/images/pactus_validator_pool.png)

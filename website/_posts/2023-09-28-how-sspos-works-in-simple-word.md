---
layout: post
title: "How SSPoS (Solid State Proof of Stake) works in simple word"
date: 2023-09-28 00:00:00 +0000
tags: SSPoS
---

# Abstract

In all Blockchain protocols, there is a concept called a consensus mechanism.
This mechanism is used to enable nodes to reach an agreement
on the state of the Blockchain they are
maintaining, in order to have a synchronized and integrated Blockchain.

For now, we have a lot of consensus mechanisms in the Blockchain world.
Pactus Blockchain uses the SSPoS (Solid State Proof of State) which is a new consensus model.

To explain how it works let's start with explaining one of the first and simplest
consensus mechanisms (or if you already know them, just jump into the last part named SSPoS).

![Solid State Proof of Stake](/blog/images/2023-09-28-how-sspos-works-in-simple-word/SSPoS.png)

## PoW (Proof of Work)

In the proof of work model, each node in the network should solve a complex mathematical
problem that requires lots of computing resources to make a new block.

In this way, it’s highly unlikely that anyone would be able to change
past transactions and change Blockchain states such as balances,
without expending equivalent computational power.

By doing this we ensure the security and integrity of the Blockchain.

The concept was adapted from digital tokens by Hal Finney in 2004
through the idea of “reusable proof of work” using the 160-bit secure hash algorithm 1 (SHA-1).

Bitcoin uses this consensus model.

## PoS (Proof of Stake)

On the other hand, PoS or Proof of Stake is another consensus mechanism that instead of miners has validators!

Validators lock a number of their assets in the Blockchain and they can transfer or use it
till it is locked which we call staking.
after each Block is committed one of the validators will be chosen randomly (more amount of stake,
more chance to be chosen) when a validator is chosen
it proposes a block and announces it to other nodes to be validated,
when a supermajority of validators accept the block it’s going to be committed.

In this system, validators have no incentive to behave maliciously or dishonestly.
If they do, they risk losing the stake amount.

More amount of validators in a PoS Blockchain makes it more secure,
decentralized, and trustable, but it also makes the validation and consensus process slower and more difficult.

Ethereum uses this model.

## DPoS (Delegated Proof of Stake)

DPoS or Delegated Proof of Stake, is a variant of the PoS consensus algorithm.
users entrust their stakes to a small group of “delegates”.
These delegates are responsible for validating transactions
and creating blocks. The number of delegates is limited
to ensure accountability and efficiency in the validation process.

Some Blockchains like Cardano and Tron use DPoS.

DPoS tries to solve the issue of PoS which when validators
increase we have an inefficient validation process. but the main issue with DPoS itself is putting a lot
of trust in the hands of a small number of delegates,
which goes against the principle of “don’t trust, verify”.

## SSPoS (Solid State Proof of Stake)

BUT, HOW ABOUT SSPoS? HOW ABOUT PACTUS?

In Pactus Blockchain, we have something called Solid State Proof of Stake
and we try to fix the previous model’s issue, let me explain.

Pactus uses a dynamic committee of validators with a fixed size of 51,
but the members of the committee randomly change in each round,
based on stake amount the chance of being chosen is higher. on the other hand,
the number of validators out on the committee is unlimited, allowing anyone
to become a validator by staking coins.

At each block, validators participate in a sortition algorithm by generating a random number
between zero and the total staked coins. If the number is less
than the validator’s stake, they can enter the committee and replace the oldest committee member.

So, in SSPoS models which are a variant of PoS, we can reach a consensus,
without using high computation resources, having an inefficient
validation process by increasing validator numbers,
and also without breaking the principle of “don’t trust, verify”.

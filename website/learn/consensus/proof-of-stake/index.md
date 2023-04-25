---
layout: learn
title: Proof of Stake
sidebar: Proof of Stake
---

# Proof of Stake

Proof of Stake is a way to secure a blockchain through requesting users to stake some amount of their coins.
These stakeholders, called validators, are responsible to collect, validate and add transactions to the blockchain.
The validators will be rewarded with native coins.

Unlike Proof of Work, which is based on competition, Proof of Stake is based on collaboration.
Validators work together to manage the expansion of the blockchain.
A Proof of Stake blockchain becomes more decentralized and secure as more validators participate in it.

## An example

To understand how Proof of Stake works, imagine a community bank without any centralized authority.
In this bank, users decide to run it together.
Some of these users volunteer to collect, validate, and record transactions,
ensuring that everything runs smoothly.

These volunteers, known as validators, must temporarily lock or freeze some of their money as a stake.
This stake can't be transferred or used.
The more money a validator stakes, the more influence they have in the system.

From time to time, one of the validators is chosen by the others to collect all the recent transactions,
bundle them together, and send a copy to the other validators.
If a supermajority of the validators agree with the proposed bundle by signing it,
the bundle will be committed to the bank's ledger.

In this system, validators have no incentive to behave maliciously or dishonestly.
If they do, they risk harming the bank's reputation and the value of their own stakes as well.

## Delegated Proof of Stake

In Proof of Stake, if the number of validators increases,
the voting time will also increase, and this can lead to an inefficient consensus mechanism.
In our community bank example, running the bank becomes more difficult as the number of validators increases.

To solve this problem, some blockchains use the concept of "delegators".
In Delegated Proof of Stake, users entrust their stakes to a small group of "delegates".
These delegates are responsible for validating transactions and creating blocks.
The number of delegates is limited to ensure accountability and efficiency in the validation process.

![Delegated Proof of Stake]({{ site.url }}/assets/images/delegated_proof_of_stake.png)

The delegation model puts a lot of trust in the hands of a small number of delegates,
which goes against the principle of "don't trust, verify".

## Consensus without delegation

Pactus introduced a mechanism that doesn't rely on delegation.
It utilizes a dynamic [committee]({{ site.baseurl }}/learn/consensus/committee/) of validators
that are responsible for creating new blocks.
The size of the committee is fixed, but the members of the committee are randomly changed.
On the other hand, the number of validators outside the committee is unlimited, allowing anyone to
become a validator by staking coins.

At each block, validators participate in a [sortition]({{ site.baseurl }}/learn/consensus/sortition/) algorithm
by generating a random number between zero and the total staked coins.
If the number is less than the validator's stake, they can enter the committee and replaces the oldest committee member.

![Pactus Proof of Stake]({{ site.url }}/assets/images/pactus_validator_pool.png)

The chance of entering the committee depends on the validator's stake and luck.
But on average, one validator should enter the committee in each block.

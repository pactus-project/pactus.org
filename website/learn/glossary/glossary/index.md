---
layout: learn
title: Pactus Glossary
sidebar: Pactus Glossary
---

<!-- TODO: find a name for pactus merkel root model and add it here (?) -->

# A

## Account

An account is an entity that is identified by a unique address,
which can send transactions on the blockchain, and make changes on blockchain state.

## Account Address

Account address is a unique identifier for account on Pactus, and they point to a balance, 
hash and number.

# B

## Bond

A Bond is a transaction that you lock some amount of PAC coin to a validator address with.

# C

## Committee
The committee is a group of 51 validators responsible for generating new blocks. Oldest member will 
be replaced with a new validator in each 10 seconds (per block).

# N

### Node

A computer on Pactus that runs a Pactus protocol implementation, it's connected to network, and it 
can get and provide new blocks. it **can** run validators too and participate in consensus.

# P

### PAC

The Pactus network native currency.

# S

### SSPoS (Solid State Proof of Stake)

The Pactus unique consensus algorithm.

### Sortition

The sortition algorithm is responsible for the fair, transparent  and random selection of validators 
to join the committee.

# U

### UnBond

An UnBond is a transaction that you unlock staked PAC coins on your validator for withdrawing, whcih
takes 21 days time.

# V

### Vlidator

A Validator is an entity that participates in the consensus process by sharing its votes.

### Validator Address

Validator address is a unique identifier for validator on Pactus, and they point to a stake balance,
hash, number, last bonding height, last sortition height and last unbond height.

# W

### Withdraw

A Withdraw is a transaction that you move unlocked staked of a validator (using unbond transaction)
to an account address as its balance.

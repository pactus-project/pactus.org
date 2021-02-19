---
id: learn-consensus
title: Consensus Engine
---

# Consensus Engine

## Practical Byzantine Fault Tolerant

The Zarb Consensus algorithm is spired by Practical Byzantine Fault Tolerant (PBFT)[^first]
alghorithm. Practical Byzantine Fault Tolerant, or in short PBFT "presents a new, practical
algorithm for state machine replication that tolerates Byzantine faults."

Normal-Case Operation of PBFT includes these steps:

There are _R = 3f+1_ replicas. where _f_ is the maximum number of replicas that may be faulty or
byzantine. For example if there is one faulty replica or node, the resiliency of the algorithm is
optimal if we have at least 3 non-faulty nodes. So the minimum number of replicas should be 3+1=4.

- A primary node (_P_) receives a request _m_ from a client
- Primary node start executing three phases protocol. These three phases are `pre-prepare`,
  `prepare`, and `commit`.
- In `pre-prepare` phase, primary node (_P_) sign and multicasts a `pre-prepare` message with _m_
  piggybacked to all the nodes. The message has the form
  <img src="https://render.githubusercontent.com/render/math?math=<<PRE-PREPARE,d>_{\sigma p}, m>">
  where _d_ is _m_’s digest.
- In `prepare` phase, node _i_ accepts
  <img src="https://render.githubusercontent.com/render/math?math=<<PRE-PREPARE,d>_{\sigma p}, m>">
  message and signs and multicasts a
  <img src="https://render.githubusercontent.com/render/math?math=<PREPARE,d>_{\sigma i}>"> message
  to all other nodes.
- If node _i_ received _2f+1_ prepared messages from other nodes (possibly including its own), it is
  prepared and goes to commit phase.
- In `commit` phase, node _i_ signs and multicasts a
  <img src="https://render.githubusercontent.com/render/math?math=<COMMIT,d>_{\sigma i}>"> to the
  other nodes.
- Each node executes request _m_ after receiving _2f+1_ commit messages (possibly including its
  own).

All the message in above steps are cryptographically signed and All replicas know the others’ public
keys to verify signatures. For sake of simplicity we didn't mention about view and sequence numbers
in above steps. However you can take a look at PBFT paper for more details.

Picture below shows the operation of the algorithm in the normal case of no primary faults. Replica
0 is the primary, replica 3 is faulty, and C is the client.

![Normal execution of the Practical Byzantine Fault Tolerance (PBFT) protocol](..//assets/images/pbft.png)

## Zarb Consensus Engine

Zarb consensus engine inspired by PBFT. In each height a proposer start broadcasting a proposal
block to validators. Validators validate, execute and vote for the incoming block. If more than 2/3
of validators vote for a block, the block will be committed otherwise validators move to the next
round or view.

To ensure safety, moving the next run, 2/3+ validator should vote `Null` and sign it.

The three phases in Zarb consensus are `Propose` and `Prepare` and `Precommit`.
![Zarb consensus mechanism](../assets/images/zarb-consensus.png)

## A paradox

Unlike Proof of Work, which is based on competition between miners, Proof of Stake is based on
cooperation between validators. Validators work together to validate a block, like a team. A good
player will be incentivized and a bad actor will be punished and fired from the team. However, the
question is how big this team or validator set can be?

If your validator set gets big and bigger, the voting time will be loner and longer and also the set
will be more vulnerable in network partition attack. For example, some calculation shows that with
more than 100 validators, PoS blockchain becomes less efficient.

In the other hand a blockchain will be more secure and decentralized if more validators participated
on it. We have to secure blockchain with more validators but technically we can't achieve it. Here
is a paradox!

The block size can be another issue when the number of validators increase. Validators must put
their signature information in each block as proof of the commit. As long as more than 2/3 of
validators sign a block, the block will be committed into the blockchain. Increasing the size of
validator set will increase the size of block and blockchain.

## Delegated Proof of Stake

Some blockchain solves this paradox by defining delegation, Delegated Proof of Stake (dPoS), people
put their stakes in hand of a group of ‘delegates’ and these delegates validate transactions and
produce blocks.

But how can voters trust a delegate? If a delegate is acting badly, what will happen? You can stake
your token in favor of good actors. But you still need a minimum trust on this platform. We know in
the blockchain, the main concept is not trusting anyone. This is another paradox in dPoS.

For example in the EOS blockchain, there is
[constitution](https://github.com/EOSIO/eos/blob/5068823fbc8a8f7d29733309c0496438c339f7dc/constitution.md)
for the people participating in the blockchain. This constitution is full of “shall” and “shall
not”. In the long run, this blockchain will be ruled by a powerful organization and won’t be
decentralized anymore.

![Delegated Proof of Stake](../assets/images/delegated_proof_of_stake.jpg)

## Zarb has no delegation

The solution we are offering in Zarb is creating a **dynamic set** of validators. Validators can be
changed randomly. Anyone can easily become a validator by staking some tokens. In each height, every
validator starts running a Verifiable Random Function (VRF) in order to self-choose themselves. The
VRF is absolutely random and the result can be verified cryptographically. Based on their stake and
their chance, a validator can be in the set for the next run. Once a validator enters the set, the
oldest validator in the set exits. So we can always guarantee that validators are in the set for a
certain amount of time. In the set, validators vote is weighted by their stake.

![Zarb Proof of Stake](../assets/images/zarb_validator_pool.jpg)

## How VRF works?

In each height validators outside the set run a VRF function which the seed is the previous block
hash. The result is deterministic and Zero Knowledge provable. A validator based on its stake and
its luck can enter the set for the next height. The formula is quite simple:

<img src="https://render.githubusercontent.com/render/math?math=R\=V\times S_{t}"><br/> _which_<br/>
<img src="https://render.githubusercontent.com/render/math?math=V">: VRF output between 0~1<br/>
<img src="https://render.githubusercontent.com/render/math?math=S_{t}">: Total stake<br/>

If the result is less than the validator stake, then this validator is eligible to enter to the set
for the next height. The validator needs to send a Sortition transaction with the proof of VRF. This
transaction is valid for 21 blocks. When a validator enters the set the latest validator should
leave the set to make it balance.

## References

[^first]:
    [Practical Byzantine Fault Tolerance - whitepaper](http://pmg.csail.mit.edu/papers/osdi99.pdf)

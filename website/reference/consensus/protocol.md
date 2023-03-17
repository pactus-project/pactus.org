---
layout: reference
title: Consensus protocol
permalink: /reference/consensus/protocol/index.html
---

# Consensus protocol

Pactus consensus algorithm is a [state machine](https://en.wikipedia.org/wiki/Finite-state_machine)
replication with [Byzantine fault](https://en.wikipedia.org/wiki/Byzantine_fault) tolerance. The
consensus algorithm at any given time is in one the following states:

- New Height state
- Propose state
- Proposer change state
- Prepare state
- Precommit state
- Commit state

![Pactus consensus states](/assets/images/pactus_consensus_states.png)

Every 10 seconds a proposer has chance to propose a block. Whenever other validators see a proposed
block, they validate the block and change their state to _prepare_ state. If more than ⅔ of the
total stakes cast their votes, the proposed block becomes prepared and validators goes to
_precommit_ state. If again more than ⅔ of the total stakes cast their vote for the prepared block,
the block will be committed and the next proposer will get ready for proposing new block. These
steps repeat every 10 seconds. In case of any failure in each step, validators goes to _proposer
change_ state and try to change the proposer for the next round.

Pactus consensus mechanism is inspired by Practical Practical Byzantine Fault Tolerant algorithm.
Below you can see more details about the consensus mechanism in Pactus.

## Practical Byzantine Fault Tolerant

Practical Byzantine Fault Tolerant, in short PBFT, “presents a new, practical algorithm for state
machine replication that tolerates Byzantine faults." [^first] The Pactus consensus algorithm is
highly inspired by Practical Byzantine Fault Tolerant (PBFT) algorithm.

## The algorithm

There are $$R = 3f+1$$ validators. where $$f$$ is the maximum
number of validators that may be faulty or byzantine. For example, if there is one faulty validator,
the resiliency of the algorithm is optimal if we have at least $$3$$ non-faulty
validators. So the minimum number of validators should be $$3+1=4$$.

We use cryptographic techniques to prevent spoofing and replays and to detect corrupted messages.
All validators know the others’ public keys to verify signatures. All messages contain public key
signatures. We denote a message signed by node $$i$$ as
$$<m>_{\sigma _i}$$.

### Normal-Case Operation

In each round, one validator is the proposer and the others are validators. The normal case
operation of Pactus consensus algorithm includes these three steps: **propose**, **prepare** and
**precommit**

#### Propose phase

A proposer ($$p$$) collects transactions and creates a proposal block. It signs and
broadcasts a proposal message with block piggybacked to all the validators. Proposal message has
this form:

$$<<PROPOSAL,h,r>_{\sigma _p}, B>$$

where:

- $$B$$ is proposed block
- $$h$$ indicates the block height
- $$r$$ is an assigned round number, which is zero for the first round

#### Prepare phase

If validator $$i$$ accepts the proposal, it enters _prepare_ phase and signs and
broadcasts _prepare_ message to all other validators. Otherwise, it does nothing. Prepare message
has this form:

$$<<PREPARE,h,r,d,i>_{\sigma _i}>$$

where:

- $$d$$ is digest or hash of proposed block $$B$$

If validator $$i$$ received $$2f+1$$ prepare messages from other
validators (possibly including its own), it is **prepared** and enters to precommit phase.

#### Precommit phase

In _precommit_ phase, validator $$i$$ signs and broadcasts _precommit_ message to
the other validators. Precommit message has this form:

$$<<PRECOMMIT,h,r,d,i>_{\sigma _i}>$$

Each validator executes and commits block $$b$$ after receiving
$$2f+1$$ precommit messages (possibly including its own) and becomes **committed**.

The picture below shows the operation of the algorithm in the normal case. validator 0 is the
proposer and validator 3 is faulty.

![Normal execution](/assets/images/pactus_consensus_normal_execution.png)

### Change proposer

The change-proposer protocol provides liveness by allowing the system to make progress when the
proposer fails. change-proposers are triggered by timeouts that prevent validators from waiting
indefinitely for the proposal to execute.

If the timer of validator expires in a round, the validator starts a change-proposer phase to move
the system to round $$r+1$$. It stops accepting messages (other than
change-proposer and block-announce messages) and broadcasts a change-proposer message to all
validators.

The change-proposer message has this form:

$$<<CHANGE-PROPOSER,h,r,i>_{\sigma _i}>$$

If the proposer for round $$r+1$$ receives $$2f+1$$ valid
change-proposer messages for round $$r$$ from other validators, it goes to next
round and broadcasts proposal message.

The picture below shows the operation of the algorithm in change-proposer case. validator 0 is the
proposer and is faulty.

![Proposer change](/assets/images/pactus_consensus_change_proposer.png)

### Block announcement

Each validator that receives a valid proposal and with $$2f+1$$ precommit messages
can make a certificate and broadcasts _block_announce_ messages with the block and certificate
piggybacked to the network.

$$<<BLOCK-ANNOUNCE,h,r>,B,C>$$

where:

- $$C$$ is the certificate for the block $$B$$

Validators can move to the next height and clear the message logs after receiving valid
_block_announce_ message.

[^first]: [Practical Byzantine Fault Tolerance](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/01/thesis-mcastro.pdf)

---
layout: learn
title: Consensus protocol
sidebar: Protocol
---

# Consensus protocol

Pactus consensus algorithm is a [state machine](https://en.wikipedia.org/wiki/Finite-state_machine)
replication with [Byzantine fault](https://en.wikipedia.org/wiki/Byzantine_fault) tolerance. The
consensus algorithm at any given time is in one the following states:

- New Height state
- Propose state
- Prepare state
- Precommit state
- Change proposer state
- Commit state

![Pactus consensus states]({{ site.url }}/assets/images/pactus_consensus_states.png)

The Pactus consensus algorithm operates on a cycle of 10 seconds. It starts with the "propose" state in which
one validator acts as the proposer. The proposer collects all the transactions,
creates a block, and proposes it to other validators.
When a proposed block is seen by other validators, they validate the block and
cast their vote for the proposed block, moving to the "prepare" state.

If more than two-thirds (⅔) of the total stakes cast their votes, the proposed block becomes prepared,
and validators move to the "precommit" state.

If, once again, more than two-thirds (⅔) of the total stakes cast their vote for the prepared block,
the block is committed, and the next proposer is ready to propose a new block. This cycle repeats every 10 seconds.

If a proposer fails to propose in any round, other validators move to the "change proposer" state to
advance to the next round and change the proposer.

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
All validators know each other's public keys to verify signatures. All messages contain public key
signatures. We denote a message signed by node $$i$$ as
$$\langle m \rangle_{\sigma_i}$$.

### Normal-Case Operation

In each round, one validator is the proposer and the others act as validators. The normal case
operation of Pactus consensus algorithm includes these three steps: **propose**, **prepare** and
**precommit**

#### Propose phase

The proposer $$p$$ collects transactions and creates a proposal block $$B$$. It signs and
broadcasts a proposal message with the **proposed** block piggybacked to all the validators.
Propose message has this form:

$$\langle \langle \text{PROPOSE},h,r \rangle_{\sigma_p}, B \rangle$$

where:

- $$B$$ is the proposed block
- $$h$$ indicates the block height
- $$r$$ is an assigned round number, which is zero for the first round

#### Prepare phase

If validator $$i$$ accepts the proposal, it enters _prepare_ phase and signs and
broadcasts _prepare_ message to all other validators. Otherwise, it does nothing.
The prepare message has this form:

$$\langle \text{PREPARE},h,r,d,i \rangle_{\sigma_i}$$

where:

- $$d$$ is digest or hash of proposed block $$B$$

If validator $$i$$ received $$2f+1$$ prepare messages from other
validators (possibly including its own), it is **prepared** and enters to precommit phase.

#### Precommit phase

In _precommit_ phase, validator $$i$$ signs and broadcasts precommit message to
the other validators.
The precommit message has this form:

$$\langle \text{PRECOMMIT},h,r,d,i \rangle_{\sigma_i}$$

Each validator executes and commits block $$b$$ after receiving
$$2f+1$$ precommit messages (possibly including its own) and becomes **committed**.

The picture below shows the operation of the algorithm in the normal case. validator 0 is the
proposer and validator 3 is faulty.

![Normal execution]({{ site.url }}/assets/images/pactus_consensus_normal_execution.png)

### Change proposer

The change-proposer phase provides liveness by allowing the system to make progress when the
proposer fails. change-proposer phase is triggered by timeouts that prevent validators from waiting
indefinitely for the proposal to execute.

If the timer of a validator expires in round $$r $$, the validator starts a change-proposer phase to move
the system to round $$r+1$$. It stops accepting messages (other than
change-proposer and block-announce messages) and broadcasts a change-proposer message to all
validators.

The change-proposer message has this form:

$$\langle \text{CHANGE-PROPOSER},h,r,i \rangle_{\sigma_i}$$

If the proposer for round $$r+1$$ receives $$2f+1$$ valid
change-proposer messages for round $$r$$ from other validators, it goes to next
round and broadcasts proposal message.

The picture below shows the operation of the algorithm in change-proposer case. validator 0 is the
proposer and is faulty.

![Change proposer]({{ site.url }}/assets/images/pactus_consensus_change_proposer.png)

### Block announcement

Each validator that receives a valid proposal and with $$2f+1$$ precommit messages
can create a [certificate]({{ site.baseurl }}/learn/blockchain/block/#block-certificate) and
broadcasts block-announce messages with the block and certificate piggybacked to the network.
The block-announce message has this form:

$$\langle \text{BLOCK-ANNOUNCE} ,h,r ,B,C \rangle$$

where:

- $$C$$ is the certificate for the block $$B$$

Validators can move to the next height and clear the message logs after receiving valid
block-announce message.

[^first]: [Practical Byzantine Fault Tolerance](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/01/thesis-mcastro.pdf)

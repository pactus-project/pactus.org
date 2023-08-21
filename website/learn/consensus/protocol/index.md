---
layout: learn
title: Consensus protocol
sidebar: Protocol
---

# Consensus protocol

Pactus consensus algorithm is a [state machine](https://en.wikipedia.org/wiki/Finite-state_machine)
replication with [Byzantine fault](https://en.wikipedia.org/wiki/Byzantine_fault) tolerance.
The Pactus consensus algorithm starts with the block creation phase.
In this phase one validator acts as the proposer. The proposer collects all the transactions,
creates a block, and proposes it to other validators.

When a proposed block is seen by other validators, they validate the block and
cast their vote for the proposed block, moving to the "prepare" state.

If more than two-thirds (⅔) of the total stakes cast their votes, the proposed block becomes prepared,
and validators move to the "precommit" state.

If, once again, more than two-thirds (⅔) of the total stakes cast their vote for the prepared block,
the block is committed, and the next proposer is ready to propose a new block. This cycle repeats every 10 seconds.

If a proposer fails to propose in any round, other validators start the "change proposer" phase to
decide to change the proposer for this round.

![Pactus consensus states]({{ site.url }}/assets/images/pactus_consensus_states.png)

## The algorithm

There are $$R = 3f+1$$ validators. where $$f$$ is the maximum
number of validators that may be faulty or byzantine. For example, if there is one faulty validator,
the resiliency of the algorithm is optimal if we have at least $$3$$ non-faulty
validators. So the minimum number of validators should be $$3+1=4$$.

We denote a message as $$\langle m \rangle$$ tuple and a signed message by node $$i$$ as
$$\langle m \rangle_{\sigma_i}$$.

Pactus consensus algorithms has two phases: Block creation phase and change proposer phase.

### Block creation

The block creation phase in Pactus consensus algorithm includes these three steps[^1]:
**Propose**, **Prepare** and **Precommit**.
The protocol proceeds in rounds $$r = 0, 1, 2, \ldots$$.

#### Propose step

In each round $$r$$, one validator is the proposer and the others act as validators.
The proposer $$p$$ collects transactions and creates a proposal block $$B$$. It signs and
broadcasts a proposal message with the **proposed** block piggybacked to all the validators.
Propose message has this form:

$$\langle \langle \text{PROPOSE},h,r \rangle_{\sigma_p}, B \rangle$$

where:

- $$B$$ is the proposed block
- $$h$$ indicates the block height
- $$r$$ is an assigned round number, which is zero for the first round

#### Prepare step

If validator $$i$$ accepts the proposal, it enters _prepare_ step and signs and
broadcasts _prepare_ message to all other validators. Otherwise, it does nothing.
The prepare message has this form:

$$\langle \text{PREPARE},h,r,d \rangle_{\sigma_i}$$

where:

- $$d$$ is digest or hash of proposed block $$B$$

If validator $$i$$ received $$2f+1$$ prepare messages from other
validators (including its own), it becomes **prepared** and enters to precommit step.

#### Precommit step

In _precommit_ step, validator $$i$$ signs and broadcasts precommit message to
the other validators.
The precommit message has this form:

$$\langle \text{PRECOMMIT},h,r,d \rangle_{\sigma_i}$$

Each validator executes and commits block $$b$$ after receiving
$$2f+1$$ precommit messages (including its own) and becomes **committed**.

#### Block announcement

Each validator that receives a valid proposal and with $$2f+1$$ precommit messages from other
validators (including its own), can create a block-announce messages and broadcasts it to the network.
The block-announce message has this form:

$$\langle \text{BLOCK-ANNOUNCE} ,h ,r ,B, C \rangle$$

where:

- $$C$$ is the quorum certificate for the precommit step.

Validators can move to the next height and clear the message logs after receiving valid
block-announce message, even if their timer has expired.

The picture below shows the operation of the algorithm in the normal case. validator 1 is the
proposer and validator 4 is faulty.

![Normal execution]({{ site.url }}/assets/images/pactus_consensus_normal_execution.png)

### Change proposer

The change-proposer provides liveness by allowing the system to make progress when the proposer fails.
The change-proposer phase is triggered by timeouts that
prevent validators from waiting indefinitely for the proposal to execute.

If the timer of a validator expires in round $$r$$, the validator starts a change-proposer phase.
The change-proposer phase is an Asynchronous Byzantine Binary Agreement (ABBA) [^2] that is biased toward zero (No).
It means that during this phase, even if they don't have the proposal, honest validators may decide to vote zero
if they obtain a valid quorum Certificate for the prepare step.

If a supermajority of the validators decide to change the proposer, they move to round r+1r+1. However,
if they decide not to change the proposer, they will return to the prepare state and,
since a supermajority of the validators attested to a valid proposal, they can commit the proposed block.

The change proposer phase in Pactus consensus algorithm includes these three steps:
**Pre-vote**, **Main-vote** and **Decide**
The protocol proceeds in rounds $$r_{cp} = 0, 1, 2, \ldots$$.

#### Pre-vote step

In Pre-vote step each validator casts a pre-vote for a value $$b \in \{0, 1\}$$
and broadcasts pre-vote message to the network.
The pre-vote message has this form:

$$\langle\langle \text{CP:PRE-VOTE},h,r,r_{cp},b \rangle_{\sigma_i}, justification\rangle$$

The first round is a special round and each validator starts with an initial value.
If the validator's timer has expired in the prepare step, its initial value is zero,
and if the validator's timer has expired in the precommit step, its initial value is one.

$$
b = \begin{cases}
0 & \text{if timer expired in prepare step,} \\
1 & \text{if timer expired in precommit step.}
\end{cases}
$$

In the next rounds, each validator select $$2f+1$$ properly justified main-votes from round $$r − 1$$ and

$$
b = \begin{cases}
0 & \text{if there is a main-vote for 0,} \\
1 & \text{if there is a main-vote for 1,} \\
0 (biased) & \text{if all main-votes are abstain.}
\end{cases}
$$

These pre-votes must be justified with a appropriate justification.
For the first round, if the validator's timer has expired in the prepare step, the justification is $$nil$$ ,
and if the validator's timer expired in the precommit step,
the justification is the proper quorum certificate for the prepare step at round $$r$$.

In the next rounds, a pre-vote for $$b$$ may be justified in two ways:

- **Hard**: that is the quorum certificate for $$\langle \text{CP:PRE-VOTE},h,r,r_{cp}-1,b \rangle$$
- **Soft**: that is the quorum certificate for $$\langle \text{CP:MAIN-VOTE},h,r,r_{cp}-1,abstain \rangle$$

#### Main-vote step

After collecting $$2f+1$$ valid and justified pre-votes, each validator casts a main-vote $$v \in \{0, 1, abstain\}$$
and broadcasts main-vote message to the network.
The main-vote message has this form:

$$\langle\langle \text{CP:MAIN-VOTE},h,r,r_{cp},v \rangle_{\sigma_i}, justification\rangle$$

The main-vote value $$v$$ determine as below:

$$
v = \begin{cases}
0 & \text{if there are 2f+1 pre-vote for 0,} \\
1 & \text{if there are 2f+1 pre-vote for 1,} \\
abstain & \text{if there are pre-votes for 0 and 1.}
\end{cases}
$$

These main-votes must be justified with a appropriate justification.
A main-vote for $$v$$ may be justified in two ways:

- **Non-conflicting**: that is the quorum certificate for $$\langle \text{CP:PRE-VOTE},h,r,r_{cp},b \rangle$$
- **Conflicting**: that consists of the justifications for the two conflicting pre-votes.

#### Decide step

After collecting $$2f+1$$ valid and justified main-votes, each validator examines these votes. If all
votes are for a value $$b \in \{0, 1\}$$, then the validator decides $$b$$, but continues to
participate in the protocol for one more round. Otherwise, the validator proceeds to the next round $$r_{cp}+1$$.

### Comparison

Pactus consensus protocl doesn't have any lcoking mechanism or
checkpointing and there will at most one valid proposla per round.
This ensures that each round can begin with a new proposal.

<table>
<thead>
  <tr>
    <th rowspan="2">Protocol</th>
    <th colspan="2" style="text-align: center;">Normal case</th>
    <th colspan="2" style="text-align: center;">Faulty case<br></th>
  </tr>
  <tr>
    <th style="text-align: center;">Steps</th>
    <th style="text-align: center;">Complexity</th>
    <th style="text-align: center;">Locking</th>
    <th style="text-align: center;">Checkpointing</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td style="vertical-align: middle">PBFT</td>
    <td style="text-align: center; vertical-align: middle">3</td>
    <td style="text-align: center; vertical-align: middle">$$O(n^2)$$</td>
    <td style="text-align: center; vertical-align: middle">No</td>
    <td style="text-align: center; vertical-align: middle">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align: middle">Tendermint</td>
    <td style="text-align: center; vertical-align: middle">3</td>
    <td style="text-align: center; vertical-align: middle">$$O(n^2)$$</td>
    <td style="text-align: center; vertical-align: middle">Yes</td>
    <td style="text-align: center; vertical-align: middle">No</td>
  </tr>
  <tr>
    <td style="vertical-align: middle">HotStuff</td>
    <td style="text-align: center; vertical-align: middle">4</td>
    <td style="text-align: center; vertical-align: middle">$$O(n)$$</td>
    <td style="text-align: center; vertical-align: middle">Yes</td>
    <td style="text-align: center; vertical-align: middle">No</td>
  </tr>
  <tr>
    <td style="vertical-align: middle">Pactus</td>
    <td style="text-align: center; vertical-align: middle">3</td>
    <td style="text-align: center; vertical-align: middle">$$O(n^2)$$</td>
    <td style="text-align: center; vertical-align: middle">No</td>
    <td style="text-align: center; vertical-align: middle">No</td>
  </tr>
</tbody>
</table>

---

References:

[^1]: [Practical Byzantine Fault Tolerance](https://pmg.csail.mit.edu/papers/osdi99.pdf)
[^2]: [Random Oracles in Constantinople: Practical Asynchronous Byzantine Agreement Using Cryptography](https://link.springer.com/article/10.1007/s00145-005-0318-0)

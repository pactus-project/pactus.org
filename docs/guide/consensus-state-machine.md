---
id: learn-consensus
title: Consensus as state machine
---

# Consensus as state machine

Zarb consensus algorithm is a state machine replication with Byzantine fault tolerance. The best way
to implement and test the state machines is using
[state pattern](https://en.wikipedia.org/wiki/State_pattern).

## Consensus states

Consensus protocol in Zarb includes these states:

- New Height state
- Propose state
- Proposer change state
- Prepare state
- Precommit state
- Commit state

At each time consensus is in one of the these state.

![Zarb consensus states](../assets/images/zarb-consensus-states.png)

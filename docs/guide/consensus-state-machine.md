---
id: learn-consensus
title: Consensus as state machine
---

# Consensus As State Machine

## State Machine

Zarb consensus algorithm is a [state machine](https://en.wikipedia.org/wiki/Finite-state_machine)
replication with [Byzantine fault](https://en.wikipedia.org/wiki/Byzantine_fault) tolerance. The
consensus algorithm at any given time is in one the following states:

- New Height state
- Propose state
- Proposer change state
- Prepare state
- Precommit state
- Commit state

![Zarb consensus states](../assets/images/zarb-consensus-states.png)

<!-- TODO : explain more -->

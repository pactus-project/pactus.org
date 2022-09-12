---
layout: learn
title: Safety proof using TLA+
permalink: /learn/consensus/tla+/index.html
---


# Consensus specification

## What Is TLA+

::: quote

TLA+ is a formal specification language developed by Leslie Lamport. It is used for designing,
modelling, documentation, and verification of programs, especially concurrent systems and
distributed systems. TLA+ is considered to be exhaustively-testable pseudocode, and its use likened
to drawing blueprints for software systems; TLA is an acronym for Temporal Logic of Actions.

::: right

From [Wikipedia](https://en.wikipedia.org/wiki/TLA%2B)

:::

Testing and modeling the concurrent and distributed system are hard.
[Leslie Lamport](https://en.wikipedia.org/wiki/Leslie_Lamport) created TLA+ on the idea that to
describe things with simple mathematics. TLA+ and its tools are useful for eliminating fundamental
design errors, which are hard to find and expensive to correct in code. Check
[The TLA+ Home Page](https://lamport.azurewebsites.net/tla/tla.html) for more information.

## Pactus consensus spec

Pactus consensus specification has written in TLA+ format. It includes all invariants that can be held
in every state of every execution that the protocol allows. The TLA+ specification is compiled into
[PDF file](https://raw.githubusercontent.com/pactus-project/pactus/main/consensus/spec/Zarb.pdf).

### Safety proof

By defining some invariants we can ensure the safety of the consensus protocol in any possible and
distinct state. We have the informal safety proof of the Pactus consensus protocol using TLA+ toolbox.

### Liveness proof

Checking the liveness is not easy, but with defining some constraints, we have the informal proof of
liveness of Pactus consensus protocol using TLA+ toolbox.

<p align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/pqjXQ1XNhiI" title=" Safety and liveness proof of Pactus consensus protocol using TLA+  " frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>

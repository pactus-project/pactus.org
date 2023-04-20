---
layout: learn
title: Consensus specification
sidebar: Specification
---

# Consensus specification

Developing distributed and concurrent systems is a complex task that requires careful attention to the details.
Testing such systems is challenging because it's difficult to simulate all possible states,
including those that can happen due to system failures, network latency, and other factors.
This makes it hard to ensure that the system behaves correctly in all circumstances.

Therefore it's essential to have a proactive approach that involves modeling the system's behavior in a formal way.
Such an approach can help identify potential issues before they occur, saving time and preventing costly flaws.

## TLA+

[TLA+](https://en.wikipedia.org/wiki/TLA%2B) is a formal specification language developed by
[Leslie Lamport](https://en.wikipedia.org/wiki/Leslie_Lamport) based on the idea of
[specifying systems](https://lamport.azurewebsites.net/tla/book-21-07-04.pdf) using simple mathematics.
It is used for designing, modelling, documentation, and verification of programs, especially concurrent and
distributed systems.
TLA+ and its tools are useful for eliminating fundamental design errors, which are hard to find and
expensive to correct in code.

To know more about TLA+, check [The TLA+ Home Page](https://lamport.azurewebsites.net/tla/tla.html).

## Pactus consensus spec

Pactus [consensus specification](https://github.com/pactus-project/pactus/tree/main/consensus/spec)
has written in TLA+ format. It includes all invariants that can be held
in every state of every execution that the protocol allows. The TLA+ specification is compiled into
[PDF file](https://raw.githubusercontent.com/pactus-project/pactus/main/consensus/spec/Pactus.pdf).

### Safety proof

By defining some invariants we can ensure the safety of the consensus
[protocol]({{ site.baseurl }}/learn/consensus/protocol) in any possible and
distinct state, and therefore we have the informal safety proof of the Pactus consensus protocol using TLA+.

### Liveness proof

Checking the liveness is not easy, but with defining some constraints, we have the informal proof of
liveness of Pactus consensus protocol using TLA+.

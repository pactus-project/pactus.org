---
layout: post
title: "Dev Report pre-testnet2"
date: 2023-09-24 00:00:00 +0000
tags: dev-report
---

## Abstract

there is several activities in Pactus github in September month, here is a clear report and explain of activities.

![Github Pactus](/blog/images/2023-08-22-dev-report/github-pactus.png)

## Implementing PIP 2, 3 and 4

After starting [Pactus Labs and PIPs](https://pactus.org/2023/09/04/introduction-to-pips.html),
we start implementing each accepted PIP one by one to improve Pactus, here is a list of implemented PIPs:

- [PIP 2 and 3, Adding lock time to transactions and removing sequence field](https://github.com/pactus-project/pactus/pull/699)
- [PIP 4, Indexing Public Keys](https://github.com/pactus-project/pactus/pull/671)

### Network

There is some very good change and new features for Pactus network module,
this list contain a list of important changes in Pactus networking:

- [Supporting UDP and QUIC protocols](https://github.com/pactus-project/pactus/pull/672)
- [Adding Hole Punching](https://github.com/pactus-project/pactus/pull/697)
- [Setting final ports for each network module or service](https://github.com/pactus-project/pactus/pull/689)
- [check protocol support before sending connect/disconnect event](https://github.com/pactus-project/pactus/pull/683)

## gRPC and nanomessage services

We also updated, improved and enhanced gRPC and nanomessage services for better developer experience,
for third-party and side project developers, here is some changes:

- [new API to get Public key by address](https://github.com/pactus-project/pactus/pull/704)
- [Adding address field for AccountInfo (gRPC)](https://github.com/pactus-project/pactus/pull/703)
- [CreateValidatorEvent and CreateAccountEvent for nanomsg](https://github.com/pactus-project/pactus/pull/702)
- [Fixing swagger doesn't work with multiple proto files](https://github.com/pactus-project/pactus/pull/687)

### Refactoring and other new feature or debugs

We had some not implemented feature request, not fixed bugs and some issue with new golang version,
list of this changes:

- [Supporting go version 1.21 and higher](https://github.com/pactus-project/pactus/pull/692)
- [Fixing wallet-cli issues to send new transaction](https://github.com/pactus-project/pactus/pull/686)
- [Refactoring syncing process](https://github.com/pactus-project/pactus/pull/676)
- [Write logs into file](https://github.com/pactus-project/pactus/pull/673)
- [Remove payload prefix from payload transaction type](https://github.com/pactus-project/pactus/pull/669)

---
layout: post
title: "Dev report"
date: 2023-08-22 00:00:00 +0000
tags: dev-report
---

## Abstract

there is several activities in pactus github this month, here is a clear report and explain of activities.

![Github Pactus](/blog/images/2023-08-22-dev-report/github-pactus.png)

### Linters

one of new changes in pactus project is new linters we added this month.
what is linters?
linters are just a set of rules for the style of source codes, they force developers to write new codes
in correct, clean and safe way.

why we use them?
the reason we are using linters in Pactus and add new ones, is to make the code more safe,
and also make it easy to work on for new contributors because we are focus on being decentralized even in development.

[Linters we added till now](https://github.com/pactus-project/pactus/issues/644)

### TLA+ spec

one another new change in Pactus is updating TLA+ spec, which is related to consensus,
as you know we had some problem with consensus in Testnet-1, we fixed the issues and now we are trying to make it more clean.

[link to changes](https://github.com/pactus-project/pactus/pull/641)

if you wish you can learn more about Pactus [consensus](https://pactus.org/learn/consensus/specification/) here.

### Refactoring

some of previous Pactus dependencies was so old, so we start refactoring them and use new libraries.
also we used some libraries with higher performance which is make Pactus full node more faster in mainnet.

[one of refactors](https://github.com/pactus-project/pactus/pull/613)

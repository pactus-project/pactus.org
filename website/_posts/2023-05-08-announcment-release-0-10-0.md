---
layout: post
title: "Pactus 0.10.0 released"
date: 2023-05-08 00:00:00 +0000
tags: announcement, release, testnet
---

## Overview

Pactus Blockchain Release Version 0.10.0 is now available for users of all skill levels.
This release features a graphical user interface (GUI) that is user-friendly for both beginners and experienced users.
It also offers a command-line interface (CLI) for advanced users. Furthermore, wallet software is included,
which allows interaction with the blockchain without needing to sync the entire blockchain.

## Change log

The primary change in this version enables users to define multiple validators within a single node.
Users can define up to 32 validators in a single node, and each validator can stake up to 1000 coins.

This version includes several updates and enhancements, such as:

- Support for multiple consensus instances or validators.
- Use of a Persistent Merkle tree to enhance performance of calculating the
  [state hash]({{ site.baseurl }}/learn/blockchain/state-hash); fully tested in Testnet-0
- `GetBlockchainInfo` API in gRPC now returns the total number of validators and accounts
- Sortition interval added as a [consensus parameter]({{ site.baseurl }}/learn/consensus/parameters)
- Removal of committers from the [certificate]({{ site.baseurl }}/learn/blockchain/block/#block-certificate)
  hash, allowing for a fixed certificate size while increasing committee members
- Removal of address from the [account structure]({{ site.baseurl }}/learn/blockchain/account/#account-structure)),
- reducing account size to 16 bytes
- Addition of reward addresses to configuration files
- Wallet can now return sequence numbers for accounts and validators
- Updated commands to display account balance and validator stake

You can find the [full list of changes on Github](https://github.com/pactus-project/pactus/compare/v0.9.1...v0.10.0),
as well as the [source code](https://github.com/pactus-project/pactus/releases/tag/v0.10.0)

## Download

This version has been implemented for Testnet-1 and is being prepared for the upcoming mainnet launch.
To start using Pactus Blockchain Testnet-1, download the latest version from the
[download]({{ site.baseurl }}/download) page and join the Testnet.

Join the Testnet now and get ready for the future!

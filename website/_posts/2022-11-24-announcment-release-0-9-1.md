---
layout: post
title: "Pactus 0.9.1 released"
date: 2022-11-24 00:00:00 +0000
tags: announcement, release, testnet
---

## Overview

The Pactus Blockchain Release Version 0.9.1 is now available for users of all levels.
This release version features a graphical user interface (GUI) that
is accessible to both beginners and experienced users.
It also includes a command-line interface (CLI) suitable for advanced users.
Additionally, there is a wallet software that can interact with the blockchain
without requiring the syncing of the entire blockchain.

## Change log

This version includes several changes and improvements, such as:

- Blocks can be fully decoded when queried in gRPC
- The HTTP module now uses gRPC module, making node configuration simpler by removing the CapnP module
- Reducing the blockchain size by saving blocks by number instead of hash
- The wallet can hold unconfirmed transactions
- The wallet can use different gRPC servers
- The GUI displays committee information

You can find the [full list of changes on Github](https://github.com/pactus-project/pactus/compare/v0.9.0...v0.9.1),
as well as the [source code](https://github.com/pactus-project/pactus/releases/tag/v0.9.1)

## Download

This version has been implemented for Testnet-0 and is preparing for the upcoming mainnet launch.
To start using the Pactus Blockchain Testnet-0,
you can download the latest version from [download]({{ site.baseurl }}/download) page
and join the Testnet.

These guides can help you to run and configure your node:

    How to run Pactus in graphic mode?
    How to run Pactus in command line mode?
    How to run Pactus using Docker?


Join the Testnet now and get ready for the future!

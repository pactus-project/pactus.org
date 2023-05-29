---
layout: post
title: "Pactus 0.11.0 released"
date: 2023-05-29 00:00:00 +0000
tags: announcement, release, testnet
---

## Overview

Pactus Blockchain [Version 0.11.0](https://github.com/pactus-project/pactus/releases/tag/v0.11.0)
is now available for download.
This release includes a user-friendly graphical user interface (GUI) that is suitable for both beginners and experienced users.
It also includes a command-line interface (CLI) for advanced users and wallet software
that allows users to interact with the blockchain without the need to sync the entire blockchain.

## Highlights

The main update of this version is fixing the [relay](https://docs.libp2p.io/concepts/nat/circuit-relay/) connection issue.
A relay is a peer in the network that helps connecting two peers specially when they use home internet.

Another main update sending a [Bond transaction]({{ site.baseurl }}/learn/transaction/bond/) is more user friendly.
User doesn't need to set the validator public key,
if they want to bond test PAC coins to their validators.

![Bond transaction dialog]({{ site.url }}/blog/images/2023-05-29-announcement-release-0-11-0/bond-transaction-dialog.png)

## Download

This version has been implemented for [Testnet-1]({{ site.url }}/2023/05/09/announcement-testnet-1.html) and
is being prepared for the upcoming mainnet launch.
To start using Pactus Blockchain Testnet-1, download the latest version from the
[download]({{ site.baseurl }}/download) page and join the Testnet.

These guides can help you to run and configure your node:

- [How to run Pactus in graphic mode?]({{ site.baseurl }}/user-guides/run-pactus-gui)
- [How to run Pactus in command line mode?]({{ site.baseurl }}/user-guides/run-pactus-cli)
- [How to run Pactus using Docker?]({{ site.baseurl }}/user-guides/run-pactus-docker)

## How to Upgrade

If you are running an older version, shut it down.
Uninstall the previous version and install the newer version.
If you are using the archived version, simply use the new version.

## Change log

This version includes several changes and improvements, such as:

### Fix

- **gui**: showing the total number of validators ([#474](https://github.com/pactus-project/pactus/pull/474))
- **network**: fixing relay connection issue ([#475](https://github.com/pactus-project/pactus/pull/475))
- **consensus**: rejecting vote with round numbers exceeding the limit ([#466](https://github.com/pactus-project/pactus/pull/466))
- increase failed counter when stream got error ([#489](https://github.com/pactus-project/pactus/pull/489))
- boosting syncing process ([#482](https://github.com/pactus-project/pactus/pull/482))
- waiting for proposal in pre-commit phase ([#486](https://github.com/pactus-project/pactus/pull/486))
- retrieving public key from wallet for bond transactions ([#485](https://github.com/pactus-project/pactus/pull/485))
- restoring config file to the default ([#484](https://github.com/pactus-project/pactus/pull/484))
- defining ChainType in genesis to detect the type of network ([#483](https://github.com/pactus-project/pactus/pull/483))
- reducing the default Argon2d to consume less memory ([#480](https://github.com/pactus-project/pactus/pull/480))
- adding password option to the start commands ([#473](https://github.com/pactus-project/pactus/pull/473))

### Refactor

- rename send to transfer. ([#469](https://github.com/pactus-project/pactus/pull/469))

You can find the [full list of changes on Github](https://github.com/pactus-project/pactus/compare/v0.10.0...v0.11.0),
as well as the [source code](https://github.com/pactus-project/pactus/releases/tag/v0.11.0)


---
id: run-validator
title: Become a validator
---

# Become a validator

Now, you are ready to create a full node and become a validator in Zarb network.

## Requirements

Using a linux cloud server is the best way to run a validator in Zarb network. You may get a virtual
private server from providers like Amazon, Microsoft, Linde, Alibaba, ArvanCloud, etc.

### Recommended hardwares

- Processor: Two dedicated core of CPU
- Memory: Two gigabyte of RAM
- Storage: 10 Gigabytes of free space disk
- Network: A broadband Internet connection

## Securing the server

The first step is securing your server. You may read this
[guid line](https://www.linode.com/docs/guides/securing-your-server/) to learn hot make your sever
more secure.

## Initializing working directory

Now you need to create a working directory for you validator. A working directory is a place that
you save blockchain data, config and key files.

```
zarb init -w ~/zarb/mainnet --mainnet
```

This command creates a folder at `~/zarb`. It contains:

- Validator private key
- Genesis file
- Config file

Feel free to take a look at these files.

## Create Mintbase account

Mintbase account is the account that you receive your reward when you propose a new block. If you
don't define a Mintbase address, the rewards will goes to the same account with your validator key.
We highly recommend you to define separate address to collect your reward.

First you need to generate new key:

```
zarb key generate
```

The update MintbaseAddress in config file.

## Syncing blockchain

Now you can start the node and sync with the mainnet. This may take several hours:

```
zarb start -w ~/zarb/mainnet
```

## Bonding tokens

After syncing with the main net you need to bond some token to enter validator pool and evaluating
the sortition. After a while you will enter to committee and validating and proposing the blocks.

Good luck ;)

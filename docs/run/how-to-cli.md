---
id: run-how-to-cli
title: How to run Zarb (CLI)
---

# How to run Zarb (CLI)

Advanced user can run Zarb in Command Line Interface (CLI) mode.

## Initializing Working Directory

First you need to create a working directory for your validator. A working directory is a place
where you save blockchain data, config and key files.

:::: tabs type:border-card

::: tab 🪟 Window

```
./zarb-daemon.exe init -w c:\zarb --testnet
```

This command creates a working directory for the testnet at `c:\zarb`.

:::

::: tab 🐧 Linux and 🍏 Mac

```
./zarb-daemon init -w ~/zarb --testnet
```

This command creates a working working directory for the testnet at `~/zarb`.

:::

::::

Working directory contains:

- Default wallet
- Genesis file
- Config file

Feel free to take a look at these files. The first address in default wallet will be used as
validator address and the second address will be used for reward address.

## Running the node

Now you can start the node and sync with the testnet. This may take several hours:

:::: tabs type:border-card

::: tab 🪟 Window

```
./zarb-daemon.exe start -w c:\zarb
```

:::

::: tab 🐧 Linux and 🍏 Mac

```
./zarb-daemon start -w ~/zarb
```

:::

::::

## Enter Committee

After syncing with the test net, you need to send a [bond transaction](/learn/transaction-bond.md) to
bond some of your tokens as stake and enter the validator pool. If you don't have any token yet,
don't worry. There is a gentlemen agreement between validators in the network to let new validators
join the validator pool. Just post your validator's public key in Zarb groups like
[Discord](https://discord.gg/zPqWqV85ch), [Reddit](https://www.reddit.com/r/zarb) or
[Telegram](https://t.me/zarbblockchain).

After you join the validator pool, the [sortition](/learn/consensus-sortition.md) algorithm starts
working and after a while you will enter to [committee](/learn/committee).

When you enter the committee, you will have the chance to propose and validate the blocks. Any time
you propose a new block, you will get the [rewards](/learn/incentive.md).

## Find your way

In this document we tried to explain a simple way to run a validator in Zarb network. you may do it
in a different way. Find your way of deployment. But never forget that security first!

Good luck 🍀

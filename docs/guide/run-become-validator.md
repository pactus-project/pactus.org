---
id: run-validator
title: Become a validator
---

# Become a validator

Now, you are ready to create a full node and become a validator in Zarb network. For running Zarb
you can either [download](https://github.com/zarbchain/zarb-go/releases) the latest precompiled
binaries or [compile](./run-compile.md) it from the source code.

## Initializing working directory

Now you need to create a working directory for you validator. A working directory is a place that
you save blockchain data, config and key files.

:::: tabs type:border-card

::: tab 🪟 Window

```
zarb init -w c:\zarb\mainnet --mainnet
```

This command will create the working directory for the mainnet at `c:\zarb\mainnet`.

:::

::: tab 🐧 Linux and 🍏 Mac

```
zarb init -w ~/zarb/mainnet --mainnet
```

This command will create the working directory for the mainnet at `~/zarb/mainnet`.

:::

::::

Working directory contains:

- Validator private key
- Genesis file
- Config file

Feel free to take a look at these files.

## Update Mintbase address

Mintbase account is the account that you receive your reward when you propose a new block. If you
don't define a Mintbase address, the rewards will goes to the same account with your validator key.
We highly recommend you to define separate address to collect your reward.

You can generate new key like this:

```
zarb key generate
```

Then update `MintbaseAddress` in config file and set the address.

## Syncing blockchain

Now you can start the node and sync with the mainnet. This may take several hours:

:::: tabs type:border-card

::: tab 🪟 Window

```
zarb start -w c:\zarb\mainnet
```

:::

::: tab 🐧 Linux and 🍏 Mac

```
zarb start -w ~/zarb/mainnet
```

:::

::::

## Enter committee

After syncing with the main net, you need to send a [bond transaction](./transaction-bond.md) to
bond some of your token as stake and enter the validator pool.

After you join the validator pool, the [sortition](./consensus-sortition.md) algorithm starts
working and after a while you will enter to [committee](./learn-committee).

When you enter the committee, you will have the chance to propose and validate the blocks. Any time
you propose a new block, you will get the [rewards](./learn-incentive.md).

Good luck 🍀

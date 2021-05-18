---
id: run-validator
title: Become A Validator
---

# Become A Validator

Now, you are ready to create a full node and become a validator in Zarb network. For running Zarb
you can either [download](https://github.com/zarbchain/zarb-go/releases) the latest precompiled
binaries or [compile](./run-compile.md) it from the source code.

## Initializing Working Directory

Now, you need to create a working directory for your validator. A working directory is a place where
you save blockchain data, config and key files.

:::: tabs type:border-card

::: tab 🪟 Window

```
zarb init -w c:\zarb\mainnet --mainnet
```

This command creates a working directory for the mainnet at `c:\zarb\mainnet`.

:::

::: tab 🐧 Linux and 🍏 Mac

```
zarb init -w ~/zarb/mainnet --mainnet
```

This command creates a working working directory for the mainnet at `~/zarb/mainnet`.

:::

::::

Working directory contains:

- Validator private key
- Genesis file
- Config file

Feel free to take a look at these files. The validator private key is automatically generated for
you. If you have another key for the validator you can replace it. To inspect the validator private
key, run this command:

:::: tabs type:border-card

::: tab 🪟 Window

```
zarb key inspect c:\zarb\mainnet\validator_key.json
```

:::

::: tab 🐧 Linux and 🍏 Mac

```
zarb key inspect ~/zarb/mainnet/validator_key.json
```

:::

::::

This command shows the address and public key of your validator. You are responsible for the safety
of your validator key.

## Update Mintbase Address

Mintbase account is the account where you receive your reward when you propose a new block. If you
do not define a Mintbase address, the rewards will go to the same account with your validator key.
We highly recommend you define a separate address to collect your reward.

You can generate new key like this:

```
zarb key generate
```

Then update `MintbaseAddress` in config file and set the address. Also it's good to give a name or
moniker to your node by updating the `Moniker` in config file.

## Syncing Blockchain

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

## Enter Committee

After syncing with the main net, you need to send a [bond transaction](./transaction-bond.md) to
bond some of your tokens as stake and enter the validator pool. If you don't have any token yet,
don't worry. There is a gentlemen agreement between validators in the network to let new validators
join the validator pool. Just post your validator's public key in Zarb groups like
[Discord](https://discord.gg/zPqWqV85ch), [Reddit](https://www.reddit.com/r/zarb) or
[Telegram](https://t.me/zarbblockchain). There is no minimum or maximum amount for new validators to
enter into validator pool.

After you join the validator pool, the [sortition](./consensus-sortition.md) algorithm starts
working and after a while you will enter to [committee](./learn-committee).

When you enter the committee, you will have the chance to propose and validate the blocks. Any time
you propose a new block, you will get the [rewards](./learn-incentive.md).

## Find your way

In this document we tried to explain a simple way to run a validator in Zarb network. you may do it
in a different way. Find your way of deployment. But never forget that security first!

Good luck 🍀

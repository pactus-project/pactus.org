---
layout: learn
title: Genesis
sidebar: Genesis
---

# Genesis

The Pactus blockchain starts from scratch, with no pre-existing accounts or pre-allocated coins.
Its starting point is known as the genesis block, which is created by the bootstrap validators.

## Bootstrapping

The Pactus blockchain starts with four _bootstrap_ validators.
These bootstrap validators do not have any stake, however their voting power is set to one within the consensus algorithm.
Their primary role is to initiate the blockchain during a brief period known as the bootstrapping phase.
As the bootstrapping phase progresses, these validators are able to earn rewards,
which they can later use to invite other validators to join the network.

Once the network reaches 51 validators, the bootstrap validators will retire, and
the blockchain will be secured by other validators.

## Genesis Block

The genesis block is the first block in the Pactus blockchain, and it is created by the bootstrap validators.
This block marks the beginning of the blockchain and serves as the foundation for subsequent blocks.

The previous [block hash]({{ site.baseurl }}/learn/blockchain/block/#block-hash) in the genesis block sets to 0,
indicating that it has no predecessor.
Additionally, the genesis block does not have a previous certificate.

## Genesis Information

In Pactus, the Genesis Information is pre-defined and indicates the initial state of the network.
These parameters are hardcoded into the project and include:

- **Genesis Time** This is the time when the genesis block should be created.
  The bootstrap validators must be operational before this time.
- **Consensus Parameters**: The initial [consensus parameters]({{ site.baseurl }}/learn/consensus/parameters)
  are defined at genesis time and ensure that the entire network operates within the same configuration.
  These consensus parameters are discussed in detail in the consensus section of the documentation.
- **Treasury Account**: The [treasury account]({{ site.baseurl }}/learn/blockchain/account/#treasury-account)
  holds  21 million coins at the genesis time. Each coin is divided into 1 billion units.
- **Reserved Accounts**: Reserved account are defined at the Genesis time and at total they have 21 milion coins.
  These coins are reserved and the main purpise is to support the project over time.
- **Bootstrap Validators** The bootstrap validators are defined by their public keys.

## FAQ

### Where can I see the Genesis Information?

You can find the pre-defined Genesis Information for the Testnet of the Pactus blockchain in the `genesis.json` file,
which is located in the project repository, [here](https://github.com/pactus-project/pactus/blob/main/genesis/mainnet.json).

---
layout: learn
title: Genesis
sidebar: Genesis
---

# Genesis

## Bootstrapping phase

The Pactus blockchain starts with four _bootstrap_ validators.
These bootstrap validators do not have any stake, however their voting power is set to one within the consensus algorithm.
Their primary role is to initiate the blockchain during a brief period known as the bootstrapping phase.
During this time, they accumulate rewards, which they can use to invite additional validators to join the network.

Once the network reaches 21 validators, the bootstrap validators will retire, and
the blockchain will continue to operate by the new validators.

## Genesis block

The genesis block is the first block in the Pactus blockchain, and it is created by the bootstrap validators.
This block marks the beginning of the blockchain and serves as the foundation for subsequent blocks.

The previous [block hash]({{ site.baseurl }}/learn/blockchain/block/#block-hash) in the genesis block sets to 0,
indicating that it has no predecessor.
Additionally, the genesis block does not have a previous certificate.

## Genesis information

In the Pactus, the genesis information is pre-defined and indicates the initial state of the network.
These parameters are hardcoded into the project and include:

- **Genesis Time** This is the time when the genesis block should be created.
  The bootstrap validators must be operational before this time.
- **Consensus parameters**: The initial [consensus parameters]({{ site.baseurl }}/learn/consensus/parameters)
  are defined at genesis time and ensure that the entire network operates within the same configuration.
  These consensus parameters are discussed in detail in the consensus section of the documentation.
- **Treasury Account**: The [treasury account]({{ site.baseurl }}/learn/blockchain/account/#treasury-account)
  is defined at the genesis time and holds the total supply of the Pactus blockchain
  that 21 million coins, and each coin is divided into 1 billion units.
- **Bootstrap validators** The bootstrap validators are defined at by their public keys.

## FAQ

### Where can I see the Genesis Information?

You can find the pre-defined Genesis Information for the Testnet of the Pactus blockchain in the `genesis.json` file,
which is located in the project repository, [here](https://github.com/pactus-project/pactus/blob/main/types/genesis/testnet.json).

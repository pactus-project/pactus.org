---
layout: learn
title: Block
---

# Block

## What is a Block?

In the Pactus blockchain, a block is a set of data that contains a header, transactions and
the certificate of the previous block.
Once a block comes with a valid certificate, it is committed and added to the blockchain.
A committed block is immutable, and any modifications to the block will invalidate the certificate.

![Pactus blockchain](/assets/images/pactus_blockchain.png)

### Block header

The block header is a data structure in the Pactus blockchain that contains important information about the block.

The block header is 138 bytes long and consists the following fields:

| Size     | Field               |
| -------- | ------------------- |
| 1 byte   | Version             |
| 4 bytes  | Timestamp           |
| 32 bytes | Previous Block Hash |
| 32 bytes | State Hash          |
| 48 bytes | Sortition Seed      |
| 21 bytes | Proposer Address    |

- **Version** is used to track the software or protocol upgrade, and the current block version is set to 1.
- **Timestamp** is the time of the block as the number of seconds since January 1, 1970 (Unix Epoch).
- **Previous Block Hash** is the hash of the previous block in the blockchain.
- **State Hash** is the [state hash](/learn/blockchain/state-merkle) of the blockchain at this block.
- It ensures that all nodes in the network have the same state.
- **Sortition Seed** is a verifiable and unpredictable seed data used by the [sortition](/learn/consensus/sortition) algorithm.
- **Proposer Address** is the address of the validator who created and proposed the block.

### Block certificate

A block certificate is a proof of commitment for the block in the Pactus blockchain.
It is the result of the Pactus consensus algorithm and ensures that the block has been agreed upon by committee members.

The block certificate consists the following fields:

| size     | Field      | Description              |
| -------- | ---------- | ------------------------ |
| 2 bytes  | Round      | The consensus round      |
| Variant  | Committers | The block committers     |
| Variant  | Absentees  | The absentees            |
| 48 bytes | Signature  | The aggregated signature |

- **Round** is the consensus round that this certificate issued.
- If a proposer failed to propose a block in one round, other validator change the proposer and increase the round number.
- **Committers** is the list of validators number in the committee for the current certificate.
- **Absentees** is the list of validators that are absent in the committee
- **Signature** is the signature for the certificate that enures the majority of the committee members validate and
- signed the proposed block

### Transactions

Each block in the Pactus blockchain contains a list of transactions.
The maximum number of transactions in a block is determined by the blockchain parameters, and currently set to 1000.
The first transaction in each block is the reward transaction. Once a block is committed and added to the blockchain,
all the transactions inside the block will be executed.
This means that the state of the blockchain will be updated based on the transactions in the committed block.

## Block hash

The block hash is a unique identifier for each block, which is computed by hashing the following data:

- Block header data (138 bytes)
- Previous certificate hash (32 bytes)
- Merkle root hash of transactions (32 bytes)
- Number of transactions (variant)

The previous certificate hash and the Merkle root hash of transactions are included in the block hash to
ensure that they cannot be modified.
The block hash is used to link the blocks together in the blockchain.

## Genesis Block

The genesis block is the first block in blockchain.
The previous block hash in the genesis block sets to 0 and the genesis block doesn't have the previous certificate.

## FAQ

### How are certificates issued?

In the Pactus blockchain, a validator called a Proposer is responsible for collecting all transactions and
creating a block every 10 seconds.
The Proposer broadcasts the proposed block to other validators inside the committee.
Other validators verify the proposed block, and if it is valid, they cast their votes in favor of the proposed block by
signing the combination of the block hash and round. M
ore details about the consensus mechanism can be found in the [consensus](/learn/consensus/protocol) document.

To issue a valid certificate, signatures from validators who hold more than ⅔ of the stake in
the committee are required.
Once enough votes are collected, the signatures are aggregated and combined into a single signature, and
the certificate is issued.

### How are certificates verified?

To verify a certificate for a block, the block hash is computed, and
the aggregated public key can be formed from the **Committers** and **Absentees**.
Then, the signature can be verified using the aggregated public key.

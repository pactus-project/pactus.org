---
layout: learn
title: Block
sidebar: Block
---

# Block

In the Pactus, a block is a set of data that contains a header, the certificate of the previous block
and list of the transactions.
Once a block comes with a valid certificate, it is committed and added to the blockchain, and
the certificate will be included in the next block.
A committed block is immutable, and any modifications to the block will invalidate the certificate.

![Pactus blockchain]({{ site.url }}/assets/images/pactus-blockchain.png)

## Block Header

The block header is a data structure in the Pactus blockchain that contains important information about
the block.

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
- **State Hash** is the [state hash](https://docs.pactus.org/docs/concepts/blockchain/state-hash) of the blockchain at this block.
  The State Hash ensures that all nodes in the network have the same state.
- **Sortition Seed** is a verifiable and unpredictable seed data used by
  the [sortition](https://docs.pactus.org/docs/concepts/consensus/sortition) algorithm.
- **Proposer Address** is the address of the validator who created and proposed the block.

## Block Certificate

A block certificate is a proof of commitment for the block in the Pactus blockchain.
It is the result of the Pactus consensus algorithm and ensures that the block has been agreed upon by committee members.

The block certificate consists the following fields:

| Size     | Field      |
| -------- | ---------- |
| 4 bytes  | Height     |
| 2 bytes  | Round      |
| Variant  | Committers |
| Variant  | Absentees  |
| 48 bytes | Signature  |

- **Height** is the height of the certified block.
- **Round** is the consensus round in which this certificate was issued.
  If a proposer fails to propose a block in one round, another validator takes over as the proposer,
  and the round number is increased.
- **Committers** is the list of validator numbers in the committee for the current certificate..
- **Absentees** is the list of validator numbers that are absent in the committee.
- **Signature** is the signature for the certificate that ensures the majority of the committee members have validated and
  signed the proposed block.

## Transactions

Each block in the Pactus blockchain contains a list of transactions.
The maximum number of transactions in a block is determined by the
[consensus parameters](https://docs.pactus.org/docs/concepts/consensus/parameters), and currently set to 1000.
The first transaction in each block is the [reward transaction](https://docs.pactus.org/docs/concepts/transaction/transfer/#reward-transaction).
Once a block is committed and added to the blockchain, all the transactions inside the block will be executed.
This means that the state of the blockchain will be updated based on the transactions in the committed block.

## Block Hash

The block hash is a unique identifier for each block, which is computed by hashing the following data:

- Block header data (138 bytes)
- Previous certificate hash (32 bytes)
- [Merkle root](https://docs.pactus.org/docs/concepts/blockchain/state-hash/#merkle-tree) hash of transactions (32 bytes)
- Number of transactions (variant)

The previous certificate hash and the Merkle root hash of transactions are included in the block hash to
ensure that they cannot be modified.
The block hash is used to link the blocks together in the blockchain.

## FAQ

### Is there any empty block in Pactus?

There is no completely empty block in Pactus.
Each block contains at least one transaction, which is the reward transaction.

### How are certificates issued?

In the Pactus blockchain, a validator called a Proposer is responsible for collecting all transactions and
creating a block every 10 seconds.
The Proposer broadcasts the proposed block to other validators inside the committee.
Other validators verify the proposed block, and if it is valid, they cast their votes in favor of the proposed block by
signing the combination of the block hash and the consensus round.
More details about the consensus mechanism can be found in the
[consensus protocol](https://docs.pactus.org/docs/concepts/consensus/protocol) document.

To issue a valid certificate, signatures from validators who hold more than ⅔ of the stake in
the committee are required.
Once enough votes are collected, the signatures are aggregated and combined into a single signature, and
the certificate is issued.

### How are certificates verified?

To verify a certificate for a block, the block hash is computed, and
the aggregated public key can be formed using the **Committers** and **Absentees** list.
Then, the signature can be verified using the aggregated public key and
the aggregated signature inside the certificate.

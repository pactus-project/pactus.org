---
title: State merkle
---

# State merkle tree

## What Is Merkle tree?

::: quote

In cryptography and computer science, a hash tree or Merkle tree is a tree in which every leaf node
is labelled with the cryptographic hash of a data block, and every non-leaf node is labelled with
the cryptographic hash of the labels of its child nodes. Hash trees allow efficient and secure
verification of the contents of large data structures.

::: right

From [Wikipedia](https://en.wikipedia.org/wiki/Merkle_tree)

:::

Hash trees like Merkle tree structures used by many blockchains try to solve this problem: How can
securely store the data? By using the merkle tree we can make sure all the nodes have the same state
and store the same data.

## State hash

In Pactus merkle is used to verify the state of blockchain in each block. The state hash in each block
is the hash of two merkle trees: accounts merkle tree and validators merkle tree.

![State hash](../../assets/images/pactus_state_root.png)

## Scalability of merkle tree

Using a merkle tree to calculate the state of the blockchain comes with a difficulty: When the
number of the accounts are big, calculating the root hash is not easy. In other words, a simple
Merkle tree is not scalable for calculating the accounts root hash.

In Pactus, we solved this problem by using account numbers to calculate the hash of leaf nodes. Each
account in Pactus has a dedicated account number. With using that account number we can make sure that
the position of the leaf nodes in the merkle tree is always same. So we don’t need to rebuild the
merkle tree if an account state is changed. We can simply save the previous merkle tree and
recalculate the parent hashes by fetching neighbor hashes when it’s needed.

![Account tree](../../assets/images/pactus_state_root_account_tree.png)

In this example, only account 6 has been updated.

---
id: learn-block
title: Block
---

# Block

## What Is Block?

Blocks contain a header, a certificate for the previous block and transactions. Each block in Zarb
has a unique [certificate](./learn-certificate.md) that is signed by committee members. A block will
be committed if it has a valid certificate. Blocks are immutable and any changes in the block will
invalidate the certificate.

## Block Header

Block header is 138 bytes and defines like below:

:::: tabs type:border-card

::: tab 🦀 Rust

```rust
pub struct BlockHeader {
    version: u8,                // 1 Byte
    unix_time: u32,             // 4 bytes
    prev_block_hash: Hash32,    // 32 bytes
    state_hash: Hash32,         // 32 bytes
    sortition_seed: Seed,       // 48 byes
    proposer_address: Address,  // 21 bytes
}
```

:::

::: tab 🇬 Golang

```go
type BlockHeader struct {
    Version             uint8    // 1 Byte
    UnixTime            uint32   // 4 bytes
    LastBlockHash       Hash32   // 32 bytes
    StateHash           Hash32   // 32 bytes
    SortitionSeed       Seed     // 48 byes
    ProposerAddress     Address  // 21 bytes
}
```

:::

::::

- `Version` starts from 1 for the mainnet and starts from 1001 for the testnet
- `UnixTime` is the time of block in unix format (seconds from Unix Epoch)
- `LastBlockHash` is the hash of the previous block
- `StateHash` is the [state merkle root](./learn-state-hash.md) at the current height
- `SortitionSeed` is the seed for the sortition algorithm and must be signed by the proposer
- `ProposerAddress` is the address of block proposer

## Block Identifier

Block Identifier or ID is the result of hashing the following data with Block2b: Block header data
(138 bytes) + Previous certificate hash (32 bytes) + Merkle root hash of transactions (32 bytes) +
number of transactions (variant)

As a matter of fact previous certificate and transactions root hashes, are attached into the block
ID and therefore they cannot be modified.

## Example

Hers is an example of a block header data:

<hexdump bytes="011a873d62b69e39b4e06567b6ad3a58f61df4c3c05920a29043277af01264c9e1e7693068bbf7b5e010ca98da562965a1a3411a48fee70bd0dbbe11d9867fa9e13b3e005e99bbd54999c7cd6bb176b160962080ee130c455c88507bd51a878a0b85c656cfc1a542cbbe0105708389ca68269bda290119cba9960c6ad28aaaa140377f652bdea0551e3b" />

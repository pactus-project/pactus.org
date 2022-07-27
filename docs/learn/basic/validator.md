---
title: Validator
---

# Validator

## What is Validator?

Validator is a full node that participates in the consensus protocol by broadcasting its votes.
Validators get rewards for proposing new blocks. Validators should bond tokens in the form of stake
and they are weighted by their boned stakes.

## Validator structure

Validator structure is 124 bytes and it is used to hold the validator information like public key,
balance and sequence number. The format of the account is as seen below:

:::: tabs type:border-card

::: tab 🦀 Rust

```rust
pub struct Validator {
    public_key: PublicKey,      // 96 bytes
    number: i32,                // 4 bytes
    sequence: i32,              // 4 bytes
    stake: i64,                 // 8 bytes
    last_bonding_height: i32,   // 4 bytes
    unbonding_height: i32,      // 4 bytes
    last_joined_height: i32,    // 4 bytes
}
```

:::

::: tab 🇬 Golang

```go
type Validator struct {
   PublicKey        PublicKey   // 96 bytes
   Number           int32       // 4 bytes
   Sequence         int32       // 4 bytes
   Stake            int64       // 8 bytes
   BondingHeight    int32       // 4 bytes
   UnbondingHeight  int32       // 4 bytes
   LastJoinedHeight int32       // 4 bytes
}
```

:::

::::

- `PublicKey` is the public key of validator which is 96 bytes in length
- `Number` is a unique and sequential number for the validator
- `Sequence` increasers anytime user send a transactions to prevent replaying the transaction
- `Stake` holds the stake of the validator
- `BondingHeight` is the last height that the validator is bonded some stake
- `UnbondingHeight` is the height that the validator is unbonded
- `LastJoinedHeight` is the validator joined the committee

### Example

Hers is an example of a validator data:

<hexdump bytes="95167c2a0d86ec360407bce89b304616e1d0f83dbc200642abea8405e1838312fb8290b1230ebe4369cf1b7f556906c610ae92bcee544a1af79e259996e368b14851a1f8844274690b10df983bc2776ab10cc37e49e175bc7ae17ac919b8c34c01000000020000000300000000000000040000000500000006000000" />

Validator Hash is the hash of the validator in binary format. For this example the validator hash
is:

```
76fea239a4586e8d9c2df9062b1958703341e3ece0f665c714da850101b61185
```

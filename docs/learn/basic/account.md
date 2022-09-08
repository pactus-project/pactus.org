---
title: Account
---

# Account

## What is Account?

An account is an entity with a dedicated [address](../cryptography/address) that can send
transactions on Pactus blockchain. Account is controlled by user private key.

## Account Structure

Account structure is 37 bytes and it is used to hold the account information like address, balance
and sequence number. The format of the account is as seen below:

:::: tabs type:border-card

::: tab 🦀 Rust

```rust
pub struct Account {
    address: Address, // 21 bytes
    number: i32,      // 4 bytes
    sequence: i32,    // 4 bytes
    balance: i64,     // 8 bytes
}
```

:::

::: tab 🇬 Golang

```go
type Account struct {
   Address  Address   // 21 bytes
   Number   int32     // 4 bytes
   Sequence int32     // 4 bytes
   Balance  int64     // 8 bytes
}
```

:::

::::

- `Address` is the address of account which is 21 bytes in length
- `Number` is a unique and sequential number for the account
- `Sequence` increasers anytime user send a transactions to prevent replaying the transaction
- `Balance` holds the balance of the account which is 8 bytes

### Example

Hers is an example of a account data:

<hexdump bytes="0102030405060708090a0b0c0d0e0f10111213141501000000020000000300000000000000" />

Account Hash is the hash of the account in binary format. For this example the account hash is:

```
33a4208262903cd1f274e760f495eca8e56b7fcc61feec0a8e6dcd0d2e57cafc
```

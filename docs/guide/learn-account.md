---
id: learn-account
title: Account
---

# Account

## What is Account?

Account structure is used to hold the balance and sequence number of an account.

## Account Structure

The format of the account is as seen below:

:::: tabs type:border-card

::: tab 🦀 Rust

```rust
#[derive(Encode, Decode)]
#[cbor(map)]
pub struct Account {
    #[n(1)] pub address: Address,
    #[n(2)] pub number: i32,
    #[n(3)] pub sequence: i32,
    #[n(4)] pub balance: i64,
}
```

:::

::: tab 🇬 Golang

```go
type Account struct {
   Address  Address `cbor:"1,keyasint"`
   Number   int     `cbor:"2,keyasint"`
   Sequence int     `cbor:"3,keyasint"`
   Balance  int64   `cbor:"4,keyasint"`
}
```

:::

::::

- `Address` is the address of account which is 20 bytes in length
- `Number` is a unique and sequential number for the account
- `Sequence` increasers anytime user send a transactions to prevent replaying the transaction
- `Balance` holds the balance of the account

## Example

Hers is an example of a account data:

<hexdump bytes="a40154436d9a52fd0e4c60ca8dd89f751058cff40edee002010300041a1dcd6500" />

Which can be interpreted in
[CBOR](http://cbor.me/?bytes=a40154436d9a52fd0e4c60ca8dd89f751058cff40edee002010300041a1dcd6500)
format:

```
{
  1: h'436D9A52FD0E4C60CA8DD89F751058CFF40EDEE0',
  2: 1,
  3: 0,
  4: 500000000
}
```

Account Hash is the hash of the account in binary format. For this example the account hash is:

```
0x8b66cb22841238f424835e6e7313cff870dfe9b851e958eb5b3bf842acc20e1d
```

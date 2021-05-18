---
id: learn-serialization
title: Data serialization
---

# Data serialization

## CBOR as Data serialization

We are using “Concise Binary Object Representation” or [CBOR](https://tools.ietf.org/html/rfc7049)
for data serialization in Zarb. All data structures like [blocks](./learn-block) or
[transactions](./transaction-format.md) or network messages are encoding using CBOR library. Key as
integer: Key is always an integer regardless of the variable name. Key IDs are fixed and can never
change.

An example of defining CBOR tags in golang:

```go
type Account struct {
   Address  Address `cbor:"1,keyasint"`
   Number   int     `cbor:"2,keyasint"`
   Sequence int     `cbor:"3,keyasint"`
   Balance  int64   `cbor:"4,keyasint"`
}
```

## CBOR me!

[http://cbor.me/](http://cbor.me/?bytes=a40154436d9a52fd0e4c60ca8dd89f751058cff40edee002010300041a1dcd6500)
is a cool tool for digesting the CBOR binary data. You can try to decode binary data there, as seen
in the following example:

<hexdump bytes="a40154436d9a52fd0e4c60ca8dd89f751058cff40edee002010300041a1dcd6500" />

As you may have guessed, this is an example of [account](./learn-account.md) data in Zarb
blockchain. The first field is a 20 bytes address, then an account number, sequence number and the
balance which is 500000000.

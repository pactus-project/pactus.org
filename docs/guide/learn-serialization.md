---
id: learn-serialization
title: Data serialization
---

# CBOR as data serialization

We are using "Concise Binary Object Representation" or [CBOR](https://tools.ietf.org/html/rfc7049)
for data serialization in Zarb. All data structures like [blocks](./learn-block) or
[transactions](./transaction-format.md) or network messages are encoding using CBOR library.

Key as integer: Key is always an integer regardless of the variable name. Key ids are fix and never
change.

Example of defining a CBOR tags in go lang:

```go
type Account struct {
   Address  Address `cbor:"1,keyasint"`
   Number   int     `cbor:"2,keyasint"`
   Sequence int     `cbor:"3,keyasint"`
   Balance  int64   `cbor:"4,keyasint"`
}
```

## CBOR me!

[http://cbor.me/](http://cbor.me/) is cool tools for digesting the CBOR binary data. For example try
to decode following binary data there:

```
A401540C9819C4D4B1EDB7B70E6665287D4CE95401A37702191BD7031823041A007F5535
```

As you may guess, this is an example [account](./learn-account.md) data in Zarb blockchain. The
first field is 20 bytes address, then account number, sequence number and balance which is 8344885.

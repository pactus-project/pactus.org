---
id: learn-serialization
title: Data serialization
---

# CBOR as data serialization

We are using  [CBOR](https://tools.ietf.org/html/rfc7049) for serialization and deserialization of everything in Zarb including deterministic stuff like blocks and transactions or temporary stuff like network messaging.

Key as integer: Key is always integer (Regardless of the variable name). This id is immutable and always is the same.

Example of defining a CBOR tags in go lang:

```go
type Account struct {
   Address  crypto.Address `cbor:"1,keyasint"`
   Number   int            `cbor:"2,keyasint"`
   Sequence int            `cbor:"3,keyasint"`
   Balance  int64          `cbor:"4,keyasint"`
}
```

Check [http://cbor.me/](http://cbor.me/) for diagnosing the binary data.

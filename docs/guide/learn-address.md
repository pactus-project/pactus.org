---
id: learn-address
title: Address conversion
---

## Address conversion

Address in zarb is hash of public key (same as bitcoin):

```go
Addr = Hash160(Hash256(pb.RawBytes()))
```

Example:

```
Public key:
37bfe636693eac0b674ae6603442192ef0432ad84384f0cec8bea5f63c9f45c29bf085b8b9b7f069ae873ccefe61a50a59ad3fefd729af5d63e9cb2325a8f064ab2514b3f846dbfded53234800603a9e752422ad48b99f835bcd95df945aac93

Address: (20 bytes)
f6edd7e1d53d730a3ae0d44e6b6ce5dc102c0b63
```

Comment: We have a reserved address for the treasury account.

```
TreasuryAddress: 0000000000000000000000000000000000000000
```

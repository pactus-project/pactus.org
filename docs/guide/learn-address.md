---
id: learn-address
title: Address conversion
---

## Address conversion

Address in zarb is hash of public key (same as bitcoin):

```go
Address = Hash160(Hash256(PublicKey))
```

Example:

```
Public key (96 bytes):
37bfe636693eac0b674ae6603442192ef0432ad84384f0cec8bea5f63c9f45c29bf085b8b9b7f069ae873ccefe61a50a59ad3fefd729af5d63e9cb2325a8f064ab2514b3f846dbfded53234800603a9e752422ad48b99f835bcd95df945aac93

Address: (20 bytes)
f6edd7e1d53d730a3ae0d44e6b6ce5dc102c0b63
```

## Treasury address

Treasury address in Zarb is defined like below:

```
TreasuryAddress: 0000000000000000000000000000000000000000
```

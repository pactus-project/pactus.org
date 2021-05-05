---
id: learn-cryptography
title: Cryptography
---

# Cryptography and Address format

## Hashing Algorithm

The hashing algorithm used in Zarb is Blake2b. [Blake2](https://www.blake2.net/) is considered to be
a very fast cryptographic hash function.

Example:

```
Message: "zarb"
Hash256: 12b38977f2d67f06f0c0cd54aaf7324cf4fee184398ea33d295e8d1543c2ee1a
```

## cryptographic signature scheme

Zarb is using [BLS](https://en.wikipedia.org/wiki/BLS_digital_signature) threshold signature
(Boneh–Lynn–Shacham) for cryptographic signing and verification.
[Herumi](https://github.com/herumi/bls) is an implementation of BLS threshold signature, which we
are using in Zarb blockchain.

### Example

```
Private Key: (32 bytes)
d0c6a560de2e60b6ac55386defefdf93b0c907290c2ad1b4dbd3338186bfdc68

Public key: (96 bytes)
37bfe636693eac0b674ae6603442192ef0432ad84384f0cec8bea5f63c9f45c29bf085b8b9b7f069ae873ccefe61a50a59ad3fefd729af5d63e9cb2325a8f064ab2514b3f846dbfded53234800603a9e752422ad48b99f835bcd95df945aac93

Signature: (48 bytes)
76da6c523c4abac463aad1ead5b7a042f143e354c346f6921a4975cc16959559e9b738fa197ab4df123f580a553b1596

Message:
"zarb"
```

### Signature aggregation

One of the advantages of BLS Signatures, is signature aggregation. In BLS individual signatures can
be combined into a single aggregate signature so that overall size does not grow beyond 1 signature.

## Address conversion

Address in Zarb is 160-bit hash of the public key hash (RIPEMD-160 after Blake2b):

```go
AddressBytes = Hash160(Hash256(PublicKey))
```

The result will convert from byte string into a bech32 [^first] string.

### Example:

```
Public key (96 bytes):
37bfe636693eac0b674ae6603442192ef0432ad84384f0cec8bea5f63c9f45c29bf085b8b9b7f069ae873ccefe61a50a59ad3fefd729af5d63e9cb2325a8f064ab2514b3f846dbfded53234800603a9e752422ad48b99f835bcd95df945aac93

Address: (20 bytes)
f6edd7e1d53d730a3ae0d44e6b6ce5dc102c0b63

Address in bech32:
zrb17mka0cw484es5whq638xkm89msgzczmrwy64dy
```

### Treasury address

Treasury address in Zarb is defined like below:

```
TreasuryAddress: 0000000000000000000000000000000000000000
```

[^first]: [Base32 address format](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki)

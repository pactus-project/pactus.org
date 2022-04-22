---
id: learn-cryptography
title: Cryptography
---

# Cryptography and Address format

## Hashing Algorithm

The hashing algorithm used in Zarb is Blake2b. [Blake2](https://www.blake2.net/) is considered to be
a very fast cryptographic hash function. Example:

```
Message: "zarb"
Hash256: 12b38977f2d67f06f0c0cd54aaf7324cf4fee184398ea33d295e8d1543c2ee1a
```

## Cryptographic Signature Scheme

Zarb is using [BLS](https://datatracker.ietf.org/doc/draft-irtf-cfrg-bls-signature/)
(Boneh–Lynn–Shacham) threshold signature for cryptographic signing and verification. In Zarb
blockchain, we are using [Herumi](https://github.com/herumi/bls), an implementation of BLS threshold
signature.

### Example

```
Private Key:
SECRET1PDRWTLP5PX0FAHDX39GXZJP7FKZFALML0D5U9TT9KVQHDUC99CMGQQJVK67

Public key: (96 bytes)
af0f74917f5065af94727ae9541b0ddcfb5b828a9e016b02498f477ed37fb44d5d882495afb6fd4f9773e4ea9deee436030c4d61c6e3a1151585e1d838cae1444a438d089ce77e10c492a55f6908125c5be9b236a246e4082d08de564e111e65

Signature: (48 bytes)
ad0f88cec815e9b8af3f0136297cb242ed8b6369af723fbdac077fa927f5780db7df47c77fb53f3a22324673f000c792

Message:
"zarb"
```

### Signature aggregation

One of the advantages of BLS signatures is signature aggregation. BLS individual signatures can be
combined into one single aggregated signature, so that the overall size does not grow beyond one
signature.

## Address conversion

Address in Zarb is 21 bytes. The first bye of the address describes the type of cryptographic
algorithm and the rest of 20 bytes are the public key hash. (RIPEMD-160 after Blake2b):

```go
AddressBytes = <SIG_TYPE> + RIPEMD160(Blake2b(PublicKey))
```

The result will convert from a byte array into a bech32 [^first] string.

### Example:

```
Public key (96 bytes):
af0f74917f5065af94727ae9541b0ddcfb5b828a9e016b02498f477ed37fb44d5d882495afb6fd4f9773e4ea9deee436030c4d61c6e3a1151585e1d838cae1444a438d089ce77e10c492a55f6908125c5be9b236a246e4082d08de564e111e65

Address in bech32:
zc1p5x2a0lkt5nrrdqe0rkcv6r4pfkmdhrr3ku6ptk
```

Type of signature for BLS signature address set to one.

### Treasury address

Treasury address in Zarb is defined as seen below:

```
TreasuryAddress: 000000000000000000000000000000000000000000
```

Type of signature for treasury address set to zero.

[^first]: [Base32 address format](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki)

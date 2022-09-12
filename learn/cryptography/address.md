---
layout: learn
title: Address
permalink: /learn/cryptography/address/index.html
---


# Address

## Address format

Address in Pactus is 21 bytes. The first bye of the address describes the type of cryptographic
algorithm and the rest of 20 bytes are the hash of public key. (RIPEMD-160 after Blake2b):

```
AddressBytes = <SIG_TYPE> + RIPEMD160(Blake2b(PublicKey))
```

The result will convert from a byte array into a bech32 [^first] string.

Type of signature for BLS signature address set to one.

### Treasury address

Treasury address in Pactus is defined as seen below:

```
TreasuryAddress: 000000000000000000000000000000000000000000
```

Type of signature for treasury address set to zero.

[^first]: [Base32 address format](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki)

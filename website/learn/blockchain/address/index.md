---
layout: learn
title: Address
sidebar: Address
---

# Address

An Address is a unique identifier that is used to send and receive transactions on the Pactus blockchain.
It is represented as a string of 42 alphanumeric characters and always begins with the letters "pc1".
Here is an example of an Address on the Pactus blockchain:

```text
pc1p4e92hx0erqyx939crndvthvpn7qcdhefc9r6s7
```

## Address structure

An address in the Pactus blockchain is made up of 21 bytes and it is derived from the public key.
The first byte of the address specifies the address type,
while the remaining 20 bytes represent the hash of the public key.
The hash function used is [RIPEMD-160](https://en.wikipedia.org/wiki/RIPEMD#RIPEMD-160_hashes),
which is applied after [Blake2b]({{ site.baseurl }}/learn/blockchain/cryptography/#hashing-algorithm)):
The resulting byte array is then converted into a bech32m[^first] string.

![Pactus address structure]({{ site.url }}/assets/images/pactus_address.png)

## Address Type

The Address Type specifies the type of the address and its defined as below:

- 0: Treasury address
- 1: Validator address
- 2: Account Address

## Treasury address

The Treasury Address on the Pactus blockchain is a fixed address that is defined as follows:

```text
TreasuryAddress: 000000000000000000000000000000000000000000
```

The Address Type for the Treasury Address is set to zero, which
means there is no key associated with the treasury address.
The remaining characters of the address are all zeros.

[^first]: [bech32m address format](https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki)

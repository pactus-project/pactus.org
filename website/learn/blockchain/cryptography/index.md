---
layout: learn
title: Cryptography
---

# Cryptography

## Hashing algorithm

The hashing algorithm used in Pactus is Blake2b. [Blake2](https://www.blake2.net/) is considered to be
a fast cryptographic hash function.

## Signature Scheme

Pactus is using [BLS](https://datatracker.ietf.org/doc/draft-irtf-cfrg-bls-signature/)
(Boneh–Lynn–Shacham) threshold signature for cryptographic signing and verification.

### Signature aggregation

One of the advantages of BLS signatures is signature aggregation. BLS individual signatures can be
combined into one single aggregated signature, so that the overall size does not grow beyond one
signature.

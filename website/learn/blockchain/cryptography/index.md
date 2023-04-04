---
layout: learn
title: Cryptography
sidebar: Cryptography
---

# Cryptography

The Pactus blockchain employs various advanced cryptographic algorithms, including hashing and signature schemes,
to protect user data and transactions.

## Hashing algorithm

Pactus uses a hashing algorithm called [Blake2b](https://www.blake2.net/).
This algorithm is known for being a fast and secure way of creating unique digital fingerprints of data.

## Digital signature

To ensure secure transactions, Pactus uses a signature scheme called
[BLS](https://datatracker.ietf.org/doc/draft-irtf-cfrg-bls-signature/) (Boneh–Lynn–Shacham)
threshold signature for cryptographic signing and verification.

### Signature aggregation

One of the advantages of BLS signatures is signature aggregation. BLS individual signatures can be
combined into one single aggregated signature, so that the overall size does not grow beyond one
signature.

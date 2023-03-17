---
layout: reference
title: Signature scheme
permalink: /reference/cryptography/signature/index.html
---

# Signature Scheme

## BLS signature

Pactus is using [BLS](https://datatracker.ietf.org/doc/draft-irtf-cfrg-bls-signature/)
(Boneh–Lynn–Shacham) threshold signature for cryptographic signing and verification.

### Signature aggregation

One of the advantages of BLS signatures is signature aggregation. BLS individual signatures can be
combined into one single aggregated signature, so that the overall size does not grow beyond one
signature.

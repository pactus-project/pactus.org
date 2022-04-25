---
title: Data serialization
---

# Data serialization

## Deterministic serialization

For deterministic stuff like block and transactions, Zarb is using a deterministic data
serialization similiar to bitcoin, For non-deterministic stuff like networking messages Zarb is
using “Concise Binary Object Representation” or [CBOR](https://tools.ietf.org/html/rfc7049) data
format.

## CBOR me!

[http://cbor.me/](http://cbor.me/?bytes=a60101021864030004582019ba0a47813c13b2459f4ce3851ca42da8299c4f17b226e8bad1a9859172ab960555015da8f5e196d6e961609ae41528c4ec7368975937065830b047d5c2c072299284355f5b5014b5bf77f1702bc08b36061ddba08e41bebf51ab0416d265973190d26cbb79144681e7)
is a cool tool for digesting the CBOR binary data. You can try to decode binary data there, as seen
in the following example:

<hexdump bytes="a60101021864030004582019ba0a47813c13b2459f4ce3851ca42da8299c4f17b226e8bad1a9859172ab960555015da8f5e196d6e961609ae41528c4ec7368975937065830b047d5c2c072299284355f5b5014b5bf77f1702bc08b36061ddba08e41bebf51ab0416d265973190d26cbb79144681e7" />

This is an example of a vote message in Zarb blockchain.

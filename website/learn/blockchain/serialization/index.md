---
layout: learn
title: Data serialization
---

# Data serialization

## What is the Data serializations?

Data serialization is the process of converting data into a format that can be easily stored or transmitted over a network.
It typically involves encoding data into a sequence of bytes that can later be decoded to reconstruct the original data structure.

## Deterministic serialization

Pactus uses a deterministic serialization for the deterministic data like blocks and transactions.
The serialization format for different types of data is listed in the table below:

| **Data Type**           | **Size (bytes)** | **Description**                                    |
| ----------------------- | ---------------- | -------------------------------------------------- |
| uint8                   | 1                | An 8 bits unsigned integer                         |
| int8                    | 1                | An 8 bits signed integer                           |
| uint16                  | 2                | A 16 bits unsigned integer                         |
| int16                   | 2                | A 16 bits signed integer                           |
| uint32                  | 4                | A 32 bits unsigned integer                         |
| int32                   | 4                | A 32 bits signed signed integer                    |
| uint64                  | 8                | A 64 bits unsigned integer                         |
| int64                   | 8                | A 64 bits signed signed integer                    |
| [VarInt](#varint)       | Variable         | A compact representation of a an unsigned integer. |
| [VarByte](#varbyte)     | Variable         | A variable length bytes                            |
| [VarString](#varstring) | Variable         | A variable length string                           |
| Address                 | 21               | 21 bytes of address data                           |
| Hash32                  | 32               | 32 bytes of hash data                              |

### VarInt

Variable length integer (VarInt) is encoded by 7-bit chunks. The MSB indicates whether there are
more octets (1) or it is the last one (0). It means `0x00` to `0x7f` encoded in 1 byte, `0x80` to
`0x3fff` encoded in 2 bytes, ...

Example:

```text
0x0f -> 0f
0x1000 -> 8020
0xffff -> ffff03
0xffffff -> ffffff07
```

### VarByte

Variable length byte (VarByte) is encoded as a variable length integer (VarInt) containing the
length of the array followed by the bytes themselves: `VarInt(len(bytes)) || bytes`

### VarString

Variable length string (VarString) is encoded as a variable length integer (VarInt) containing the
length of the string followed by the bytes that represent the string
itself:`VarInt(len(str)) || str`

### Byte order

All the internal number representation are in little-endian byte order.

### Example

Here is an example of a block header data that encoded using deterministic serialization:

{% hexdump "block_header"
"011a873d62b69e39b4e06567b6ad3a58f61df4c3c05920a29043277af01264c9"+
"e1e7693068bbf7b5e010ca98da562965a1a3411a48fee70bd0dbbe11d9867fa9"+
"e13b3e005e99bbd54999c7cd6bb176b160962080ee130c455c88507bd51a878a"+
"0b85c656cfc1a542cbbe0105708389ca68269bda290119cba9960c6ad28aaaa1"+
"40377f652bdea0551e3b" %}

## CBOR serialization

For non-deterministic data like networking messages, Pactus uses “Concise Binary Object
Representation” or [CBOR](https://tools.ietf.org/html/rfc7049).
CBOR is a binary data serialization format that is widely used in various application,
including IoT, web services, security, and automotive, due to its compact representation and efficient parsing.

### CBOR me!

[https://cbor.me/](https://cbor.me/?bytes=a60101021864030004582019ba0a47813c13b2459f4ce3851ca42da8299c4f17b226e8bad1a9859172ab960555015da8f5e196d6e961609ae41528c4ec7368975937065830b047d5c2c072299284355f5b5014b5bf77f1702bc08b36061ddba08e41bebf51ab0416d265973190d26cbb79144681e7)
is an online tool for encoding and decoding CBOR data, offering developers an easy way to test and
validate their CBOR data without having to set up a local environment.

Here is an example of Vote message that encoded using CBOR.

{% hexdump "vote_data"
"a60101021864030004582019ba0a47813c13b2459f4ce3851ca42da8299c4f17"+
"b226e8bad1a9859172ab960555015da8f5e196d6e961609ae41528c4ec736897"+
"5937065830b047d5c2c072299284355f5b5014b5bf77f1702bc08b36061ddba0"+
"8e41bebf51ab0416d265973190d26cbb79144681e7" %}

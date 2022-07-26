---
title: Data serialization
---

# Data serialization

## Deterministic serialization

For deterministic stuff like block and transactions, Zarb is using a deterministic data
serialization. Below is a table containing the serialization format of the most data types.

| **Name**                | **Size (bytes)** | **Description**                                    |
| ----------------------- | ---------------: | -------------------------------------------------- |
| uint8                   |                1 | An 8 bits unsigned integer                         |
| int8                    |                1 | An 8 bits signed integer                           |
| uint16                  |                2 | A 16 bits unsigned integer                         |
| int16                   |                2 | A 16 bits signed integer                           |
| uint32                  |                4 | A 32 bits unsigned integer                         |
| int32                   |                4 | A 32 bits signed signed integer                    |
| uint64                  |                8 | A 64 bits unsigned integer                         |
| int64                   |                8 | A 64 bits signed signed integer                    |
| [VarInt](#varint)       |         Variable | A compact representation of a an unsigned integer. |
| [VarByte](#varbyte)     |         Variable | A variable length bytes                            |
| [VarString](#varstring) |         Variable | A variable length string                           |
| Address                 |               21 | 21 bytes of address data                           |
| Hash32                  |               32 | 32 bytes of hash data                              |

### VarInt

Variable length integer (VarInt) is encoded by 7-bit chunks. The MSB indicates whether there are
more octets (1) or it is the last one (0). It means `0x00` to `0x7f` encoded in 1 byte, `0x80` to
`0x3fff` encoded in 2 bytes, ...

Example:

```
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

All the internal number representation are in little-endian. byte order

## CBOR serialization

For non-deterministic stuff like networking messages Zarb is using “Concise Binary Object
Representation” or [CBOR](https://tools.ietf.org/html/rfc7049) data format.

### CBOR me!

[http://cbor.me/](http://cbor.me/?bytes=a60101021864030004582019ba0a47813c13b2459f4ce3851ca42da8299c4f17b226e8bad1a9859172ab960555015da8f5e196d6e961609ae41528c4ec7368975937065830b047d5c2c072299284355f5b5014b5bf77f1702bc08b36061ddba08e41bebf51ab0416d265973190d26cbb79144681e7)
is a cool tool for digesting the CBOR binary data. You can try to decode binary data there, as seen
in the following example:

<hexdump bytes="a60101021864030004582019ba0a47813c13b2459f4ce3851ca42da8299c4f17b226e8bad1a9859172ab960555015da8f5e196d6e961609ae41528c4ec7368975937065830b047d5c2c072299284355f5b5014b5bf77f1702bc08b36061ddba08e41bebf51ab0416d265973190d26cbb79144681e7" />

This is an example of a vote message in Zarb blockchain.

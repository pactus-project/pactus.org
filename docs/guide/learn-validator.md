---
id: learn-validator
title: Validator-info
---

# Validator info


Validator structure is used to hold the stake and sequence number of validators.
```go
type Validator struct {
   PublicKey       PublicKey `cbor:"1,keyasint"`
   Number          int       `cbor:"2,keyasint"`
   Sequence        int       `cbor:"3,keyasint"`
   Stake           int64     `cbor:"4,keyasint"`
   BondingHeight   int       `cbor:"5,keyasint"`
   UnbondingHeight int       `cbor:"6,keyasint"`
}
```
It serialized like this:
```
A6015860DFF46FBCE5AE1BA4837DE551206176C0A74DEB5DFCA803228F570F7C9BA093EA109700559B72FE1D385492F0D5A10F17A4CEC41EB2E552F51E1F7F48AB311D4E195B1563C1FCBA8EE201173E4E6362CABEDACCEE541F9EFC9C4140D9FB268102021901B4031902F7041A2AF78F210514061864
```
Which can be interpreted like this:
```
{
    1: h'DFF46FBCE5AE1BA4837DE551206176C0A74DEB5DFCA803228F570F7C9BA093EA109700559B72FE1D385492F0D5A10F17A4CEC41EB2E552F51E1F7F48AB311D4E195B1563C1FCBA8EE201173E4E6362CABEDACCEE541F9EFC9C4140D9FB268102',
    2: 436,
    3: 759,
    4: 720867105,
    5: 20,
    6: 100
}
```

Comment:

- Keys are fixed.
- int64 is enough for holding balance
- To generate hash we are using the cbor serialized data. For above example hash is:
```
Hash: 24118cc654fdc5333c222b40a932fccf0a058e3c0045a1e34d9298df4c128fba
```
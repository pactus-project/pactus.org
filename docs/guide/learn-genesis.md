---
id: genesis
title: Genesis info
---

# Genesis info

The genesis file is the main file for Zarb which create the first block. With this file, the user will get the information of Zarb block structure.

```go
{
   "ChainName":"zarb-testnet",
   "GenesisTime":"2020-12-20T12:00:00.0+03:30",
   "Params":{
      "BlockTimeInSecond":10,
      "MaximumTransactionPerBlock":1000,
      "MaximumPower":5,
      "SubsidyReductionInterval":2100000,
      "MaximumMemoLength":1024,
      "FeeFraction":0.001,
      "MinimumFee":1000,
      "TransactionToLiveInterval":500
   },
   "Accounts":[
      {
         "Address":"0000000000000000000000000000000000000000",
         "Balance":2100000000000000
      }
   ],
   "Validators":[]
}
```

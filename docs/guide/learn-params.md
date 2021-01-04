---
id: learn-params
title: Chain params
---

# Chain Params

Chain params are fixed values for making better consensus between the nodes.
Chain params for mainnet are:

```go
"Params":{
    "BlockTimeInSecond":10,
    "MaximumTransactionPerBlock":1000,
    "MaximumPower":21,
    "SubsidyReductionInterval":2100000,
    "MaximumMemoLength":1024,
    "FeeFraction":0.001,
    "MinimumFee":1000,
    "TransactionToLiveInterval": 8640,   // one days
    "WiredrawStakeInterval": 181440, // 21 days
}
```
##
---
version: 2
---

## Preface

The Pactus Blockchain offers a Graphical User Interface (GUI) that comes with a built-in wallet to create, sign and broadcast transactions. This tutorial aims to guide you step-by-step on how to use the GUI application to send transactions to the Pactus blockchain. Whether you are a beginner or an advanced user, this tutorial is suitable for you.

## Prerequisites

Before we begin, you'll need to run the Pactus GUI application and ensure that it is synced with the network. You can find detailed instructions on how to do this in the following [tutorial](https://pactus.org/user-guides/run-pactus-gui/).

## Sending a Transfer Transaction

To send a [transfer transaction](https://pactus.org/learn/transaction/send/), click on the "Transaction" menu and select "Transfer." This will bring up a new window where you can select the account address from which you wish to send the transfer, as well as the recipient's account address and the amount you wish to send. It's important to note that the transaction fee will be calculated based on the amount you're sending. For more information on how the transaction fee is calculated, please refer to the [percentage fee](https://pactus.org/learn/transaction/fee/) model documentation.

![Transfer Transaction Dialog]({{ site.url }}/user-guides/send-transactions-gui/transfer-transaction-dialog.png)

## Sending a Bond Transaction

To send a [bond transaction](https://pactus.org/learn/transaction/bond/), navigate to the "Transaction" menu and select "Bond." A new window will appear where you can select the account address from which you wish to send the bond transaction, as well as the validator address of the recipient and the amount you wish to stake. If the validator address is not already registered on the Pactus blockchain, you will need to provide the validator's public key as the first staking transaction will create the validator on the Pactus blockchain. Keep in mind that the transaction fee will be calculated based on the amount you're sending. For more information on how the transaction fee is calculated, please refer to the [percentage fee](https://pactus.org/learn/transaction/fee/) model documentation.

![Bond Transaction Dialog]({{ site.url }}/user-guides/send-transactions-gui/bond-transaction-dialog.png)

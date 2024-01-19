---
version: 2
---

## 序言

Pactus 区块链提供了一个图形用户界面 (GUI), 带有内置钱包来创建, 签署并广播交易。
本教程旨在逐步指导您如何使用 GUI 应用程序将交易发送到 Pactus 区块链。
无论您是初学者还是高级用户, 本教程都适合您。

## 符合条件

在开始之前, 您需要运行 Pactus GUI 应用程序并确保它与网络同步。
您可以在此[教程]({{ site.baseurl }}/user-guides/run-pactus-gui/)中学习如何运行 Pactus GUI。

## 发送转账交易

如要发送[转账交易]({{ site.baseurl }}/learn/transaction/transfer/), 点击“交易”菜单并选择“转账”。
这将打开一个新窗口, 您可以在其中选择您希望发送转账的
[账户]({{ site.baseurl }}/learn/blockchain/account/)地址, 以及收款人的帐户地址和您希望发送的金额。

审核交易详情并确保其正确后, 单击“发送”按钮签署交易并将其广播到 Pactus 区块链。

![Transfer Transaction Dialog]({{ site.url }}/user-guides/send-transactions-gui/transfer-transaction-dialog.png)

需要注意的是, [交易费用]({{ site.baseurl }}/learn/transaction/fee/)将根据您发送的金额进行计算。

## 发送契约交易

如要发送[契约交易]({{ site.baseurl }}/learn/transaction/bond/), 点击“交易”菜单并选择“契约”。

点击后将出现一个新窗口, 您可以在其中选择您希望发送转账的账户地址, 以及[验证器]({{ site.baseurl }}/learn/blockchain/validator/)地址和您希望发送的质押金额。

如果验证器地址尚未在 Pactus 区块链上注册，您将需要提供验证器的公钥作为第一笔质押交易。这将在 Pactus 区块链上创建及验证您的验证器。
要获取公钥, 您可以钱包中右键单击验证者地址并选择“详细信息”。

![Bond Transaction Dialog]({{ site.url }}/user-guides/send-transactions-gui/bond-transaction-dialog.png)

需要注意的是, [交易费用]({{ site.baseurl }}/learn/transaction/fee/)将根据您发送的金额进行计算。

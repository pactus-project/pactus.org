---
version: 3
---

## Preface

Pactus 可以在不同的模式下运行，包括命令行界面 (CLI) 和图形用户界面 (GUI)。
本教程将指导您完成在 GUI 模式下运行 Pactus 的步骤，适合初学者到高级用户。

## Prerequisites

在继续执行以下步骤之前，请确保您具备以下条件：

- 运行 Windows、macOS 或 Linux 的计算机
- 合适的互联网连接

## Download

从以下链接下载 Pactus GUI 安装程序或存档文件
[here]({{ site.baseurl }}/download/#pactus-graphical-user-interface-gui).

### Code certificate issue

Windows 和 macOS 用户可能会遇到一条警告消息，指出 Pactus 是不受信任的应用程序。
这是因为 Pactus 没有
[代码签名证书](https://en.wikipedia.org/wiki/Code_signing)。

![Code certificate issue]({{ site.url }}/user-guides/run-pactus-gui/code_certificate_warning.png)

代码证书是验证软件发行者的身份和真实性的数字签名。然而，获得代码证书的过程复杂且昂贵，需要注册公司并
通过了解你的客户 (KYC) 检查。

由于 Pactus 是一个开源且基于社区的应用程序，因此我们还没有代码证书。
因此，您可以安全地忽略警告消息并继续安装 Pactus。

## Installing

要安装 Pactus GUI，只需按照安装程序提供的说明步骤进行操作即可。该过程非常简单，与在计算机上安装任何其他应用程序类似。

![Installing Pactus]({{ site.url }}/user-guides/run-pactus-gui/installing.png)

## Initializing

当您第一次运行Pactus时，将出现一个向导界面，指导您完成钱包创建和初始化过程。这个过程由几个步骤组成：

### Initialize mode

在第一页上，您会询问您要如何创建钱包。选择“开始创建新钱包” 选项，然后进入下一页。

![Initialize mode]({{ site.url }}/user-guides/run-pactus-gui/initialize_mode.png)

### Wallet seed

下一页将显示您的钱包助记词，由 12 个单词组成。安全备份此助记词至关重要，因为钱包恢复需要它以防您的计算机丢失、损坏或被盗。

![Wallet seed]({{ site.url }}/user-guides/run-pactus-gui/wallet_seed.png)

**警告：** 确保您的钱包助记词的私密性和安全性。
如果其他人获得了您的助记词，他们就可以控制您的钱包和资金。

### Seed confirmation

在此步骤中，系统将要求您确认助记词。
将您在上一步中收到的 12 个单词输入到对话框中。
如果种子短语输入正确，您将能够进入下一页。

![Seed confirmation]({{ site.url }}/user-guides/run-pactus-gui/seed_confirmation.png)

### Wallet password

在此页面上，您将被要求为您的钱包设置密码。
在第一个对话框中输入强密码，并在第二个对话框中确认。
该密码将用于加密您的钱包并防止未经授权的访问。

![Set wallet password]({{ site.url }}/user-guides/run-pactus-gui/wallet_password.png)

注意：选择一个强密码并妥善保管。
如果您忘记或丢失密码，您将需要助记词才能重新访问您的钱包。

### Number of validators

Pactus 区块链中的每个节点最多可以运行 32 个验证器，每个验证器最多可以质押
1000金币。在这里，您可以定义要为节点创建多少个验证器。
根据您想要质押的代币数量选择验证器的数量。

![Number of validators]({{ site.url }}/user-guides/run-pactus-gui/number_of_validators.png)

如果你想质押超过32,000个币，你需要建立一个新节点。

### Node information

初始化过程的最后一页显示节点信息，例如工作目录、验证器地址、
以及奖励地址。查看此信息并单击“关闭”以完成初始化过程。

![Node information]({{ site.url }}/user-guides/run-pactus-gui/node_information.png)

关闭向导对话框后，您的 Pactus 节点将开始运行。您现在已准备好在 GUI 模式下使用 Pactus。

## Running the Pactus Node

After completing the initialization process, you are ready to run the Pactus node.
Running a Pactus node allows you to synchronize with the network, enabling you to view and manage your wallet and
sending transactions.

### Syncing with the Network

When the Pactus node starts running, it begins syncing with the network. This process may take some time,
as your node needs to download and verify the entire blockchain history.
Please be patient while your node syncs.

![Syncing progress]({{ site.url }}/user-guides/run-pactus-gui/syncing_progress.png)

### Default Wallet

You can check the "Default Wallet" tab to access your wallet information. Please note that the displayed
information may not be accurate until the syncing process is complete.

![Default Wallet tab]({{ site.url }}/user-guides/run-pactus-gui/default_wallet.png)

In the "Default Wallet" tab, you can view your account details, including your balance and
address information such as the **validator and reward addresses**.
Your computer acts as a node and is recognized by the validator address in the Pactus network.
The reward address is the account address where you collect the
[rewards]({{ site.baseurl }}/learn/blockchain/incentive/) earned by participating in
the consensus algorithm and proposing new blocks.

To become a validator and participate in the
consensus algorithm to earn rewards, you first need to
[stake]({{ site.baseurl }}/learn/consensus/proof-of-stake/) some coins. In the next
[tutorial]({{ site.baseurl }}/user-guides/send-transactions-gui/#sending-bond-transaction),
we will explain how to send a Bond transaction to become a validator.

---

By running a Pactus node, you contribute to the decentralization and security of the Pactus blockchain network.
Thank you for your participation!

---
version: 3
---

## 序言

Pactus 可以在不同的模式下运行，包括命令行界面 (CLI) 和图形用户界面 (GUI)。
本教程将指导您完成在 GUI 模式下运行 Pactus，适合初学者到高级用户。

## 符合条件

在继续执行以下步骤之前，请确保您具备以下条件：

- 运行 Windows、macOS 或 Linux 的计算机。
- 互联网连接。

## 下载

从以下链接下载 Pactus GUI 安装程序。
[下链]({{ site.baseurl }}/download/#gui).

### 代码证书警告

Windows 和 macOS 用户可能会遇到一条警告消息，指出 Pactus 是不受信任的应用程序。
这是因为 Pactus 没有[代码签名证书](https://en.wikipedia.org/wiki/Code_signing)。

![Code certificate issue]({{ site.url }}/user-guides/run-pactus-gui/code_certificate_warning.png)

代码证书是验证软件发行者的身份和真实性的数字签名。然而，获得代码证书的过程复杂且昂贵，需要注册公司并
通过认识你的客户(KYC)检查。

由于 Pactus 是一个开源且基于社区的应用程序，所以我们还没有代码证书。
因此，您可以安全地忽略警告消息并继续安装 Pactus。

## 安装

要安装 Pactus GUI，只需按照安装程序提供的说明步骤进行操作即可。该过程非常简单，与在计算机上安装任何其他应用程序类似。

![Installing Pactus]({{ site.url }}/user-guides/run-pactus-gui/installing.png)

## 初始化

当您第一次运行Pactus时，将出现一个向导界面，指导您完成钱包创建和初始化过程。这个过程由几个步骤组成：

### 初始化模式

在第一页上，您会被询问您要如何创建钱包。选择“开始创建新钱包” 选项，然后进入下一页。

![Initialize mode]({{ site.url }}/user-guides/run-pactus-gui/initialize_mode.png)

### 钱包助记词

下一页将显示您的钱包助记词，由12个单词组成。安全备份此助记词至关重要，因为钱包恢复需要它以防您的计算机丢失、损坏或被盗。

![Wallet seed]({{ site.url }}/user-guides/run-pactus-gui/wallet_seed.png)

**警告：** 确保您的钱包助记词的私密性和安全性。
如果其他人获得了您的助记词，他们就可以控制您的钱包和资金。

### 助记词确认

在此步骤中，系统将要求您确认助记词。
将您在上一步中收到的12个单词输入到对话框中。
如果助记词输入正确，您将能够进入下一页。

![Seed confirmation]({{ site.url }}/user-guides/run-pactus-gui/seed_confirmation.png)

### 钱包密码

在此页面上，您将被要求为您的钱包设置密码。
在第一个对话框中输入强密码，并在第二个对话框中再输入同样密码确认。
该密码将用于加密您的钱包并防止未经授权的访问。

![Set wallet password]({{ site.url }}/user-guides/run-pactus-gui/wallet_password.png)

注意：选择一个强密码并妥善保管。
如果您忘记或丢失密码，您将需要助记词才能重新访问您的钱包。

### 验证者数量

Pactus 区块链中的每个节点最多可以运行32个验证器，每个验证器最多可以质押1000代币。在这里，您可以定义要为节点创建多少个验证器。
根据您想要质押的代币数量选择验证器的数量。

![Number of validators]({{ site.url }}/user-guides/run-pactus-gui/number_of_validators.png)

如果你想质押超过32,000个代币，你需要建立一个新节点。

### 节点信息

初始化过程的最后一页显示节点信息，例如工作目录、验证器地址、
以及奖励地址。查看此信息并单击“关闭”以完成初始化过程。

![Node information]({{ site.url }}/user-guides/run-pactus-gui/node_information.png)

关闭向导界面后，您的 Pactus 节点将开始运行。您现在已准备好在GUI模式下使用 Pactus。

## 运行 Pactus 节点

完成初始化过程后，您就可以运行 Pactus 节点了。运行 Pactus 节点允许您与网络同步，使您能够查看和管理您的钱包和
发送交易。

### 网络同步

当 Pactus 节点开始运行时，它开始与网络同步。这个过程可能需要一些时间，
因为您的节点需要下载并验证整个区块链历史记录。
您的节点同步时请耐心等待。

![Syncing progress]({{ site.url }}/user-guides/run-pactus-gui/syncing_progress.png)

### 默认钱包

您可以检查“默认钱包”选项来访问您的钱包信息。请注意，显示的信息在同步完成之前可能不准确。

![Default Wallet tab]({{ site.url }}/user-guides/run-pactus-gui/default_wallet.png)

在“默认钱包”选项中，您可以查看您的帐户详细信息，包括您的余额和
地址信息，例如**验证器和奖励地址**。
当您的计算机充当节点，您的验证器地址是被用来网络识别。
奖励地址是您领取参与共识算法、提出新区块后所获得的奖励
[奖励]({{ site.baseurl }}/learn/blockchain/incentive/) 的账户地址。

成为验证者并参与共识算法要获得奖励，你首先需要
[质押]({{ site.baseurl }}/learn/consensus/proof-of-stake/) 一些代币. 下一个
[教程]({{ site.baseurl }}/user-guides/send-transactions-gui/),
我们将教导如何发送契约交易以成为验证者。

---

通过运行 Pactus 节点，您可以为 Pactus 区块链网络的去中心化和安全性做出贡献。
感谢您的参与！

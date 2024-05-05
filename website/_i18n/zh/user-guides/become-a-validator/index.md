---
version: 1
---

## Preface

Welcome to the exciting world of the Pactus blockchain, where decentralization and security
are paramount. As the backbone of blockchain technology, validators play a crucial role in
maintaining the integrity and efficiency of the network. Becoming a validator on the Pactus
blockchain not only contributes to the robustness of the ecosystem but also offers the opportunity
to engage deeply with cutting-edge technology and potentially earn rewards for participating in
the network's governance and consensus mechanisms.

This guide is designed for individuals and organizations interested in becoming validators
 We will walk you through each step of the process, from understanding the basic requirements
 to setting up your validator node. Whether you are a seasoned blockchain enthusiast or new to
 the field, this article will provide you with the necessary insights and tools to embark on your
 journey as a Pactus validator. Join us in securing the network and shaping the future of decentralized technology.

- [Step 1: How to become a validator?](#step-1-how-to-become-a-validator)
   - [How to initialize Pactus GUI node?](#how-to-initilize-pactus-gui-node)
   - [How to initialize Pactus CLI node?](#how-to-initilize-pactus-cli-node)
   - [Use the latest offline data for fast synchronization to the latest blocks in the chain](#use-the-latest-offline-data-for-fast-synchronization-to-the-latest-blocks-in-the-chain)
- [Step 2: Subscribe to the Pactus Newsletter for Important Updates](#step-2-subscribe-to-the-pactus-newsletter-for-important-updates)
- [Step 3: Purchase Coins for Staking on Your Validators](#step-3-purchase-coins-for-staking-on-your-validators)
- [Step 4: Join the Pactus Blockchain Community on Social Networks](#step-4-join-the-pactus-blockchain-community-on-social-networks)
- [Step 5: Expand Your Knowledge with Pactus Tutorials](#step-5-expand-your-knowledge-with-pactus-tutorials)

## Step 1: How to become a validator?

First need to download and install [Pactus GUI
or CLI]( {{ site.baseurl }}/download/ ){:target="\_blank"} for initlize your node

### How to initilize Pactus GUI node?

- Please download the appropriate Pactus GUI for your operating system and specific
  architecture by visiting the [download page]( {{ site.baseurl }}/download/#gui ){:target="\_blank"}.

- Extract the file named "pactus-gui*{latest_version}{os}{architecture}.tar.gz"
  or, if you're using Windows, run the installer
  named "pactus-gui*{latest_version}\_windows_amd64_installer.exe" in your user directory.

- Run file "pactus-gui" for initlize or run your node.

- If you run the node for the first time, you will see a wizard page to initialize your node.
  The first page is the 'Initialize Mode' where you can select to create or restore a wallet using a seed phrase.

![Initlize mode]({{ site.url }}/user-guides/become-a-validator/wizard-welcome.png)

- After selecting "Create new wallet from scratch" the next page will generate
  a new seed phrase. It is crucial to back up these seed words either by writing them down or storing them in a secure document.

  {% alert_start warning %}
  Do not share your seed words with other users, as they grant access to your wallet.
  Keeping your seed phrase private is essential for the security of your funds.
  {% alert_end %}

  ![Generated Seed words]({{ site.url }}/user-guides/become-a-validator/generated-seed.png)

- You will need to confirm your seed words by typing them into the input box provided.

![Confirm Seed words]({{ site.url }}/user-guides/become-a-validator/confirm-seed.png)

- You can set a password for wallet security. This password for any
  interactions with the wallet, such as creating transactions.

![Wallet Password]({{ site.url }}/user-guides/become-a-validator/wallet-password.png)

- You can select the number of validators on your node for staking.
  You can choose between 7 and 32 validators for each node.

![Number of validators]({{ site.url }}/user-guides/become-a-validator/number-of-validators.png)

- The wizard is finished, and your node is initialized. You can now view your node information.

{% alert_start info %}
Your node configuration is located at "{user home}/pactus".
{% alert_end %}

![Finished Wizard]({{ site.url }}/user-guides/become-a-validator/finish-wizard.png)

- Now that your node is initialized, you need to keep it running on your system to synchronize with the blockchain

![Node information]({{ site.url }}/user-guides/become-a-validator/node-info.png)

1. Working directory: The path to the Pactus node configuration directory.
2. Network: The current network your node is connected to (default is mainnet).
3. Network ID: A specific identifier for your node within the network.
4. Connections: The current inbound or outbound connections established by your node.
5. Moniker: Your node's name on the P2P network, which can be set or changed in the Pactus
  configuration file located at `{user home}/pactus/config.toml`.
6. Reachability: Your node's status within the network
7. Last block height: The height of the last block synced on your node.
8. Last block time: The timestamp of the last block synced on your node.
9. Number of blocks left: The remaining number of blocks to be synced by your node.
10. Sync Progress: A progress bar indicating the synchronization progress of blocks.
11. [Committee]( {{ site.baseurl }}/learn/consensus/committee/ ){:target="_blank"} size:
  The number of committee validators responsible for validating or proposing blocks.
12. In committee now: Indicates whether your node is currently part of the committee. If yes,
  please keep your node running to earn rewards by proposing blocks.

- On this page, you can view your validators and rewards addresses

![wallets]({{ site.url }}/user-guides/become-a-validator/wallets.png)

1. Address: Here you can view the validators and rewards addresses.
2. Label: This field allows you to set or change the address label.
3. Balance: Displays the balance of the account-type address.
4. Stake: Shows the total stake of the validator-type address.
5. Availability Score: Indicates the score of your validators. [Please check this for insights into your node's availability](https://medium.com/pactuschain/pactus-pip-19-explained-what-is-availability-score-9ac279c193a8).

### How to initilize Pactus CLI node?

- Please download the appropriate Pactus CLI for your operating system and specific
  architecture by visiting the [download page]( {{ site.baseurl }}/download/#cli ){:target="\_blank"}.

- Extract the file named "pactus-cli\_{latest_version}{os}{architecture}.tar.gz.

- Run file "pactus-daemon" with init command for initlization.

```shell

./pactus-daemon init

```

- Generate new seed words and press "y" for continue, It is crucial to back up these
  seed words either by writing them down or storing them in a secure document.

```shell

Your wallet seed is:
   hundred excuse lady weird impulse vendor please penalty wish rally blanket mansion

Write down this seed on a piece of paper to recover your validator key in the future.

Do you want to continue? [y/N] y

```

{% alert_start warning %}
Do not share your seed words with other users, as they grant access to your wallet.
Keeping your seed phrase private is essential for the security of your funds.
{% alert_end %}

- You can set a password for wallet security. This password for any interactions
  with the wallet, such as creating transactions.

```shell

Enter a password for wallet
Password: *******
Confirm password: *******

```

- You can select the number of validators on your node for staking. You can choose
  between 7 and 32 validators for each node.

```shell

How many validators do you want to create?
Each node can run up to 32 validators, and each validator can hold up to 1000 staked coins.
You can define validators based on the amount of coins you want to stake.
✔ Number of Validators: |7

```

- After select number of validators your inilized and you can start your node with command `./pactus-daemon start -w /home/{user}/pactus`,

```shell
Validator addresses:
1- pc1pg7nlscnf4dzk2kxr854828klvujx5cajnegpgx
2- pc1p5dfmq3vnukhh3xlwrctuph5g6x3eanljp7kpfh
3- pc1p9633ng3erlpy4f75p0ezkae8ssa7z99ysnt3p9
4- pc1ps330kzz30kqdr7u6c5zzes8nqh4k86arr6wjkd
5- pc1p26kg5822fd55h6w9vd9lu2unpty7jaucq35qgy
6- pc1pgkmjf6cd0f8qk5av6s6v52sv2u4crmk89h23cv
7- pc1pmzmcg035z3rkl4z8r66d9zsdgff3vzz5jlqprs

Reward addresses:
1- pc1z4tc9e7qsvxgzhv62pyeh4jjkvy2d6d92cgs6nz
2- pc1zp9nva62l6fsq4jqrj6fzajevgjy8q8pl56ut6v
3- pc1zw8qs0w74w6fv09h4dmr9znfgeprechcj95tdv4
4- pc1zpcl5w0pg3g3qjm250avk68yrqsnpxa38mkw77t
5- pc1zmtzqnlur2y4rlph6rjwc6zn0wvmf4st6aql2ll
6- pc1zmls9lsu332xxdz2e4kvmqlqx0fxq2x7yspnv4y
7- pc1z99k4vtmfcctx8nwdeuqktqdun5e56jy3au8a8z

Network: Mainnet

A pactus node is successfully initialized at /home/{user}/pactus

You can start the node by running this command:
./pactus-daemon start -w /home/{user}/pactus
```

### Use the latest offline data for fast synchronization to the latest blocks in the chain

1. Download the file `pactus-data-{date}.zip` from [https://data.pacviewer.com/pactus-data/](https://data.pacviewer.com/pactus-data/).
2. Verify the checksum hash file with `SHA256SUMS`.
3. Stop the running node before updating the data.
4. Extract the file `pactus-data-{date}.zip` and overwrite the "data" folder at the following locations:
   - For Linux and Mac: `/home/{user}/pactus/data`
   - For Windows: `C:\Users\{user}\pactus\data`
5. Restart the node.

## Step 2: Subscribe to the Pactus Newsletter for Important Updates

Stay informed and up-to-date with the latest developments in the Pactus ecosystem by
subscribing to the newsletter. Receive important news, updates, and announcements
directly to your email inbox. Don't miss out on crucial information that could impact
your involvement with Pactus blockchain. Sign up now to stay connected and informed.

{% alert_start warning %}
It's required to subscribe to "Pactus Update News" channel news.
{% alert_end %}

<form method="post" action="https://pacmail.org/subscription/form" class="listmonk-form">
  <div>
    <input type="hidden" name="nonce" />
    <p>
      <input type="email" name="email" required placeholder="E-mail" />
      <input type="submit" value="Subscribe" />
    </p>
    <p></p>
    <div class="short">
      Please add
      <b>"noreply@pacmail.org"</b>
      to your email service's
      <a href="https://blog.hubspot.com/marketing/email-whitelist" rel="nofollow noreferrer" target="_blank">
        whitelist
      </a>
      <br />
      to ensure you receive our emails in your inbox.
    </div>

    <div class="captcha">
      <div class="h-captcha" data-sitekey="898156d4-1b49-4bb4-a3d9-f4c2214b9908"></div>
      <script src="https://js.hcaptcha.com/1/api.js" async defer></script>
    </div>

    <p>
      <input id="90cc6" type="checkbox" name="l" checked value="90cc6b4e-c631-45f3-b1d5-c5027b379c7e" />
      <label for="90cc6">Pactus Announcements</label>
    </p>
    <p>
      <input id="647b6" type="checkbox" name="l" checked value="647b6294-eced-4887-9298-3ae6f79f12a6" />
      <label for="647b6">Pactus Update News</label>
    </p>
  </div>
</form>

## Step 3: Purchase Coins for Staking on Your Validators

Prepare to participate in the Pactus blockchain as a validator by acquiring the necessary coins for staking.
Staking is essential for securing the network and participating in consensus. By purchasing coins,
you'll have the resources needed to stake on your validators, contributing to the network's security
and earning rewards in return. Take this step to actively engage with the Pactus blockchain and
play a vital role in its ecosystem.

<a class="btn btn-fixed btn-secondary" href="https://xeggex.com/asset/PACTUS" rel="nofollow  noreferrer"
target="_blank" role="button">Purchase coins</a>

## Step 4: Join the Pactus Blockchain Community on Social Networks

<ul class="list-unstyled community">
  <li>
    <a href="https://discord.gg/H5vZkNnXCu">
      <img alt="Discord" src="{{ site.url }}/assets/images/social-discord.svg" width="32">
      {% t dict.community.discord %}
    </a>
  </li>
  <li>
    <a href="https://x.com/pactuschain/">
      <img alt="Discord" src="{{ site.url }}/assets/images/social-twitter.svg" width="32">
      {% t dict.community.twitter %}
    </a>
  </li>
  <li>
    <a href="https://t.me/pactusblockchain">
      <img alt="Discord" src="{{ site.url }}/assets/images/social-telegram.svg" width="32">
      {% t dict.community.telegram %}
    </a>
  </li>
  <li>
    <a href="https://linkedin.com/company/pactus-blockchain">
      <img alt="Discord" src="{{ site.url }}/assets/images/social-linkedin.svg" width="32">
      {% t dict.community.linkedin %}
    </a>
  </li>
  <li>
    <a href="https://bitcointalk.org/index.php?topic=5480867.0">
      <img alt="Discord" src="{{ site.url }}/assets/images/social-bitcoin-talk.svg" width="32">
      {% t dict.community.bitcoin_talk %}
    </a>
  </li>
</ul>

{% t dict.community.community_ran %}

<ul class="list-unstyled community_ran">
  <li>
    <a href="https://t.me/pactuschat">
      <img alt="Discord" src="{{ site.url }}/assets/images/social-telegram.svg" width="32">
      {% t dict.community.telegram_chat %}
    </a>
  </li>
  <li>
    <a href="https://twitter.com/PactusNaija">
      <img alt="Discord" src="{{ site.url }}/assets/images/social-twitter.svg" width="32">
      {% t dict.community.nigeria %}
    </a>
  </li>
  <li>
    <a href="https://www.facebook.com/PactusChain">
      <img alt="Facebook" src="{{ site.url }}/assets/images/social-facebook.svg" width="32">
      {% t dict.community.facebook %}
    </a>
  </li>
  <li>
    <a href="https://t.me/nodesync_top">
      <img alt="Discord" src="{{ site.url }}/assets/images/social-telegram.svg" width="32">
      {% t dict.community.nodesync %}
    </a>
  </li>
  <li>
    <a href="https://discord.gg/H5vZkNnXCu">
      <img alt="Wechat" src="{{ site.url }}/assets/images/social-wechat.svg" width="32">
      {% t dict.community.wechat %}
    </a>
  </li>
</ul>

## Step 5: Expand Your Knowledge with Pactus Tutorials

- [Learn]( {{ site.baseurl }}/learn ){:target="\_blank"}
- [What is Pactus?]( {{ site.baseurl }}/about/what-is-pactus/ ){:target="\_blank"}
- [Roadmap]( {{ site.baseurl }}/about/roadmap/ ){:target="\_blank"}
- [FAQs]( {{ site.baseurl }}/about/faq/ ){:target="\_blank"}

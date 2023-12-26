---
version: 5
---

## Preface

Pactus can be run in different modes, including the command-line interface (CLI) and the graphical user interface (GUI).
This tutorial will guide you through the steps to run Pactus in CLI mode, suitable for advanced users.

## Prerequisites

Before proceeding with the steps below, ensure that you have the following:

- A computer running Windows, macOS, or Linux
- Suitable internet connection

## Download

To get started, download and extract the Pactus CLI file from
[here]({{ site.baseurl }}/download/#cli).
Once you have downloaded and extracted the Pactus CLI file, you can proceed to the next step.

---

## Initializing the Node

Now you need to create a wallet and setup a working directory for your node.
A working directory is a place where you save blockchain data and wallets.
Open the Terminal and run the following command:

{% tabs init-cli ltr %}

{% tab init-cli linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```bash
./pactus-daemon init
```

This command creates your wallet and setup the working working directory at `~/pactus`.

{% endtab %}

{% tab init-cli windows <i class="fa-brands fa-windows"></i> Windows %}

```powershell
pactus-daemon.exe init
```

This command creates your wallet and setup the working working directory at `C:\Users\<USER_NAME>\pactus`.

{% endtab %}

{% endtabs %}

{% alert_start info %}
  <b>Working director</b>
  <br><br>
  By default the working directory that store the blockchain data is set to `~/pactus` in Unix-like systems.
  For Windows it is set to `C:\Users\<USER_NAME>\pactus`.
  <br><br>
  If you wish to select or specify a different path, use the `--working-dir` option.
{% alert_end %}

{% alert_start warning %}
  {% t dict.guide.wallet_seed_important %}
{% alert_end %}

The working directory contains:

- Default wallet
- Genesis file
- Config file

Feel free to explore the contents of these files as needed, particularly the config file.
The config file contains parameters that can customize your node.

### Restoring the Node

If you ever need to restore your node, for instance on a new device,
you can use the `--restore` option followed by your mnemonic:

{% tabs init-cli-restore ltr %}

{% tab init-cli-restore linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```bash
./pactus-daemon init --restore "<your-mnemonic>"
```

Replace `<your-mnemonic>` with your previously noted mnemonic phrase.
This command will restore your wallet in the `~/pactus` directory.

{% endtab %}

{% tab init-cli-restore windows <i class="fa-brands fa-windows"></i> Windows %}

```powershell
pactus-daemon.exe init --restore "<your-mnemonic>"
```

Replace `<your-mnemonic>` with your previously noted mnemonic phrase.
This command will restore your wallet in the `C:\Users\<USER_NAME>\pactus` directory.

{% endtab %}

{% endtabs %}

---

## Running the Node

Now you can start the node and sync with the network. Run the following command in the Terminal:

{% tabs start-cli ltr %}

{% tab start-cli linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```bash
./pactus-daemon start
```

{% endtab %}

{% tab start-cli windows <i class="fa-brands fa-windows"></i> Windows %}

```powershell
pactus-daemon.exe start
```

{% endtab %}

{% endtabs %}

When the Pactus node starts running, it begins syncing with the network.
This process may take some time, as your node needs to download and verify the entire blockchain history.
Please be patient while your node syncs.

### {% t dict.guide.default_ports %}

{% t dict.guide.default_ports_explained %}

---

## Running Pactus in the Background

To run Pactus commands in the background and keep them running even after you close your terminal or
log out, you can use terminal multiplexer software.
Terminal multiplexers allow you to create and manage multiple terminal sessions within a single window.

Two popular terminal multiplexer options are:

1. **tmux**: [Tmux](https://github.com/tmux/tmux/wiki) is a terminal multiplexer that
2. lets you create, manage, and detach terminal sessions.
3. You can install tmux on Unix-like systems using your package manager (e.g., `apt`, `brew`, `yum`).

   Here's how to use tmux to run Pactus in the background:

   - Start a new tmux session: `tmux`
   - Run your Pactus command within the tmux session.
   - Detach from the tmux session: Press `Ctrl-b`, followed by `d`.
   - Reattach to the tmux session later to check the progress: `tmux attach-session`

4. **screen**: [GNU Screen](https://www.gnu.org/software/screen/) is another terminal multiplexer that
5. allows you to run terminal sessions in the background.

   Here's how to use screen to run Pactus in the background:

   - Start a new screen session: `screen`
   - Run your Pactus command within the screen session.
   - Detach from the screen session: Press `Ctrl-a`, followed by `d`.
   - Reattach to the screen session later to check the progress: `screen -r`

Choose the terminal multiplexer that suits your preference and install it using your system's package manager.
With these tools, you can run Pactus commands in the background with ease.

---

## Become validator

To become a validator and participate in the
consensus algorithm to earn rewards, you first need to
[stake]({{ site.baseurl }}/learn/consensus/proof-of-stake/) some coins. In the next
[tutorial]({{ site.baseurl }}/user-guides/use-wallet-cli/),
we will explain how to send a Bond transaction to become a validator.

---

By running a Pactus node, you contribute to the decentralization and security of the Pactus blockchain network.
Thank you for your participation!

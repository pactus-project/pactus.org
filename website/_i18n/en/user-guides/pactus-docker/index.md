---
version: 5
---

## Preface

Docker is a tool that simplifies the process of creating, deploying, and running applications using containers.
With containers, developers can bundle all the necessary parts of an application, including libraries and dependencies,
and deploy them as a single package.

In this document, we will guide you on how to run Pactus using Docker, step by step.

## Prerequisites

Before running Pactus with Docker, ensure that you have a clear understanding of
how `pactus-daemon` and `pactus-wallet` works.
Then you need to [install docker](https://docs.docker.com/get-docker/) in your system.
If you are using Windows please make sure you have installed WSL.

## Docker Images

The Pactus docker images are available at [Docker Hub](https://hub.docker.com/r/pactus/pactus).
You can pull the latest image with this command:

```text
docker pull pactus/pactus
```

---

## Initializing the Node

Now you need to create a wallet and setup a working directory for your node.
A working directory is a place where you save blockchain data and wallets.
Open the Terminal and run the following command:

{% tabs init-docker ltr %}

{% tab init-docker linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```bash
docker run -it --rm -v ~/pactus:/root/pactus pactus/pactus pactus-daemon init
```

This command creates your wallet and setup the working working directory at `~/pactus`.

{% endtab %}

{% tab init-docker windows <i class="fa-brands fa-windows"></i> Windows %}

```powershell
docker run -it --rm -v %USERPROFILE%\pactus:/root/pactus pactus/pactus pactus-daemon init
```

This command creates your wallet and setup the working working directory at `C:\Users\<USER_NAME>\pactus`.

{% endtab %}

{% endtabs %}

Here's an explanation of the Docker flags:

- `-it`: Makes the Docker container interactive for command-line interaction.
- `--rm`: Cleans up the temporary environment automatically when you're done.
- `-v <local_dir>:<container_dir>`: Allows to choose where to store the Pactus data.

{% alert_start warning %}
{% t dict.guide.wallet_seed_important %}
{% alert_end %}

---

## Running the Node

Now you can start the node and sync with the network. Run the following command in the Terminal:

{% tabs start-docker ltr %}

{% tab start-docker linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```bash
docker run -it -d -v ~/pactus:/root/pactus -p 21888:21888 -p 21888:21888/udp -p 50051:50051 -p 8080:8080 --name pactus pactus/pactus pactus-daemon start --password <WALLET_PASSWORD>
```

{% endtab %}

{% tab start-docker windows <i class="fa-brands fa-windows"></i> Windows %}

```powershell
docker run -it -d -v %USERPROFILE%\pactus:/root/pactus -p 21888:21888 -p 21888:21888/udp -p 50051:50051 -p 8080:8080 --name pactus pactus/pactus pactus-daemon start  --password {WALLET_PASSWORD}
```

{% endtab %}

{% endtabs %}

This command creates and runs a Docker container named "pactus".
Here's an explanation of the Docker flags:

- `-p <host_port>:<container_port>`: Maps a port from your host machine to a port in the Docker container.
- `-d`: Starts the container in detached mode. The container runs in the background.
- `--name <NAME>`: Allows you to assign a custom name to a container.

### {% t dict.guide.default_ports %}

{% t dict.guide.default_ports_explained %}

### Essential Commands

You can manage the Pactus Docker container with these essential commands:

**Stop the container:**

```bash
docker stop pactus
```

This command gracefully stops the "pactus" container.

**Start the container:**

```bash
docker start pactus
```

This command starts the Pactus Docker container.

**View Container Logs:**

To check the logs:

```bash
docker logs pactus --tail 1000 -f
```

Here's an explanation of the Docker flags:

- `--tail 1000`: Displays the last 1000 lines of logs.
- `-f`: Shows the log output in real-time.

**Remove Docker container:**

If you want to upgrade the node, you should first remove the current container:

```bash
docker rm pactus
```

After removing the Pactus Docker container, you can create and run a new version, as explained above.

### Enabling IPv6

By default, Docker only supports IPv4. IPv6 is only supported on Linux systems.
Enabling IPv6 can help you improve connectivity and security.
To enable IPv6 for Docker, follow the official documentation [here](https://docs.docker.com/config/daemon/ipv6/).

---

## Managing Wallet Using Docker

You can use Pactus Docker to manage the wallet.
For example, you can check the balance of your wallet as shown below:

{% tabs wallet-docker ltr %}

{% tab wallet-docker linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```bash
docker run -it --rm -v ~/pactus:/root/pactus pactus/pactus pactus-wallet address all --balance --stake

```

{% endtab %}

{% tab wallet-docker windows <i class="fa-brands fa-windows"></i> Windows %}

```powershell
docker run -it --rm -v %USERPROFILE%\pactus:/root/pactus pactus-wallet address all --balance --stake
```

{% endtab %}

{% endtabs %}

You can check [{% t dict.guide.use_wallet_cli %}](https://docs.pactus.org/docs/tutorials/pactus-wallet)
for additional commands to manage your wallet.

---

{% t dict.guide.by_running_pactus %}

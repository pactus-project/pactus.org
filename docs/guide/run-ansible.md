---
id: run-ansible
title: Deploy using Ansible
---

# Deploy using Ansible

In this tutorial you will learn how to deploy Zarb into your Virtual Private Server (VPS) without
compiling Zarb and using docker.

## 🎮 What is Ansible?

::: quote

Ansible is all about automation, it requires instructions to accomplish each job. With everything
written down in simple script form, it's easy to do version control.

In Ansible, there are two computers: the **control node** and **managed nodes**. The control node is
your computer that runs Ansible. A managed node is any device being managed by the control node.

::: right

From [OpenSource.com](https://opensource.com/resources/what-ansible)

:::

![Deploy Zarb using ansible](../assets/images/zarb-ansible.png)

## Why ansible?

Deploying Zarb is not a one time task. You may update the node time to time or change the
configuration or even restart the node. Ansible helps you to automate the deployment process.

## Step by Step

Make sure you have installed
[Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html) and
[Docker](https://docs.docker.com/get-docker/) in your local machine and you have access to your
server through ssh.

Also if you have installed firewall in your server machine, make sure these port are open:

- 8421 -> for p2p network
- 8080 -> gRPC gateway
- 9090 -> gRPC

First you need to clone this repository:

```
git clone https://github.com/b00f/zarb-deploy-ansible
cd zarb-deploy-ansible
```

Open `inventory.yml` and update `ansible_host` with your server remote ip address. something like:
`root@11.22.33.44`.

Run `ansible all -m gather_facts` to make sure ansible works fine.

Now, you need to generate two keys in your local machine. One for the validator and another for
collecting the rewards.

:::: tabs type:border-card

::: tab 🪟 Window

```
docker run -i --rm -v c:\zarb\:/zarb zarb/zarb key generate -p /zarb/keystore/validator_key.json
docker run -i --rm -v c:\zarb\:/zarb zarb/zarb key generate -p /zarb/keystore/mintbase_key.json
```

This command will generate new keys and save them at: `c:\zarb\keystore\`

:::

::: tab 🐧 Linux and 🍏 Mac

```
docker run -i --rm -v ~/zarb/:/zarb zarb/zarb key generate -p /zarb/keystore/validator_key.json
docker run -i --rm -v ~/zarb/:/zarb zarb/zarb key generate -p /zarb/keystore/mintbase_key.json
```

This command will generate new keys and save them at: `~/zarb/keystore/`

:::

::::

::: warning

Make sure you write down the Mnemonics of your keys. You can recover your keys from Mnemonics, if
you lose them.

You should know that you are responsible for the safety of your key.

:::

To store and send validator private key to server, we use
[Ansible vault](https://docs.ansible.com/ansible/latest/user_guide/vault.html). Ansible Vault
encrypts variables so you can protect sensitive content such as secret keys.

Before creating Ansible Vault, you need to know the private key for the validator. Using
`zarb inspect` command you can see the private key.

:::: tabs type:border-card

::: tab 🪟 Window

```
docker run -i --rm -v c:\zarb\:/zarb zarb/zarb key inspect -e /zarb/keystore/validator_key.json
```

:::

::: tab 🐧 Linux and 🍏 Mac

```
docker run -i --rm -v ~/zarb/:/zarb zarb/zarb key inspect -e /zarb/keystore/validator_key.json
```

:::

::::

Copy the private key. You will need to paste in inside Ansible Vault in the next step.

Now let's create a vault and add the validator private key inside the vault.

```
ansible-vault create --vault-id vault@prompt tasks/vault.yml
```

Set a strong password for the Vault.

It opens up an editor. Once you're inside, treat this like a normal variable file: add ---, then a
new variable:

```
---
vault_validator_key: <validator_private_key>
```

::: tip

The colon must be followed by a space.

:::

Ansible will encrypt the key and save inside `task/vault.yml`. You can open the `task/vault.yml` and
see the content. It should be encrypted.

One more step, open the config file and update `MintbaseAddress`. This can be different from the
validator address. You can also change other configs like `Moniker`, etc.

::: tip

Address in Zarb starts with `zrb1...`

:::

## Installing Ansible plugins

Before deploying Zarb, you have to install two plugins for Ansible.

First install the `geerlingguy.docker` plugin. This plugin will install docker for the server
machine.

```
ansible-galaxy install geerlingguy.docker
```

And then install the `geerlingguy.ntp` plugin. This plugin will synchronizing your server Time using
Network Time Protocol (NTP)).

```
ansible-galaxy install geerlingguy.ntp
```

## Deploy Zarb

Now you can deploy Zarb by running deploy playbook:

```
ansible-playbook --ask-become-pass --vault-id tasks/vault@prompt tasks/deploy.yml

```

Now you can check "http://<ip_address>:8080" to see if your node works fine and it's syncing with the
main network.

## Update Zarb

If you change the configuration or if you want to update the node version, run the deploy playbook
again. This will restart the node and update the docker image.

Welcome to Zarb network 🤝🏼

---
id: run-ansible
title: Deploy using Ansible
---

# Deploy using Ansible

In this tutorial you will learn how to deploy Zarb into your private server without compiling Zarb
and using docker files.

## 🎮 What is Ansible?

::: quote

Ansible is all about automation, it requires instructions to accomplish each job. With everything
written down in simple script form, it's easy to do version control.

In Ansible, there are two computers: the **control node** and **managed nodes**. The control node is
your computer that runs Ansible. A managed node is any device being managed by the control node.

::: right

From [OpenSource.com](https://opensource.com/resources/what-ansible)

:::

## Why ansible?

![Deploy Zarb using ansible](../assets/images/zarb-ansible.png)

TODO:

## Step by Step

Make sure you have installed
[Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html) in
your local machine and you have access to your server through ssh.

If you have installed firewall in your virtual server machine (VPS), make sure these port are open:

- 8421 -> for p2p network
- 8080 -> gRPC gateway
- 9090 -> gRPC

First you need to clone this repository:

```
git clone https://github.com/b00f/zarb-deploy-ansible
cd zarb-deploy-ansible
```

Open `inventory.yml` and update `ansible_host` with your server remote ip address. something like:
`root@11.22.33.44`

Run `ansible all -m gather_facts` to make sure ansible works fine.

Now, you need to generate two keys in your local machine. One for validator and another for
collecting the rewards.

:::: tabs type:border-card

::: tab Window

```
docker run -i --rm -v c:\zarb\:/zarb zarb key generate -p /zarb/keystore/validator_key.json
docker run -i --rm -v c:\zarb\:/zarb zarb key generate -p /zarb/keystore/mintbase_key.json
```

This command will generate new keys and save them at: `c:\zarb\keystore\`

:::

::: tab Linux and Mac

```
docker run -i --rm -v ~/zarb/:/zarb zarb key generate -p /zarb/keystore/validator_key.json
docker run -i --rm -v ~/zarb/:/zarb zarb key generate -p /zarb/keystore/mintbase_key.json
```

This command will generate new keys and save them at: `~/zarb/keystore/`

:::

::::

To store and send validator's private key to server, we use
[Ansible vault](https://docs.ansible.com/ansible/latest/user_guide/vault.html). Ansible Vault
encrypts variables so you can protect sensitive content such as secret keys.

Before creating Ansible Vault, we need to know validator's private key. Using `zarb inspect` command
we can have see the private key:

:::: tabs type:border-card

::: tab Window

```
docker run -i --rm -v c:\zarb\:/zarb zarb key inspect -e /zarb/keystore/validator_key.json
```

:::

::: tab Linux and Mac

```
docker run -i --rm -v ~/zarb/:/zarb zarb key inspect -e /zarb/keystore/validator_key.json
```

:::

::::

Let's create a vault and add validator private key inside the vault. You can use inspect command to
copy the private key.

```
ansible-vault create --vault-id vault@prompt tasks/vault.yml
```

Set a strong password for vault.

It opens up an editor. Once you're inside, treat this like a normal variable file: add ---, then a
new variable:

```
---
vault_validator_key: <validator_private_key>
```

Note: Space after ":" is important.

Ansible will encrypt the key and save inside `task/vault.yml`

You can open the `task/vault.yml` and see the content. It's encrypted.

One more step, open the config file and update `MintbaseAddress`. This can be different than
validator address. Tou can also change other configs like `Moniker`, etc.

## Deploy Zarb

Now we are ready to deploy the Zarb.

First install the `geerlingguy.docker` plugin. This plugin will install docker in server machine.

```
ansible-galaxy install geerlingguy.docker
```

Now you can deploy Zarb by running deploy playbook:

```
ansible-playbook --vault-id tasks/vault@prompt tasks/deploy.yml

```

Now you can check "http://<ip_address>:8080 to see if your node works fine and it's syncing with the main network.

Welcome to Zarb network 😍
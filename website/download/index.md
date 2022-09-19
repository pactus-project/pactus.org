---
layout: base
title: dict.download
permalink: /download/index.html
---

# {% t dict.download_pactus %}

{% t dict.download_on_this_page_v1 %}

## 🏗️ {% t dict.download_compile_from_source_code %}

{% t dict.download_project_pactus_is_distributed_v1 %}

{% t dict.download_instructions_for_compiling_v1 %}

## ⬇️ {% t dict.download_stable_releases %}

{% t dict.download_stable_releases_desc_v1 %}

### {% t dict.pactus_gui %}

{% t dict.download_you_can_run_gui_v1 %}

![Pactus GUI - Main Window](/assets/images/pactus_gui_main_window.png)

| **File name**                                                                                                                                                  | **Kind**  | **OS**  | **Arch** |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- | -------- |
| [pactus-gui_0.9.0_darwin_amd64.dmg](https://github.com/pactus-project/pactus/releases/download/v0.9.0/pactus-gui_0.9.0_darwin_amd64.dmg)                       | DMG       | macOS   | 64-bit   |
| [pactus-gui_0.9.0_darwin_amd64.tar.gz](https://github.com/pactus-project/pactus/releases/download/v0.9.0/pactus-gui_0.9.0_darwin_amd64.tar.gz)                 | Archive   | macOS   | 64-bit   |
| [pactus-gui_0.9.0_linux_amd64.tar.gz](https://github.com/pactus-project/pactus/releases/download/v0.9.0/pactus-gui_0.9.0_linux_amd64.tar.gz)                   | Archive   | Linux   | 64-bit   |
| [pactus-gui_0.9.0_windows_amd64.zip](https://github.com/pactus-project/pactus/releases/download/v0.9.0/pactus-gui_0.9.0_windows_amd64.zip)                     | Archive   | Windows | 64-bit   |
| [pactus-gui_0.9.0_windows_amd64_installer.exe](https://github.com/pactus-project/pactus/releases/download/v0.9.0/pactus-gui_0.9.0_windows_amd64_installer.exe) | Installer | Windows | 64-bit   |

#### Antivirus

Be aware that the precompiled binaries are not shipped with any
[code signing](https://en.wikipedia.org/wiki/Code_signing) certificate. Most probability in Windows
and MacOS the downloaded binaries are detected as harmful or malware software.

#### Running the node

If you are running Pactus for the first time, there is an assistant page that help you to initialize
your node. After initializing the working directory, you can run the node and start syncing with the testnet.

### {% t dict.pactus_cli %}

Advanced user can run Pactus in Command Line Interface (CLI) mode.

![Pactus GUI - Main Window](/assets/images/pactus_cli.png)

| **File name**                                                                                                                                     | **OS**  | **Arch** |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------- |
| [pactus-cli_0.9.0_android_arm64.tar.gz ](https://github.com/pactus-project/pactus/releases/download/v0.9.0/pactus-cli_0.9.0_android_arm64.tar.gz) | Android | ARM64    |
| [pactus-cli_0.9.0_darwin_amd64.tar.gz ](https://github.com/pactus-project/pactus/releases/download/v0.9.0/pactus-cli_0.9.0_darwin_amd64.tar.gz)   | macOS   | 6d-bit   |
| [pactus-cli_0.9.0_darwin_arm64.tar.gz ](https://github.com/pactus-project/pactus/releases/download/v0.9.0/pactus-cli_0.9.0_darwin_arm64.tar.gz)   | macOS   | ARM64    |
| [pactus-cli_0.9.0_freebsd_amd64.tar.gz ](https://github.com/pactus-project/pactus/releases/download/v0.9.0/pactus-cli_0.9.0_freebsd_amd64.tar.gz) | FreeBSD | 6d-bit   |
| [pactus-cli_0.9.0_freebsd_arm.tar.gz ](https://github.com/pactus-project/pactus/releases/download/v0.9.0/pactus-cli_0.9.0_freebsd_arm.tar.gz)     | FreeBSD | ARM      |
| [pactus-cli_0.9.0_linux_amd64.tar.gz ](https://github.com/pactus-project/pactus/releases/download/v0.9.0/pactus-cli_0.9.0_linux_amd64.tar.gz)     | Linux   | 6d-bit   |
| [pactus-cli_0.9.0_linux_arm64.tar.gz ](https://github.com/pactus-project/pactus/releases/download/v0.9.0/pactus-cli_0.9.0_linux_arm64.tar.gz)     | Linux   | ARM64    |
| [pactus-cli_0.9.0_windows_386.zip ](https://github.com/pactus-project/pactus/releases/download/v0.9.0/pactus-cli_0.9.0_windows_386.zip)           | Windows | 32-bit   |
| [pactus-cli_0.9.0_windows_amd64.zip ](https://github.com/pactus-project/pactus/releases/download/v0.9.0/pactus-cli_0.9.0_windows_amd64.zip)       | Windows | 6d-bit   |

#### Initializing the node

First you need to create a working directory for your validator. A working directory is a place
where you save blockchain data, config and key files.

{% tabs init %}

{% tab init Windows %}

```
./pactus-daemon.exe init -w c:\pactus --testnet
```

This command creates a working directory for the testnet at `c:\pactus`.

{% endtab %}

{% tab init Linux and Mac %}

```
./pactus-daemon init -w ~/pactus --testnet
```

This command creates a working working directory for the testnet at `~/pactus`.

{% endtab %}

{% endtabs %}

Working directory contains:

- Default wallet
- Genesis file
- Config file

Feel free to take a look at these files.

#### Running the node

Now you can start the node and sync with the testnet. This may take several hours:

{% tabs start %}

{% tab start Windows %}

```
./pactus-daemon.exe start -w c:\pactus
```

{% endtab %}

{%
 tab start Linux and Mac %}

```
./pactus-daemon start -w ~/pactus
```

{% endtab %}

{% endtabs %}

## 🐳 Docker container

Advanced user can get the Pactus docker image from [docker hub](https://hub.docker.com/r/pactus/pactus).

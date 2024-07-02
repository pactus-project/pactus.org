---
layout: base
title: dict.download.title
---

# {% t dict.download_pactus %}

{% t dict.download.welcome %}

---

<h2 id="build">🏗️ {% t dict.download.compile_from_source_code %}</h2>

{% t dict.download.project_pactus_is_distributed %}

{% t dict.download.instructions_for_compiling %}

---

<h2 id="binary">⬇️ {% t dict.download.stable_releases %}</h2>

{% t dict.download.stable_releases_desc %}

<h3 id="gui">{% t dict.download.pactus_gui %}</h3>

{% t dict.download.download_gui %}

![{% t dict.download.pactus_gui %}]({{ site.url }}/assets/images/pactus-gui-main-window.png)

| **File name**                                                                                                                                                                                                                   | **Kind**  | **OS**                                       | **Arch** |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------------------------------------------- | -------- |
| [pactus-gui_{{ site.latest_version }}_darwin_amd64.tar.gz](https://github.com/pactus-project/pactus/releases/download/v{{ site.latest_version }}/pactus-gui_{{ site.latest_version }}_darwin_amd64.tar.gz)                     | Archive   | <i class="fa-brands fa-apple"></i> macOS     | 64-bit   |
| [**pactus-gui_{{ site.latest_version }}_darwin_amd64.dmg**](https://github.com/pactus-project/pactus/releases/download/v{{ site.latest_version }}/pactus-gui_{{ site.latest_version }}_darwin_amd64.dmg)                       | DMG       | <i class="fa-brands fa-apple"></i> macOS     | 64-bit   |
| [pactus-gui_{{ site.latest_version }}_darwin_arm64.tar.gz](https://github.com/pactus-project/pactus/releases/download/v{{ site.latest_version }}/pactus-gui_{{ site.latest_version }}_darwin_arm64.tar.gz)                     | Archive   | <i class="fa-brands fa-apple"></i> macOS     | ARM64    |
| [**pactus-gui_{{ site.latest_version }}_darwin_arm64.dmg**](https://github.com/pactus-project/pactus/releases/download/v{{ site.latest_version }}/pactus-gui_{{ site.latest_version }}_darwin_arm64.dmg)                       | DMG       | <i class="fa-brands fa-apple"></i> macOS     | ARM64    |
| [pactus-gui_{{ site.latest_version }}_linux_amd64.tar.gz](https://github.com/pactus-project/pactus/releases/download/v{{ site.latest_version }}/pactus-gui_{{ site.latest_version }}_linux_amd64.tar.gz)                       | Archive   | <i class="fa-brands fa-linux"></i> Linux     | 64-bit   |
| [**pactus-gui_{{ site.latest_version }}_linux_amd64.AppImage**](https://github.com/pactus-project/pactus/releases/download/v{{ site.latest_version }}/pactus-gui_{{ site.latest_version }}_linux_amd64.AppImage)                       | AppImage   | <i class="fa-brands fa-linux"></i> Linux     | 64-bit   |
| [pactus-gui_{{ site.latest_version }}_windows_amd64.zip](https://github.com/pactus-project/pactus/releases/download/v{{ site.latest_version }}/pactus-gui_{{ site.latest_version }}_windows_amd64.zip)                         | Archive   | <i class="fa-brands fa-windows"></i> Windows | 64-bit   |
| [**pactus-gui_{{ site.latest_version }}_windows_amd64_installer.exe**](https://github.com/pactus-project/pactus/releases/download/v{{ site.latest_version }}/pactus-gui_{{ site.latest_version }}_windows_amd64_installer.exe) | Installer | <i class="fa-brands fa-windows"></i> Windows | 64-bit   |

{% alert_start warning %}
{% t dict.download.untrusted_app %}
{% alert_end %}

{% t dict.download.gui_after_download %} [{% t dict.guide.run_pactus_gui %}](https://docs.pactus.org/get-started/pactus-gui)

---

<h3 id="cli">{% t dict.download.pactus_cli %}</h3>

{% t dict.download.download_cli %}

![{% t dict.download.pactus_cli %}]({{ site.url }}/assets/images/pactus-cli.png)

| **File name**                                                                                                                                                                                                 | **OS**                                       | **Arch** |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| [pactus-cli_{{ site.latest_version }}_android_arm64.tar.gz](https://github.com/pactus-project/pactus/releases/download/v{{ site.latest_version }}/pactus-cli_{{ site.latest_version }}_android_arm64.tar.gz) | <i class="fa-brands fa-android"></i> Android | ARM64    |
| [pactus-cli_{{ site.latest_version }}_darwin_amd64.tar.gz](https://github.com/pactus-project/pactus/releases/download/v{{ site.latest_version }}/pactus-cli_{{ site.latest_version }}_darwin_amd64.tar.gz)   | <i class="fa-brands fa-apple"></i> macOS     | 64-bit   |
| [pactus-cli_{{ site.latest_version }}_darwin_arm64.tar.gz](https://github.com/pactus-project/pactus/releases/download/v{{ site.latest_version }}/pactus-cli_{{ site.latest_version }}_darwin_arm64.tar.gz)   | <i class="fa-brands fa-apple"></i> macOS     | ARM64    |
| [pactus-cli_{{ site.latest_version }}_freebsd_amd64.tar.gz](https://github.com/pactus-project/pactus/releases/download/v{{ site.latest_version }}/pactus-cli_{{ site.latest_version }}_freebsd_amd64.tar.gz) | <i class="fa-brands fa-freebsd"></i> FreeBSD | 64-bit   |
| [pactus-cli_{{ site.latest_version }}_freebsd_arm.tar.gz](https://github.com/pactus-project/pactus/releases/download/v{{ site.latest_version }}/pactus-cli_{{ site.latest_version }}_freebsd_arm.tar.gz)     | <i class="fa-brands fa-freebsd"></i> FreeBSD | ARM      |
| [pactus-cli_{{ site.latest_version }}_linux_amd64.tar.gz](https://github.com/pactus-project/pactus/releases/download/v{{ site.latest_version }}/pactus-cli_{{ site.latest_version }}_linux_amd64.tar.gz)     | <i class="fa-brands fa-linux"></i> Linux     | 64-bit   |
| [pactus-cli_{{ site.latest_version }}_linux_arm64.tar.gz](https://github.com/pactus-project/pactus/releases/download/v{{ site.latest_version }}/pactus-cli_{{ site.latest_version }}_linux_arm64.tar.gz)     | <i class="fa-brands fa-linux"></i> Linux     | ARM64    |
| [pactus-cli_{{ site.latest_version }}_windows_386.zip](https://github.com/pactus-project/pactus/releases/download/v{{ site.latest_version }}/pactus-cli_{{ site.latest_version }}_windows_386.zip)           | <i class="fa-brands fa-windows"></i> Windows | 32-bit   |
| [pactus-cli_{{ site.latest_version }}_windows_amd64.zip](https://github.com/pactus-project/pactus/releases/download/v{{ site.latest_version }}/pactus-cli_{{ site.latest_version }}_windows_amd64.zip)       | <i class="fa-brands fa-windows"></i> Windows | 64-bit   |

{% t dict.download.cli_after_download %} [{% t dict.guide.run_pactus_cli %}](https://docs.pactus.org/get-started/pactus-daemon)

<h3 id="downloader_script">{% t dict.download.downloader_script %}</h3>

{% t dict.download.downloader_script_explained %}

```sh
curl --proto '=https' --tlsv1.2 -sSL https://github.com/pactus-project/pactus/releases/download/v{{ site.latest_version }}/pactus_downloader.sh | sh
```

---

<h2 id="docker">🐳 {% t dict.download.docker %}</h2>

{% t dict.download.docker_desc %}

{% t dict.download.docker_after_download %} [{% t dict.guide.run_pactus_docker %}](https://docs.pactus.org/get-started/pactus-docker)

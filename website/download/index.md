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

![{% t dict.download.pactus_gui %}]({{ site.url }}/assets/images/pactus_gui_main_window.png)

| **File name**                                                                                                                                                         | **Kind**      | **OS**      | **Arch** |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------- | -------- |
| [pactus-gui_0.18.4_darwin_amd64.tar.gz](https://github.com/pactus-project/pactus/releases/download/v0.18.4/pactus-gui_0.18.4_darwin_amd64.tar.gz)                     | Archive       | macOS       | 64-bit   |
| [**pactus-gui_0.18.4_darwin_amd64.dmg**](https://github.com/pactus-project/pactus/releases/download/v0.18.4/pactus-gui_0.18.4_darwin_amd64.dmg)                       | **DMG**       | **macOS**   | 64-bit   |
| [pactus-gui_0.18.4_linux_amd64.tar.gz](https://github.com/pactus-project/pactus/releases/download/v0.18.4/pactus-gui_0.18.4_linux_amd64.tar.gz)                       | Archive       | Linux       | 64-bit   |
| [pactus-gui_0.18.4_windows_amd64.zip](https://github.com/pactus-project/pactus/releases/download/v0.18.4/pactus-gui_0.18.4_windows_amd64.zip)                         | Archive       | Windows     | 64-bit   |
| [**pactus-gui_0.18.4_windows_amd64_installer.exe**](https://github.com/pactus-project/pactus/releases/download/v0.18.4/pactus-gui_0.18.4_windows_amd64_installer.exe) | **Installer** | **Windows** | 64-bit   |

{% alert_start warning %}
  {% t dict.download.untrusted_app %}
{% alert_end %}

{% t dict.download.gui_after_download %} [{% t dict.guide.run_pactus_gui %}]({{ site.baseurl }}/user-guides/run-pactus-gui)

---

<h3 id="cli">{% t dict.download.pactus_cli %}</h3>

{% t dict.download.download_cli %}

![{% t dict.download.pactus_cli %}]({{ site.url }}/assets/images/pactus_cli.png)

| **File name**                                                                                                                                       | **OS**  | **Arch** |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------- |
| [pactus-cli_0.18.4_android_arm64.tar.gz](https://github.com/pactus-project/pactus/releases/download/v0.18.4/pactus-cli_0.18.4_android_arm64.tar.gz) | Android | ARM64    |
| [pactus-cli_0.18.4_darwin_amd64.tar.gz](https://github.com/pactus-project/pactus/releases/download/v0.18.4/pactus-cli_0.18.4_darwin_amd64.tar.gz)   | macOS   | 64-bit   |
| [pactus-cli_0.18.4_darwin_arm64.tar.gz](https://github.com/pactus-project/pactus/releases/download/v0.18.4/pactus-cli_0.18.4_darwin_arm64.tar.gz)   | macOS   | ARM64    |
| [pactus-cli_0.18.4_freebsd_amd64.tar.gz](https://github.com/pactus-project/pactus/releases/download/v0.18.4/pactus-cli_0.18.4_freebsd_amd64.tar.gz) | FreeBSD | 64-bit   |
| [pactus-cli_0.18.4_freebsd_arm.tar.gz](https://github.com/pactus-project/pactus/releases/download/v0.18.4/pactus-cli_0.18.4_freebsd_arm.tar.gz)     | FreeBSD | ARM      |
| [pactus-cli_0.18.4_linux_amd64.tar.gz](https://github.com/pactus-project/pactus/releases/download/v0.18.4/pactus-cli_0.18.4_linux_amd64.tar.gz)     | Linux   | 64-bit   |
| [pactus-cli_0.18.4_linux_arm64.tar.gz](https://github.com/pactus-project/pactus/releases/download/v0.18.4/pactus-cli_0.18.4_linux_arm64.tar.gz)     | Linux   | ARM64    |
| [pactus-cli_0.18.4_windows_386.zip](https://github.com/pactus-project/pactus/releases/download/v0.18.4/pactus-cli_0.18.4_windows_386.zip)           | Windows | 32-bit   |
| [pactus-cli_0.18.4_windows_amd64.zip](https://github.com/pactus-project/pactus/releases/download/v0.18.4/pactus-cli_0.18.4_windows_amd64.zip)       | Windows | 64-bit   |

{% t dict.download.cli_after_download %} [{% t dict.guide.run_pactus_cli %}]({{ site.baseurl }}/user-guides/run-pactus-cli)

<h3 id="downloader_script">{% t dict.download.downloader_script %}</h3>

{% t dict.download.downloader_script_explained %}

```sh
curl --proto '=https' --tlsv1.2 -sSL https://github.com/pactus-project/pactus/releases/download/v{{ site.latest_version }}/pactus_downloader.sh | sh
```

---

<h2 id="docker">🐳 {% t dict.download.docker %}</h2>

{% t dict.download.docker_desc %}

{% t dict.download.docker_after_download %} [{% t dict.guide.run_pactus_docker %}]({{ site.baseurl }}/user-guides/run-pactus-docker)

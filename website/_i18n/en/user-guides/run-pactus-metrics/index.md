---
version: 1
---

## Preface

Pactus can be run with metrics, providing you with the ability to monitor your node.
This tutorial will guide you through the steps to run Pactus with metrics, suitable for advanced users.

## Prerequisites

Before proceeding with the steps below, ensure that you have the following:

- An understanding of Prometheus and Grafana.
- Have a running Pactus Node.

## Configure Pactus Node for Metrics

To Configure Pactus Node for Metrics, navigate to the Pactus directory; by default, it’s located at the following path.

```text
/home/YourUsername/pactus
```

there’s a file named `config.toml` that contains all the configurations for your node.
There are two parameters that you should enable for metrics: the first is `enable_metrics`,
and the second is enable `http`. After editing the `config.toml` you should restart your node.
The metrics now can be accessed at `http://localhost:80/metrics/prometheus` (this url going to be use by prometheus).

{% alert_start warning %}

if you are running Pactus with docker image, make sure to expose :80 port.

{% alert_end %}

---

## Configure Grafana And Prometheus

we should run Grafana and Prometheus for gathering metrics and displaying them in charts.
First, create a directory named `prometheus-grafana`. Inside the directory,
create a `docker-compose.yml` file and paste the code below.

```yaml
services:
  prometheus:
    image: prom/prometheus
    container_name: prometheus
    command:
      - "--config.file=/etc/prometheus/prometheus.yml"
    ports:
      - 9090:9090
    restart: unless-stopped
    volumes:
      - ./prometheus:/etc/prometheus
      - prom_data:/prometheus
  grafana:
    image: grafana/grafana
    container_name: grafana
    ports:
      - 3000:3000
    restart: unless-stopped
    environment:
      - GF_SECURITY_ADMIN_USER=admin
      - GF_SECURITY_ADMIN_PASSWORD=admin
    volumes:
      - ./grafana:/etc/grafana/provisioning/datasources
volumes: prom_data
```

You can change the default username and password of Grafana by modifying the values of `GF_SECURITY_ADMIN_USER` and `GF_SECURITY_ADMIN_PASSWORD`.
Now, save the file. Then, in the current directory (meaning you are inside the `prometheus-grafana` directory),
create another directory named `grafana`. Then, go to the directory. So now you're in the path `/prometheus-grafana/grafana/`.
In the current directory, create a file named `datasource.yml` and paste the code below there.

```yaml
apiVersion: 1

datasources:
  - name: Prometheus
    type: prometheus
    url: http://prometheus:9090
    isDefault: true
    access: proxy
    editable: true
```

Then save the file and exit.
Now, we should go up one directory level from the current directory and navigate to the `/prometheus-grafana` directory.
In the current directory, which is `/prometheus-grafana`, create another directory named `prometheus`,
then go into the directory.In the prometheus directory create a file named `prometheus.yml` and paste below code there.

```yaml
global:
  scrape_interval: 15s
  scrape_timeout: 10s
  evaluation_interval: 15s
alerting:
  alertmanagers:
    - static_configs:
        - targets: []
      scheme: http
      timeout: 10s
      api_version: v1
scrape_configs:
  - job_name: prometheus
    honor_timestamps: true
    scrape_interval: 15s
    scrape_timeout: 10s
    metrics_path: /metrics/prometheus
    scheme: http
    static_configs:
      - targets:
          - 127.0.0.1
```

Then save the file and exit.

{% alert_start info %}

Tip: In the last section of the code, you will see the targets section where I've written 127.0.0.1, but you can change it based on your localhost IP or your website domain. but you should be aware of your target should match with your node http port. the default http port of pactus node is 80.

{% alert_end %}

## Run Grafana and Prometheus

Go to the `/prometheus-grafana` directory where the `docker-compose.yml` is located and run the command below.

```bash
docker compose up -d
```

Congratulations! Grafana and Prometheus are now up and accessible at ports `3000` and `9090` respectively.

## Import Pactus Metrics to Grafana Dashboard

As Pactus uses `libp2p` for its peer-to-peer network, we should import `libp2p` metrics that you can find [here](https://github.com/libp2p/go-libp2p/tree/master/dashboards).
download one of the metrics config and then Import it into `Grafana Dashboard`.

Congratulations! You did it. Now, you can perform the same operations for other configurations.

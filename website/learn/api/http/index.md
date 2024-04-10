---
layout: learn
title: HTTP API Reference
sidebar: HTTP API Reference
---

<link rel="stylesheet" href="./swagger-ui/swagger-ui.css" />
<link rel="stylesheet" href="./swagger-ui/swagger-ui-dark.css" />
<style>
.swagger-ui .topbar {
  display: none;
}
.swagger-ui .info .title {
  border: none;
}
.swagger-ui .info {
  margin: 0;
}
.swagger-ui .info .link {
  display: none;
}
.swagger-ui .scheme-container {
  background: inherit;
  box-shadow: none;
}
</style>

<div id="swagger-ui"></div>
<script src="./swagger-ui/swagger-ui-bundle.js" crossorigin></script>
<script src="./swagger-ui/swagger-ui-standalone-preset.js" crossorigin></script>
<script>
  window.onload = () => {
    window.ui = SwaggerUIBundle({
      url: './swagger-ui/pactus.swagger.json',
      dom_id: '#swagger-ui',
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset
      ],
      layout: "StandaloneLayout",
    });
  };
</script>

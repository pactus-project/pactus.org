---
layout: base
title: Learn more
permalink: /learn/index.html
---

# Reference

Find technical details and documentation.

<ul  class="list-unstyled">
{% for folder in site.data.learn_docs %}
  <li>{{ folder.title }}</li>
  <ul class="">
  {% for item in folder.items %}
  {% assign item_path = folder.path | append: "/" | append: item.doc %}
  {% assign item_page = site.pages |where: "path", item_path | first %}
      <li><a href="{{ item_page.permalink }}">{{ item_page.title }}</a></li>
  {% endfor %}
  </ul>
{% endfor %}
</ul>

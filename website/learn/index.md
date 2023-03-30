---
layout: base
title: dict.learn.title
---

# {% t dict.learn.title %}

{% t dict.learn.welcome %}

## Table Of Content

<ul class="list-unstyled" dir="ltr">
{% for folder in site.data.learn_toc %}
  <li>
 <div class="fw-bold pt-3 pb-1">{{ folder.title }}</div>
    <ul class="">
    {% for item in folder.items %}
    {% assign item_path = folder.path | append: "/" | append: item.doc | append: "/index.md" %}
    {% assign item_page = site.pages |where: "path", item_path | first %}
        <li><a href="{{ item_page.url }}">{{ item_page.title }}</a></li>
    {% endfor %}
    </ul>
  </li>
{% endfor %}
</ul>

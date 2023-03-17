---
layout: base
title: dict.reference.title
permalink: /reference/index.html
---

# {% t dict.reference.title %}

{% t dict.reference.welcome %}

<ul class="list-unstyled" dir="ltr">
{% for folder in site.data.reference %}
  <li>{{ folder.title }}
    <ul class="">
    {% for item in folder.items %}
    {% assign item_path = folder.path | append: "/" | append: item.doc %}
    {% assign item_page = site.pages |where: "path", item_path | first %}
        <li><a href="{{ item_page.permalink }}">{{ item_page.title }}</a></li>
    {% endfor %}
    </ul>
  </li>
{% endfor %}
</ul>

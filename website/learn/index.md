---
layout: base
title: dict.learn.title
permalink: /learn/index.html
---

# {% t dict.learn.reference %}

{% t dict.learn.welcome %}

<ul  class="list-unstyled" dir="ltr">
{% for folder in site.data.learn_docs %}
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

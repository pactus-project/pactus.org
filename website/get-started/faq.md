---
layout: base
title: dict.faq.title
permalink: /get-started/faq/index.html
---

{% comment %}

Keep FAQ:

+ Simple and easy to understand
+ Short
+ Unbiased

{% endcomment %}

<div class="faq">
  <div class="header">
    <h1>{% t dict.faq.title %}</h1>
    <p>{% t dict.faq.welcome %}</p>
  </div>

{% faq %}

{% include back_to_top.html %}

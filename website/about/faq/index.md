---
layout: base
title: dict.faq.title
---

<div class="faq">
  <div class="header">
    <h1>{% t dict.faq.title %}</h1>
    <p>{% t dict.faq.welcome %}</p>
  </div>

  <div class="toc">
    {% for group in site.data.faq %}
    <div class="group">
      <div class="row fs-4">
        <div class="col">
          {% assign title_key = "dict.faq." | append: group.title %}
          {% t title_key %}
        </div>
      </div>
      <ul class="">
        {% for item in group.items %}
        <li class="ms-3">
          {% assign q_key = "dict.faq." | append: item.id %}
          <a href="#{{item.id}}">{% t q_key %}</a>
        </li>
        {% endfor %}
      </ul>
    </div>
    {% endfor %}
  </div>
  <div class="separator text-center">***</div>

  <div class="qa">
    {% for group in site.data.faq %}
    <div class="group">
      <div class="row text-center fs-4">
        <div class="col">
          {% assign title_key = "dict.faq." | append: group.title %}
          {% t title_key %}
        </div>
      </div>
      {% for item in group.items %}
      {% assign q_key = "dict.faq." | append: item.id %}
      <h3 id="{{ item.id }}">
        {% t q_key %}
      </h3>
      <div class="answer">
        {% assign a_key = item.id | append: "_answer" %}
        {% assign en = site.translations["en"]["dict"]["faq"][a_key] %}
        {% assign tr = site.translations[site.lang]["dict"]["faq"][a_key] %}
        {% assign en_version = en | split: '[version:' | last | split: ']' | first | strip | to_integer %}
        {% assign tr_version = tr | split: '[version:' | last | split: ']' | first | strip | to_integer %}
        {% if en_version > tr_version %}
          {% outdated_alert %}
        {% endif %}
        {{ tr | split: ']' | last }}
        {% if item.img != nil %}
          <img src="{{ site.url }}/assets/images/{{ item.img }}" alt="{% t q_key %}" />
        {% endif %}
        {% if item.more != nil %}
          <div class=read_more>
            <a href="{{ item.more }}">{% t dict.faq.read_more %} ...</a>
          </div>
        {% endif %}
      </div>
      {% endfor %}
    </div>
    {% endfor %}
  </div>

{% include back_to_top.html %}

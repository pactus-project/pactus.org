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
      {% assign a_key = "dict.faq." | append: item.id | append: "_answer_"| append: item.ver %}
      <h3 id="{{ item.id }}">
        {% t q_key %}
      </h3>
      <div class="answer">
        {% t a_key %}
        {% if item.img != nil %}
          <img src="{{ site.url }}/assets/images/{{ item.img }}" alt="{% t q_key %}" />
        {% endif %}
      </div>
      {% endfor %}
    </div>
    {% endfor %}
  </div>

{% include back_to_top.html %}

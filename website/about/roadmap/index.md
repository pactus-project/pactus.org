---
layout: base
title: dict.roadmap.title
permalink: /about/roadmap/index.html
---

<h1>{% t dict.roadmap.title %}</h1>

<div class="row">
  <div class="h5 col-lg-4">✅ {% t dict.roadmap.completed_task %}</div>
  <div class="h5 col-lg-4">🚧 {% t dict.roadmap.ongoing_task %}</div>
  <div class="h5 col-lg-4">⏳ {% t dict.roadmap.upcoming_task %}</div>
</div>

<section dir="ltr">
  <div class="py-5">
    <div class="timeline">
      {% assign roadmap_items = site.data.roadmap %}
      {% for item in roadmap_items %}
      <div class="timeline-card {{ item.status }} {% cycle 'right', 'left' %}">
        <div class="card">
          <div class="card-body p-4">
            <div class="card-title">
              {% if item.link %}
                <a href="{{ site.baseurl }}{{ item.link }}">{{ item.title }}</a>
              {% else %}
                {{ item.title }}
              {% endif %}
            </div>
            <div class="card-subtitle text-muted">{{ item.date }}</div>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

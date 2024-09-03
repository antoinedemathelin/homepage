<h2 id="softwares" style="margin: 2px 0px -15px;">Softwares</h2>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.softwares.main %}

<li>
<div class="pub-row">

  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.code }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="description"><em>{{ link.description }}</em>
      </div>
    <div class="links">
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a>
      {% endif %}
      {% if link.notes %} 
      <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
  
  <div class="col-sm-3" style="position: relative;padding-right: 15px;padding-left: 15px;">
	<div class="repo-info-box">
    <div class="repo-stats">
            <img src="https://img.shields.io/github/stars/{{ link.repository }}.svg?style=social" alt="GitHub stars">
            <img src="https://img.shields.io/github/forks/{{ link.repository }}.svg?style=social" alt="GitHub forks">
            <img src="https://img.shields.io/github/contributors/{{ link.repository }}.svg" alt="GitHub contributors">
			<img src="https://img.shields.io/badge/language-{{ link.language }}-blue.svg" alt="Programming language">
            {% if link.pypi %} 
			<img src="https://img.shields.io/pypi/v/{{ link.pypi }}.svg?color=blue" alt="PyPI version">
			<img src="https://img.shields.io/pypi/dm/{{ link.pypi }}.svg" alt="PyPI downloads">
			{% endif %}
    </div>
</div>
</div>
  
</div>
</li>

<br>

{% endfor %}

</ol>
</div>


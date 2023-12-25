module Jekyll
  class AlertStartTag < Liquid::Tag
    def initialize(tag_name, type, tokens)
      super
      @type = type.strip
    end

    def render(context)
      "<div markdown=\"span\" class=\"alert alert-#{@type}\">" +
        "<i class=\"fa fa-#{@type == 'info' ? 'circle-info' : 'triangle-exclamation'}\"></i>"
    end
  end

  class AlertEndTag < Liquid::Tag
    def initialize(tag_name, input, tokens)
      super
    end

    def render(context)
      '</div>'
    end
  end
end

Liquid::Template.register_tag('alert_start', Jekyll::AlertStartTag)
Liquid::Template.register_tag('alert_end', Jekyll::AlertEndTag)

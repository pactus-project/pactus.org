module Jekyll
  class DirectionTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      lang = context["site"]["lang"]

      if lang == "ar" || lang == "fa"
        return "rtl"
      else
        return "ltr"
      end
    end
  end
end

Liquid::Template.register_tag('direction', Jekyll::DirectionTag)

module Jekyll
  class FaqTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      site = context.registers[:site]
      lang = context["site"]["lang"]
      trans = context["site"]["translations"][lang]["dict"]["faq"]
      faq =  context["site"]["data"]["faq"]

      output = '<div class="toc"><ul class="list-unstyled">'

      faq["faq"].each do |item|
        id = item["id"]
        question = trans[id]

        output += "<li><a href='##{id}'>#{question}</a></li>"
      end

      output += "</ul></div></div><div class='qa'>"

      faq["faq"].each do |item|
        id = item["id"]
        ver = item["ver"]
        question = trans[id]
        answer = trans["#{id}_answer_#{ver}"]

        output += "<hr><h3 id='#{id}'>#{question}</h3><div class='answer'>#{answer}</div>"
      end

      output += "</div>"

      output
    end
  end
end

Liquid::Template.register_tag('faq', Jekyll::FaqTag)

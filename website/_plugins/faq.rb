module Jekyll
  class FaqTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
    end

    def trans(context, lang, id)
      trans = context["site"]["translations"][lang]["dict"]["faq"]
      trans_en = context["site"]["translations"]["en"]["dict"]["faq"]

      if trans[id] != nil
        return trans[id]
      end

      return trans_en[id]
    end

    def render(context)
      site = context.registers[:site]
      lang = context["site"]["lang"]
      faq =  context["site"]["data"]["faq"]

      output = "<div class='toc'>"

      faq["faq"].each do |group|
        title = trans(context, lang, group["title"])
        output += "<div class='group'><div class='row fs-4'><div class='col'>#{title}</div></div>"
        output += "<ul class='list-unstyled'>"
        group["items"].each do |item|
          id = item["id"]
          question = trans(context, lang, id)

          output += "<li class='ms-3'><a href='##{id}'>#{question}</a></li>"
        end
        output += "</ul></div>"
      end


     output += "</div><div class='separator text-center'>***</div><div class='qa'>"

      faq["faq"].each do |group|
        title = trans(context, lang, group["title"])
        output += "<div class='group'><div class='row text-center fs-4'><div class='col'>#{title}</div></div>"

        group["items"].each do |item|
          ver = item["ver"]
          id = item["id"]
          question = trans(context, lang, id)
          answer = trans(context, lang, "#{id}_answer_#{ver}")

          output += "<h3 id='#{id}'>#{question}</h3><div class='answer'>#{answer}</div>"
        end
        output += "</div>"

      end
      output += "</div>"

      output
    end
  end
end

Liquid::Template.register_tag('faq', Jekyll::FaqTag)

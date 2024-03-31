module Jekyll
  class ImageUrlTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      page = context.registers[:page]
      site = context.registers[:site]
      image_url = site.config["url"] + "/blog/images/" + page["path"].sub(".md", "").split("/").last
      image_url
    end
  end

end

Liquid::Template.register_tag('image_url', Jekyll::ImageUrlTag)

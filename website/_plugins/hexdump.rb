module Jekyll
  class HexDumpTag < Liquid::Tag

    def initialize(tag_name, markup, tokens)
      super
      markups = markup.split(' ', 2)
      @id = markups[0]
      @hex = markups[1]
    end

    def render(context)
      "<div class=\"hexdump\" id=#{@id}></div><script>hexdump(#{@hex},#{@id})</script>"
    end
  end
end

Liquid::Template.register_tag('hexdump', Jekyll::HexDumpTag)

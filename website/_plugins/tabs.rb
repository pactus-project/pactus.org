require 'securerandom'
require 'erb'

module Jekyll
    module Tabs
        class TabsBlock < Liquid::Block
            def initialize(block_name, markup, tokens)
                super
                markups = markup.split(' ', 2)
                if markups.length != 2
                    raise SyntaxError.new("Block #{block_name} requires 2 attributes")
                end
                @name = markups[0].strip
                @dir = markups[1].strip
            end

            def render(context)
                environment = context.environments.first
                super

                uuid = SecureRandom.uuid
                currentDirectory = File.dirname(__FILE__)
                templateFile = File.read(currentDirectory + '/tabs.erb')
                template = ERB.new(templateFile)
                template.result(binding)
            end
        end

        class TabBlock < Liquid::Block
            alias_method :render_block, :render

            def initialize(block_name, markup, tokens)
                super
                markups = markup.split(' ', 3)
                if markups.length != 3
                    raise SyntaxError.new("Block #{block_name} requires 3 attributes")
                end
                @name = markups[0].strip
                @tab = markups[1].strip
                @title = markups[2].strip
            end

            def render(context)
                site = context.registers[:site]
                converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
                environment = context.environments.first
                environment["tabs-#{@name}"] ||= {}
                environment["tabs-#{@name}"][@tab] ||= {}
                environment["tabs-#{@name}"][@tab][:title] = @title
                environment["tabs-#{@name}"][@tab][:content] = converter.convert(render_block(context))
            end
        end
    end
end

Liquid::Template.register_tag('tab', Jekyll::Tabs::TabBlock)
Liquid::Template.register_tag('tabs', Jekyll::Tabs::TabsBlock)

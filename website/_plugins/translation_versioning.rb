module Jekyll
  class TranslateWithVersion < Liquid::Tag

    def initialize(tag_name, input, tokens)
      super
      @input = input.strip.split(' ')
    end

    def render(context)
      file_name = @input[0]
      latest_version = @input[1].to_i

      raise "latest_version is not set or zero" if latest_version <= 0

      language = context.registers[:site].config['lang']
      translation_file = File.join(context.registers[:site].source, "_i18n", language, file_name)

      raise "File not found: #{translation_file}" unless File.exist?(translation_file)

      file_content = File.read(translation_file)

      # Extract the version from the front matter using regex
      file_version = file_content.match(/version:\s+(\d+)/)&.captures&.first&.to_i

      raise "translated file version is not set or zero" if file_version <= 0

      # Remove the front matter from the content
      file_body = file_content.sub(/---\n.*?version:.*?\n---\n/m, '')

      translated_content = context.registers[:site].liquid_renderer.file("(#{file_name})").parse(file_body).render!(context)

      if file_version < latest_version
        outdated_message = Liquid::Template.parse("{% t dict.outdated_translation %}").render(context)
        outdated_warning = "<div class='alert alert-warning' role='alert'>
        <i class='fa-solid fa-triangle-exclamation'></i> <span>#{outdated_message}</span></div>"

        translated_content = outdated_warning + translated_content
      end

      translated_content
    end

  end
end

Liquid::Template.register_tag('translate_with_version', Jekyll::TranslateWithVersion)

module Jekyll
  class OutdatedAlertTag < Liquid::Tag
    def render(context)
      outdated_message = Liquid::Template.parse("{% t dict.outdated_translation %}").render(context)
      alert_html = "<div class='alert alert-warning' role='alert'>
        <i class='fa-solid fa-triangle-exclamation'></i> <span>#{outdated_message}</span></div>"
      alert_html
    end
  end
end

Liquid::Template.register_tag('outdated_alert', Jekyll::OutdatedAlertTag)

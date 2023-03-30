Jekyll::Hooks.register :site, :post_write do |site|
  # Run only on production and English site
  # https://github.com/jeffreytse/jekyll-deploy-action/blob/94e5a0079a0152090650147c164c84335f2037e6/entrypoint.sh#L110
  if site.config['lang'] == 'en' &&  ENV["JEKYLL_ENV"] == 'production'
    dest_path = site.dest
    # print dest_path
    
    system("echo 'Build complete. Compressing images...'")
    system("for i in $(find #{dest_path} -name *.png); do echo \"Compressing $i\"; pngquant --strip --skip-if-larger --force \"$i\" --output \"$i\"; done")
  end
end

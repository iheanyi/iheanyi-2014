activate :livereload, :apply_css_live => false

set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'images'

#set :index_file, "default.html"

compass_config do |config|
	config.add_import_path "./components"
end

after_configuration do
	@bower_config = JSON.parse(IO.read("#{root}/.bowerrc"))
	sprockets.append_path File.join "#{root}", @bower_config["directory"]
end

configure :build do
	activate :minify_css
	activate :minify_javascript
	activate :relative_assets
end

activate :deploy do |deploy|
  deploy.method = :git

  deploy.branch = "master"

end
activate :blog do |blog|
  #blog.prefix="blog"
  blog.name="projects"
  blog.prefix="projects"
  blog.permalink="{title}.html"
  blog.sources="{year}-{title}.html"
end

activate :blog do |blog|
  blog.name="blog"
  blog.prefix="posts"
  blog.permalink="{title}.html"
  blog.sources="{year}-{month}-{day}-{title}.html"
end

#activate :directory_indexes
activate :livereload

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
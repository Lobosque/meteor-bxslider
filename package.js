Package.describe({
  summary: "Provides bxlider"
});

Package.on_use(function (api) {
  api.use('jquery');
  api.add_files('js/jquery.bxslider.js', 'client');
  api.add_files('css/jquery.bxslider.css', 'client');
});

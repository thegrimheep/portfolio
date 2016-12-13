(function() {
  page('/', home);
  page('/about', about);
  page('/resume', resume);

  function home(ctx) {
    $('#routeDisplay').text('Home page');
  }

  function about(ctx) {
    $('#routeDisplay').text('About page');
  }

  function resume(ctx) {
    $('#showjobs').text('Resume page');
  }
});

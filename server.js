// Import our two node modules, express, and our proxy
var express = require('express'),
  requestProxy = require('express-request-proxy'),
  port = process.env.PORT || 3000,
  // Store a server instance into our local variable 'app'
  app = express();

var proxyGitHub = function(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: 'https://api.github.com/' + request.params[0],
    headers: { Authorization: 'token ' + process.env.GITHUB_TOKEN }
  }))(request, response);
};

/* When the client navigates to our about page,
    this will invoke requestRepos, and with the URL
    begining with '/github' - this triggers our app.get
    below to invoke proxyGitHub as its callback  */
app.get('/github/*', proxyGitHub);

/* Declare the path for our html, css, and js files
   for our server to use */
app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

// Begin running the server
app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});

var http = require('http');

var port = process.env.PORT || 8080;

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Production-Ready: Hello from OpenShift, steve\n");
  console.log("Production-Ready: Served another request");
}).listen(port);

console.log("Server running on port " + port);

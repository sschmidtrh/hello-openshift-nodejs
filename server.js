var http = require('http');

var port = process.env.PORT || 8080;

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("V 20180329 8:05 Accenture Workshop: Hello from OpenShift, steve\n");
  console.log("V 20180329 8:05 Accenture Workshop: Served another request");
}).listen(port);

console.log("Server running on port " + port);

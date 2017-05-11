var http = require('http');

var port = process.env.PORT || 8080;

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello from OpenShift on Tue May 10th\nAnd thanks to vbehar\n/steve\n");
}).listen(port);

console.log("Server running on port " + port);

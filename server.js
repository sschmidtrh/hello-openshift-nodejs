var http = require('http');

var port = process.env.PORT || 8080;

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello Credit Suisse L&L - from OpenShift!\nNow realy fixed the security issue\n");
  console.log("Served another lunch");
}).listen(port);

console.log("Server running on port " + port);

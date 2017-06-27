var http = require('http');

var port = process.env.PORT || 8080;

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello Credit Suisse L&L - from OpenShift!\nAnd thanks to vbehar.\n");
  console.log("Served another Lunch");
}).listen(port);

console.log("Server running on port " + port);

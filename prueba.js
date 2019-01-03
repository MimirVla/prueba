var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080, '68.66.193.134');
console.log('Server running at http://68.66.193.134:8080/');
/*jslint node : true */
var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'content-type': 'text/plain'
  });
  res.write('Hello world\n');
  res.end();  
}).listen(3000);

console.log('server running on port: 3000');
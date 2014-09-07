/*jslint node : true */
var http = require('http');
var config = require('./config/config.js');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'content-type': 'text/plain'
  });
  res.write('Hello\n');
  setTimeout(function() {
    res.write('world!\n');
    res.end();
  }, 2000);
}).listen(config.port);

console.log('server running on port:' + config.port);
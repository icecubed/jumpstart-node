/*jslint node : true */
var http = require('http');
var config = require('./config/config.js');
var handler = require('./lib/handler.js');

var server = http.createServer(handler).listen(config.port);

console.log('server running on port:' + config.port);
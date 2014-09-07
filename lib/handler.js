/*jslint node : true */
var fs = require('fs');
var handler = function(req, res) {
  console.log('routing..');
  route(req,res);
};

var parseCsv = function(req,res) {
  fs.readFile(__dirname + '/public/data.csv', 'utf-8', function(err, data) {
    if (err) {
      res.writeHead(500);
      res.end(JSON.stringify(err));
      return;
    }
    var responseData = {};
    var lines = data.split('\n');
    lines.forEach(function(line) {
      var parts = line.split(',');
      responseData[parts[0]] = parts[1];
    });
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(responseData));
  });
};

var serveStatic = function(req,res){
  fs.readFile(__dirname + '/public' + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
};

var route = function(req,res) {
  switch (req.url) {
    case '/data':
      parseCsv(req,res);
      break;
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('hello there!');
      break;
    default:
      serveStatic(req,res);      
  }
};


module.exports = handler;
var handler = function(req, res) {
  res.writeHead(200, {'content-type': 'text/plain'});
  res.write('Hello\n');
  setTimeout(function() {
    res.write('world!\n');
    res.end();
  }, 2000);
};

module.exports = handler;
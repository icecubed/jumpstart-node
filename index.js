/*jslint node : true */
var fs = require('fs');

fs.readFile('data.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err.message);
  }
  console.log(data);
});
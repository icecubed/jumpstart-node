setInterval(function(){
  console.log('world!');
}, 1000);
console.log('hello');

process.on('SIGINT', function() {
  console.log('Got SIGINT. Terminating.');
  process.exit(0);
});
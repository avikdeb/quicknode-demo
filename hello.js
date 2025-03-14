// Below line prints in terminal
console.log('Prompt by Avik Deb in console >> Program started.');

// Below lines are shown in browser, program runs on http://localhost:3000
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Prompt by Avik Deb in browser >> Hello World !!');
}).listen(3000);
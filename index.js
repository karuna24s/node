// var http = require('http');

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, {"Content-Type": "text/plain"});
//   res.end("Hello World\n");
// }

var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

function reqLogger(req, res, next) {
  console.log(req.method + '/ ' + req.url);
  next();
}

app.use(reqLogger);

app.get('/:name', function(req, res, next) {
  res.status(200).render('index', { 
  	name: req.params.name
  } );
});
// app.get('/hello-world', function(req, res, next) {
//   res.status(200).send('Hello world!');
// });
// app.get('/goodbye-world', function(req, res, next) {
//   res.status(200).send('Goodbye cruel world...');
// });

app.listen(1337);

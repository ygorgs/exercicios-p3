var express = require('express');
var path = require('path');
var app = express();

app.listen(process.env.PORT || 5000);

app.use(express.static(__dirname + '/public'));

app.all('*', function(request, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  response.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
// app.set('view options', {layout: false});

app.get('/' , function(request, response){
	return response.sendFile(path.join(__dirname+'/client/views/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(request, response){
// 	fs.readFile(__dirname + '/views/exemplo1.html', function(err, html){
//     response.writeHeader(200, {'Content-Type': 'text/html'});
//     response.write(html);
//     response.end();
//   });
// });

// server.listen(5000, function(){
// 	console.log('Executando serviço HTTP');
// });
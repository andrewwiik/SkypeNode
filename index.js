var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var skyper = require('skyper');

app.get('/', function(req, res) {
	res.sendfile('./public/index.html');
});

app.get('/static/js', function(req, res) {
	res.sendfile('./public/js/main.js');
});

io.on('connection', function(socket) {
	console.log(socket.handshake.address + ' connected to server');
	socket.on('message', function(msg) {
		skyper.desktop.send('MESSAGE ' + msg);
	});
});

skyper.desktop.on("notification", function(event) {
  console.log("---", event)
});
skyper.desktop.on("command", function(event) {
  console.log(">>>", event);
});

http.listen(3000, function() {
	console.log('Listening on *:80');
});
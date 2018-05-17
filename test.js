const net = require('net');

console.log('Serveur démarré');

var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);
});

server.listen(8123, '127.0.0.1');
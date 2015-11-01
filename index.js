var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

//Conexion al socket
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
});

//Escuchamos el pueto 3000 puede ser cualquiera.
http.listen(3000, function(){
  console.log('listening on *:3000');
});

//Desconectamos el socket

const express = require('express')
const http = require('http')
const socketio = require('socket.io')


const app = express()
const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) => {
    console.log('a user connected',socket.id);
    socket.on('from_Client',(data)=>{
        // io.emit('msg_received',data)
        // socket.emit('msg_received',data)
        socket.broadcast.emit('msg_received',data)
    })
  });

app.use('/',express.static(__dirname + '/public'))


server.listen(3000,()=>{
    console.log('server is started')
})
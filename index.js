const express = require('express')
const http = require('http')
const socketio = require('socket.io')


const app = express()
const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) => {
    console.log('a user connected',socket.id);
    let count = 1
    setInterval(()=>{
        socket.emit('from_server',`hello client ${count}`)
        count++
    },2000)
    socket.on('from_Client', (msg) => {
        console.log('message: ' + msg);
      });
  });

app.use('/',express.static(__dirname + '/public'))


server.listen(3000,()=>{
    console.log('server is started')
})
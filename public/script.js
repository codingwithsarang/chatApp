const socket = io();

const btn = document.getElementById('btn')
const input = document.getElementById('input')
btn.addEventListener('click',()=>{
    socket.emit('from_Client',input.value)
})
socket.on('from_server',(msg)=>{
    btn.innerText = msg
})
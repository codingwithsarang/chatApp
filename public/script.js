const socket = io();

const btn = document.getElementById('btn')
const input = document.getElementById('input')
const msgList = document.getElementById('msgList')
btn.addEventListener('click',()=>{
    socket.emit('from_Client',{
        msg: input.value
    })
})

socket.on('msg_received',(data)=>{
    let liMsg = document.createElement('li')
    liMsg.innerText = data.msg
    msgList.appendChild(liMsg)
})
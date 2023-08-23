const socket=io()
var sname=joinname.value

var audio=new Audio('/images/ting.mp3')

socket.emit('new-user-joined',sname)
socket.on('user-joined',(arg)=>{
    var d=document.createElement('div')
    d.className='right newuser'
    d.innerHTML=`${arg} join the Chat`
    receivecontainer.appendChild(d)
    audio.play();
})

var form=document.getElementById('sendcontainer')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    var msg=messageinp.value
    socket.emit('send',msg)
    messageinp.value=''
    
    var d=document.createElement('div')
    d.className='right message'
    d.innerHTML=`You : ${msg}`
    receivecontainer.appendChild(d)
})

socket.on('receive',(data)=>{
    var d=document.createElement('div')
    d.className='left message'
    d.innerHTML=`${data.sname} : ${data.message}`
    receivecontainer.appendChild(d)
    audio.play();
})

socket.on('leave',(data)=>{
    var d=document.createElement('div')
    d.className='right newuser'
    d.innerHTML=`${data} has left the chat`
    receivecontainer.appendChild(d)
    audio.play()
})

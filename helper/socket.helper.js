const io = require("socket.io")();
const socketapi = {
    io:io
};

const users={}

// Add your socket.io logic here!
io.on("connection",function(socket) {
        socket.on('new-user-joined',(sname)=>{
        users[socket.id]=sname
        console.log('users',users)
        socket.broadcast.emit('user-joined',sname)
    })

    socket.on('send',(message)=>{
        socket.broadcast.emit('receive',{message:message,sname:users[socket.id]})
    })

    socket.on('disconnect',function(){
        socket.broadcast.emit('leave',users[socket.id])
        delete users[socket.id]
    })
});
// end of socket.io logic

module.exports = socketapi;
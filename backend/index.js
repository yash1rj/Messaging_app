var express=require('express');
var socket=require('socket.io');

var http=require('http');
var path=require('path');

var app=express();
app.use(express.static(path.join("../frontend/", "dist")));
// console.log(path.join("../frontend/", "dist"));

app.get('*',function(req,res){
    res.sendFile(path.join("../frontend/", "dist/index.html"));
})

var server=app.listen(4000,function(){
    console.log('listerning to port 4200');
})

var io=socket(server);
io.on('connection',function(socket){
    
    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    })
})
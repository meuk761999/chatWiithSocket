const { Socket } = require('socket.io');

const app = require('express')();
//INITIALIZE AN EXPRESS APP
const server = require('http').createServer(app);
//AS SOCKET IO WORKS ON HTTP SERVER WE ARE BASICALLY CREATING AN HTTP SERVER WITH EXPRESS APP OBJECT TO WRAP THE EXPRESS 
//SERVER WITH THE HTTP ,SO OUR SYSTEM WORKS LIKE A HTTP SERVER BUT WITH ALL EXPRESS METHODS TOO.

const io = require('socket.io')(server,{
    cors:{
        origin:"*",
    }
});
{/*
HERE WE CREATE AN SOCKET SERVER 
SO FOR VISUALIZATION ISTS LIKE [SOKCET_SERVER { HTTP_SERVER ( EXPRESS_SERVER) HTTP_SERVER } SOKCET_SERVER]
 */}

 io.on('connection', (socket)=>
 {
    console.log("socket is basically a connection");
    console.log("whats in socket", socket);
    {/* making a connection is not sufficient ,we need to listen to some events so lets
        create a event named chat*/}
    socket.on('chat',(payload)=>
    {
        console.log("What is payload", payload);
    {/* listening to an event is not sufficient ,we need to response to that particular event 
       so lets response to our chat event  we will send entire payload back to client*/}
       io.emit('chat',payload);
    })
 })
 server.listen(7000,()=>console.log("Server is running on port 7000"));

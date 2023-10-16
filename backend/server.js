const { Socket } = require('socket.io');

const app = require('express')();
//IN THE ABOVE LINE IS EQUILVALENT TO const express = require('express');const app =e xpress();
const server = require('http').createServer(app);
{/* THE ABOVE lINE IS EQUIVALENT TO
 const {createServer} from "http"; 
 const server = createServer(app)
we are basically creating a http server with express app object ,which makes pur pc a http server
 */}
const io = require('socket.io')(server,{
    cors:{
        origin:"*",
        // methods:["GET", "POST"]
        // allowedHeaders:["My-custom-header"],
        // credentials:true
    }
});
{/* THE ABOVE lINE IS EQUIVALENT TO
 const {Server} from "socket.io"; 
 const io = new Server(server);
 socket.io is a library for real time ,bidirectional ,event based communication.
we are basically creating a socket io server with http server object ,which makes pur pc a socket.io server
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

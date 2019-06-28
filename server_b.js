const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const port = process.env.PORT || 5001;
var body;

//Setting up express and adding socketIo middleware
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

//Setting up a socket with the namespace "connection" for new sockets
io.on("connection", socket => {
    console.log("New client connected");
    
    //Here we listen on a new namespace called "incoming data"
    socket.on("incoming data", (data)=>{
        var url = 'http://192.168.159.134:6010/recon' + data
        var req = http.get(url, (res) => {
            body = ''
            res.on('data',(d) => {
                body += d
            })
        
            res.on('end',() => {
                body = JSON.parse(body)
                console.log(body)
                socket.emit("outgoing data",  body);
                data = ''
            })
        
        })
        
    });

    //A special namespace "disconnect" for when a client disconnects
    socket.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(port, () => console.log(`Listening on port ${port}`));

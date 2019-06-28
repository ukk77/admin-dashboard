const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const port = process.env.PORT || 5003;
var body;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", socket => {
    console.log("New client connected");
    
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

    socket.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(port, () => console.log(`Listening on port ${port}`));

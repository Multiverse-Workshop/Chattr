const express = require('express');
const bodyParser = require('body-parser');
const Data = require('./data')
const debug = require('debug')('server')
//const { createServer } = require("http");
const cors = require("cors");
const app = require('express')();
app.use(cors({ origin: 'http://localhost:3000'}));
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

//const { Server } = require("socket.io");
//const httpServer = createServer(app);

//const { socketIO } = require("./socket/socket");

//const socketIO = require('socket.io');
//const io = socketIO.listen(httpServer);



// const io = new Server(httpServer, {
//     cors: {
//         origin: 'http://localhost:3000'
//     }
// });

// socketIO(io);
// console.log(socketIO);

io.on("connection", (socket) => {
    console.log(`CONNECTED: ${socket.id}`)

    socket.on("SEND_MESSAGE", (data) =>{
        console.log(data)
        socket.emit('RECEIVE_MESSAGE', data)
    })
})

app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', function (req, res) {
    console.log('INSIDE OF APP.GET')
    res.send('Hello world');
});

app.get('/users', function (req, res) {
    return res.send(Data.Users)
});

app.post('/login', function (req, res) {
    return res.send()
})

app.get('/users/:id', function (req, res) {
    const id = req.params.Data.Users.id
    return res.send(Data.Users(id))
});

httpServer.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running on port 8080`)
});
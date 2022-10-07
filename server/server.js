const express = require('express');
const bodyParser = require('body-parser');
const Data = require('./data')
const debug = require('debug')('server')
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { socketIO } = require("./socket/socket");

const app = express();
app.use(cors);

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000'
    }
});

socketIO(io);


app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', function (req, res) {
    return res.send('Hello world');
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
    debug(`Server is running on port 8080`)
});
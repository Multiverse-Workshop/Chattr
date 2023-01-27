const express = require("express");
require('dotenv').config()
const { Server } = require("socket.io");
const { socketIO } = require("./socket/socket");
const app = express();
const routes = require('./routes/index');

const server = require("http").createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});
app.use(express.json());
app.use('/api', routes);

socketIO(io);

server.listen(process.env.SERVER_PORT || 8080, () => {
  console.log(`Server is running on port 8080`);
});

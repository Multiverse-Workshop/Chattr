const Data = require("./data");
const express = require("express");
const { Server } = require("socket.io");
const { socketIO } = require("./socket/socket");
const app = express();

const server = require("http").createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

app.use(express.json());

app.get("/", (req, res) => {
  console.log("INSIDE OF APP.GET");
  res.send("Hello world");
});

app.get("/users", (req, res) => {
  res.send(Data.Users);
});

app.post("/login", (req, res) => {
  res.send();
});

app.get("/users/:id", (req, res) => {
  //converting param into number
  const id = Number(req.params.id);
  //filtering users array to find correct user
  let foundUser = Data.Users.filter((users) => {
    return users.id === id;
  });
  res.send(foundUser);
});

socketIO(io);

server.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running on port 8080`);
});

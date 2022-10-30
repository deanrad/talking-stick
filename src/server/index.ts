import { Server } from "socket.io";
import { initialState } from "../common/services/moderator/moderator.reducer";
import { ClientToServerEvents, ServerToClientEvents } from "../common/types";
import { initialState } from "../common/services/moderator/moderator.reducer";

const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");

app.use(cors());
const server = http.createServer(app);
const io = new Server<ClientToServerEvents, ServerToClientEvents>(server, {
  cors: {
    origin: "*",
    methods: "*",
  },
});

app.get("/", (req, res) => {
  res.json({ msg: "hi" });
});

io.on("connection", (client) => {
  const clientId = client.id.substr(0, 6);
  console.log(`${clientId}: Got a client connection!`);
  client.emit("update", initialState);
  // io.sockets.emit(`say hi to ${clientId}`, "everyone");
});

server.listen(8470, () => {
  console.log("listening on *:8470");
});

// const app = require("http").createServer();
// const { io } = require("socket.io");

// io.listen(app, { log: true });
// app.listen(8470);

// // Add websockets
// io.on("connection", (client) => {
//   const clientId = client.id.substr(0, 6);
//   console.log(`${clientId}: Got a client connection!`);
//   client.emit("event", {
//     type: "movement",
//     payload: "bar",
//   });
// });

// // with fastify
// // import fastify from "fastify";
// // import fastifySocketIO from "fastify-socket.io";
// // import { randomId } from "/src/common/utils";

// // const app = fastify({ logger: true });
// // app.register(fastifySocketIO);

// // /*
// // const fastify = require('fastify')()

// // fastify.register(require('fastify-socket.io'), {
// //   // put your options here
// // })
// // fastify.get('/', (req, reply) => {
// //   fastify.io.emit('hello')
// // })
// // */
// // // app.get("/", (req, reply) => {
// // //   fastify.io.emit("hello");
// // // });
// // app.get("/parcel", async () => "TODO Talking Stick: support websockets");

// // app.ready((err) => {
// //   if (err) throw err;

// //   app.io.on("connection", (socket: any) => {
// //     console.info("Yay heinz 57!", socket.id);
// //     socket.emit("ketchup");
// //   });
// // });

// // app.listen(8470, () => {
// //   console.log("listen success", randomId());
// // });

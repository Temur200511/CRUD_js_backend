// const jsonServer = require("json-server");
// const express = require("express");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();

// server.use(middlewares);

// server.use((req, res, next) => {
//   setTimeout(next, 500);
// });
// setTimeout(() => {
//   server.use(router);
//   app.use(server);
// }, 500);

// const app = express();

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log("Server is running on... http://localhost:3000");
// });

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

server.use(middlewares);
server.use(cors()); // CORS middleware
server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});

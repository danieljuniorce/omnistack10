const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const routes = require("./src/routes");
const { setupWebSocket } = require("./src/websocket");

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.set("useCreateIndex", true);
mongoose.connect(
  "mongodb+srv://danieljuniorce:22051998@dbteste-5rdaw.mongodb.net/devradar?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use(cors());
app.use(express.json());
app.use(routes);
server.listen(3333);

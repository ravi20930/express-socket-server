require("dotenv").config();
const bodyParser = require('body-parser');
const express = require("express");
const cors = require("cors");
const app = express();
const server = require('http').createServer(app);
app.use(bodyParser.json());
app.use(express.json());
exports.io = require("socket.io")(server, {
  cors: {
    origin: "*",
    credentials: true
  }
});
this.io.on('connection', socket => {
    console.log('A client connected.');
    socket.on('disconnect', () => {
        console.log('A client disconnected.');
    });
    // Handle other events here
});
app.use(
    cors({
        origin: true,
        optionsSuccessStatus: 200,
        credentials: true,
    })
);
app.options(
    "*",
    cors({
        origin: true,
        optionsSuccessStatus: 200,
        credentials: true,
    })
);
app.get("/", async (req, res) => {
    res.json({
        message: "hey",
        status: 200
    });
});
const n = server.listen(process.env.APP_PORT ? process.env.APP_PORT : 3000, () => {
    console.log(`Backend Server is Live!\nListening on port: ${process.env.APP_PORT ? process.env.APP_PORT : 3000}`);
});
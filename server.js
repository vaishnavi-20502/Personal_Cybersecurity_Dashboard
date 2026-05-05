const express = require("express");
const dotenv = require("dotenv");

const pool = require("./db");

pool.query("SELECT NOW()")
  .then(res => console.log("DB Connected:", res.rows[0]))
  .catch(err => console.error("DB ERROR:", err));

const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.set("io", io);

// Routes
app.use("/api/logs", require("./routes/logRoutes"));
app.use("/api/stats", require("./routes/statsRoutes"));

io.on("connection", (socket) => {
  console.log("Client connected");
});

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
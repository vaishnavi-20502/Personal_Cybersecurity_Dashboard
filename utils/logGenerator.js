// utils/logGenerator.js
const axios = require("axios");

setInterval(async () => {
  const log = {
    timestamp: new Date(),
    ip: "192.168.1." + Math.floor(Math.random() * 50),
    username: "user" + Math.floor(Math.random() * 5),
    action: "login",
    status: Math.random() > 0.7 ? "failed" : "success",
    raw_log: "Login attempt"
  };

  await axios.post("http://localhost:3000/api/logs", log);
  console.log("Log sent");
}, 2000);
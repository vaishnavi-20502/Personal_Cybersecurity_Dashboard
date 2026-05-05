const pool = require("../db");
const detectAnomaly = require("../services/detectionService");

exports.addLog = async (req, res) => {
  try {
    const { timestamp, ip, username, action, status, raw_log } = req.body;

    await pool.query(
      "INSERT INTO logs(timestamp, ip, username, action, status, raw_log) VALUES($1,$2,$3,$4,$5,$6)",
      [timestamp, ip, username, action, status, raw_log]
    );

    const alert = await detectAnomaly(ip);

    if (alert) {
      const io = req.app.get("io");
      io.emit("alert", { message: alert });
    }

    res.json({ message: "Log stored" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error storing log" });
  }
};
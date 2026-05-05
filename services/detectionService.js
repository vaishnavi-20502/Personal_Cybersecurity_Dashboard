const pool = require("../db");

const detectAnomaly = async (ip) => {
  const result = await pool.query(
    `SELECT COUNT(*) FROM logs 
     WHERE ip=$1 
     AND status='failed' 
     AND timestamp > NOW() - INTERVAL '1 minute'`,
    [ip]
  );

  if (result.rows[0].count > 5) {
    return `🚨 Possible brute force attack from IP: ${ip}`;
  }

  return null;
};

module.exports = detectAnomaly;
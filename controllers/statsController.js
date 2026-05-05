const pool = require("../db");

exports.getStats = async (req, res) => {
  try {
    const success = await pool.query(
      "SELECT COUNT(*) FROM logs WHERE status='success'"
    );

    const failed = await pool.query(
      "SELECT COUNT(*) FROM logs WHERE status='failed'"
    );

    res.json({
      success: success.rows[0].count,
      failed: failed.rows[0].count,
    });
  } catch (err) {
    res.status(500).json({ error: "Error fetching stats" });
  }
};
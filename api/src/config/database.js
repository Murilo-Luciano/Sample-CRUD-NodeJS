const { Pool } = require("pg");

const pool = new Pool({
  connectionString: " postgres url here ",
});

pool.on("connect", () => {
  console.log("DB connected successfully!");
});

module.exports = { query: (text, params) => pool.query(text, params) };

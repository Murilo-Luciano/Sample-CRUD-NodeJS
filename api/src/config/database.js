const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on("connect", () => {
  console.log("DB connected !!");
});

module.exports = { query: (text, params) => pool.query(text, params) };

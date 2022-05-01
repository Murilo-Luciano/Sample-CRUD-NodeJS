const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgres://murilodb:123456@localhost:5432/postgres",
});

pool.on("connect", () => {
  console.log("DB connected successfully!");
});

module.exports = { query: (text, params) => pool.query(text, params) };

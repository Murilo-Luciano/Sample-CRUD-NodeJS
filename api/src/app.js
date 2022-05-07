const express = require("express");
const db = require("./config/database");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
app.use(cors());

app.get("/", (req, res) => {
  res
    .status(200)
    .send({ success: true, message: "It's working !", version: "1.0.0" });
});

app.get("/students", async (req, res) => {
  const query = await db.query("SELECT * FROM students");
  res.send(query.rows);
});

app.get("/students/:id", async (req, res) => {
  const studentId = req.param("id");
  const query = await db.query("SELECT * FROM students WHERE studentId=$1", [
    studentId,
  ]);
  res.send(query.rows);
});

app.post("/students/new", async (req, res) => {
  const name = req.param("name");
  const age = req.param("age");
  await db.query(
    'INSERT INTO students ("studentName", "studentAge") VALUES ($1, $2)',
    [name, age]
  );

  res.status(201).send({
    message: "Student added successfully!",
    body: { student: { name, age } },
  });
});

app.delete("/students/:id", async (req, res) => {
  const studentId = req.param("id");
  const query = await db.query('DELETE FROM students WHERE "studentId"=$1', [
    studentId,
  ]);
  res.send(query.rows);
});

app.listen(process.env.API_PORT, () => {
  console.log(`Running on port ${process.env.API_PORT} 🚀`);
});

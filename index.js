const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mysql = require("mysql2");
const conn = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "root",
  database: process.env.DB_NAME || "test",
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/", (req, res) => {
  res.send("ESTE ES UN EJEMPLO");
});
app.get("/users", (req, res) => {
  conn.query("SELECT * FROM users", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});
app.post("/user", (req, res) => {
  res.send("Got a POST request with this body: " + JSON.stringify(req.body));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const fs = require("fs");
const https = require("https");
const port = 443;

const sslOptions = {
  key: fs.readFileSync("./privkey.key"),
  cert: fs.readFileSync("./certificate.crt"),
};

const app = express();
const userRoute = require("./routes/User");
app.use(express.static("public"));
app.use("/user", userRoute);

https.createServer(sslOptions, app).listen(port, () => {
  console.log("Server running on port " + port);
});

// Connexion à MySQL
const mysql = require("mysql2");

const connection = mysql.createConnection({
  port: "6033",
  host: "localhost",
  user: "root",
  password: "root",
  database: "secured_webshop",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Database");
});

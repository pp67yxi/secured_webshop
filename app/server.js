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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/user", userRoute);

https.createServer(sslOptions, app).listen(port, () => {
  console.log("Server running on port " + port);
});

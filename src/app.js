const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Express app")
});

module.exports = app;
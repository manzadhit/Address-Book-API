const express = require("express");
const app = express();
const router = require("./routes/routes");

app.use(express.json())
app.use(router);

app.get("/", (req, res) => {
  res.send("Welcome to the Express app")
});

module.exports = app;
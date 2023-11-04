const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Hello", change: "changed" }).status(200);
});

app.get("/add/:addend1/:addend2", (req, res) => {
  const result = parseInt(req.params.addend1, 10) + parseInt(req.params.addend2, 10);
  res.send({ result }).status(200);
});

app.get("/subtract/:minuend/:subtrahend", (req, res) => {
  const result = parseInt(req.params.minuend, 10) - parseInt(req.params.subtrahend, 10);
  res.send({ result }).status(200);
});

module.exports = app;

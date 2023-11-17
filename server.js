// Adding a comment here to test the webhook.
// Adding another comment here to test the webhook, 2023Nov16 18:38.
// Adding another comment here to test the webhook, 2023Nov16 18:43.
// Adding another comment here to test the webhook, 2023Nov16 19:22.
// Adding another comment here to test the webhook, 2023Nov17 18:07.
// Adding another comment here to test the webhook, 2023Nov17 18:10.
// Adding another comment here to test the webhook, 2023Nov17 18:13.
// Adding another comment here to test the webhook, 2023Nov17 18:17.

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

app.get("/multiply/:factor1/:factor2", (req, res) => {
  const result = parseInt(req.params.factor1, 10) * parseInt(req.params.factor2, 10);
  res.send({ result }).status(200);
});

module.exports = app;

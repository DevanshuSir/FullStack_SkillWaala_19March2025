const api = require("express").Router();

api.get("/", (req, res) => {
  res.send("Hello Backend");
});

module.exports = api;

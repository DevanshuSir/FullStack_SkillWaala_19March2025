const express = require("express");
const server = express();
server.use(express.json());
server.get("/", (req, res) => {
  res.render("index.ejs");
});

server.get("/about", (req, res) => {
  //   console.log(req.params.id);
  //   res.send("Hello About Page..");
  res.render("about.ejs");
});

const userData = [
  { Username: "Devanshu" },
  { Username: "Manny" },
  { Username: "Kizie" },
];

server.get("/data", (req, res) => {
  res.send(userData);
});

server.post("/user", (req, res) => {
  // console.log(req.body);
  userData.push(req.body);
  res.send("Successfully insert");
});

server.set("view engine", "ejs");
server.use(express.static("public"));
let PORT = 5000;
server.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

// nodemon

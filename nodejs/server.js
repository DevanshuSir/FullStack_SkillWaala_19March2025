const http = require("http");
const fs = require("fs");

// console.log(http);

const homepage = fs.readFileSync("./index.html");
const cssHomefile = fs.readFileSync("./css/index.css");
const jsHomefile = fs.readFileSync("./js/index.js");
const imageHome = fs.readFileSync("./media/spider.png");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(homepage);
    res.end();
  } else if (req.url === "/css/index.css") {
    res.write(cssHomefile);
    res.end();
  } else if (req.url === "/js/index.js") {
    res.write(jsHomefile);
    res.end();
  } else if (req.url === "/media/spider.png") {
    res.write(imageHome);
    res.end();
  } else if (req.url === "/about") {
    res.write("About Page");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Running On port 5000");
});

// npm i express

//routing
// middleware
//Rest Apis
// Error Handling
// get , post , put , patch , delete
// MVC - 

// req ,res - object
// listen - port - 5000

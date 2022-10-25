var fs = require("fs");
var http = require("http");

var server = http.createServer((req, res) => {
  if ((req.url = "/")) {
    // Async

    fs.exists("home.html", (result) => {
      if (result) {
        res.end("True");
      } else {
        res.end("False");
      }
    });
  }
});

server.listen(5050);
console.log("Server Run Success.");

var fs = require("fs");
var http = require("http");

var server = http.createServer((req, res) => {
  if ((req.url = "/")) {
    // Sync

    let result = fs.existsSync("home.html");
    if (result) {
      res.end("True");
    } else {
      res.end("False");
    }
  }
});

server.listen(5050);
console.log("Server Run Success.");

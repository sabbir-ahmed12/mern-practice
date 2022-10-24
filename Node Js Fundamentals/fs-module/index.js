var fs = require("fs");
var http = require("http");

var server = http.createServer((req, res) => {
  if ((req.url = "/")) {
    // Async
    fs.rename("demo.txt", "demoNew.txt", (error) => {
      if (error) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("File rename failed.");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("File rename successful.");
        res.end();
      }
    });
  }
});

server.listen(5050);
console.log("Server Run Success.");

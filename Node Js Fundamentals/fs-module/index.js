var fs = require("fs");
var http = require("http");

var server = http.createServer((req, res) => {
  if ((req.url = "/")) {
    // Async
    fs.writeFile("demo.txt", "Hello World", (error) => {
      if (error) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("File Write Fail");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("File Write Success");
        res.end();
      }
    });
  }
});

server.listen(5050);
console.log("Server Run Success.");

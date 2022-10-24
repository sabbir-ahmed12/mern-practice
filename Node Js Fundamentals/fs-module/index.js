var fs = require("fs");
var http = require("http");

var server = http.createServer((req, res) => {
  if ((req.url = "/")) {
    // Sync
    let error = fs.writeFileSync("demoSync.txt", "Welcome to File Sync.");

    if (error) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File write failed.");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File write successful.");
      res.end();
    }
  }
});

server.listen(5050);
console.log("Server Run Success.");

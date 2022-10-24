var fs = require("fs");
var http = require("http");

var server = http.createServer((req, res) => {
  if ((req.url = "/")) {
    // Sync

    let error = fs.unlinkSync("demoSyncNew.txt");
    if (error) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File unlink failed.");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File unlink successful.");
      res.end();
    }
  }
});

server.listen(5050);
console.log("Server Run Success.");

var fs = require("fs");
var http = require("http");

var server = http.createServer((req, res) => {
  if ((req.url = "/")) {
    // Async
    let error = fs.renameSync("demoSync.txt", "demoSyncNew.txt");
    if (error) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File rename failed.");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File rename successful.");
      res.end();
    }
  }
});

server.listen(5050);
console.log("Server Run Success.");

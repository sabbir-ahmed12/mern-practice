var fs = require("fs");
var http = require("http");

var server = http.createServer((req, res) => {
  if ((req.url = "/")) {
    // Async
    // fs.readFile("home.html", (error, data) => {
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write(data);
    //   res.end();
    // });

    // Sync
    let myData = fs.readFileSync("home.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(myData);
    res.end();
  }
});

server.listen(5050);
console.log("Server Run Success.");

var http = require("http");
var url = require("url");

var server = http.createServer((req, res) => {
  var myUrl = "http://rabbil.com/blog.html?year=2020&month=july";

  myUrlObj = url.parse(myUrl, true);

  var myHostname = myUrlObj.host;
  var myPathname = myUrlObj.pathname;
  var mySearchname = myUrlObj.search;

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(myHostname);
  res.write(myPathname);
  res.write(mySearchname);
  res.end();
});

server.listen(5050);
console.log("Server Run Success");

const express = require("express");

app = express();

app.get("/", (req, res) => {
  res.end("This is a simple GET request.");
});

app.listen(8000, () => {
  console.log("Server run successful.");
});

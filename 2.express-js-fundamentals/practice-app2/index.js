const express = require("express");

app = express();

app.get("/", (req, res) => {
  res.end("This is a simple GET request.");
});

// Working with request query
// localhost:8000/first?firstName=Sabbir&lastName=Ahmed
app.get("/first", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;

  res.end(firstName + " " + lastName);
});

app.listen(8000, () => {
  console.log("Server run successful.");
});

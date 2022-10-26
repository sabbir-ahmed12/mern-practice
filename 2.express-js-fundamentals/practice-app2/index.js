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

// Working with request header
// Provide the values in Postman
app.get("/second", (req, res) => {
  let firstName = req.header("firstName");
  let lastName = req.header("lastName");
  res.end(firstName + " " + lastName);
});

// Working with post request
app.post("/third", (req, res) => {
  res.send("This is simple post request.");
});

app.listen(8000, () => {
  console.log("Server run successful.");
});

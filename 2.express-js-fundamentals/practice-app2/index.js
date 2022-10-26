const express = require("express");
const bodyParser = require("body-parser");
let multer = require("multer");

let multerObj = multer();

app = express();
app.use(bodyParser.json());
app.use(multerObj.array());
app.use(express.static("public"));

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

// Working with POST request URL query
// localhost:8000/fourth?firstName=Sabbir&lastName=Ahmed
app.post("/fourth", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;

  res.send(firstName + " " + lastName);
});

// Working with header
app.post("/fifth", (req, res) => {
  let userName = req.header("username");
  let password = req.header("password");
  res.send(`Username: ${userName} Password: ${password}`);
});

// Extracting JSON data from body of POST request
app.post("/sixth", (req, res) => {
  let jsonData = req.body;
  let name = jsonData["name"];
  res.send(JSON.stringify(jsonData));
});

// Extracting information from multipart from data
app.post("/seventh", (req, res) => {
  let jsonData = req.body;
  res.send(JSON.stringify(jsonData));
});

app.listen(8000, () => {
  console.log("Server run successful.");
});

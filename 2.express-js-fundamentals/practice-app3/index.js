const express = require("express");

const app = express();

// Application level middleware
app.use((req, res, next) => {
  console.log("Application middleware executed.");
  next();
});

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.get("/contact", (req, res) => {
  res.send("This is contact page.");
});

app.get("/about", (req, res) => {
  res.send("This is about page.");
});

app.listen(5000, () => {
  console.log("Server run successful.");
});

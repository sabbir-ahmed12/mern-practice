let express = require("express");

app = express();

// Simple string response
app.get("/", (req, res) => {
  {
    res.send("Home Page");
  }
});

// JSON response
app.get("/about", (req, res) => {
  {
    const myJson = [
      { name: "Sabbir", city: "Cumilla", dept: "ETE" },
      { name: "YP", city: "Gopalganj", dept: "ETE" },
      { name: "Noman", city: "Savar", dept: "ETE" },
    ];
    res.json(myJson);
  }
});

app.get("/contact", (req, res) => {
  {
    res.send("Contact Page");
  }
});

app.listen(8000, () => {
  {
    console.log("Server run successful.");
  }
});

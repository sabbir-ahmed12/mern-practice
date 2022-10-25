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

// Download response
app.get("/download", (req, res) => {
  {
    res.download("./uploads/soulful-ringtone.mp3");
  }
});

app.get("/country", (req, res) => {
  res.redirect("http://localhost:8000/bd");
});

app.get("/bd", (req, res) => {
  res.send("This is BD");
});

app.listen(8000, () => {
  {
    console.log("Server run successful.");
  }
});

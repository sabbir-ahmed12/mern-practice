let express = require("express");

app = express();

app.get("/", (req, res) => {
  {
    res.send("Hello Express Js");
  }
});

app.listen(8000, () => {
  {
    console.log("Server run successful.");
  }
});

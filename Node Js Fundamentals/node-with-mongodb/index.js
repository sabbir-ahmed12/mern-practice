var mongoClient = require("mongodb").MongoClient;

var url =
  "mongodb+srv://sabbir:1608012@cluster0.qbqrz68.mongodb.net/?retryWrites=true&w=majority";

mongoClient.connect(url, (error) => {
  if (error) {
    console.log("Connection failed.");
  } else {
    console.log("Connection successful.");
  }
});

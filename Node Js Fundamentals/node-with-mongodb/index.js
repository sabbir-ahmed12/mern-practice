var mongoClient = require("mongodb").MongoClient;

var url =
  "mongodb+srv://sabbir:1608012@cluster0.qbqrz68.mongodb.net/?retryWrites=true&w=majority";

mongoClient.connect(url, (error, myMongoClient) => {
  if (error) {
    console.log("Connection failed.");
  } else {
    console.log("Connection successful.");
    InsertData(myMongoClient);
  }
});

function InsertData(myMongoClient) {
  let myDatabase = myMongoClient.db("school");
  let myCollection = myDatabase.collection("students");

  let data = { name: "Sabbir", roll: "12", dept: "ETE", city: "Cumilla" };
  myCollection.insertOne(data, (error) => {
    if (error) {
      console.log("Data insert failed.");
    } else {
      console.log("Data insert successful.");
    }
  });
}

var mongoClient = require("mongodb").MongoClient;

var url =
  "mongodb+srv://sabbir:1608012@cluster0.qbqrz68.mongodb.net/?retryWrites=true&w=majority";

mongoClient.connect(url, (error, myMongoClient) => {
  if (error) {
    console.log("Connection failed.");
  } else {
    console.log("Connection successful.");
    deleteData(myMongoClient);
  }
});

function deleteData(myMongoClient) {
  let myDatabase = myMongoClient.db("school");
  let myCollection = myDatabase.collection("students");

  let deleteItem = { roll: "12" };

  myCollection.deleteOne(deleteItem, (error) => {
    if (error) {
      console.log("Data deletion failed.");
    } else {
      console.log("Data deletion successful.");
    }
  });
}

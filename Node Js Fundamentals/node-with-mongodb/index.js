var mongoClient = require("mongodb").MongoClient;

var url =
  "mongodb+srv://sabbir:1608012@cluster0.qbqrz68.mongodb.net/?retryWrites=true&w=majority";

mongoClient.connect(url, (error, myMongoClient) => {
  if (error) {
    console.log("Connection failed.");
  } else {
    console.log("Connection successful.");
    // insertData(myMongoClient);
    // deleteAll(myMongoClient);
    // findOneItem(myMongoClient);
    // findAllItem(myMongoClient);
    // findAllItemByProjection(myMongoClient);
    // findAllItemByQuery(myMongoClient);
    // findAllItemByLimit(myMongoClient);
    // findAllItemSorted(myMongoClient);
    // updateData(myMongoClient);
    createNewCollection(myMongoClient);
  }
});

// Function to insert data from mongodb
// function insertData(myMongoClient) {
//   let myDatabase = myMongoClient.db("school");
//   let myCollection = myDatabase.collection("students");

//   let data = { name: "Sabbir", roll: "12", dept: "ETE", city: "Cumilla" };
//   myCollection.insertOne(data, (error) => {
//     if (error) {
//       console.log("Data insert failed.");
//     } else {
//       console.log("Data insert successful.");
//     }
//   });
// }

// Function to delete data from mongodb
// function deleteData(myMongoClient) {
//   let myDatabase = myMongoClient.db("school");
//   let myCollection = myDatabase.collection("students");

//   let deleteItem = { roll: "12" };

//   myCollection.deleteOne(deleteItem, (error) => {
//     if (error) {
//       console.log("Data deletion failed.");
//     } else {
//       console.log("Data deletion successful.");
//     }
//   });
// }

// Function to delete all data from collection
// function deleteAll(myMongoClient) {
//   let myDatabase = myMongoClient.db("school");
//   let myCollection = myDatabase.collection("students");

//   myCollection.deleteMany((error, resultObj) => {
//     if (error) {
//       console.log("Deletion failed.");
//     } else {
//       console.log(resultObj);
//     }
//   });
// }

// Function to find a data from collection
// function findOneItem(myMongoClient) {
//   let myDatabase = myMongoClient.db("school");
//   let myCollection = myDatabase.collection("students");

//   let searchItem = { roll: "10" };
//   myCollection.findOne(searchItem, (error, result) => {
//     if (error) {
//       console.log("Search operation failed.");
//     } else {
//       console.log(result);
//     }
//   });
// }

// Function to find all data from collection
// function findAllItem(myMongoClient) {
//   let myDatabase = myMongoClient.db("school");
//   let myCollection = myDatabase.collection("students");

//   myCollection.find().toArray((error, result) => {
//     console.log(result);
//   });
// }

// Find all data based on a particular key
// function findAllItemByProjection(myMongoClient) {
//   let myDatabase = myMongoClient.db("school");
//   let myCollection = myDatabase.collection("students");

//   let findItem = {};
//   let itemProjection = { projection: { name: true, roll: true } };

//   myCollection.find(findItem, itemProjection).toArray((error, result) => {
//     console.log(result);
//   });
// }

// Find all data by query
// function findAllItemByQuery(myMongoClient) {
//   let myDatabase = myMongoClient.db("school");
//   let myCollection = myDatabase.collection("students");

//   let queryValue = { city: "Cumilla" };

//   myCollection.find(queryValue).toArray((error, result) => {
//     console.log(result);
//   });
// }

// Find data by limit
// function findAllItemByLimit(myMongoClient) {
//   let myDatabase = myMongoClient.db("school");
//   let myCollection = myDatabase.collection("students");

//   myCollection
//     .find()
//     .limit(2)
//     .toArray((error, result) => {
//       console.log(result);
//     });
// }

// Find sorted data
// function findAllItemSorted(myMongoClient) {
//   let myDatabase = myMongoClient.db("school");
//   let myCollection = myDatabase.collection("students");
//   let sortPattern = { roll: -1 };

//   myCollection
//     .find()
//     .sort(sortPattern)
//     .toArray((error, result) => {
//       console.log(result);
//     });
// }

// Update data
// function updateData(myMongoClient) {
//   let myDatabase = myMongoClient.db("school");
//   let myCollection = myDatabase.collection("students");

//   let queryValue = { roll: "12" };
//   let newValue = { $set: { name: "Sabbir Ahmed" } };

//   myCollection.updateOne(queryValue, newValue, (error, result) => {
//     console.log(result);
//   });
// }

// Create new collection
function createNewCollection(myMongoClient) {
  let myDatabase = myMongoClient.db("school");
  myDatabase.createCollection("teachers", (error, result) => {
    console.log(result);
  });
}

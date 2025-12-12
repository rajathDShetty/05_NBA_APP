const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connectDB() {
  if (!client.connected) {
    await client.connect();
  }
  return client.db("05_NBA_APP");
}

module.exports = connectDB;

// db/connection.js

const { MongoClient } = require("mongodb");

const connectDB = async () => {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017/mydb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const db = client.db(); // Replace with your database name

    return db;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
};

module.exports = { connectDB };

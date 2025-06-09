// db.js
const mongoose = require("mongoose");

const URI = process.env.MONGODBURI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI); // No need for options
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;

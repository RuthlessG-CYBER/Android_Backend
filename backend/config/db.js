const mongoose = require("mongoose");

const MONGO_URI = 'mongodb+srv://pandasoumya605:soumya@cluster0.fp6zea1.mongodb.net/AndroidDB?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI); // <-- no options needed
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;


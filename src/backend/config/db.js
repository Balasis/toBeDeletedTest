//This file connects your application to MongoDB.
const mongoose = require('mongoose');
const config = require('./config'); // Import config

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.MONGO_URI); // Use MONGO_URI from config
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;


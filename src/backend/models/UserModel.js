//This is where we define a schema for MongoDB using Mongoose.

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // This field is mandatory
  },
  email: {
    type: String,
    required: true,
    unique: true,    // This email should be unique in the DB
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Sets a default value when the document is created
  },
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;

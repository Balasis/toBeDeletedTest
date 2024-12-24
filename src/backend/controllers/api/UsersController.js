// controllers/UserController.js
const User = require('../models/UserModel');

//You might as well have different models for each ; ...
// Controller function to get a premium user by ID
const getPremiumUserById = async (req, res) => {
  try {
    const { id } = req.params;  // Retrieve the user ID from the URL parameters
    const user = await User.findById(id);  // Find the user by ID
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);  // Return the user as a JSON response
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to create a new premium user
const createPremiumUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new User({
      name,
      email,
      password,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);  // Return the created user as a JSON response
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// Controller function to get a regular user by ID
const getRegularUserById = async (req, res) => {
  try {
    const { id } = req.params;  // Retrieve the user ID from the URL parameters
    const user = await User.findById(id);  // Find the user by ID
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);  // Return the user as a JSON response
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to create a new regular user
const createRegularUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new User({
      name,
      email,
      password,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);  // Return the created user as a JSON response
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


module.exports = {
  getPremiumUserById,
  createPremiumUser,
  getRegularUserById,
  createRegularUser
};

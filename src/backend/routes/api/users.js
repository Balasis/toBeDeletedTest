// routes/example.js
const express = require('express');
const UsersController = require('../controllers/api/UsersController');  // Import the controller

const router = express.Router();


// Route for getting a user by ID
router.get('/GetPremiumUser/:id', UsersController.getPremiumUserById);  // Forward to controller

// Route for creating a new user
router.post('/CreatePremiumUser', UsersController.createPremiumUser);  // Forward to controller



// Route for getting a user by ID
router.get('/GetRegularUser/:id', UsersController.getRegularUserById);  // Forward to controller

// Route for creating a new user
router.post('/CreateRegularUser', UsersController.createRegularUser);  // Forward to controller

module.exports = router;

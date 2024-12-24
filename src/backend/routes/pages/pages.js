// src/backend/routes/pages/pages.js

const express = require('express');
const router = express.Router();

// Import the pages controller
const pagesController = require('../../controllers/pages/pagesController');

// Define the routes for the pages
router.get('/', pagesController.renderHomePage); // Home page route
router.get('/about', pagesController.renderAboutPage); // About page route
router.get('/contact', pagesController.renderContactPage); // Contact page route

// Export the router for use in server.js
module.exports = router;
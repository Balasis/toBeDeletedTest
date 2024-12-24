// src/backend/server.js

// Importing dependencies
const express = require('express'); // Express framework
const connectDB = require('./config/db'); // Function to connect to the MongoDB database
const logger = require('./utils/logger'); // Custom logger to log incoming requests and other details
const path = require('path'); // Node.js module for handling file paths
const config = require('./config/config'); // Configuration file (PORT, MONGO_URI)
const apiRoutes = require('./routes/api'); // API routes
const pageRoutes = require('./routes/pages/pages'); // Pages routes

const app = express();

// Connect to MongoDB using the configuration settings
connectDB();

// Set EJS as the view engine
// When you use res.render() in Express, it automatically looks for the views in the folder specified by Express
app.set('view engine', 'ejs'); // Use EJS for rendering views
app.set('views', path.join(__dirname, '../frontend/views')); // Set views folder to the frontend/views

// Serve static files (JS, CSS, images) from the 'public' folder
const publicPath = path.join(__dirname, '../frontend/public');
app.use(express.static(publicPath)); // This will serve static files from the 'public' folder

// Middleware setup
app.use(express.json()); // For parsing JSON requests
app.use(logger); // Custom logging middleware

// Serve API routes
app.use('/api', apiRoutes);

// Serve pages routes
app.use('/', pageRoutes); // Serving the pages routes

// Starting the server
app.listen(config.PORT, () => {
  console.log(`Server running at http://localhost:${config.PORT}`);
});

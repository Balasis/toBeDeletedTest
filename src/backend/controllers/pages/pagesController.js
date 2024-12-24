// src/backend/controllers/pages/pagesController.js

// Render the home page (index)
const renderHomePage = (req, res) => {
    res.render('pages/index', { title: 'Home Page' }); // Passing data (title) to the EJS view
  };
  
  // Render the about page
  const renderAboutPage = (req, res) => {
    res.render('pages/about', { title: 'About Us' }); // Passing data (title) to the EJS view
  };
  
  // Render the contact page
  const renderContactPage = (req, res) => {
    res.render('pages/contact', { title: 'Contact Us' }); // Passing data (title) to the EJS view
  };
  
  // Export the functions to be used in the routes
  module.exports = {
    renderHomePage,
    renderAboutPage,
    renderContactPage
  };
  
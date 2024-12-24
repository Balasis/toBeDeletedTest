//This utility logs details of each incoming request.
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next(); // Move to the next middleware
  };
  
  module.exports = logger;
  
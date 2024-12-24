//This is an example of a middleware to check for an API key or token.

const authMiddleware = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey === 'your-secure-api-key') {
      next(); // Continue if the API key is valid
    } else {
      res.status(403).json({ error: 'Unauthorized' });
    }
  };
  
  module.exports = authMiddleware;
  
const express = require('express');
const usersRoutes = require('./users');

const router = express.Router();

// Mount routes
//What does router.use() do?
// It allows you to apply middleware (functions) or other routers to specific paths within that router.
// This is helpful when you want to apply middleware only to a subset of routes that are defined under a specific path or group of routes.
// It allows you to nest routers and handle complex routing and middleware logic for different parts of your application.
router.use('/Users', usersRoutes);

module.exports = router;
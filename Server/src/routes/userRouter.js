const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

// Routes for Users
router.post('/register', userController.registerUser); // Register a new User
router.post('/login', userController.loginUser); // Login

module.exports = router;
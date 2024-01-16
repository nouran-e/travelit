// activityRouter.js

const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController');

// Routes for activities
router.post('/', activityController.createActivity); // Create a new activity
router.get('/', activityController.getAllActivities); // Get all activities
router.get('/activities/:id', activityController.getActivityById); // Get a specific activity by ID
router.put('/activities/:id', activityController.updateActivityById); // Update a specific activity by ID
router.delete('/activities/:id', activityController.deleteActivityById); // Delete a specific activity by ID

module.exports = router;

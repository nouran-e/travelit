const express = require('express');
const tripController = require('../controllers/tripController');

const router = express.Router();

router.post('/api/trips', tripController.createTrip);

module.exports = router;

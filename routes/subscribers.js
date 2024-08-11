const express = require('express');
const router = express.Router();
const subscribersController = require('../controllers/subscribers.js');


// Route to create a new subscriber
router.post('/subscribe', subscribersController.createSubscribers);

// Route to fetch all subscribers
router.get('/subscribers', subscribersController.getSubscribers);

// Journal routes


module.exports = router;

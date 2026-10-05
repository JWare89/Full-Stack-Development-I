const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/trips');

router
    .route('/trips')
    .get(ctrlTrips.tripsList);

module.exports = router;
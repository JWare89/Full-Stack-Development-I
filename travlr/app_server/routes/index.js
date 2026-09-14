const express = require('express');
const router = express.Router();

const ctrlTravel = require('../controllers/traveler');

router.get('/travel', ctrlTravel.travel);

module.exports = router;
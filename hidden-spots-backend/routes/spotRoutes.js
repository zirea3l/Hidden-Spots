const express = require('express');
const router = express.Router();
const { getNearbySpots, addNewSpot } = require('../controllers/spotController');

// @route   GET /api/spots
// @desc    Get spots near given lat/lng
router.get('/', getNearbySpots);

// @route   POST /api/spots
// @desc    Submit a new hidden spot
router.post('/', addNewSpot);

module.exports = router;

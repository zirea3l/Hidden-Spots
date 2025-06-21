const Spot = require('../models/Spot');
const cloudinary = require('../config/cloudinary');
const validateSpot = require('../utils/validateSpot');

/**
 * @desc Fetch nearby hidden spots using geospatial MongoDB query
 * @route GET /api/spots?lat=...&lng=...
 */
const getNearbySpots = async (req, res) => {
    try {
    const { lat, lng } = req.query;

    if (!lat || !lng) {
        return res.status(400).json({ message: 'Latitude and longitude are required.' });
    }

    const spots = await Spot.find({
        location: {
        $near: {
            $geometry: {
            type: 'Point',
            coordinates: [parseFloat(lng), parseFloat(lat)],
            },
          $maxDistance: 5000, // 5 km radius
        },
        },
    });

    res.status(200).json(spots);
    } catch (error) {
    console.error('Error fetching spots:', error);
    res.status(500).json({ message: 'Server error while fetching spots.' });
    }
};

/**
 * @desc Submit a new hidden spot with image upload
 * @route POST /api/spots
 */
const addNewSpot = async (req, res) => {
    try {
    const { valid, message } = validateSpot(req.body);
    if (!valid) {
        return res.status(400).json({ message });
    }

    const { name, story, vibe, image, coordinates } = req.body;

    // Upload image to Cloudinary
    const uploadedImage = await cloudinary.uploader.upload(image, {
        folder: 'hidden_spots',
        transformation: [{ width: 1000, height: 800, crop: 'limit' }],
    });

    // Create new spot document
    const newSpot = new Spot({
        name,
        story,
        vibe,
        image: uploadedImage.secure_url,
        location: {
        type: 'Point',
        coordinates: coordinates, // [lng, lat]
        },
    });

    const savedSpot = await newSpot.save();
    res.status(201).json(savedSpot);
    } catch (error) {
    console.error('Error submitting spot:', error);
    res.status(500).json({ message: 'Server error while submitting spot.' });
    }
};

module.exports = {
  getNearbySpots,
    addNewSpot,
};

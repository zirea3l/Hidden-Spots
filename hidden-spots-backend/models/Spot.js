const mongoose = require('mongoose');

const spotSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
    },
    story: {
    type: String,
    required: true,
    },
    vibe: {
    type: String,
    enum: ['Romantic', 'Serene', 'Creative'],
    required: true,
    },
    image: {
    type: String, // URL to Cloudinary image
    required: true,
    },
    location: {
    type: {
        type: String,
        enum: ['Point'],
        default: 'Point',
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
        required: true,
    },
    },
    createdAt: {
    type: Date,
    default: Date.now,
    },
});

// Enable geospatial indexing
spotSchema.index({ location: '2dsphere' });

const Spot = mongoose.model('Spot', spotSchema);

module.exports = Spot;

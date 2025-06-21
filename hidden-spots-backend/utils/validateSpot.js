/**
 * Validates the structure of a new spot submission
 * @param {Object} spot
 * @returns {Object} { valid: boolean, message?: string }
 */
const validateSpot = (spot) => {
    const { name, story, vibe, image, coordinates } = spot;
    
    if (!name || typeof name !== 'string' || name.trim().length < 3) {
        return { valid: false, message: 'Name must be at least 3 characters' };
    }
    
    if (!story || typeof story !== 'string' || story.trim().length < 10) {
        return { valid: false, message: 'Story must be at least 10 characters' };
    }
    
    const allowedVibes = ['Romantic', 'Serene', 'Creative'];
    if (!vibe || !allowedVibes.includes(vibe)) {
        return { valid: false, message: 'Vibe must be one of Romantic, Serene, or Creative' };
    }
    
    if (!image || typeof image !== 'string') {
        return { valid: false, message: 'Image is required (URL or base64 string)' };
    }
    
    if (
        !Array.isArray(coordinates) ||
        coordinates.length !== 2 ||
        isNaN(coordinates[0]) ||
        isNaN(coordinates[1])
    ) {
        return { valid: false, message: 'Coordinates must be a [lng, lat] array of numbers' };
    }
    
    return { valid: true };
    };
    
    module.exports = validateSpot;

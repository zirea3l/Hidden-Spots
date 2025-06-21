import { API_BASE_URL } from '../constants/config';

/**
 * Fetch nearby hidden spots from backend
 */
export const fetchNearbySpots = async (lat, lng) => {
    try {
    const response = await fetch(`${API_BASE_URL}/spots?lat=${lat}&lng=${lng}`);
    if (!response.ok) throw new Error('Failed to fetch spots');
    return await response.json();
    } catch (error) {
    console.error('Error fetching spots:', error);
    return [];
    }
};

/**
 * Submit a new hidden spot to the backend
 */
export const submitSpot = async (spotData) => {
    try {
    const response = await fetch(`${API_BASE_URL}/spots`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(spotData),
    });

    if (!response.ok) {
        throw new Error('Failed to submit spot');
    }

    return await response.json();
    } catch (error) {
    console.error('Error submitting spot:', error);
    throw error;
    }
};

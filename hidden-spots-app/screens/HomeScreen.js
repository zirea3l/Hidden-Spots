// HomeScreen.js using external config, appStyles and spotService

import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import SpotCard from '../components/SpotCard';
import SpotFilter from '../components/SpotFilter';
import SpotModal from '../components/SpotModal';
import { fetchNearbySpots } from '../services/spotService';
import appStyles from '../styles/appStyles';
import { DEFAULT_REGION } from '../constants/config';

const HomeScreen = () => {
    const [location, setLocation] = useState(null);
    const [spots, setSpots] = useState([]);
    const [selectedSpot, setSelectedSpot] = useState(null);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
    (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
        }

        let loc = await Location.getCurrentPositionAsync({});
        setLocation(loc.coords);

        const data = await fetchNearbySpots(loc.coords.latitude, loc.coords.longitude);
        setSpots(data);
    })();
    }, []);

    const filteredSpots = filter === 'All' ? spots : spots.filter(spot => spot.vibe === filter);

    return (
    <View style={appStyles.container}>
        <MapView
        style={appStyles.map}
        initialRegion={location ? {
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        } : DEFAULT_REGION}
        >
        {filteredSpots.map((spot) => (
            <Marker
            key={spot._id}
            coordinate={{ latitude: spot.location.coordinates[1], longitude: spot.location.coordinates[0] }}
            title={spot.name}
            description={spot.vibe}
            onPress={() => setSelectedSpot(spot)}
            />
        ))}
        </MapView>

        <SpotFilter currentFilter={filter} onChange={setFilter} />

        <FlatList
        data={filteredSpots}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
            <SpotCard spot={item} onPress={() => setSelectedSpot(item)} />
        )}
        />

        <SpotModal spot={selectedSpot} onClose={() => setSelectedSpot(null)} />
    </View>
    );
};

export default HomeScreen;

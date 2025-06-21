import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import { VIBE_CATEGORIES } from '../constants/config';
import { submitSpot } from '../services/spotService';

const SubmitSpotScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [story, setStory] = useState('');
    const [vibe, setVibe] = useState('Serene');
    const [image, setImage] = useState('');

    const handleSubmit = async () => {
    if (!name || !story || !vibe || !image) {
        Alert.alert('Error', 'Please fill in all fields.');
        return;
    }

    try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
        return Alert.alert('Permission denied', 'Location access is required.');
        }

        const location = await Location.getCurrentPositionAsync({});
        const coordinates = [location.coords.longitude, location.coords.latitude];

        await submitSpot({ name, story, vibe, image, coordinates });

        Alert.alert('Success', 'Spot submitted successfully!');
        navigation.goBack();
    } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Failed to submit spot.');
    }
    };

    return (
    <View style={styles.container}>
        <Text style={styles.label}>Name of Spot</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}>Story</Text>
        <TextInput style={[styles.input, { height: 100 }]} value={story} onChangeText={setStory} multiline />

        <Text style={styles.label}>Vibe</Text>
        <View style={styles.pillContainer}>
        {VIBE_CATEGORIES.filter(c => c !== 'All').map((v) => (
            <Text
            key={v}
            onPress={() => setVibe(v)}
            style={[styles.pill, vibe === v && styles.activePill]}
            >
            {v}
            </Text>
        ))}
        </View>

        <Text style={styles.label}>Image URL</Text>
        <TextInput style={styles.input} value={image} onChangeText={setImage} />

        <Button title="Submit Spot" onPress={handleSubmit} />
    </View>
    );
};

export default SubmitSpotScreen;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    },
    label: {
    fontWeight: 'bold',
    marginTop: 15,
    },
    input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
    },
    pillContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    gap: 8,
    flexWrap: 'wrap',
    },
    pill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#ddd',
    borderRadius: 20,
    },
    activePill: {
    backgroundColor: '#ffc',
    fontWeight: 'bold',
    },
});

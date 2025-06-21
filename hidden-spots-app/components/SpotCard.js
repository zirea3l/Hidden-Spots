import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SpotCard = ({ spot, onPress }) => {
    return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={{ uri: spot.image }} style={styles.image} />
        <Text style={styles.title}>{spot.name}</Text>
        <Text numberOfLines={2}>{spot.story}</Text>
    </TouchableOpacity>
    );
};

export default SpotCard;

const styles = StyleSheet.create({
    card: {
    padding: 10,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    },
    image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    },
    title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 5,
    },
});

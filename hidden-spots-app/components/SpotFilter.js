import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { VIBE_CATEGORIES } from '../constants/config';

const SpotFilter = ({ currentFilter, onChange }) => {
    return (
    <View style={styles.container}>
        {VIBE_CATEGORIES.map((category) => (
        <TouchableOpacity
            key={category}
            onPress={() => onChange(category)}
            style={[styles.button, currentFilter === category && styles.active]}
        >
            <Text style={styles.text}>{category}</Text>
        </TouchableOpacity>
        ))}
    </View>
    );
};

export default SpotFilter;

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    },
    button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#ddd',
    borderRadius: 8,
    },
    active: {
    backgroundColor: '#ffc',
    },
    text: {
    fontWeight: '500',
    },
});

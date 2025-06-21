import React from 'react';
import { View, Text, Image, Modal, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const SpotModal = ({ spot, onClose }) => {
    if (!spot) return null;

    return (
    <Modal visible transparent animationType="slide">
        <View style={styles.modalContent}>
        <ScrollView style={styles.modalBox}>
            <Text style={styles.title}>{spot.name}</Text>
            <Image source={{ uri: spot.image }} style={styles.modalImage} />
            <Text style={styles.label}>Vibe: {spot.vibe}</Text>
            <Text style={styles.label}>Story</Text>
            <Text>{spot.story}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={{ color: '#fff' }}>Close</Text>
            </TouchableOpacity>
        </ScrollView>
        </View>
    </Modal>
    );
};

export default SpotModal;

const styles = StyleSheet.create({
    modalContent: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalBox: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    },
    modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    },
    closeButton: {
    marginTop: 20,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    },
    title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    },
    label: {
    fontWeight: 'bold',
    marginTop: 10,
    },
});

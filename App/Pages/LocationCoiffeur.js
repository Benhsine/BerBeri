import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const LocationCoiffeurScreen = ({ navigation }) => {
  const [location, setLocation] = useState('');

  const handleSend = () => {
    // Handle sending the email for password reset logic here
    console.log('Location:', location);
    navigation.navigate('AddImageCoiffeur');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Location</Text>
      <Image
        style={styles.icon}
        source={require('./../Assets/Images/location.png')} // Replace with your actual icon path
      />
      <Text style={styles.titleText}>What is your location?</Text>
      <Text style={styles.subText}>
        Find an artist or studio near your location
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Entrer la localisation"
        keyboardType="default"
        value={location}
        onChangeText={setLocation}
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendButtonText} >Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 100, // Adjust the width and height as needed
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
    marginBottom: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    width: '80%',
    marginBottom: 20,
  },
  sendButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  sendButtonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default LocationCoiffeurScreen;

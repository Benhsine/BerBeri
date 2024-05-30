import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
const ProfileImageScreen = (/*{ navigation }*/) => {
  const [photo, setPhoto] = useState(null);
  const navigation = useNavigation();
  const handleAddPhoto = () => {
    launchImageLibrary({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.assets && response.assets.length > 0) {
        setPhoto(response.assets[0].uri);
        navigation.navigate('Question1');
      }
    });
  };

  const handleSkip = () => {
    // Navigate to the next screen or perform another action
    navigation.navigate('Question1'); // Replace 'NextScreen' with your actual next screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      <Text style={styles.subheader}>Adding photo to make your barber shop</Text>
      <TouchableOpacity style={styles.imageContainer} onPress={handleAddPhoto}>
        {photo ? (
          <Image source={{ uri: photo }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>+</Text>
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton} onPress={handleAddPhoto}>
        <Text style={styles.addButtonText}>Add photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipButtonText}>Skip for now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subheader: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
  placeholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 40,
    color: '#aaa',
  },
  addButton: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    width: '80%',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  skipButton: {
    borderColor: '#0066cc',
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
  },
  skipButtonText: {
    color: '#0066cc',
    fontWeight: 'bold',
  },
});

export default ProfileImageScreen;

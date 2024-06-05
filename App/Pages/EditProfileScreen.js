import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const EditProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        try {
          const response = await axios.get('http://192.168.137.232:8080/api/v1/profile', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const userData = response.data;
          setName(userData.fullName);
          setEmail(userData.email);
          setPhone(userData.phoneNumber);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async () => {
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      try {
        await axios.put('http://localhost:8080/api/v1/profile/update', {
          fullName: name,
          newEmail: email,
          phoneNumber: phone
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        navigation.navigate('Profile'); // Go back to the previous screen
      } catch (error) {
        console.error(error);
      }
    }
  };

  
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Full Name"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone Number"
        keyboardType="phone-pad"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default EditProfileScreen;

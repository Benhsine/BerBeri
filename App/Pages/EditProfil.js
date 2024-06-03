import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const EditProfileScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    fullName: 'John Daniel',
    nickName: 'john_daniel',
    email: 'youremail@domain.com',
    phoneNumber: '123-456-7890',
    country: 'United States',
    gender: 'Male',
    address: '1234 Street Name',
  });

  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(form);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        value={form.fullName}
        onChangeText={(text) => handleInputChange('fullName', text)}
      />
      <Text style={styles.label}>Nick Name</Text>
      <TextInput
        style={styles.input}
        value={form.nickName}
        onChangeText={(text) => handleInputChange('nickName', text)}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={form.email}
        onChangeText={(text) => handleInputChange('email', text)}
      />
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        value={form.phoneNumber}
        onChangeText={(text) => handleInputChange('phoneNumber', text)}
      />
      <Text style={styles.label}>Country</Text>
      <TextInput
        style={styles.input}
        value={form.country}
        onChangeText={(text) => handleInputChange('country', text)}
      />
      <Text style={styles.label}>Gender</Text>
      <TextInput
        style={styles.input}
        value={form.gender}
        onChangeText={(text) => handleInputChange('gender', text)}
      />
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        value={form.address}
        onChangeText={(text) => handleInputChange('address', text)}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>SUBMIT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 5,
    padding: 10,
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default EditProfileScreen;
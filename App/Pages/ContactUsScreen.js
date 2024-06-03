import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ContactUsScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(form);
    // You can add any logic to send the form data to your backend here
    alert('Your message has been sent!');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={form.name}
        onChangeText={(text) => handleInputChange('name', text)}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={form.email}
        onChangeText={(text) => handleInputChange('email', text)}
        keyboardType="email-address"
      />
      <Text style={styles.label}>Message</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={form.message}
        onChangeText={(text) => handleInputChange('message', text)}
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
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
    marginBottom: 15,
  },
  textArea: {
    height: 100,
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ContactUsScreen;

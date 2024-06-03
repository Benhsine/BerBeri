import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const HelpSupport = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSend = () => {
    // Handle the send action, such as form submission
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Description:', description);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>How we can help you today?</Text>
      <Text style={styles.subHeader}>
        Please enter your personal data and describe your care needs or something we can help you with
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter a description here"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="Send" onPress={handleSend} color="#6200ee" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16, // Add padding around the container
    width: '100%', // Ensure the container takes up full width
  },
  header: {
    fontSize: 22, // Adjust the font size
    fontWeight: 'bold', // Make the header bold
    textAlign: 'center', // Center the text
    marginBottom: 8, // Add space below the header
  },
  subHeader: {
    fontSize: 14, // Adjust the font size
    textAlign: 'center', // Center the text
    marginBottom: 16, // Add space below the subheader
  },
  input: {
    height: 40, // Adjust the height of the input fields
    borderColor: '#ccc', // Border color for input fields
    borderWidth: 1, // Border width for input fields
    borderRadius: 4, // Border radius for input fields
    paddingHorizontal: 8, // Add padding inside the input fields
    marginBottom: 12, // Add space below each input field
  },
  textArea: {
    height: 100, // Adjust the height for the description text area
    textAlignVertical: 'top', // Ensure text starts at the top of the text area
  },
});

export default HelpSupport;
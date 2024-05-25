import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ForgotPasswordEmailScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    // Handle sending the email for password reset logic here
    console.log('Email:', email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Forgot Password</Text>
      <Image
        style={styles.icon}
        source={require('../path/to/your/lock-icon.png')} // Replace with your actual icon path
      />
      <Text style={styles.titleText}>Forgot your password?</Text>
      <Text style={styles.subText}>
        Enter your registered email below to receive password reset instruction
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Input email address"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendButtonText}>Send</Text>
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

export default ForgotPasswordEmailScreen;

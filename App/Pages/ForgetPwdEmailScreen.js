import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const ForgotPasswordEmailScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSend = () => {
    // Handle sending the email for password reset logic here
    console.log('Email:', email);
    setIsSent(true);
  };

  const handleEnterCode = () => {
    // Handle navigation to enter code screen or logic
    console.log('Navigate to enter code screen');
    navigation.navigate('ForgetPwdCodeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Forgot Password</Text>
      <Image
        style={styles.icon}
        source={require('./../Assets/Images/forgetPassword.png')} // Replace with your actual icon path
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
        <Text style={styles.sendButtonText}>{isSent ? 'Resend' : 'Send'}</Text>
      </TouchableOpacity>
      {isSent && (
        <TouchableOpacity style={styles.enterCodeButton} onPress={handleEnterCode}>
          <Text style={styles.enterCodeButtonText}>Click to enter code</Text>
        </TouchableOpacity>
      )}
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
    padding: 12,
    width : '100%',
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  enterCodeButton: {
    marginTop : 10,
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  enterCodeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordEmailScreen;

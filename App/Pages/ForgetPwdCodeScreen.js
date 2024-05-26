import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [code, setCode] = useState(['', '', '', '']);

  const handleChangeText = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
    }
  };

  const handleSend = () => {
    // Handle the code verification logic here
    console.log('Entered Code:', code.join(''));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Authentication</Text>
      <Text style={styles.subText}>Please enter the authentication code that we have sent to your email</Text>
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleChangeText(index, value)}
          />
        ))}
      </View>
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
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
    marginBottom: 40,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginBottom: 40,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 24,
    textAlign: 'center',
    width: 50,
    height: 50,
  },
  sendButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 12,
    marginHorizontal: 40,
  },
  sendButtonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default ForgotPasswordScreen;

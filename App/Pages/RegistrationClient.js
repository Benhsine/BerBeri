import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://192.168.137.232:8080/api/v1/auth/register', {
        fullName: name,
        email: email,
        phoneNumber: phone,
        password: password
      });

      const token = response.data.token;
      await AsyncStorage.setItem('userToken', token);

      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      Alert.alert('Registration failed', error.response ? error.response.data.message : 'Please try again');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Client</Text>

      <Text style={styles.label}>Your name</Text>
      <TextInput
        style={styles.input}
        placeholder="Input your first name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email address</Text>
      <TextInput
        style={styles.input}
        placeholder="Input email address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Phone number</Text>
      <View style={styles.phoneContainer}>
        <Text style={styles.phoneCode}>+212</Text>
        <TextInput
          style={styles.phoneInput}
          placeholder="0708060000"
          value={phone}
          onChangeText={setPhone}
        />
        <Icon name="check" type="font-awesome" color="#ccc" />
      </View>

      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Input your password"
          secureTextEntry={isPasswordHidden}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setIsPasswordHidden(!isPasswordHidden)}>
          <Icon
            name={isPasswordHidden ? 'eye-off' : 'eye'}
            type="material-community"
            color="#ccc"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Input confirm password"
          secureTextEntry={isConfirmPasswordHidden}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setIsConfirmPasswordHidden(!isConfirmPasswordHidden)}>
          <Icon
            name={isConfirmPasswordHidden ? 'eye-off' : 'eye'}
            type="material-community"
            color="#ccc"
          />
        </TouchableOpacity>
      </View>

      <Button title="Sign up" buttonStyle={styles.signupButton} onPress={handleRegister} />

      <Text style={styles.orText}>Or sign up with</Text>

      <Button
        icon={<FontAwesome name="google" size={24} color="red" />}
        title=" Continue with Google"
        buttonStyle={styles.googleButton}
        titleStyle={styles.googleButtonTitle}
        onPress={() => {}}
      />

      <Button
        icon={<FontAwesome name="facebook" size={24} color="blue" />}
        title=" Continue with Facebook"
        buttonStyle={styles.facebookButton}
        titleStyle={styles.facebookButtonTitle}
        onPress={() => {}}
      />

      <Text style={styles.footerText}>
        Already have an account? <Text style={styles.signinText} onPress={() => navigation.navigate('LoginScreen')}>Sign in</Text>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  label: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: 16,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#333',
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  phoneCode: {
    marginRight: 8,
    fontSize: 16,
    color: '#333',
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  signupButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 12,
    marginTop: 16,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 16,
    color: '#555',
  },
  googleButton: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  facebookButton: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 16,
    fontSize: 16,
    color: '#555',
  },
  signinText: {
    color: '#007bff',
  },
  googleButtonTitle: {
    color: 'red', // Red title color
    fontSize: 16,
    marginLeft: 10, // Adjust margin to align title with icon
  },
  facebookButtonTitle: {
    color: 'blue', // Red title color
    fontSize: 16,
    marginLeft: 10, // Adjust margin to align title with icon
  },
});

export default RegistrationScreen;

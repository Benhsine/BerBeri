import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Modal, StyleSheet, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.137.232:8080/api/v1/auth/authenticate', {
        email,
        password
      });
      
      const token = response.data.token;
      await AsyncStorage.setItem('userToken', token);

      navigation.navigate('HomeScreen');
    } catch (error) {
      console.error(error);
      Alert.alert('Login Failed', 'Invalid email or password. Please try again.');
    }
  };

  const handleRegister = (userType) => {
    setModalVisible(false);
    if (userType === 'Client') {
      navigation.navigate('RegistrationClient');
    } else {
      navigation.navigate('RegistrationCoiffeur');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./../Assets/Images/pic4444.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.formContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.welcomeText}>Welcome To Berberi</Text>
          <Text style={styles.subtitleText}>Please enter your login information below to access your account</Text>
          <View style={styles.inputContainer}>
            <Icon name="mail-outline" size={20} color="#444" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#444"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="lock-closed-outline" size={20} color="#444" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#444"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity style={styles.forgotPasswordContainer} onPress={() => navigation.navigate('ForgetPwdEmailScreen')}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerContainer} onPress={() => setModalVisible(true)}>
            <Text style={styles.registerText}>Don't have an account? <Text style={styles.registerLink}>Register</Text></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleAuthentification}>
            <AntDesign name="google" size={24} color="red" />
            <Text style={styles.googleButtonText}>continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebookAuthentification}>
            <AntDesign name="facebook-square" size={24} color="blue" />
            <Text style={styles.facebookButtonText}>continue with Facebook</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Register as:</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => handleRegister('Client')}
            >
              <Text style={styles.modalButtonText}>Client</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => handleRegister('Coiffeur')}
            >
              <Text style={styles.modalButtonText}>Coiffeur</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.7,
  },
  formContainer: {
    flex: 2,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
    marginTop: -30,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E2E2E',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 14,
    color: '#7E7E7E',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#6A6A6A',
  },
  loginButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerContainer: {
    marginBottom: 30,
  },
  registerText: {
    color: '#6A6A6A',
  },
  registerLink: {
    color: '#432F87',
    fontWeight: 'bold',
  },
  googleAuthentification: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 2,
    marginBottom: 20,
  },
  googleButtonText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  facebookAuthentification: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: 'blue',
    borderWidth: 2,
    marginBottom: 20,
  },
  facebookButtonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  modalView: { width: 300, backgroundColor: 'white', borderRadius: 10, padding: 20, alignItems: 'center' },
  modalText: { fontSize: 18, marginBottom: 20 },
  modalButton: { backgroundColor: '#0066cc', padding: 10, borderRadius: 5, marginBottom: 10, width: '100%', alignItems: 'center' },
  modalButtonText: { color: 'white', fontWeight: 'bold' },
  closeButton: { backgroundColor: '#ccc', padding: 10, borderRadius: 5, width: '100%', alignItems: 'center' },
  closeButtonText: { color: 'black', fontWeight: 'bold' },
});


export default Login;

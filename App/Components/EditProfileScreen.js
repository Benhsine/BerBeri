import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const EditProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('John Daniel');
  const [nickname, setNickname] = useState('puerto_rico');
  const [email, setEmail] = useState('youremail@domain.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [address, setAddress] = useState('RABAT');

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Full Name" />
      <TextInput style={styles.input} value={nickname} onChangeText={setNickname} placeholder="Nickname" />
      <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="Phone Number" keyboardType="phone-pad" />
      <TextInput style={styles.input} value={address} onChangeText={setAddress} placeholder="Address" />
      <Button title="Submit" onPress={() => navigation.goBack()} />
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
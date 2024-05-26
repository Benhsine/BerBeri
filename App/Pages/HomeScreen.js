// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome to the Home Screen!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24 },
});

export default HomeScreen;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CheckBox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';

const ServicesScreen = () => {
  const navigation = useNavigation();
  const [services, setServices] = useState({
    hairExtensions: false,
    haircutsStyling: false,
    barbering: false,
    facialsSkincare: false,
    nailServices: false,
  });

  const handleContinue = () => {
    const selectedServices = Object.keys(services).filter(service => services[service]);
    console.log('Selected Services:', selectedServices);
    // Navigate to the next screen or perform another action
    navigation.navigate('Question2'); // Replace 'Question2' with your actual next screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Question 1/2</Text>
      <Text style={styles.subheader}>What type of services do you offer?</Text>
      
      {Object.keys(services).map((service, index) => (
        <View key={index} style={styles.checkboxContainer}>
          <CheckBox
            value={services[service]}
            onValueChange={(newValue) => setServices(prev => ({ ...prev, [service]: newValue }))}
          />
          <Text style={styles.label}>{service.replace(/([A-Z])/g, ' $1').trim()}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subheader: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ServicesScreen;

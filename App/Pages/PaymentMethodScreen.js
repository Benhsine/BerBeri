import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5, MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons'; // Import icons from Expo vector-icons

const PaymentMethodScreen = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const navigation = useNavigation();

  const paymentMethods = [
    { name: 'PayPal', icon: 'paypal', color: '#0070BA' },
    { name: 'Visa', icon: 'credit-card', color: '#1A237E' },
    { name: 'MasterCard', icon: 'credit-card', color: '#E53935' },
    { name: 'COD', icon: 'wallet', color: '#2E7D32' }, // Replace "cash" with a different icon
  ];

  const handleContinue = () => {
    if (selectedMethod) {
      navigation.navigate('PaymentProcessing', { method: selectedMethod });
    } else {
      alert('Please select a payment method');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Payment Method</Text>
      {paymentMethods.map((method, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.methodButton,
            selectedMethod === method.name && { backgroundColor: method.color },
            !selectedMethod && { backgroundColor: '#999' }, // Add background color when not selected
          ]}
          onPress={() => setSelectedMethod(method.name)}
        >
          <View style={styles.methodContent}>
            <FontAwesome5 name={method.icon} size={24} color="#fff" style={styles.icon} />
            <Text style={[styles.methodText, { color: '#fff' }]}>{method.name}</Text>
          </View>
        </TouchableOpacity>
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
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  methodButton: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#bbb'
  },
  methodContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  methodText: {
    fontSize: 18,
  },
  continueButton: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PaymentMethodScreen;

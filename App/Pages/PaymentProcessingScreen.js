import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const PaymentProcessingScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { method } = route.params;

  useEffect(() => {
    const processPayment = async () => {
      try {
        if (method === 'PayPal') {
          // Implement PayPal payment processing
          console.log('Processing PayPal payment...');
          // Assume success for demonstration
          handleSuccess();
        } else if (method === 'Visa' || method === 'MasterCard') {
          // Implement card payment processing
          console.log('Processing card payment...');
          navigation.navigate('CardInfoScreen');
          // Assume success for demonstration
          //handleSuccess();
        } else if (method === 'COD') {
          // Handle Cash on Delivery
          console.log('Processing COD...');
          handleSuccess();
        }
      } catch (error) {
        handleError(error);
      }
    };

    processPayment();
  }, [method]);

  const handleSuccess = () => {
    alert('Payment successful!');
    navigation.navigate('PaymentMethod'); // Or navigate to order confirmation screen
  };

  const handleError = (error) => {
    alert(`Payment failed: ${error.message}`);
    navigation.navigate('PaymentMethod');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Processing Payment...</Text>
      <ActivityIndicator size="large" color="#0066cc" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default PaymentProcessingScreen;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import ChooseDate from './../Components/ChooseDate';
import ChooseService from './../Components/ChooseService';
import AvailableTime from './../Components/AvailableTime';

const AppointmentScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Icon name="arrow-back-outline" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book Appointment</Text>
      </View>

      <ChooseDate onDateSelected={setSelectedDate} />

      <ChooseService onServiceSelected={setSelectedService} />

      {selectedDate && (
        <AvailableTime selectedDate={selectedDate} onTimeSelected={setSelectedTime} />
      )}

      <View style={styles.paymentSummary}>
        <Text style={styles.summaryText}>Payment summary</Text>
        {selectedService && (
          <>
            <Text style={styles.summaryItem}>
              {selectedService.name}: ${selectedService.price}
            </Text>
            <Text style={styles.summaryItem}>
              Service fee: $5
            </Text>
            <Text style={styles.summaryTotal}>
              Total: ${selectedService.price + 5}
            </Text>
          </>
        )}
      </View>

      <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('PaymentMethod')}>
        <Text style={styles.bookButtonText}>Choose Payment Method</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  paymentSummary: {
    marginVertical: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  summaryItem: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  summaryTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  bookButton: {
    backgroundColor: '#0066cc',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AppointmentScreen;

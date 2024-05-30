import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const services = [
  { id: 1, name: 'Massage', price: 30 },
  { id: 2, name: 'Haircut', price: 20 },
  { id: 3, name: 'Barber Cut', price: 25 },
];

const ChooseService = ({ onServiceSelected }) => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServicePress = (service) => {
    setSelectedService(service.id);
    onServiceSelected(service);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Service</Text>
      <View style={styles.servicesContainer}>
        {services.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={[
              styles.serviceButton,
              selectedService === service.id && styles.selectedServiceButton,
            ]}
            onPress={() => handleServicePress(service)}
          >
            <Text style={styles.serviceName}>{service.name}</Text>
            <Text style={styles.servicePrice}>${service.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  serviceButton: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  selectedServiceButton: {
    backgroundColor: '#00adf5',
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  servicePrice: {
    fontSize: 14,
    color: '#888',
  },
});

export default ChooseService;

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const activeBookings = [
  {
    id: '1',
    date: 'Sun, 11 Jan - 08:00 AM',
    shop: 'ATLAS BARBER SHOP',
    address: 'Av Allal El Fassi, RABAT',
    distance: '7 km',
    bookingId: '456896',
    service: 'Barbering',
    description: 'Basic haircut & vitamint',
    price: '$10',
  },
  // Add more active booking items here
];

const historyBookings = [
  {
    id: '2',
    date: 'Sun, 4 Jan - 11:00 AM',
    shop: 'ATLAS BARBER SHOP',
    address: 'Av Allal El Fassi, RABAT',
    distance: '7 km',
    bookingId: '95496',
    service: 'Basic haircut',
    description: 'Basic haircut & vitamint',
    price: '$20',
  },
  // Add more history booking items here
];

const BookingCard = ({ booking, isActive }) => (
  <View style={styles.bookingCard}>
    <Text style={styles.dateText}>{booking.date}</Text>
    <Text style={styles.shopText}>{booking.shop}</Text>
    <Text style={styles.addressText}>{booking.address} ({booking.distance})</Text>
    <Text style={styles.idText}>ID: {booking.bookingId}</Text>
    <View style={styles.serviceContainer}>
      <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.serviceImage} />
      <View>
        <Text style={styles.serviceText}>{booking.service}</Text>
        <Text style={styles.descriptionText}>{booking.description}</Text>
      </View>
    </View>
    <Text style={styles.priceText}>{booking.price}</Text>
    {isActive ? (
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.callButton}>
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.rebookButton}>
          <Text style={styles.buttonText}>Re-book</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addReviewButton}>
          <Text style={styles.buttonText}>Add Review</Text>
        </TouchableOpacity>
      </View>
    )}
  </View>
);

const NotificationScreen = () => {
  const [activeTab, setActiveTab] = useState('Active booking');
  const navigation = useNavigation();

  const renderBooking = ({ item }) => (
    <BookingCard booking={item} isActive={activeTab === 'Active booking'} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tabButton, activeTab === 'Active booking' && styles.activeTab]} onPress={() => setActiveTab('Active booking')}>
          <Text style={styles.tabText}>Active booking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabButton, activeTab === 'History' && styles.activeTab]} onPress={() => setActiveTab('History')}>
          <Text style={styles.tabText}>History</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={activeTab === 'Active booking' ? activeBookings : historyBookings}
        renderItem={renderBooking}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.scrollView}
      />
      <View style={styles.navigation}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('HomeScreen')}>
          <Icon name="home-outline" size={28} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Map')}>
          <Icon name="location-outline" size={28} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notification')}>
          <Icon name="notifications-outline" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Icon name="person-outline" size={28} color="#888" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabContainer: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    position:"absolute",
    zIndex:1,
    marginTop:15,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollView: {
    paddingBottom: 100,
  },
  bookingCard: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 10,
    marginTop: 95,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shopText: {
    fontSize: 14,
    color: '#555',
  },
  addressText: {
    fontSize: 12,
    color: '#777',
  },
  idText: {
    fontSize: 12,
    color: '#777',
  },
  serviceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  serviceImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  serviceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 14,
    color: '#777',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  cancelButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  callButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 8,
    alignItems: 'center',
  },
  rebookButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  addReviewButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navigation: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navItem: {
    alignItems: 'center',
  },
});

export default NotificationScreen;

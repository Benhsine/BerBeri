// App/Pages/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FilterModal from './../Components/filter';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const HomeScreen = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [user, setUser] = useState(null);
  const navigation = useNavigation();
  const salons = [
    { id: 1, name: "Alana Barbershop – Haircut massage & Spa", location: "Banguntapan (5 km)", rating: 4.5, image: require('./../Assets/Images/salon1.png') },
    { id: 2, name: "Hercha Barbershop – Haircut & Styling", location: "Jalan Kaliurang (8 km)", rating: 5.0, image: require('./../Assets/Images/salon2.png') },
    { id: 3, name: "Barberking – Haircut styling & massage", location: "Jogja Expo Centre (12 km)", rating: 4.5, image: require('./../Assets/Images/salon3.png') },
  ];

  useEffect(() => {
    const fetchProfile = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        try {
          const response = await axios.get('http://192.168.137.232:8080/api/v1/profile', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setUser(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchProfile();
  }, []);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <Icon name="location-outline" size={20} color="#444" />
            <Text style={styles.locationText}>{user.location || 'Unknown Location'}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={user.profilePicture ? { uri: user.profilePicture } : require('./../Assets/Images/user-profile.jpg')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.userName}>{user.fullName}</Text>

        <TouchableOpacity style={styles.banner}>
          <Image
            source={require('./../Assets/Images/background2.jpg')}
            style={styles.bannerImage}
          />
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <Icon name="search-outline" size={20} color="#888" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search barber's, haircut services..."
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.filterButton} onPress={() => setFilterVisible(true)}>
            <Icon name="options-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Nearest Barbershop</Text>

        {salons.map(salon => (
          <TouchableOpacity key={salon.id} style={styles.salonCard} onPress={() => navigation.navigate('BarberDetailScreen')}>
            <Image source={salon.image} style={styles.salonImage} />
            <View style={styles.salonInfo}>
              <Text style={styles.salonName}>{salon.name}</Text>
              <Text style={styles.salonLocation}>{salon.location}</Text>
              <View style={styles.ratingContainer}>
                <FontAwesome name="star" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>{salon.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.navigation}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('HomeScreen')}>
          <Icon name="home-outline" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Map')}>
          <Icon name="location-outline" size={28} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notification')}>
          <Icon name="notifications-outline" size={28} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Icon name="person-outline" size={28} color="#888" />
        </TouchableOpacity>
      </View>

      <FilterModal visible={filterVisible} onClose={() => setFilterVisible(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 80, // Ensure there's space for the fixed navigation bar
  },
  header: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#444',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    marginHorizontal: 16,
    marginBottom: 16,
    marginTop : -10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  banner: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  filterButton: {
    backgroundColor: '#333',
    padding: 8,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  salonCard: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: 16,
  },
  salonImage: {
    width: 80,
    height: 80,
  },
  salonInfo: {
    flex: 1,
    padding: 8,
  },
  salonName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  salonLocation: {
    fontSize: 14,
    color: '#888',
    marginVertical: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#888',
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

export default HomeScreen;

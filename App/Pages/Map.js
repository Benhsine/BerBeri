import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { getBarbershops } from './../Api/Api'; // Suppose you have an API function to get barbershops

const MapScreen = () => {
  const navigation = useNavigation();
  const [region, setRegion] = useState(null);
  const [barbershops, setBarbershops] = useState([]);

  useEffect(() => {
    const requestLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      fetchBarbershops(location.coords.latitude, location.coords.longitude);
    };

    requestLocationPermission();
  }, []);

  const fetchBarbershops = async (latitude, longitude) => {
    try {
      const data = await getBarbershops(latitude, longitude);
      setBarbershops(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!region) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region} showsUserLocation>
        {barbershops.map((barbershop) => (
          <Marker
            key={barbershop.id}
            coordinate={{
              latitude: barbershop.latitude,
              longitude: barbershop.longitude,
            }}
            title={barbershop.name}
            description={barbershop.address}
          />
        ))}
      </MapView>
      <View style={styles.navigation}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('HomeScreen')}>
          <Icon name="home-outline" size={28} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Map')}>
          <Icon name="location-outline" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notification')}>
          <Icon name="notifications-outline" size={28} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Icon name="person-outline" size={28} color="#888" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  map: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MapScreen;

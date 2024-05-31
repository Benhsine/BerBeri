import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BarberDetailScreen = ({ navigation, route }) => {
  //const { barber } = route.params;

  const reviews = [
    { id: 1, name: "Amine Sadik", rating: 4.0, review: "Good service, recommendation for barber shop seekers", image: require('./../Assets/Images/salon1.png') },
    { id: 2, name: "Nourddine B13", rating: 5.0, review: "Place is not too far and the shaving results are good", image: require('./../Assets/Images/salon2.png') },
    { id: 3, name: "Imad widaid", rating: 4.0, review: "Price is quite affordable and the service is good, I am very satisfied", image: require('./../Assets/Images/salon3.png') },
    { id: 4, name: "Anas Safir", rating: 5.0, review: "Style of barbering here really follows the times, I like the service", image: require('./../Assets/Images/salon1.png') },
  ];

  return (
    <ScrollView style={styles.container}>
      <Image source={require('./../Assets/Images/background1.jpg')} style={styles.barberImage} />
      
      <View style={styles.header}>
        <Text style={styles.barberName}>Master piece Barbershop - Haircut styling</Text>
        <Text style={styles.barberLocation}><Icon name="location-outline" size={16} color="#888" /> Agdal, Rabat (2 km)</Text>
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>5.0</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.apointmentButton} onPress={() => navigation.navigate('Appointment')}>
            <Text style={styles.apointmentButtonText}>Resrve Now</Text>
      </TouchableOpacity>
      <View style={styles.aboutContainer}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.aboutText}>
          A barber is a trade professional who cuts and styles hair, trims beards and performs other grooming and skincare practices for customers. Some of their primary duties 
        </Text>
      </View>

      <View style={styles.workingHoursContainer}>
        <Text style={styles.sectionTitle}>Working Hours</Text>
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
          <View key={day} style={styles.workingHoursRow}>
            <Text style={styles.workingDay}>{day}</Text>
            <Text style={styles.workingTime}>09:00 - 00:00</Text>
          </View>
        ))}
      </View>

      <View style={styles.reviewsContainer}>
        <Text style={styles.sectionTitle}>Reviews</Text>
        {reviews.map(review => (
          <View key={review.id} style={styles.reviewRow}>
            <Image source={review.image} style={styles.reviewImage} />
            <View style={styles.reviewContent}>
              <Text style={styles.reviewName}>{review.name}</Text>
              <View style={styles.reviewRatingContainer}>
                {[...Array(5)].map((_, i) => (
                  <FontAwesome
                    key={i}
                    name="star"
                    size={16}
                    color={i < Math.floor(review.rating) ? '#FFD700' : '#DDDDDD'}
                  />
                ))}
                <Text style={styles.reviewRatingText}>{review.rating}</Text>
              </View>
              <Text style={styles.reviewText}>{review.review}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  barberImage: {
    marginTop: 30,
    width: '100%',
    height: 200,
  },
  header: {
    padding: 16,
  },
  barberName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  barberLocation: {
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
  apointmentButton: {
    alignItems: 'center',
    backgroundColor: '#0066cc',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    margin: 20,
  },
  apointmentButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  aboutContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  aboutText: {
    fontSize: 14,
    color: '#555',
  },
  readMore: {
    color: '#1E90FF',
    marginTop: 4,
  },
  workingHoursContainer: {
    padding: 16,
  },
  workingHoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  workingDay: {
    fontSize: 14,
    color: '#333',
  },
  workingTime: {
    fontSize: 14,
    color: '#333',
  },
  reviewsContainer: {
    padding: 16,
  },
  reviewRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  reviewImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  reviewContent: {
    marginLeft: 8,
    flex: 1,
  },
  reviewName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  reviewRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewRatingText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#888',
  },
  reviewText: {
    fontSize: 14,
    color: '#555',
  },
});

export default BarberDetailScreen;

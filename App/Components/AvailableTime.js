import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AvailableTime = ({ selectedDate, onTimeSelected }) => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableTimes(selectedDate);
    }
  }, [selectedDate]);

  const fetchAvailableTimes = async (date) => {
    try {
      const response = await fetch(`https://your-backend-api.com/times?date=${date}`);
      const data = await response.json();
      setAvailableTimes(data);
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  };

  const handleTimePress = (time) => {
    setSelectedTime(time);
    onTimeSelected(time);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available time</Text>
      <View style={styles.timesContainer}>
        {availableTimes.map((time) => (
          <TouchableOpacity
            key={time}
            style={[
              styles.timeButton,
              selectedTime === time && styles.selectedTimeButton,
            ]}
            onPress={() => handleTimePress(time)}
          >
            <Text style={styles.timeText}>{time}</Text>
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
  timesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timeButton: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    margin: 4,
  },
  selectedTimeButton: {
    backgroundColor: '#00adf5',
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AvailableTime;

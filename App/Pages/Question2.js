import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const TeamSizeScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleFinish = () => {
    console.log('Selected Team Size:', selectedOption);
    // Navigate to the next screen or perform another action
    navigation.navigate('NextScreen'); // Replace 'NextScreen' with your actual next screen
  };

  const options = [
    "It's just me",
    '2-3 people',
    '4-6 people',
    '6+ people'
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Question 2/2</Text>
      <Text style={styles.subheader}>What’s your team size?</Text>

      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionContainer}
          onPress={() => setSelectedOption(option)}
        >
          <View style={styles.radioCircle}>
            {selectedOption === option && <View style={styles.selectedRb} />}
          </View>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
        <Text style={styles.finishButtonText}>Finish</Text>
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
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#0066cc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#0066cc',
  },
  optionText: {
    marginLeft: 8,
    fontSize: 16,
  },
  finishButton: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },
  finishButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TeamSizeScreen;

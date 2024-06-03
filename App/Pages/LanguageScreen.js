// src/screens/LanguageScreen.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LanguageScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English (UK)');

  const languages = [
    'English (US)',
    'English (UK)',
    'Mandarin',
    'Hindi',
    'Spanish',
    'French',
    'Arabic',
    'Russian',
    'Indonesian',
    'Vietnamese',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Language</Text>
      {languages.map((language) => (
        <TouchableOpacity
          key={language}
          style={styles.option}
          onPress={() => setSelectedLanguage(language)}
        >
          <Text style={selectedLanguage === language ? styles.optionSelected : styles.optionLabel}>
            {language}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  optionLabel: {
    fontSize: 16,
  },
  optionSelected: {
    fontSize: 16,
    color: 'blue',
  },
});

export default LanguageScreen;

// src/components/ProfileOption.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileOption = ({ icon, label, value, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.option}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        {value && <Text style={styles.value}>{value}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  iconContainer: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  value: {
    fontSize: 14,
    color: '#888',
  },
});

export default ProfileOption;

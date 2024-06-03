import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileHeader = ({ onEditPress }) => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/profile_picture.png')}
        style={styles.avatar}
      />
      <Text style={styles.name}>John Daniel</Text>
      <TouchableOpacity onPress={onEditPress} style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit profile</Text>
      </TouchableOpacity>
      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.activeTab]}>Barber</Text>
        <Text style={styles.tab}>Clients</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  editButton: {
    marginTop: 10,
    backgroundColor: '#000080',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  tabs: {
    flexDirection: 'row',
    marginTop: 20,
  },
  tab: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#888',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    color: '#000',
  },
});

export default ProfileHeader;
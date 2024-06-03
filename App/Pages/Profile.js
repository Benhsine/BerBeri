import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({ navigation }) => {
  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <View style={styles.profileHeader}>
        <Image source={require('../Assets/Images/profile_picture.png')} style={styles.profilePicture} />
        <TouchableOpacity style={styles.editProfileButton} onPress={() => navigation.navigate('EditProfile')}>
          <Text style={{ color: 'white' }}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
        <Text style={styles.name}>John Daniel</Text>
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Barber</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Clients</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.item} onPress={() => handleNavigation('EditProfile')}>
          <Ionicons name="person-outline" size={24} color="black" />
          <Text style={styles.itemText}>Edit Profile Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => handleNavigation('Notifications')}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Text style={styles.itemText}>Notifications: ON</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => handleNavigation('Language')}>
          <Ionicons name="language-outline" size={24} color="black" />
          <Text style={styles.itemText}>Language: English</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => handleNavigation('Security')}>
          <Ionicons name="shield-outline" size={24} color="black" />
          <Text style={styles.itemText}>Security</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => handleNavigation('Theme')}>
          <Ionicons name="color-palette-outline" size={24} color="black" />
          <Text style={styles.itemText}>Theme: Light Mode</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => handleNavigation('HelpSupport')}>
          <Ionicons name="help-circle-outline" size={24} color="black" />
          <Text style={styles.itemText}>Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => handleNavigation('ContactUs')}>
          <Ionicons name="call-outline" size={24} color="black" />
          <Text style={styles.itemText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => handleNavigation('PrivacyPolicy')}>
          <Ionicons name="document-text-outline" size={24} color="black" />
          <Text style={styles.itemText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  editButton: {
    backgroundColor: '#007bff',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  tab: {
    marginHorizontal: 10,
  },
  tabText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
  },
  body: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  itemText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default ProfileScreen;
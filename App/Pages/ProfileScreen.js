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
          <Image source={require('../assets/profile_picture.png')} style={styles.profilePicture} />
          <Text style={styles.profileName}>John Daniel</Text>
          <TouchableOpacity style={styles.editProfileButton} onPress={handleEditProfile}>
            <Text style={{ color: 'white' }}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
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
  profileHeader: {
    alignItems: 'center',
  },
  profilePicture: {
    height: 100,
    width: 200,
    borderRadius: 50, // Adjust the borderRadius to make it circular
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  editProfileButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVerticalmarginVertical: 20,
  },
  tab: {
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },
  body: {
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  itemText: {
    marginLeft: 15,
    fontSize: 16,
  },
});

export default ProfileScreen;
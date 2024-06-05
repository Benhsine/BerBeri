import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const handleToggle = (type) => {
    setNotifications((prevNotifications) => ({
      ...prevNotifications,
      [type]: !prevNotifications[type],
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemText}>Email Notifications</Text>
        <Switch
          value={notifications.email}
          onValueChange={() => handleToggle('email')}
        />
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>SMS Notifications</Text>
        <Switch
          value={notifications.sms}
          onValueChange={() => handleToggle('sms')}
        />
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Push Notifications</Text>
        <Switch
          value={notifications.push}
          onValueChange={() => handleToggle('push')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    background: { width, height },
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Assure une meilleure lisibilité du texte
      width: '100%',
      height: '100%',
      padding: 20,
    },
    title: {
      fontSize: 28,
      color: 'white',
      textAlign: 'center',
      marginBottom: 60,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      marginBottom: 90,
    },
    button: {
      backgroundColor: 'white',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: 'blue',
      fontSize: 20,
    },
    pagination: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: 'white',
      marginHorizontal: 5,
    },
    activeDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: 'blue',
      marginHorizontal: 5,
    },
  });
  

export default NotificationsScreen;

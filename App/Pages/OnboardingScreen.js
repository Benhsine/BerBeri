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
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  itemText: {
    fontSize: 18,
  },
});

export default NotificationsScreen;

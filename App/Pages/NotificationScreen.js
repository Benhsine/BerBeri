// src/screens/NotificationScreen.js

import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState({
    general: true,
    sound: false,
    vibrate: true,
    appUpdates: false,
    billReminder: true,
    promotion: false,
    discountAvailable: true,
    paymentRequest: false,
    newService: true,
    newTips: false,
  });

  const toggleSwitch = (key) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Common</Text>
      <View style={styles.option}>
        <Text style={styles.optionLabel}>General Notification</Text>
        <Switch
          value={notifications.general}
          onValueChange={() => toggleSwitch('general')}
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.optionLabel}>Sound</Text>
        <Switch
          value={notifications.sound}
          onValueChange={() => toggleSwitch('sound')}
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.optionLabel}>Vibrate</Text>
        <Switch
          value={notifications.vibrate}
          onValueChange={() => toggleSwitch('vibrate')}
        />
      </View>
      <Text style={styles.sectionHeader}>System & Services Update</Text>
      <View style={styles.option}>
        <Text style={styles.optionLabel}>App updates</Text>
        <Switch
          value={notifications.appUpdates}
          onValueChange={() => toggleSwitch('appUpdates')}
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.optionLabel}>Bill Reminder</Text>
        <Switch
          value={notifications.billReminder}
          onValueChange={() => toggleSwitch('billReminder')}
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.optionLabel}>Promotion</Text>
        <Switch
          value={notifications.promotion}
          onValueChange={() => toggleSwitch('promotion')}
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.optionLabel}>Discount Available</Text>
        <Switch
          value={notifications.discountAvailable}
          onValueChange={() => toggleSwitch('discountAvailable')}
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.optionLabel}>Payment Request</Text>
        <Switch
          value={notifications.paymentRequest}
          onValueChange={() => toggleSwitch('paymentRequest')}
        />
      </View>
      <Text style={styles.sectionHeader}>Others</Text>
      <View style={styles.option}>
        <Text style={styles.optionLabel}>New Service Available</Text>
        <Switch
          value={notifications.newService}
          onValueChange={() => toggleSwitch('newService')}
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.optionLabel}>New Tips Available</Text>
        <Switch
          value={notifications.newTips}
          onValueChange={() => toggleSwitch('newTips')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  optionLabel: {
    fontSize: 16,
  },
});

export default NotificationScreen;

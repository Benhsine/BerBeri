import React from 'react';
import { View, StyleSheet } from 'react-native';
import Theme from '../Components/Theme';

const ThemeScreen = () => {
  const handleThemeChange = (theme) => {
    console.log(`Theme changed to: ${theme}`);
    // You can add logic to save the selected theme to AsyncStorage or apply it globally here
  };

  return (
    <View style={styles.container}>
      <Theme onThemeChange={handleThemeChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ThemeScreen;

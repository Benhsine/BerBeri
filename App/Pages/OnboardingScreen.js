import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, FlatList, ImageBackground, StyleSheet, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const pages = [
    { key: '1', title: 'Find inspiration. Get Haircut. Book today.', image: require('./../Assets/Images/background1.jpg') },
    { key: '2', title: 'Discover new styles. Stay trendy.', image: require('./../Assets/Images/background2.jpg') },
    { key: '3', title: 'Book easily. Look great.', image: require('./../Assets/Images/background3.jpg') },
  ];

  const onNext = async () => {
    if (currentIndex < pages.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    } else {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      navigation.navigate('LoginScreen');
    }
  };

  const onBack = () => {
    if (currentIndex > 0) {
      flatListRef.current.scrollToIndex({ index: currentIndex - 1 });
      setCurrentIndex(currentIndex - 1);
    }
  };

  const renderItem = ({ item }) => (
    <ImageBackground source={item.image} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.buttonContainer}>
          {currentIndex > 0 && (
            <TouchableOpacity style={styles.button} onPress={onBack}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.button} onPress={onNext}>
            <Text style={styles.buttonText}>{currentIndex === pages.length - 1 ? 'Finish' : 'Next'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pagination}>
          {pages.map((_, index) => (
            <View key={index} style={index === currentIndex ? styles.activeDot : styles.dot} />
          ))}
        </View>
      </View>
    </ImageBackground>
  );

  return (
    <FlatList
      data={pages}
      renderItem={renderItem}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.key}
      ref={flatListRef}
      scrollEnabled={false}
    />
  );
};

const { width, height } = Dimensions.get('window');
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
      marginBottom: 40,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      marginBottom: 40,
    },
    button: {
      backgroundColor: 'white',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: 'blue',
      fontSize: 18,
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
  

export default OnboardingScreen;

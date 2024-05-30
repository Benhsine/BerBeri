// navigation/AppNavigator.js
import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from '../App/Pages/LoadingScreen';
import OnboardingScreen from '../App/Pages/OnboardingScreen';
import Login from '../App/Pages/LoginScreen';
import RegistrationClientScreen from '../App/Pages/RegistrationClient';
import ProfileImageScreen from '../App/Pages/AddImageCoiffeur';
import HomeScreen from '../App/Pages/HomeScreen';
import ForgotPasswordEmailScreen from '../App/Pages/ForgetPwdEmailScreen';
import ForgotPasswordScreen from '../App/Pages/ForgetPwdCodeScreen';
import LocationCoiffeurScreen from '../App/Pages/LocationCoiffeur';
import RegistrationCoiffeurScreen from '../App/Pages/RegistartionCoiffeur';
import TeamSizeScreen from '../App/Pages/Question2';
import ServicesScreen from '../App/Pages/Question1';
import AppointmentScreen from '../App/Pages/ApointmentScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);

  useEffect(() => {
    const checkOnboarding = async () => {
      try {
        const value = await AsyncStorage.getItem('hasSeenOnboarding');
        if (value !== null) {
          setHasSeenOnboarding(true);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    checkOnboarding();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {hasSeenOnboarding ? (
          <Stack.Screen name="LoginScreen" component={Login} />
        ) : (
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        )}
        <Stack.Screen name="RegistrationClient" component={RegistrationClientScreen} />
        <Stack.Screen name="AddImageCoiffeur" component={ProfileImageScreen} />
        <Stack.Screen name="ForgetPwdEmailScreen" component={ForgotPasswordEmailScreen} />
        <Stack.Screen name="ForgetPwdCodeScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LocationCoiffeur" component={LocationCoiffeurScreen} />
        <Stack.Screen name="Question1" component={ServicesScreen} />
        <Stack.Screen name="Question2" component={TeamSizeScreen} />
        <Stack.Screen name="RegistrationCoiffeur" component={RegistrationCoiffeurScreen} />
        <Stack.Screen name="Appointment" component={AppointmentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

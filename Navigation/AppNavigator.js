import React, { useState, useEffect } from 'react';
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
import EditProfileScreen from '../App/Pages/EditProfileScreen';
import ServicesScreen from '../App/Pages/Question1';
import AppointmentScreen from '../App/Pages/ApointmentScreen';
import MapScreen from '../App/Pages/Map';
import ProfileScreen from '../App/Pages/Profile';
import NotificationScreen from '../App/Pages/Notification';
import PaymentMethodScreen from '../App/Pages/PaymentMethodScreen';
import PaymentProcessingScreen from '../App/Pages/PaymentProcessingScreen';
import CardInfoScreen from '../App/Pages/CardInfosScreen';
import BarberDetailScreen from '../App/Pages/BarberDetailScreen';
import ThemeScreen from '../App/Pages/ThemeScreen';
import HelpSupportScreen from '../App/Pages/HelpSupportScreen';
import ContactUsScreen from '../App/Pages/ContactUsScreen';
import PrivacyPolicyScreen from '../App/Pages/PrivacyPolicyScreen';
import LanguageScreen from '../App/Pages/LanguageScreen'; // Import the LanguageScreen

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
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
        <Stack.Screen name="PaymentProcessing" component={PaymentProcessingScreen} />
        <Stack.Screen name="CardInfoScreen" component={CardInfoScreen} />
        <Stack.Screen name="BarberDetailScreen" component={BarberDetailScreen} />
        <Stack.Screen name="Theme" component={ThemeScreen} />
        <Stack.Screen name="HelpSupport" component={HelpSupportScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="Language" component={LanguageScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
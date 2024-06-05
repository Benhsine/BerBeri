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
import LanguageScreen from '../App/Pages/LanguageScreen'; 

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticationChecked, setIsAuthenticationChecked] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
          setIsAuthenticated(true);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsAuthenticationChecked(true);
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (!isAuthenticationChecked || isLoading) {
    return <LoadingScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Map" component={MapScreen} />
            <Stack.Screen name="Notification" component={NotificationScreen} />
            
            <Stack.Screen name="Appointment" component={AppointmentScreen} />
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
           
          </>
        ) : (
          <>
            <Stack.Screen name="LocationCoiffeur" component={LocationCoiffeurScreen} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="LoginScreen" component={Login} />
            <Stack.Screen name="RegistrationClient" component={RegistrationClientScreen} />
            <Stack.Screen name="AddImageCoiffeur" component={ProfileImageScreen} />
            <Stack.Screen name="ForgetPwdEmailScreen" component={ForgotPasswordEmailScreen} />
            <Stack.Screen name="ForgetPwdCodeScreen" component={ForgotPasswordScreen} />
            <Stack.Screen name="RegistrationCoiffeur" component={RegistrationCoiffeurScreen} />
            <Stack.Screen name="Question1" component={ServicesScreen} />
            <Stack.Screen name="Question2" component={TeamSizeScreen} />
            {/* Add other non-authenticated screens here */}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

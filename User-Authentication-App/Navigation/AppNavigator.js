import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogInScreen from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: true,
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#6DB1EA'
        }

      }}>
        <Stack.Screen component={LogInScreen} name='Login Form' />
        <Stack.Screen component={SignUpScreen} name='SignUp' />
        <Stack.Screen component={WelcomeScreen} name='Welcome' />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

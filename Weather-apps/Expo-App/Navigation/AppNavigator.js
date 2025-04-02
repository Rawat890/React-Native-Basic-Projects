import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../WelcomeScreen';
import Weather from '../Weather';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTintColor: 'blue' }}>
        <Stack.Screen component={WelcomeScreen} name='Welcome' />
        <Stack.Screen component={Weather} name='WeatherScreen' />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

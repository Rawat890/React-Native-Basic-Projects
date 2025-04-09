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
      <Stack.Navigator screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: 'blue' } }}>
        <Stack.Screen component={WelcomeScreen} name='Welcome' options={{ headerTitle: 'Stay Prepared' }} />
        <Stack.Screen component={Weather} name='WeatherScreen' options={{ headerTitle: 'Weather Forecast', headerStyle: { backgroundColor: '#5FD6EB' }, headerTintColor: 'blue' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './Expo-App/Weather';
import AppNavigator from './Expo-App/Navigation/AppNavigator';

const API_KEY = '1476620bdb5cd4f97c18b55ae27b4eff'
const API = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <AppNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

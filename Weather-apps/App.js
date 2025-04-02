import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const API_KEY = '1476620bdb5cd4f97c18b55ae27b4eff'
const API = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

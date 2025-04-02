import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './Navigation/AppNavigator';
import Demo from './AsyncStorage/Demo';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <AppNavigator />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E7D3D4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

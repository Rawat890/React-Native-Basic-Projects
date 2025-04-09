import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Image, View, Text, Pressable, StyleSheet, Button } from 'react-native'
const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ alignItems: 'center', marginTop: 150, }}>
      <Text style={styles.primaryText}>
        Welcome to the Weather App
      </Text>
      <Text style={{ marginTop: 7, color: 'blue', fontWeight: '500' }}>Your Weather, Simplified and Accurate.</Text>
      <Text style={styles.secondaryText}>Enter the location to get weather data</Text>
      <Pressable style={styles.button} onPress={() => { navigation.navigate('WeatherScreen') }}>
        <FontAwesome name='location-arrow' size={24} color='white' />
        <Text style={styles.btnText}>Let's Get started</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  primaryText: {
    fontSize: 25, fontWeight: 'bold',
    marginBottom: 10
  },
  secondaryText: {
    fontSize: 15,
    marginTop: 15
  },
  button: {
    padding: 15,
    borderRadius: 50,
    backgroundColor: 'blue',
    justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row',
    width: '80%',
    marginTop: 20
  },
  btnText: {
    color: 'white', fontSize: 16, textAlign: 'center'
  }
})
export default WelcomeScreen

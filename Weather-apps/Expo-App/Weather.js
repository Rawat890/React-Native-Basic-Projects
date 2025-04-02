import React, { useEffect, useState } from 'react'
import * as Location from 'expo-status-bar'
import { View, Text } from 'react-native'

const API_KEY = '1476620bdb5cd4f97c18b55ae27b4eff'

const Weather = () => {

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true)

  async function fetchWeatherData(cityName) {
    setLoading(false);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

    try {
      const response = await fetch(API);
      if (response.status === 200) {
        const data = await response.json();
        setWeatherData(data)
      } else {
        setWeatherData(null)
      }
      setLoading(true)
    } catch (error) {
      console.log("Cannot fetch the data - ", error)
    }
  }

  useEffect(() => {
    fetchWeatherData('Mumbai');
    console.log(weatherData)
  }, [])

  return (
    <View>
      <Text>Weather</Text>
    </View>
  )
}

export default Weather

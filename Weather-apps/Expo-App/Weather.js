import React, { useEffect, useState } from 'react'
import * as Location from 'expo-status-bar'
import { View, Text, ActivityIndicator } from 'react-native'
import WeatherData from './components/WeatherData'

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
    fetchWeatherData('Delhi');
    console.log(weatherData)
  }, [])


  if (!loading) {
    return <ActivityIndicator size={50} color='blue' />
  } else if (weatherData === null) {
    return <View>
      <Text>Hey</Text>
    </View>
  }


  return (
    <View style={{ width: '100%', height: '100%' }}>
      <WeatherData data={weatherData} fetchedData={fetchWeatherData} />
    </View>
  )
}

export default Weather

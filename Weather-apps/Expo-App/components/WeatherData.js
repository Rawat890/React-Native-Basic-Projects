import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import ImageData from '../../image';
import SearchBar from './SearchBar';
import Property from './Property';
import SunRiseSet from './SunRiseSet';

const WeatherData = ({ data, fetchedData }) => {

  const [backgroundImage, setBackgroundImage] = useState(null);

  const { weather, name, main: { temp, humidity }, wind, visibility, sys } = data;
  const temperature = ((temp - 273)).toFixed(1)
  const [{ main, description }] = weather  //gets weather type
  const { speed } = wind;
  const { sunrise, sunset } = sys;


  useEffect(() => {
    console.log("The weather is ", main)
    setBackgroundImage(getBackgroundImage(main))
  }, [data])

  function getBackgroundImage(weather) {
    if (weather === 'Snow') return ImageData.snow;
    if (weather === 'Clear') return ImageData.sunny;
    if (weather === 'Rain') return ImageData.rainy;
    if (weather === 'haze') return ImageData.hazy;
    return ImageData.hazy
  }
  return (
    <View style={styles.container}>
      <SearchBar searchCity={fetchedData} />
      <Text style={{ fontSize: 34, fontWeight: 'bold', marginBottom: 5, marginTop: 0 }}>{name.toUpperCase()}</Text>
      <ImageBackground source={backgroundImage} style={styles.background} />
      <Text style={{ color: 'purple', fontSize: 20, fontWeight: 'bold', marginBottom: 4 }}>
        {description[0].toUpperCase().concat(description.slice(1))}
      </Text>

      <View style={styles.sun}>
        <SunRiseSet label='Sun-Rise' value={sunrise} path={require('../../assets/images/rise.png')} />
        <SunRiseSet label='Sun-Set' value={sunset} path={require('../../assets/images/set.png')} />
      </View>

      <View style={styles.propertyContainer}>
        <Property path={require('../../assets/images/humidity.png')} label={humidity.toFixed(2)} heading='Humidity' symbol={'%'} />
        <Property path={require('../../assets/images/temperature.png')} label={temperature} symbol={'°C'} heading='Temperature' />
        <Property path={require('../../assets/images/visible.png')} label={visibility} heading='Visibility' symbol={'m'} />
        <Property path={require('../../assets/images/wind.png')} label={speed} heading='Wind Speed' symbol={'Km/h'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sun: {
    flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 5, marginTop: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#5FD6EB',
    alignItems: 'center'
  },
  background: {
    width: 120,
    height: 120,
    marginBottom: 10
  },
  propertyContainer: {
    backgroundColor: 'white', padding: 10,
    borderRadius: 10,
    width: '90%',
    height: 200,
    alignItems: 'center',
    marginTop: 14
  }

})

export default WeatherData

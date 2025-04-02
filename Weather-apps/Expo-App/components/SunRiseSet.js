import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'


const SunRiseSet = ({ label, path, value }) => {

  const timestamp = value;
  const date = new Date(timestamp * 1000);

  // Extract hours, minutes, and seconds
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  const time = hours + ':' + minutes + ' ' + ampm;

  return (
    <View>
      <Image style={styles.image} source={path} />
      <Text>{label}</Text>
      <Text>{time}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50
  }
})

export default SunRiseSet

import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors'

const WelcomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <Image source={require("../../images/Mixed.jpeg")} style={styles.image} />
      <Text style={styles.text1}>40k + Premium recipes</Text>
      <Text style={styles.text2}>Cook Like a Chef</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
    marginTop: 30
  },
  text1: {
    color: Colors.textColor1,
    fontSize: 15,
    marginTop: 20
  },
  text2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  }
})

export default WelcomeScreen

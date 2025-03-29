import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors'
import Button from '../ui/Button'

const WelcomeScreen = ({ navigation }) => {

  function navigateToRecipeList() {
    navigation.navigate('Recipe')
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <Image source={require("../../images/Mixed.jpeg")} style={styles.image} />
      <Text style={styles.text1}>40k + Premium recipes</Text>
      <Text style={styles.text2}>Cook Like a Chef</Text>

      <Button onPress={navigateToRecipeList}>Let's Go</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '99%',
    height: 390,
    marginTop: 70
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

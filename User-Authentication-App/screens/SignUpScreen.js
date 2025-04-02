import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Input from '../Helper/Input'
import Button from '../Helper/Button'
import SignUpInput from '../Helper/SignUpInput'

const SignUpScreen = ({ navigation }) => {
  const navigateToWelcome = () => {
    navigation.navigate('Welcome')
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Input placeholder="Enter userName..." label="UserName" /> */}
      <SignUpInput placeholder="Enter email..." label="Email" />
      <SignUpInput placeholder="confirm email..." label=" Confirm Email" />
      <SignUpInput placeholder="Enter password..." label="Password" />
      <SignUpInput placeholder="confirm password..." label="Confirm Password" />
      <Button label="Sign Up" onPress={navigateToWelcome} />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    elevation: 4,
    marginTop: 70,
    borderRadius: 12,
    justifyContent: 'center',
    width: '90%',
    height: 520,
    marginLeft: 19,
    padding: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row', justifyContent: 'space-evenly', width: '100%'
  }

})

export default SignUpScreen

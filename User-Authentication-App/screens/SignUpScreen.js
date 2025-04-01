import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Input from '../Helper/Input'
import Button from '../Helper/Button'

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Input placeholder="Enter userName..." label="UserName" /> */}
      <Input placeholder="Enter UserName..." label="UserName" />
      <Input placeholder="Enter email..." label="Email" />
      <Input placeholder="confirm email..." label=" Confirm Email" />
      <Input placeholder="Enter password..." label="Password" />
      <Input placeholder="confirm password..." label="Confirm Password" />
      <Button label="Log In" />
      <Button label="Sign Up" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    elevation: 4,
    justifyContent: 'center',
    height: 450,
    width: '85%',
    marginLeft: 28,
    padding: 10,
    marginTop: 80,
    backgroundColor: '#7850C0'
  },

})

export default SignUpScreen

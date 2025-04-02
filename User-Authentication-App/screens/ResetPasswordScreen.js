import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
const ResetPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name='lock-reset' color='black' size={70} style={{ marginLeft: 112, marginBottom: 10 }} />
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 22, marginBottom: 10, textAlign: 'center' }}>Forgot Your Password</Text>
        <Text style={{ textAlign: 'center' }}>Please enter the email address you'd like your password reset</Text>
        <Text style={{ textAlign: 'center' }}>Information sent to...</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={{
          fontSize: 18,
          fontWeight: '500'
        }}>Enter email address</Text>
        <TextInput placeholder='Enter your email......' style={{
          borderColor: 'grey', borderWidth: 2,
          width: '100%',
          padding: 10, borderRadius: 10,
          margin: 10
        }} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Pressable style={styles.resetButton}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Request reset Link</Text>
        </Pressable>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Pressable style={styles.backButton}>
          <Text style={{ color: 'blue', textAlign: 'center', fontSize: 16 }}>Back To Login</Text>
        </Pressable>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    width: '90%',
    marginLeft: 17,
    padding: 6
  },
  text: {
    color: 'white'
  },
  textContainer: {
    marginTop: 10
  },
  inputContainer: {
    marginTop: 30,
    alignItems: 'center'
  },
  resetButton: {
    backgroundColor: '#193A53',
    width: '80%',
    borderRadius: 5,
    padding: 10,
    marginTop: 20
  },
  backButton: {
    width: '80%',
    marginTop: 10,
    padding: 10
  }
})
export default ResetPasswordScreen

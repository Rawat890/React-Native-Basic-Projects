import React from 'react'
import { Pressable, View, Text, StyleSheet, TextInput } from 'react-native'

const Input = ({ label, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.input} placeholderTextColor='white' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'white'
  },
  input: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    width: '95%',
    color: 'white'
  }

})

export default Input

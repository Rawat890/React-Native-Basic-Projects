import React from 'react'
import { View, Pressable, Text, StyleSheet } from 'react-native'

const Button = ({ onPress, label }) => {
  return (
    <View style={styles.buttonView}>
      <Pressable onPress={onPress} style={styles.button} onPressIn={onPress}>
        <Text style={styles.label}>{label}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#BE5C69',
    borderColor: 'white',
    borderWidth: 1
  },
  buttonView: {
    alignItems: 'center'
  }
})

export default Button

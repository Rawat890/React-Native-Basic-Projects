import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors'
const Button = ({ children, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.textColor1,
    borderRadius: 18,
    width: '80%',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 20
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
})

export default Button

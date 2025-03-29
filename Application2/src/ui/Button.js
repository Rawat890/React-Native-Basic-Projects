import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
const Button = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {

  }
})

export default Button

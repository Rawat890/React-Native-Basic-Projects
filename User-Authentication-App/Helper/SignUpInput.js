import React from 'react'
import { Pressable, View, Text, StyleSheet, TextInput } from 'react-native'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
const SignUpInput = ({ label, placeholder, icon, color }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', margin: 2 }}>
        <Text style={styles.text}>{label}</Text>
      </View>
      <TextInput placeholder={placeholder} style={styles.input} placeholderTextColor='grey' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'black'
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    width: '99%',
    color: 'black'
  }

})

export default SignUpInput

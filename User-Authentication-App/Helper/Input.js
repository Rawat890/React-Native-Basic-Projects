import React from 'react'
import { Pressable, View, Text, StyleSheet, TextInput } from 'react-native'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
const Input = ({ label, placeholder, icon, secureTextEntry, IconComponent }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 10, margin: 2, marginTop: 10 }}>
        <Text style={styles.text}>{label}</Text>
        {IconComponent === 'FontAwesome' ? <FontAwesome name={icon} color="black" size={34} style={{ marginRight: 10 }} /> : <MaterialCommunityIcons name={icon} color="black" size={34} style={{ marginRight: 10 }} />

        }
      </View>
      <TextInput placeholder={placeholder} style={styles.input} placeholderTextColor='grey' secureTextEntry={secureTextEntry} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5
  },
  input: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    borderRadius: 8,
    padding: 12,
    width: '99%',
    color: 'black'
  }

})

export default Input

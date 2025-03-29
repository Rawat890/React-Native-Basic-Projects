import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Colors } from '../../constants/colors'

const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View style={styles.view}>
      <TextInput placeholder={placeholder}></TextInput>
      <FontAwesome name={icon} size={22} color={Colors.textColor1} />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    elevation: 2,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingVertical: 4,
    borderRadius: 8,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    width: '90%', marginHorizontal: 16, justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default SearchFilter
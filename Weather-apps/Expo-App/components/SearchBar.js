import { EvilIcons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
const SearchBar = ({ searchCity }) => {
  const [cityName, setCityName] = useState('');
  return (
    <View style={styles.search}>
      <TextInput style={{ fontSize: 16 }} placeholder='Enter city name......' value={cityName} onChangeText={(text) => setCityName(text)} />
      <EvilIcons name='search' color='black' size={34} onPress={() => searchCity(cityName)} />
    </View>
  )
}

const styles = StyleSheet.create({
  search: {
    marginTop: 40, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '', width: 320,
    width: '96%',
    borderRadius: 8,
    fontSize: 20, color: 'purple', fontWeight: 'bold',
    padding: 2,
    marginBottom: 10
  },
})
export default SearchBar

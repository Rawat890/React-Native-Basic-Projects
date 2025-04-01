import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
const Demo = () => {
  const [input, setInput] = useState('');
  const [storedData, setStoredData] = useState('');

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const value = await AsyncStorage.getItem("user")
      if (value !== null) {
        setStoredData(value)
      }
    } catch (error) {
      console.log("Failed to get data: ", error)
    }
  }

  const saveData = async () => {
    try {
      await AsyncStorage.setItem("user",
        input
      )
      alert('Data saved')
    } catch (error) {
      console.log("Failed to store: ", error)
    }
  }

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem("user")
      alert('Data removed')
    } catch (error) {
      console.log("Failed to remove: ", error)
    }
  }

  const clearData = () => {
    setStoredData('')
  }


  return (
    <View style={styles.container}>
      <Text>Enter some text to save data</Text>
      <TextInput style={styles.input} placeholder='Enter data....' value={input} onChangeText={setInput} />
      <View style={styles.button}>
        <Button title='Save Data' onPress={saveData} />
      </View>
      <View style={styles.button}>
        <Button title='Get Data' onPress={fetchData} />
      </View>
      <View style={styles.button}>
        <Button title='Remove Data' onPress={removeData} />
      </View>
      <View style={styles.button}>
        <Button title='Clear Data' onPress={clearData} />
      </View>
      <Text>Stored data : {storedData}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    width: '80%'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    padding: 10,
    marginLeft: 15,
    borderRadius: 10
  }
})
export default Demo

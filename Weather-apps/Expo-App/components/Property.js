import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
const Property = ({ label, path, symbol, heading }) => {
  return (
    <View style={styles.container}>
      <Image source={path} style={styles.icon} />
      <Text style={{ fontSize: 14, fontWeight: '500', textAlign: 'center', color: 'purple' }}>{heading}</Text>
      <Text style={{ fontSize: 13, fontWeight: 'bold', marginTop: 10 }}>{label} {symbol}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    width: '96%',
    padding: 5
  }, icon: {
    width: 32,
    height: 32
  }
})

export default Property

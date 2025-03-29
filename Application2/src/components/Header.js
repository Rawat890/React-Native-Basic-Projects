import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Colors } from '../../constants/colors'

const Header = ({ headerText, headerIcon }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
      <Text style={{ flex: 1, fontSize: 15, fontWeight: '700' }}>{headerText}</Text>
      <FontAwesome name={headerIcon} size={24} color={Colors.textColor1} />
    </View>
  )
}

export default Header

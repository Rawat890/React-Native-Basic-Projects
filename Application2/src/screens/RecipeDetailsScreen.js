import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, Pressable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Colors } from '../../constants/colors'
import DetailsView from '../components/DetailsView'

const RecipeDetailsScreen = ({ route, navigation }) => {
  const { recipe } = route.params; // Access the passed recipe data

  function navigateBack() {
    navigation.navigate('Recipe')
  }
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 25 }}>
        <Pressable onPress={navigateBack}>
          <FontAwesome name='arrow-left' size={36} color="black" />
        </Pressable>
        <View>
          <FontAwesome name='heart-o' size={28} color="black" />
        </View>
      </SafeAreaView>

      <DetailsView recipe={recipe} />
    </View >
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFCA55',
    padding: 10,
  },
});

export default RecipeDetailsScreen;

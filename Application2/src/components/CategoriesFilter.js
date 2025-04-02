import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { Recipe } from '../../constants/RecipeData'
import { Colors } from '../../constants/colors'

const CategoriesFilter = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Recipe.map((item, index) => {
          return <View key={index} style={[styles.categoryView, { backgroundColor: index === 0 ? Colors.textColor1 : 'white' }]}>
            <Text style={[styles.categoryText, { color: index === 0 ? 'white' : 'black' }]}>{item.category}</Text>
          </View>
        })}
      </ScrollView>

    </View>
  )
}


const styles = StyleSheet.create({
  categoryView: {
    borderRadius: 10,
    margin: 8,
    marginTop: 20,
    padding: 10,
    elevation: 3
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold'
  }, pressed: {
    opacity: 0.7
  }
})
export default CategoriesFilter

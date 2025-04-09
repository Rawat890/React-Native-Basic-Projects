import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import { Colors } from '../../constants/colors'
const DetailsView = ({ recipe }) => {
  return (

    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.innerChild}>

      <View style={{ backgroundColor: '', width: '100%', alignItems: 'center', marginTop: 10 }}>
        <Text style={styles.recipeName}>{recipe.name}</Text>


        <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <Text style={styles.text}>Preparation Time- {recipe.prepTimeMinutes}</Text>
          <Text style={styles.text}>Cooking Time- {recipe.cookTimeMinutes}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 10, marginTop: 5 }}>
          <Text style={{ fontSize: 12, color: Colors.textColor2, fontWeight: 'bold' }}>Difficulty- {recipe.difficulty}</Text>
          <Text style={{ fontSize: 12, color: Colors.textColor2, fontWeight: 'bold' }}>Cuisine- {recipe.cuisine}</Text>
        </View>
      </View>

      <View style={styles.ingredientsView}>
        <Text style={styles.ingredients}>Ingredients Required</Text>
        {recipe.ingredients.map((item, index) => {
          return <Text key={item} style={styles.ingredientsText}>{index + 1}. {item}</Text>
        })}
      </View>

      <View style={styles.instructionsView}>
        <Text style={styles.instructions}>Instructions of Recipe</Text>
        {recipe.instructions.map((item) => {
          return <Text key={item} style={styles.ingredientsText}>{item}</Text>
        })}
      </View>
    </ScrollView>

  )
}


const styles = StyleSheet.create({

  innerChild: {
    flex: 1,
    position: 'absolute',
    top: -150,
    marginTop: 140,
    width: '100%',
    alignItems: 'center'
  },
  ingredientsText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.textColor1
  },
  recipeImage: {
    width: 285,
    height: 280,
    marginBottom: 30,
    elevation: 4,
    marginTop: 4,
    elevation: 4,
    borderRadius: 134,
    borderColor: '#FFCA55',
    borderWidth: 2

  },
  recipeInfo: {
    padding: 10,
  },
  recipeName: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    color: '#333',
    borderColor: 'grey',
    borderWidth: 2,
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 18,
    marginBottom: 14
  },
  recipeCuisine: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  recipeDetails: {
    fontSize: 14,
    marginVertical: 5,
    color: '#444',
  },
  text: {
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold', color: Colors.textColor1
  },
  ingredients: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: '600',
  },

  instructions: { fontWeight: '700', fontSize: 20 },

  instructionsView: {
    width: '100%',
    marginTop: 10,
    borderBottomColor: 'grey', borderBottomWidth: 3,
  },
  ingredientsView: {
    width: '100%',
    justifyContent: 'center',
    borderBottomColor: 'grey', borderBottomWidth: 3,
    borderTopColor: 'grey', borderTopWidth: 3,

  }

});

export default DetailsView

import { FontAwesome } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, FlatList, Image } from 'react-native'
import { Colors } from '../../constants/colors'
import { useNavigation } from '@react-navigation/native'

const RecipeDetails = () => {
  const navigation = useNavigation();
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch recipes')
        }
        return res.json()
      })
      .then(data => {
        // console.log("Fetched Recipes:", data)
        if (data && data.recipes) {
          setRecipes(data.recipes)
        } else {
          throw new Error('Invalid data structure')
        }
      })
      .catch(err => {
        console.error('Error fetching recipes:', err)
        setError(err.message)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <View style={styles.center}>
        <Text style={styles.loadingText}>Loading recipes...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    )
  }

  if (recipes.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>No recipes available</Text>
      </View>
    )
  }

  function navigateToDetails(item) {
    navigation.navigate('RecipeDetails', { recipe: item })
  }
  return (
    <View style={styles.container}>
      <FlatList showsVerticalScrollIndicator={false} numColumns={2}
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable style={({ pressed }) => [styles.recipeContainer, pressed && styles.pressed]} onPress={() => navigateToDetails(item)} >
            <Image
              source={{ uri: item.image }}
              style={styles.recipeImage}
              resizeMode="cover"
            />
            <View style={styles.recipeInfo}>
              <Text style={styles.recipeName}>{item.name}</Text>
              <Text style={styles.recipeCuisine}>{item.cuisine}</Text>
              <Text style={styles.recipeDetails}><FontAwesome name='star' color={Colors.textColor1} /> {item.rating} ({item.reviewCount} reviews)</Text>
              <Text style={styles.recipeDetails}>🍽️ {item.servings} servings</Text>
              <Text style={styles.recipeDetails}>⏱️ {item.prepTimeMinutes + item.cookTimeMinutes} mins total</Text>
              <Text style={styles.recipeDetails}>🔥 {item.caloriesPerServing} kcal/serving</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#555',
  },
  recipeContainer: {
    marginTop: 10,
    width: '47%', margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  recipeImage: {
    width: '100%',
    height: 150,
  },
  recipeInfo: {
    padding: 5,
  },
  recipeName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  recipeCuisine: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  recipeDetails: {
    fontSize: 13,
    marginVertical: 2,
    color: '#444',
  },
  pressed: {
    opacity: 0.7
  }

})

export default RecipeDetails
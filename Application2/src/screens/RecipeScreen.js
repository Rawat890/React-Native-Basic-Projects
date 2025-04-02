import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Header from '../components/Header'
import SearchFilter from '../components/SearchFilter'
import CategoriesFilter from '../components/CategoriesFilter'
import { Colors } from '../../constants/colors'
import RecipeDetails from '../components/RecipeDetails'
const RecipeScreen = () => {

  return (
    <View style={styles.view}>
      {/*Header*/}
      <Header headerText="Hi, Rohan Rawat" headerIcon="bell-o" />

      {/*Search functionality*/}
      <SearchFilter icon="search" placeholder='Enter recipe to search.....' />

      {/*Categories Filter*/}
      <View style={{ marginTop: 15 }}>
        <Text style={styles.text}>Categories</Text>
        <CategoriesFilter />
      </View>

      {/*Recipe cards*/}
      <View style={{ marginTop: 15 }}>
        <Text style={styles.text}>Recipe List</Text>
      </View>
      <RecipeDetails />
    </View>
  )
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    margin: 5,
    marginTop: 20
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textColor2
  },

})

export default RecipeScreen

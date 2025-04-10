import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/WelcomeScreen';
import RecipeScreen from '../screens/RecipeScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';


const stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen component={WelcomeScreen} name='Welcome' />
        <stack.Screen component={RecipeScreen} name='Recipe' />
        <stack.Screen component={RecipeDetailsScreen} name='RecipeDetails' />
      </stack.Navigator>

    </NavigationContainer>
  )
}

export default AppNavigator

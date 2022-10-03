import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'

const MealDetailsScreen = ({ route }) => {
  const mealId = route.params.mealId
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredients) => (
        <Text key={ingredients}>{ingredients}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  )
}

export default MealDetailsScreen
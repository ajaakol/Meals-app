import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const MealsOverviewScreen = ({ route, navigation }) => {
  const CategoryId = route.params.categoryId

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(CategoryId) >= 0
  })

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === CategoryId).title

    navigation.setOptions({
      title: categoryTitle,
    })
  }, [CategoryId, navigation])

  const renderMealItem = (itemData) => {
    const item = itemData.item

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    }
    return <MealItem {...mealItemProps} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})

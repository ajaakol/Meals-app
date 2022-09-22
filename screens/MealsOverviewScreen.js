import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data'

const MealsOverviewScreen = ({ route }) => {
	const CategoryId = route.params.categoryId
	return (
		<View style={styles.container}>
			<Text>MealsOverviewScreen - {CategoryId}</Text>
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

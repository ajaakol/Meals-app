import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import React, { useLayoutEffect, useContext } from 'react';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/MealDetail/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';

const MealDetailsScreen = ({ route, navigation }) => {
	const favoriteMealsContext = useContext(FavoritesContext);
	const mealId = route.params.mealId;
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	const mealIsFavorite = favoriteMealsContext.ids.includes(mealId);

	const changeFavoriteStatus = () => {
		console.log('pressed');
		if (mealIsFavorite) {
			favoriteMealsContext.removeFavorite(mealId);
		} else {
			favoriteMealsContext.addFavorite(mealId);
		}
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						onPress={changeFavoriteStatus}
						icon={mealIsFavorite ? 'star' : 'star-outline'}
						color='white'
					/>
				);
			},
		});
	}, [navigation, changeFavoriteStatus]);

	return (
		<ScrollView style={styles.rootContainer}>
			<Image
				style={styles.image}
				source={{ uri: selectedMeal.imageUrl }}
			/>
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<MealDetails
				duration={selectedMeal.duration}
				complexity={selectedMeal.complexity}
				affordability={selectedMeal.affordability}
				textStyle={styles.detailText}
			/>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={selectedMeal.ingredients} />
					<Subtitle>Steps</Subtitle>
					<List data={selectedMeal.steps} />
				</View>
			</View>
		</ScrollView>
	);
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 32,
	},
	image: {
		width: '100%',
		height: 350,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 24,
		margin: 8,
		textAlign: 'center',
		color: 'white',
	},
	detailText: {
		color: 'white',
	},
	listContainer: {
		width: '80%',
	},
	listOuterContainer: {
		alignItems: 'center',
	},
});

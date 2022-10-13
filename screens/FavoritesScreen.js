import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const Favorites = () => {
	const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
	const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));

	if (favoriteMeals.length === 0) {
		return (
			<View style={styles.rootContainer}>
				<Text style={styles.text}>You haven't added favorites yet.</Text>
			</View>
		);
	}

	return <MealsList items={favoriteMeals} />;
};

export default Favorites;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
	},
});

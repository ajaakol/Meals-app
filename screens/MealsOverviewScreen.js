import React, { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

const MealsOverviewScreen = ({ route, navigation }) => {
	const CategoryId = route.params.categoryId;

	const displayedMeals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(CategoryId) >= 0;
	});

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find((category) => category.id === CategoryId).title;

		navigation.setOptions({
			title: categoryTitle,
		});
	}, [CategoryId, navigation]);

	return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;

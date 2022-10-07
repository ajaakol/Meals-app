import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MealDetails from '../MealDetails';

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability, OnPress }) => {
	const navigation = useNavigation();

	const selectMealItemHandler = () => {
		navigation.navigate('MealDetail', {
			mealId: id,
		});
	};

	return (
		<View style={styles.mealItem}>
			<Pressable
				android_ripple={{ color: '#ccc' }}
				onPress={selectMealItemHandler}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}>
				<View style={styles.innerContainer}>
					<View>
						<Image
							source={{ uri: imageUrl }}
							style={styles.image}
						/>
						<Text style={styles.title}>{title}</Text>
					</View>
					<MealDetails
						duration={duration}
						affordability={affordability}
						complexity={complexity}
					/>
				</View>
			</Pressable>
		</View>
	);
};

export default MealItem;

const styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 8,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
		backgroundColor: 'white',
		elevation: 4,
		shadowColor: 'black',
		backgroundColor: 'white',
		shadowOpacity: 0.35,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
	},
	innerContainer: {
		borderRadius: 8,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: 200,
	},
	title: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 18,
		padding: 8,
	},
	buttonPressed: {
		opacity: 0.5,
	},
});

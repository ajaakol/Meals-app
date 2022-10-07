import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import Favorites from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: '#351401' },
				headerTintColor: 'white',
				sceneContainerStyle: { backgroundColor: '#3f2f25' },
				drawerContentStyle: { backgroundColor: '#351401' },
				drawerInactiveTintColor: 'white',
				drawerActiveTintColor: '#351401',
				drawerActiveBackgroundColor: '#e4baa1',
			}}>
			<Drawer.Screen
				name='Categories'
				component={CategoriesScreen}
				options={{
					title: 'All Categories',
					drawerIcon: ({ color, size }) => (
						<Ionicons
							name='list'
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name='Favorites'
				component={Favorites}
				options={{
					drawerIcon: ({ color, size }) => (
						<Ionicons
							name='star'
							color={color}
							size={size}
						/>
					),
				}}
			/>
		</Drawer.Navigator>
	);
};

export default function App() {
	return (
		<>
			<StatusBar style='light' />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: { backgroundColor: '#351401' },
						headerTintColor: 'white',
						contentStyle: { backgroundColor: '#3f2f25' },
					}}>
					<Stack.Screen
						name='Drawer'
						component={DrawerNavigator}
						options={{
							title: 'All Categories',
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name='Overview'
						component={MealsOverviewScreen}
					/>

					<Stack.Screen
						name='MealDetail'
						component={MealDetailsScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

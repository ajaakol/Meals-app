import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'

const Stack = createNativeStackNavigator()

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
            name='Categories'
            component={CategoriesScreen}
            options={{
              title: 'Meals Categories',
            }}
          />
          <Stack.Screen
            name='Overview'
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const CategoryId = route.params.categoryId
            //   return {
            //     title: CategoryId,
            //   }
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

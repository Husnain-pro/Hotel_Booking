import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import DetailPage from './Pages/DetailPage';
import GallertPage from './Pages/GallertPage';
import LoginPage from './Pages/LoginPage';
import MainPage from './Pages/MainPage';
import RegisterPage from './Pages/RegisterPage';
const Stack = createStackNavigator();
const { width, height } = Dimensions.get('window');
export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" hidden={true} />
			<NavigationContainer>
				<Stack.Navigator
					headerMode="none"
					initialRouteName="Home"
					tabBarOptions={{
						style: { display: 'none', height: 0 }
					}}
				>
					<Stack.Screen name="Home" component={MainPage} />
					<Stack.Screen name="Detail" component={DetailPage} />
					<Stack.Screen name="Gallery" component={GallertPage} />
					<Stack.Screen name="Login" component={LoginPage} />
					<Stack.Screen name="Register" component={RegisterPage} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: height,
		width: width,
		backgroundColor: '#FDFDFD'
	}
});

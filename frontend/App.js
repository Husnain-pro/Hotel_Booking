import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import DetailPage from './Pages/DetailPage';
import GalleryPage from './Pages/GalleryPage';
import LoginPage from './Pages/LoginPage';
import MainPage from './Pages/MainPage';
import ProfilePage from './Pages/ProfilePage';
import RegisterPage from './Pages/RegisterPage';
import store from './Store';
const Stack = createStackNavigator();
const { width, height } = Dimensions.get('window');
export default function App() {
	return (
		<Provider store={store}>
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
						<Stack.Screen name="Gallery" component={GalleryPage} />
						<Stack.Screen name="Login" component={LoginPage} />
						<Stack.Screen name="Register" component={RegisterPage} />
						<Stack.Screen name="Profile" component={ProfilePage} />
					</Stack.Navigator>
				</NavigationContainer>
			</View>
		</Provider>
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

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
const { width, height } = Dimensions.get('window');
const Input = () => {
	return (
		<View style={styles.container}>
			<View style={styles.search}>
				<TextInput placeholder="Search Favourite Hotel" style={{ width: '100%' }} />
			</View>

			<TouchableOpacity>
				<View style={styles.iconContainer}>
					<Ionicons name="md-search-outline" size={24} color="white" />
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default Input;

const styles = StyleSheet.create({
	container: {
		width: width,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20
	},

	search: {
		alignItems: 'center',
		width: '80%',
		backgroundColor: '#FFFFFF',
		padding: 10,
		borderRadius: 10,
		fontSize: 20,
		borderWidth: 1,
		borderColor: '#F5F6F6'
	},
	iconContainer: {
		backgroundColor: '#FB707F',
		padding: 10,
		borderRadius: 10,
		marginLeft: 10
	}
});
